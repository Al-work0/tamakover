// ---------- Settings ----------
const WA_NUMBER = "6285179781789"; // WhatsApp number, no "+" or spaces

// ---------- Portfolio photos ----------
// cat: solo | bareng | family
const PHOTOS = [
  { src: "make-it-fun.jpg", cat: "solo", cap: "Grad session, make it fun" },
  { src: "andhika-ub.jpg", cat: "bareng", cap: "Andhika · Universitas Brawijaya" },
  { src: "erfida-umm.jpg", cat: "solo", cap: "Erfida · Universitas Muhammadiyah Malang" },
  { src: "family-jump.jpg", cat: "family", cap: "Family session" },
  { src: "icha-ub.jpg", cat: "solo", cap: "Icha · Universitas Brawijaya" },
  { src: "tobias-ugm.jpg", cat: "bareng", cap: "Tobias · Universitas Gadjah Mada" },
  { src: "nanda-unair.jpg", cat: "bareng", cap: "Nanda · Universitas Airlangga" },
  { src: "cucut-ugm.jpg", cat: "solo", cap: "Cucut · Universitas Gadjah Mada" },
  { src: "vyrra-vinna.jpg", cat: "bareng", cap: "Vyrra & Vinna" },
  { src: "lulu-ub.jpg", cat: "solo", cap: "Lulu · Universitas Brawijaya" },
  { src: "telkom-grad.jpg", cat: "solo", cap: "Telkom University" },
  { src: "putri-sash.jpg", cat: "solo", cap: "Grad session" },
  { src: "agustin-um.jpg", cat: "solo", cap: "Agustin · Universitas Negeri Malang" },
  { src: "erisna-unair.jpg", cat: "solo", cap: "Erisna · Universitas Airlangga" },
];

// ---------- 2026 graduation pricelist ----------
// a = Malang/Surabaya/Yogyakarta/Solo/Semarang/Kediri, b = Bandung/Depok/Jakarta
const PACKAGES = {
  personal: {
    desc: {
      id: "1 wisudawan · termasuk sesi foto keluarga · sneakpeek 3 foto same-day edit (maks. 24 jam) · galeri online Google Drive (14 hari)",
      en: "1 graduate · family photos included · 3 same-day-edit sneak peeks (max 24h) · online Google Drive gallery (14 days)",
    },
    tiers: [
      { name: "Personal 1", hours: 1, photos: 25, a: 350000, b: 500000 },
      { name: "Personal 2", hours: 2, photos: 40, a: 600000, b: 900000, featured: true },
    ],
    addons: [
      { t: { id: "Tambah durasi", en: "Extra time" }, v: { id: "+Rp150.000 / 30 menit", en: "+IDR 150,000 / 30 min" } },
      { t: { id: "Paket analog", en: "Analog film" }, v: { id: "+Rp500.000 / roll film", en: "+IDR 500,000 / roll" } },
    ],
  },
  duo: {
    desc: {
      id: "2 wisudawan · termasuk sesi foto keluarga · sneakpeek 5 foto same-day edit (maks. 24 jam) · galeri online Google Drive (14 hari)",
      en: "2 graduates · family photos included · 5 same-day-edit sneak peeks (max 24h) · online Google Drive gallery (14 days)",
    },
    tiers: [
      { name: "Duo Binggo 1", hours: 1, photos: 25, a: 500000, b: 700000 },
      { name: "Duo Binggo 2", hours: 2, photos: 40, a: 800000, b: 1000000, featured: true },
    ],
    addons: [
      { t: { id: "Add-on", en: "Add-ons" }, v: { id: "Durasi & film analog — tanya via WhatsApp", en: "Extra time & analog film — ask on WhatsApp" } },
    ],
  },
  group: {
    desc: {
      id: "3–5 wisudawan · sneakpeek 5 foto same-day edit (maks. 24 jam) · galeri online Google Drive (14 hari)",
      en: "3–5 graduates · 5 same-day-edit sneak peeks (max 24h) · online Google Drive gallery (14 days)",
    },
    tiers: [{ name: "Group 1", hours: 1, photos: 40, a: 600000, b: 700000, featured: true }],
    addons: [
      { t: { id: "Tambah durasi", en: "Extra time" }, v: { id: "+Rp200.000 / 30 menit", en: "+IDR 200,000 / 30 min" } },
      { t: { id: "Lebih dari 5 wisudawan", en: "More than 5 graduates" }, v: { id: "+Rp100.000 / orang", en: "+IDR 100,000 / person" } },
      { t: { id: "Paket analog", en: "Analog film" }, v: { id: "+Rp500.000 / roll film", en: "+IDR 500,000 / roll" } },
    ],
  },
};

