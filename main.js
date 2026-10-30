(() => {
  "use strict";

  const button = document.getElementById("languageToggle");
  const year = document.getElementById("year");
  const linkMap = window.TEACHHORIZON_LINKS || {};

  function setLanguage(language) {
    const lang = language === "en" ? "en" : "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-en", lang === "en");

    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      const value = element.getAttribute(lang === "ar" ? "data-ar" : "data-en");
      if (value !== null) element.innerHTML = value;
    });

    if (button) {
      button.innerHTML = lang === "ar" ? 'EN <span aria-hidden="true">↗</span>' : 'عربي <span aria-hidden="true">↗</span>';
      button.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    }

    try {
      localStorage.setItem("th-language", lang);
    } catch (_) {}
  }

  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const key = anchor.getAttribute("data-link");
    const url = linkMap[key];
    if (typeof url === "string" && url.trim()) {
      anchor.setAttribute("href", url);
    } else {
      anchor.removeAttribute("href");
      anchor.setAttribute("aria-disabled", "true");
      anchor.classList.add("is-unavailable");
    }
  });

  if (year) year.textContent = String(new Date().getFullYear());

  let initialLanguage = "ar";
  try {
    initialLanguage = localStorage.getItem("th-language") === "en" ? "en" : "ar";
  } catch (_) {}

  if (button) {
    button.addEventListener("click", () => {
      const nextLanguage = document.documentElement.lang === "ar" ? "en" : "ar";
      setLanguage(nextLanguage);
    });
  }

  setLanguage(initialLanguage);
})();