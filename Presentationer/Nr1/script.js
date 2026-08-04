(function () {
  const DURATIONS = { rapp: 7000, lagom: 20000, serios: 45000 };
  const MILESTONE_DURATION = 4000; // alltid rapp, oavsett hastighet

  const params = new URLSearchParams(location.search);
  let speedKey = params.get("hastighet");
  if (!DURATIONS[speedKey]) speedKey = "rapp"; // rapp = standard, så det syns direkt att det är ett bildspel

  const stage = document.getElementById("stage");
  const layers = [document.getElementById("layer-a"), document.getElementById("layer-b")];
  const progressTrack = document.getElementById("progress-track");
  const speedButtons = Array.from(document.querySelectorAll("#speed-switch button"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const playPauseBtn = document.getElementById("playPauseBtn");

  let activeLayerIndex = 0;
  let current = 0;
  let segments = [];
  let advanceTimer = null;
  let isPaused = false;

  function placeholderSrc(title) {
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <rect width="100%" height="100%" fill="#F6F7FB"/>
        <text x="50%" y="50%" font-family="Georgia, serif" font-size="34" fill="#1E2761"
              text-anchor="middle" dominant-baseline="middle">${title}</text>
      </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function buildProgress() {
    progressTrack.innerHTML = "";
    segments = PROJECTS.map(() => {
      const seg = document.createElement("div");
      seg.className = "seg";
      const fill = document.createElement("div");
      fill.className = "fill";
      seg.appendChild(fill);
      progressTrack.appendChild(seg);
      return seg;
    });
  }

  function durationFor(project) {
    return project.kind === "milestone" ? MILESTONE_DURATION : DURATIONS[speedKey];
  }

  function renderSlide(container, project, index) {
    container.innerHTML = "";

    if (project.kind === "milestone") {
      const pane = document.createElement("div");
      pane.className = "milestone-pane";
      const facts = (project.facts || [])
        .map((f) => `<li>${f.text}${f.source ? ` <a href="${f.source.url}" target="_blank" rel="noopener">${f.source.label}</a>` : ""}</li>`)
        .join("");
      pane.innerHTML = `
        <div class="milestone-year">${project.year}</div>
        <ul class="milestone-facts">${facts}</ul>
      `;
      container.appendChild(pane);
      return;
    }

    const media = document.createElement("div");
    media.className = "media-pane";

    if (project.kind === "code") {
      const card = document.createElement("div");
      card.className = "code-card";
      card.innerHTML = project.code;
      media.appendChild(card);
    } else {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      img.onerror = function () {
        this.onerror = null;
        this.src = placeholderSrc(project.title);
      };
      media.appendChild(img);
    }

    if (project.year) {
      const badge = document.createElement("div");
      badge.className = "year-badge";
      badge.textContent = project.year;
      media.appendChild(badge);
    }

    const sourceLink = project.source
      ? `<a class="visit source" href="${project.source.url}" target="_blank" rel="noopener">${project.source.label}</a>`
      : "";

    const text = document.createElement("div");
    text.className = "text-pane";
    text.innerHTML = `
      <div class="counter">${index + 1} / ${PROJECTS.length}</div>
      <h1>${project.title}</h1>
      <p>${project.caption}</p>
      <a class="visit" href="${project.url}" target="_blank" rel="noopener">${project.url.replace(/^https?:\/\//, "")}</a>
      ${sourceLink}
    `;

    container.appendChild(media);
    container.appendChild(text);
  }

  function setSpeedUI() {
    speedButtons.forEach((b) => b.classList.toggle("active", b.dataset.speed === speedKey));
  }

  function goTo(index, opts) {
    opts = opts || {};
    current = index;
    const nextLayer = layers[1 - activeLayerIndex];
    renderSlide(nextLayer, PROJECTS[index], index);

    layers[activeLayerIndex].classList.remove("active");
    nextLayer.classList.add("active");
    activeLayerIndex = 1 - activeLayerIndex;

    segments.forEach((seg, i) => {
      const fill = seg.querySelector(".fill");
      fill.classList.remove("animating");
      fill.style.transition = "none";
      if (i < index || (i === index && opts.markCurrentDone)) {
        seg.classList.add("done");
      } else {
        seg.classList.remove("done");
        fill.style.width = "0%";
      }
    });

    const duration = durationFor(PROJECTS[index]);

    if (!opts.markCurrentDone) {
      const fill = segments[index].querySelector(".fill");
      // force reflow so the transition actually runs
      void fill.offsetWidth;
      if (!isPaused) {
        fill.style.transition = `width ${duration}ms linear`;
        fill.classList.add("animating");
        fill.style.width = "100%";
      }
    }

    clearTimeout(advanceTimer);
    if (!isPaused) advanceTimer = setTimeout(next, duration);
  }

  function next() {
    goTo((current + 1) % PROJECTS.length);
  }

  function prev() {
    goTo((current - 1 + PROJECTS.length) % PROJECTS.length);
  }

  function setPlayPauseUI() {
    document.body.classList.toggle("paused", isPaused);
    playPauseBtn.innerHTML = isPaused ? "&#9654;" : "&#10073;&#10073;";
    playPauseBtn.setAttribute("aria-label", isPaused ? "Spela" : "Pausa bildspelet");
  }

  function pause() {
    if (isPaused) return;
    isPaused = true;
    clearTimeout(advanceTimer);
    const fill = segments[current].querySelector(".fill");
    fill.style.transition = "none";
    setPlayPauseUI();
  }

  function resume() {
    if (!isPaused) return;
    isPaused = false;
    setPlayPauseUI();
    // starta om tiden för aktuell bild, utan att röra crossfaden (ingen ny render)
    const duration = durationFor(PROJECTS[current]);
    const fill = segments[current].querySelector(".fill");
    void fill.offsetWidth;
    fill.style.transition = `width ${duration}ms linear`;
    fill.classList.add("animating");
    fill.style.width = "100%";
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(next, duration);
  }

  function togglePlayPause() {
    isPaused ? resume() : pause();
  }

  function setSpeed(key) {
    if (!DURATIONS[key] || key === speedKey) return;
    speedKey = key;
    setSpeedUI();
    const url = new URL(location.href);
    url.searchParams.set("hastighet", speedKey);
    history.replaceState(null, "", url);
    goTo(current);
  }

  speedButtons.forEach((b) => b.addEventListener("click", () => setSpeed(b.dataset.speed)));

  const techBtn = document.getElementById("techBtn");
  const techModal = document.getElementById("techModal");
  const techClose = document.getElementById("techClose");
  const openModal = () => techModal.classList.add("show");
  const closeModal = () => techModal.classList.remove("show");
  techBtn.addEventListener("click", openModal);
  techClose.addEventListener("click", closeModal);
  techModal.addEventListener("click", (e) => { if (e.target === techModal) closeModal(); });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      return;
    }
    if (techModal.classList.contains("show")) return;
    if (e.code === "Space") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.key === "ArrowRight") {
      next();
    } else if (e.key === "ArrowLeft") {
      prev();
    }
  });

  playPauseBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Svep vänster/höger på mobil
  let touchStartX = null;
  let touchStartY = null;
  stage.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) next(); else prev();
    }
    touchStartX = null;
    touchStartY = null;
  }, { passive: true });

  buildProgress();
  setSpeedUI();
  goTo(0);
})();
