(function () {
  const canvas = document.getElementById("vortex");
  const ctx = canvas.getContext("2d");
  const playBtn = document.getElementById("playBtn");
  const resetBtn = document.getElementById("resetBtn");
  const mTime = document.getElementById("mTime");
  const mRad = document.getElementById("mRad");
  const mSpd = document.getElementById("mSpd");
  const hudNote = document.getElementById("hudNote");

  const captions = {
    "15": "Virveln blir som en allt tunnare slända som snurrar fortare. Energin stannar på «ändlig». När bilden blinkar har receptet sagt «oändligt fort» — då börjar filmen om, för riktigt vatten kommer aldrig dit.",
    "vuxen": "Kartan visar en virvel som tunnas och accelererar medan den beräknade energin hålls ändlig. Blinkningen är pedagogik: i ekvationerna slutar den släta tiden där. I kranen tar molekylerna över långt innan.",
    "skarp": "Didaktisk analogi till vortex stretching: radie minskar, fart ~ 1/radie, kinetisk energi märkt ändlig. Flash = återstart nära t*. Inte en NS-tidsstegare. Påståendet gäller C^\u221e-släthet som bryts på ändlig tid."
  };

  const N = 280;
  const particles = [];
  for (let i = 0; i < N; i++) {
    particles.push({
      phase: Math.random() * Math.PI * 2,
      z: (i / N) * 2 - 1,
      tint: 0.35 + Math.random() * 0.65
    });
  }

  let t = 0;
  let playing = true;
  let last = 0;
  let flash = 0;

  function radius(time) {
    return Math.max(0.04, Math.pow(1 - time, 0.55));
  }

  function draw(now) {
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    if (playing) {
      t += dt * 0.18;
      if (t >= 0.97) {
        flash = 1;
        t = 0;
      }
    }
    flash *= 0.88;

    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "rgba(11,16,36,0.35)";
    ctx.fillRect(0, 0, w, h);

    const r = radius(t);
    const speed = 1 / r;
    const cx = w * 0.5;
    const cy = h * 0.52;

    mTime.textContent = t.toFixed(2);
    mRad.textContent = r.toFixed(2);
    mSpd.textContent = speed.toFixed(1) + "\u00d7";

    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = "rgba(2,195,154,0.18)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -h * 0.38);
    ctx.lineTo(0, h * 0.38);
    ctx.stroke();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.phase += dt * (1.2 + speed * 0.85);
      const stretch = 1 + t * 1.8;
      const zz = p.z * stretch;
      const ang = p.phase + zz * 3.2;
      const localR = r * (0.55 + 0.45 * (1 - Math.abs(p.z)));
      const x = Math.cos(ang) * localR * w * 0.22;
      const y = zz * h * 0.28 + Math.sin(ang) * localR * h * 0.06;
      const depth = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(ang));
      ctx.fillStyle = "rgba(" +
        Math.floor(80 + 140 * p.tint) + "," +
        Math.floor(160 + 60 * p.tint) + "," +
        Math.floor(220) + "," +
        (0.18 + 0.55 * depth) + ")";
      ctx.beginPath();
      ctx.arc(x, y, 1.4 + 1.8 * depth * (0.4 + r), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    if (flash > 0.04) {
      ctx.fillStyle = "rgba(255,255,255," + (flash * 0.35) + ")";
      ctx.fillRect(0, 0, w, h);
    }

    requestAnimationFrame(draw);
  }

  playBtn.addEventListener("click", function () {
    playing = !playing;
    playBtn.textContent = playing ? "Pausa" : "Spela";
  });

  resetBtn.addEventListener("click", function () {
    t = 0;
    flash = 0;
  });

  function setAudience(key) {
    if (hudNote && captions[key]) {
      hudNote.textContent = captions[key];
      hudNote.setAttribute("data-audience", key);
    }
  }

  const tabs = [
    { key: "15", btn: document.getElementById("tab-15"), panel: document.getElementById("panel-15") },
    { key: "vuxen", btn: document.getElementById("tab-vuxen"), panel: document.getElementById("panel-vuxen") },
    { key: "skarp", btn: document.getElementById("tab-skarp"), panel: document.getElementById("panel-skarp") }
  ];

  tabs.forEach(function (item) {
    item.btn.addEventListener("click", function () {
      tabs.forEach(function (other) {
        const on = other === item;
        other.btn.setAttribute("aria-selected", on ? "true" : "false");
        other.panel.hidden = !on;
      });
      setAudience(item.key);
    });
  });

  const modal = document.getElementById("techModal");
  const openBtn = document.getElementById("techBtn");
  const closeBtn = document.getElementById("techClose");

  function closeModal() {
    modal.classList.remove("show");
  }

  openBtn.addEventListener("click", function () {
    modal.classList.add("show");
  });
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  requestAnimationFrame(draw);
})();
