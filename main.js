(() => {
  const links = window.TEACHHORIZON_LINKS || { socials: {}, projects: {}, support: {} };
  const translations = {
    ar: {
      online: "مساحة رقمية مستقلة", eyebrow: "مساحة رقمية — من فكرة إلى تجربة",
      intro: "مكان واحد يجمع حضوري على منصات التواصل، ومشاريعي الرقمية الصغيرة، وتجارب البرمجة الإبداعية التي أبنيها وأتعلم منها.",
      explore: "اكتشف مساحتي الرقمية", artCaption: "فضول يتحوّل إلى مشاريع",
      socialKicker: "ابقَ على تواصل", socialTitle: "تجدني هنا", socialNote: "تابع المحتوى والأفكار الجديدة عبر منصات التواصل.",
      projectKicker: "مختبر التجارب", projectTitle: "أفكار قيد التجربة", projectNote: "مشاريع شخصية وتجارب vibe-coding — مساحة للتعلّم واللعب بالأفكار.",
      supportKicker: "دعم بسيط", supportTitle: "ساعدني نواصل التجربة", supportDescription: "إذا عجبتك التجارب أو حبيت تدعم الوقت والمجهود وراءها، تلقى هنا طرق الدعم الشخصية.",
      setupNote: "روابط الحسابات المباشرة لم تُضف بعد؛ استعمل رابط الدليل أدناه للوصول إلى المنصات.",
      footerLine: "صُنع بالفضول، وتطوّر بالتجربة.", backTop: "العودة للأعلى", footerMotto: "Inspire · Know · Art",
      addLink: "الرابط غير مضاف", visit: "استكشف المشروع", source: "الكود المصدري", available: "افتح الحساب", directory: "كل حساباتي وروابطي", aboutPage: "عن TeachHorizon", contactPage: "تواصل", privacyPage: "سياسة الخصوصية", termsPage: "الشروط",
      projectPersonal: "تجربة شخصية", supportPersonal: "دعم شخصي", linkKofi: "ادعمني على Ko-fi", linkPayhip: "صفحة Payhip",
      socials: {
        tiktok: { name: "TikTok", text: "مقاطع قصيرة وأفكار سريعة", letter: "t" },
        youtube: { name: "YouTube", text: "فيديوهات ومحتوى مرئي", letter: "▶" },
        instagram: { name: "Instagram", text: "لقطات وتحديثات بصرية", letter: "◎" },
        facebook: { name: "Facebook", text: "تحديثات وحضور مجتمعي", letter: "f" },
        threads: { name: "Threads", text: "أفكار ومحادثات قصيرة", letter: "@" },
        pinterest: { name: "Pinterest", text: "إلهام ومراجع بصرية", letter: "p" }
      },
      projects: {
        quantumVortex: { eyebrow: "تجربة رقمية  /  01", name: "Quantum Vortex", description: "مشروع تجريبي بطابع بصري وفكرة تستكشفها خطوة بخطوة.", code: false, letter: "QV" },
        functionGrapher: { eyebrow: "أداة تجريبية  /  02", name: "Function Grapher", description: "تجربة لرسم الدوال؛ جرّب البوت على تيليغرام أو تصفّح الكود المصدري.", code: true, letter: "ƒx" }
      }
    },
    en: {
      online: "An independent digital space", eyebrow: "A DIGITAL SPACE — FROM IDEA TO EXPERIMENT",
      intro: "One place for my social presence, small digital projects, and creative coding experiments I build and learn from.",
      explore: "Explore my digital space", artCaption: "Curiosity becoming projects",
      socialKicker: "STAY CONNECTED", socialTitle: "Find me here", socialNote: "Follow new content and ideas across my social platforms.",
      projectKicker: "THE EXPERIMENT LAB", projectTitle: "Ideas in progress", projectNote: "Personal projects and vibe-coding experiments — a space to learn and play with ideas.",
      supportKicker: "A LITTLE SUPPORT", supportTitle: "Help keep the experiments going", supportDescription: "Enjoying the experiments? These are personal ways to support the time and work behind them.",
      setupNote: "Direct profile links have not been added yet; use the directory link below to reach the platforms.",
      footerLine: "Made with curiosity, shaped by experimentation.", backTop: "Back to top", footerMotto: "Inspire · Know · Art",
      addLink: "Not added yet", visit: "Explore project", source: "Source code", available: "Open profile", directory: "All my accounts and links", aboutPage: "About TeachHorizon", contactPage: "Contact", privacyPage: "Privacy", termsPage: "Terms",
      projectPersonal: "PERSONAL EXPERIMENT", supportPersonal: "PERSONAL SUPPORT", linkKofi: "Support on Ko-fi", linkPayhip: "Payhip page",
      socials: {
        tiktok: { name: "TikTok", text: "Short videos and quick ideas", letter: "t" },
        youtube: { name: "YouTube", text: "Videos and visual content", letter: "▶" },
        instagram: { name: "Instagram", text: "Visual moments and updates", letter: "◎" },
        facebook: { name: "Facebook", text: "Updates and community posts", letter: "f" },
        threads: { name: "Threads", text: "Thoughts and short conversations", letter: "@" },
        pinterest: { name: "Pinterest", text: "Inspiration and visual references", letter: "p" }
      },
      projects: {
        quantumVortex: { eyebrow: "DIGITAL EXPERIMENT  /  01", name: "Quantum Vortex", description: "A visual-minded personal experiment explored one step at a time.", code: false, letter: "QV" },
        functionGrapher: { eyebrow: "EXPERIMENTAL TOOL  /  02", name: "Function Grapher", description: "An experiment in graphing functions. Try the Telegram bot or explore the source code.", code: true, letter: "ƒx" }
      }
    }
  };
  let lang = "ar";
  try { lang = localStorage.getItem("th-language") === "en" ? "en" : "ar"; } catch (_) {}
  const $ = (selector) => document.querySelector(selector);
  const isRealUrl = (url) => typeof url === "string" && /^https?:\/\//i.test(url.trim());

  function actionLink(url, text, className = "card-action", newTab = true) {
    if (!isRealUrl(url)) return `<span class="${className} is-unavailable" aria-disabled="true">${text}<span aria-hidden="true">↗</span></span>`;
    return `<a class="${className}" href="${url}" ${newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}>${text}<span aria-hidden="true">↗</span></a>`;
  }
  function renderSocials(t) {
    const ids = ["tiktok", "youtube", "instagram", "facebook", "threads", "pinterest"];
    $("#socialGrid").innerHTML = ids.map((id, i) => {
      const item = t.socials[id]; const url = links.socials?.[id] || "";
      return `<article class="social-card ${isRealUrl(url) ? "has-link" : "no-link"}" style="--card-order:${i}">
        <div class="social-card-top"><span class="social-glyph glyph-${id}" aria-hidden="true">${item.letter}</span><span class="social-index">0${i + 1}</span></div>
        <h3>${item.name}</h3><p>${item.text}</p>
        ${actionLink(url, isRealUrl(url) ? t.available : t.addLink, "social-action")}
      </article>`;
    }).join("");
  }
  function renderDirectory(t) {
    const url = links.directory || "";
    $("#socialDirectory").innerHTML = isRealUrl(url) ? `<a class="directory-link" href="${url}" target="_blank" rel="noopener noreferrer"><span>${t.directory}</span><span aria-hidden="true">↗</span></a>` : "";
  }
  function renderProjects(t) {
    $("#projectGrid").innerHTML = ["quantumVortex", "functionGrapher"].map((id) => {
      const item = t.projects[id];
      const url = links.projects?.[id] || "";
      const sourceUrl = id === "functionGrapher" ? links.projects?.functionGrapherSource : "";
      return `<article class="project-card project-${id}">
        <div class="project-visual visual-${id}"><span class="project-visual-mark">${item.letter}</span><span class="visual-orbit visual-orbit-one"></span><span class="visual-orbit visual-orbit-two"></span><span class="visual-grid"></span></div>
        <div class="project-body"><p class="project-eyebrow">${item.eyebrow}</p><h3>${item.name}</h3><p class="project-description">${item.description}</p>
          <div class="project-links">${actionLink(url, t.visit, "card-action")}${item.code && isRealUrl(sourceUrl) ? actionLink(sourceUrl, t.source, "source-action") : ""}</div>
        </div>
      </article>`;
    }).join("");
  }
  function renderSupport(t) {
    const support = [
      { id: "kofi", label: t.linkKofi, icon: "♥" },
      { id: "payhip", label: t.linkPayhip, icon: "↗" }
    ];
    const active = support.filter(item => isRealUrl(links.support?.[item.id] || ""));
    $("#support").hidden = active.length === 0;
    $("#supportActions").innerHTML = active.map((item) => {
      const url = links.support?.[item.id] || "";
      return `<div class="support-action-wrap">${actionLink(url, `<span class="support-icon">${item.icon}</span>${item.label}`, "support-action")}</div>`;
    }).join("");
  }
  function render() {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-en", lang === "en");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });
    $("#languageToggle").innerHTML = lang === "ar" ? 'EN <span aria-hidden="true">↗</span>' : 'عربي <span aria-hidden="true">↗</span>';
    $("#languageToggle").setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    renderSocials(t); renderDirectory(t); renderProjects(t); renderSupport(t);
    const anyMissing = Object.values(links.socials || {}).some(url => !isRealUrl(url)) || Object.values(links.support || {}).some(url => !isRealUrl(url));
    $("#socialSetupNote").hidden = !anyMissing;
  }
  $("#languageToggle").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("th-language", lang); } catch (_) {}
    render();
  });
  $("#year").textContent = new Date().getFullYear();
  render();
})();