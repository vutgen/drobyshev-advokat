document.getElementById("y").textContent = new Date().getFullYear();
const nav = document.getElementById("nav");
const sc = () => nav.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", sc, { passive: true }); sc();

const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".sb,.steps li,.office,.form,.about>*").forEach((el) => { el.classList.add("rv"); io.observe(el); });

const SIT = [
  { t: "Уголовное дело", d: "Вы подозреваемый, обвиняемый или потерпевший, либо вас вызывают свидетелем", l: ["Защита подозреваемого, обвиняемого, подсудимого", "Защита прав свидетелей", "Представление интересов потерпевших"] },
  { t: "Бизнес и налоги", d: "Экономические дела, проверки, обвинения против предпринимателя", l: ["Незаконное предпринимательство", "Незаконная банковская деятельность", "Уклонение от уплаты налогов и сборов", "Мошенничество"] },
  { t: "Мобилизация и армия", d: "Решения призывной комиссии, вопросы мобилизации", l: ["Консультирование и представление интересов по вопросам мобилизации", "Обжалование незаконного решения призывной комиссии", "Помощь в вопросах незаконной отправки в горячую точку"] },
  { t: "Спор или суд", d: "Гражданские дела и взыскание", l: ["Досудебное урегулирование", "Представительство в суде", "Представительство в государственных органах", "Исполнительное производство"] },
  { t: "Семья", d: "Развод, дети, наследство", l: ["Расторжение брака и раздел имущества", "Взыскание алиментов и признание отцовства", "Определение места жительства и порядка общения с детьми", "Наследственные дела"] },
  { t: "Врачебная ошибка", d: "Некачественная медицинская помощь", l: ["Представление интересов при некачественном оказании медицинской помощи", "Защита по ятрогенным уголовным делам", "Сопровождение дел судебно-медицинским экспертом"] },
];
const box = document.getElementById("sit"), res = document.getElementById("sitRes");
box.innerHTML = SIT.map((s, i) => `<button class="sb" data-i="${i}"><b>${s.t}</b><span>${s.d}</span></button>`).join("");
box.addEventListener("click", (e) => {
  const b = e.target.closest(".sb"); if (!b) return;
  const s = SIT[b.dataset.i];
  box.querySelectorAll(".sb").forEach((x) => x.classList.toggle("on", x === b));
  res.innerHTML = `<h3>${s.t}: чем поможем</h3><ul>${s.l.map((x) => `<li>${x}</li>`).join("")}</ul><a class="btn" href="#form">Получить консультацию по этой ситуации</a>`;
  res.classList.add("show");
});

document.getElementById("f").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("f").hidden = true;
  document.getElementById("done").hidden = false;
});
