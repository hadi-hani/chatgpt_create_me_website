(() => {
  const button = document.querySelector("#pageLanguageToggle");
  let lang = "ar";
  try { lang = localStorage.getItem("th-language") === "en" ? "en" : "ar"; } catch (_) {}
  function applyLanguage(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-en", lang === "en");
    document.querySelectorAll("[data-ar][data-en]").forEach((node) => {
      node.textContent = node.dataset[lang];
    });
    if (button) {
      button.textContent = lang === "ar" ? "EN ↗" : "عربي ↗";
      button.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    }
    try { localStorage.setItem("th-language", lang); } catch (_) {}
  }
  if (button) button.addEventListener("click", () => applyLanguage(lang === "ar" ? "en" : "ar"));
  applyLanguage(lang);
})();