// ---------- English translations (Indonesian lives in the HTML) ----------
const EN = {
  "nav.portfolio": "Portfolio", "nav.services": "Services", "nav.pricing": "Pricing", "nav.schedule": "Schedule", "nav.book": "Book now",
  "hero.eyebrow": "Graduation & portrait photographer · Malang, Indonesia",
  "hero.but": "but,",
  "hero.lead": "More than a photo in a toga. We capture moments as they happen: small pauses, real reactions, and the feelings you'll keep.",
  "hero.cta": "Chat on WhatsApp", "hero.cta2": "See packages — from IDR 350k",
  "hero.s1": "cities covered", "hero.s2": "campuses in Indonesia", "hero.s3": "photo sneak peek",
  "hero.sticker": "a soft way to celebrate your graduation ✨",
  "note.eyebrow": "a little note", "note.title": "Hi, glad you're here.",
  "note.p1": "Tamakover is a photo & video studio based in Malang. We believe graduation day isn't about stiff poses. It's about you, your family, and the friends who show up to celebrate.",
  "note.p2": "A space to slow down, feel comfortable, and be yourself. Not just how it looked, but how it felt.",
  "pf.eyebrow": "Portfolio", "pf.title": "Stories from graduation day", "pf.all": "All", "pf.solo": "Personal", "pf.bareng": "Friends & couples", "pf.family": "Family",
  "pf.more": "See more on Instagram @tamakover →",
  "sv.eyebrow": "Services", "sv.title": "What can we capture for you?",
  "sv.t1": "Most booked", "sv.h1": "Graduation Session", "sv.p1": "Solo, duo, or with the whole squad. Family photos are included.", "sv.l1": "See pricing →",
  "sv.t2": "Couples & friends", "sv.h2": "Portrait & Couple", "sv.p2": "Relaxed sessions for two — partners, best friends, or just you. Unfiltered and full of laughs.", "sv.l2": "Ask for pricelist →",
  "sv.t3": "Big days", "sv.h3": "Prewedding & Wedding", "sv.p3": "The same spontaneous, expressive, warm style for prewedding, engagement, akad and reception.", "sv.l3": "Ask for pricelist →",
  "sv.filmT": "Gradu, but on film.", "sv.filmP": "Add a roll of analog film to any package for a nostalgic touch. +IDR 500k / roll.",
  "pr.eyebrow": "Graduation pricelist 2026", "pr.title": "Pick the package that fits you",
  "pr.fine": "Prices in Indonesian Rupiah. Full terms & conditions are shared on WhatsApp when you book.",
  "ps.eyebrow": "How to book", "ps.title": "Easy, just 4 steps",
  "ps.h1": "Chat on WhatsApp", "ps.p1": "Send your graduation date, campus, and the package you want.",
  "ps.h2": "Lock your slot", "ps.p2": "Slots per graduation day are limited — book early to be safe.",
  "ps.h3": "On the day, have fun!", "ps.p3": "Come as you are. We'll guide the poses, you just be yourself.",
  "ps.h4": "Get your photos", "ps.p4": "Sneak peeks within 24 hours, then the full gallery on Google Drive (open for 14 days).",
  "sc.eyebrow": "November route 2026", "sc.title": "We're at your campus this month", "sc.p": "Graduation-day slots fill up fast. Check our route and lock your session now.", "sc.book": "Book",
  "fq.title": "Frequently asked questions",
  "fq.q1": "Which cities do you cover?", "fq.a1": "We're based in Malang and also cover Surabaya, Yogyakarta, Solo, Semarang, Kediri, Bandung, Depok and Jakarta. Prices for Bandung, Depok and Jakarta are a little higher to cover travel.",
  "fq.q2": "Can my family join the photos?", "fq.a2": "Absolutely! Personal and Duo Binggo packages include a family photo session.",
  "fq.q3": "When will I get my photos?", "fq.a3": "Sneak peeks (3 photos for Personal, 5 for Duo & Group) arrive within 24 hours. The full gallery is shared via Google Drive and can be downloaded for 14 days.",
  "fq.q4": "What if our group has more than 5 people?", "fq.a4": "No problem! The Group package covers 3–5 graduates, and each extra graduate is +IDR 100k.",
  "fq.q5": "Can we extend on the day?", "fq.a5": "Yes, as long as our schedule allows. Extra time is IDR 150k / 30 min (Personal & Duo) or IDR 200k / 30 min (Group).",
  "fq.q6": "Do you shoot video too?", "fq.a6": "Yes. Tamakover also offers videography — chat with us for details and pricing.",
  "cta.script": "see you on your big day!", "cta.title": "You only graduate once. Celebrate it your way.", "cta.btn": "Book now on WhatsApp",
  "ft.tag": "Photography · Videography · Malang, Indonesia",
};

