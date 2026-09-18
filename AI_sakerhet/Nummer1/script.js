document.addEventListener("DOMContentLoaded", () => {

  // --- länkar från data.js ---
  document.getElementById("blogLink").href = meta.blogUrl;
  document.getElementById("blogLink2").href = meta.blogUrl;
  document.getElementById("prdLink").href = meta.prdUrl;
  document.getElementById("prdLink2").href = meta.prdUrl;
  document.getElementById("linkedinLink").href = meta.linkedinUrl;

  // --- röst-korten ---
  const grid = document.getElementById("voiceGrid");

  voices.forEach((voice) => {
    const card = document.createElement("div");
    card.className = "voice-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-expanded", "false");

    const timelineHtml = voice.timeline
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <p class="timeline-title"><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></p>
          <p class="timeline-pub">${item.pub}</p>
          <p class="timeline-note">${item.note}</p>
        </div>`
      )
      .join("");

    card.innerHTML = `
      <div class="voice-card-head">
        <h3 class="voice-name">${voice.name}</h3>
        <span class="voice-verdict ${voice.verdictTone}">${voice.verdict}</span>
      </div>
      <p class="voice-role">${voice.role}</p>
      <p class="voice-summary">${voice.summary}</p>
      <div class="voice-toggle">Visa tidslinje (${voice.timeline.length} källor) ↓</div>
      <div class="voice-timeline">${timelineHtml}</div>
    `;

    const toggle = () => {
      const isOpen = card.classList.toggle("open");
      card.setAttribute("aria-expanded", String(isOpen));
    };

    card.addEventListener("click", (e) => {
      // klick på en länk i tidslinjen ska inte trigga stäng/öppna
      if (e.target.tagName === "A") return;
      toggle();
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    grid.appendChild(card);
  });

  // --- levande signaturräknare ---
  const liveNumber = document.getElementById("liveNumber");
  const liveStatus = document.getElementById("liveStatus");

  fetch("/api/signatureCount")
    .then((res) => {
      if (!res.ok) throw new Error("bad status");
      return res.json();
    })
    .then((data) => {
      liveNumber.textContent = Number(data.count).toLocaleString("sv-SE");
      liveStatus.textContent = data.stale
        ? `senast kända värde, ${new Date(data.updated).toLocaleString("sv-SE")}`
        : `uppdaterad just nu`;
    })
    .catch(() => {
      liveNumber.textContent = "—";
      liveStatus.textContent =
        "kunde inte hämtas just nu (fungerar när sidan körs via Vercel) — se antalet direkt på källan nedan";
    });

  // --- teknik-modal ---
  const techBtn = document.getElementById("techBtn");
  const techModal = document.getElementById("techModal");
  const techClose = document.getElementById("techClose");
  const openModal = () => techModal.classList.add("show");
  const closeModal = () => techModal.classList.remove("show");
  techBtn.addEventListener("click", openModal);
  techClose.addEventListener("click", closeModal);
  techModal.addEventListener("click", (e) => {
    if (e.target === techModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && techModal.classList.contains("show")) closeModal();
  });
});