const UI = {
  id: { hour: "jam durasi", photos: "foto edit", book: "Pilih paket ini", featured: "Paling lengkap", from: "Rp" },
  en: { hour: "hour session", photos: "edited photos", book: "Book this package", featured: "Most complete", from: "IDR" },
};

const WA_MSG = {
  id: {
    general: "Halo Tamakover! Saya mau tanya soal sesi foto wisuda 🎓",
    portrait: "Halo Tamakover! Saya mau tanya pricelist sesi portrait / couple 📸",
    wedding: "Halo Tamakover! Saya mau tanya pricelist prewedding / wedding 💍",
    ub: "Halo Tamakover! Saya mau booking sesi wisuda Universitas Brawijaya tanggal 14–15 November 🎓",
    ugm: "Halo Tamakover! Saya mau booking sesi wisuda UGM tanggal 25–26 November 🎓",
    um: "Halo Tamakover! Saya mau booking sesi wisuda Universitas Negeri Malang tanggal 28–29 November 🎓",
    pkg: (name, city) => `Halo Tamakover! Saya mau booking paket ${name} (${city}) 🎓\n\nNama:\nKampus:\nTanggal wisuda:`,
  },
  en: {
    general: "Hi Tamakover! I'd like to ask about a graduation photo session 🎓",
    portrait: "Hi Tamakover! Could I get the pricelist for portrait / couple sessions? 📸",
    wedding: "Hi Tamakover! Could I get the pricelist for prewedding / wedding? 💍",
    ub: "Hi Tamakover! I'd like to book a session for Universitas Brawijaya graduation, 14–15 November 🎓",
    ugm: "Hi Tamakover! I'd like to book a session for UGM graduation, 25–26 November 🎓",
    um: "Hi Tamakover! I'd like to book a session for Universitas Negeri Malang graduation, 28–29 November 🎓",
    pkg: (name, city) => `Hi Tamakover! I'd like to book the ${name} package (${city}) 🎓\n\nName:\nCampus:\nGraduation date:`,
  },
};

const CITY_LABEL = { a: "Malang/Surabaya/Yogyakarta/Solo/Semarang/Kediri", b: "Bandung/Depok/Jakarta" };

// ---------- State ----------
let lang = "id";
try { lang = localStorage.getItem("tk-lang") || "id"; } catch (e) {}
let pkg = "personal";
let city = "a";

const waUrl = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
// 350000 -> "350rb" / "350k", 1000000 -> "1jt" / "1M"
const short = (n) =>
  n >= 1e6
    ? (n / 1e6).toLocaleString(lang === "id" ? "id-ID" : "en-US") + (lang === "id" ? "jt" : "M")
    : n / 1000 + (lang === "id" ? "rb" : "k");

// ---------- i18n ----------
const ID_TEXT = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (ID_TEXT[el.dataset.i18n] = el.innerHTML));

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    el.innerHTML = lang === "en" && EN[k] ? EN[k] : ID_TEXT[k];
  });
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll(".wa-link[data-wa]").forEach((a) => {
    a.href = waUrl(WA_MSG[lang][a.dataset.wa]);
    a.target = "_blank";
    a.rel = "noopener";
  });
  renderPricing();
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("tk-lang", lang); } catch (e) {}
    applyLang();
  })
);

// ---------- Pricing ----------
function renderPricing() {
  const p = PACKAGES[pkg];
  const ui = UI[lang];
  document.getElementById("pkgDesc").textContent = p.desc[lang];
  document.getElementById("priceCards").innerHTML = p.tiers
    .map((t) => {
      const featured = t.featured && p.tiers.length > 1;
      return `
      <article class="pcard ${featured ? "featured" : ""}">
        ${featured ? `<span class="badge">${ui.featured}</span>` : ""}
        <h3>${t.name}</h3>
        <div class="price"><small>${ui.from}</small>${short(t[city])}</div>
        <ul>
          <li><b>${t.hours}</b> ${ui.hour}</li>
          <li><b>${t.photos}</b> ${ui.photos}</li>
        </ul>
        <a class="btn" target="_blank" rel="noopener" href="${waUrl(WA_MSG[lang].pkg(t.name, CITY_LABEL[city]))}">${ui.book}</a>
      </article>`;
    })
    .join("");
  document.getElementById("addons").innerHTML = p.addons
    .map((a) => `<div class="addon"><b>${a.t[lang]}</b>${a.v[lang]}</div>`)
    .join("");
}

function bindSeg(id, attr, set) {
  const wrap = document.getElementById(id);
  wrap.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => {
      wrap.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      set(b.dataset[attr]);
      renderPricing();
    })
  );
}
bindSeg("pkgTabs", "pkg", (v) => (pkg = v));
bindSeg("cityTabs", "city", (v) => (city = v));

// ---------- Gallery ----------
const grid = document.getElementById("grid");
grid.innerHTML = PHOTOS.map(
  (p, i) => `<figure class="tile reveal" data-cat="${p.cat}" data-i="${i}">
    <img src="assets/${p.src}" alt="${p.cap}" loading="lazy" />
    <figcaption>${p.cap}</figcaption>
  </figure>`
).join("");

document.querySelectorAll(".filters button").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.filter;
    grid.querySelectorAll(".tile").forEach((t) => t.classList.toggle("hide", f !== "all" && t.dataset.cat !== f));
  })
);

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
let cur = 0;
const visible = () => [...grid.querySelectorAll(".tile:not(.hide)")].map((t) => +t.dataset.i);
function show(i) {
  cur = i;
  lbImg.src = "assets/" + PHOTOS[i].src;
  lbImg.alt = PHOTOS[i].cap;
  lbCap.textContent = PHOTOS[i].cap;
}
function step(d) {
  const v = visible();
  show(v[(v.indexOf(cur) + d + v.length) % v.length]);
}
grid.addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (!t) return;
  show(+t.dataset.i);
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
});
const closeLb = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
document.getElementById("lbClose").onclick = closeLb;
document.getElementById("lbPrev").onclick = () => step(-1);
document.getElementById("lbNext").onclick = () => step(1);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// ---------- Nav ----------
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// ---------- Reveal on scroll ----------
document.querySelectorAll(".note, .svc, .steps li, .route li, .faq-list details, .section-head").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

applyLang();
