(() => {
  const translations = {
    zh: {
      title: 'Niki Hu — 艺术、AI 与我',
      description: 'Niki Hu，来自上海，毕业于伦敦艺术大学（UAL），曾在伦敦 Pagepeek 从事 AI 产品经理与运营工作。',
      skip: '跳到正文', edition: '艺术、AI，以及其间的我',
      navigation: '主导航', language: '切换语言',
      navAbout: '关于我', navContact: '打个招呼',
      role: 'AI 产品与运营', heroHeading: '艺术视角，产品思维。',
      intro: '来自上海，毕业于伦敦艺术大学 UAL。\n曾在伦敦 Pagepeek 从事 AI 产品经理与运营工作。',
      more: '关于我的更多', cities: '两座城市，一段经历。',
      portraitAlt: 'Niki Hu 在伦敦泰晤士河畔，身后是大本钟与威斯敏斯特桥',
      london: 'London', chapter: '我的伦敦篇章',
      photoLocation: '伦敦，泰晤士河畔', archive: '来自我的相册 ↗',
      aboutDivider: '关于我的一些事', disciplines: '艺术 · 产品 · 运营',
      aboutLabel: '01 / 关于我', aboutHeading: '当艺术遇见', aboutHeadingAccent: '人工智能。',
      aboutLead: '我的经历，从上海到伦敦，\n从艺术教育，到 AI 产品与运营。',
      bio: '我毕业于伦敦艺术大学（University of the Arts London），曾在伦敦的 Pagepeek 担任 AI 产品经理，并从事运营工作。',
      education: '教育背景', educationDetail: '伦敦艺术大学 · UAL',
      experience: '工作经历', experienceDetail: 'AI 产品经理与运营 · 曾任职于伦敦',
      roots: '我的来处', shanghai: '上海', rootsDetail: '上海 · 我的来处',
      contactLabel: '02 / 保持联系', contactHeading: '从一句', contactHeadingAccent: '你好开始。',
      contactIntro: '关于 AI、产品，或一个有趣的想法。', github: '在 GitHub 找到我', backTop: '回到顶部'
    },
    en: {
      title: 'Niki Hu — Art, AI & everything in between',
      description: 'Niki Hu is from Shanghai, a graduate of University of the Arts London (UAL), and previously worked in AI product management and operations at Pagepeek in London.',
      skip: 'Skip to content', edition: 'ART, AI & EVERYTHING IN BETWEEN',
      navigation: 'Main navigation', language: 'Choose language',
      navAbout: 'About', navContact: 'Say hello',
      role: 'AI PRODUCT & OPERATIONS', heroHeading: 'A creative eye. A product mind.',
      intro: 'From Shanghai. A graduate of UAL.\nPreviously in AI product management and operations at Pagepeek, London.',
      more: 'A little more about me', cities: 'Two cities, one story.',
      portraitAlt: 'Niki Hu by the River Thames in London, with Big Ben and Westminster Bridge behind her',
      london: 'London', chapter: 'A CHAPTER OF ME',
      photoLocation: 'London, by the River Thames', archive: 'FROM MY PERSONAL ARCHIVE ↗',
      aboutDivider: 'A LITTLE ABOUT ME', disciplines: 'ARTS · PRODUCT · OPERATIONS',
      aboutLabel: '01 / ABOUT ME', aboutHeading: 'Art meets', aboutHeadingAccent: 'artificial intelligence.',
      aboutLead: 'From Shanghai to London.\nFrom an arts education to AI product and operations.',
      bio: 'I graduated from University of the Arts London (UAL), and previously worked as an AI product manager and in operations at Pagepeek in London.',
      education: 'EDUCATION', educationDetail: 'UAL · London',
      experience: 'EXPERIENCE', experienceDetail: 'AI product management & operations · Previously in London',
      roots: 'ROOTS', shanghai: 'Shanghai', rootsDetail: 'Shanghai · Where I’m from',
      contactLabel: '02 / LET’S CONNECT', contactHeading: 'It starts with', contactHeadingAccent: 'a hello.',
      contactIntro: 'About AI, products, or an interesting idea.', github: 'Find me on GitHub', backTop: 'Back to top'
    }
  };
  const storageKey = 'niki-site-language';
  function setLanguage(language) {
    if (!Object.hasOwn(translations, language)) return;
    const copy = translations[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = copy[element.dataset.i18n];
    });
    for (const attribute of ['alt', 'aria']) {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        element.setAttribute(attribute === 'aria' ? 'aria-label' : 'alt', copy[element.getAttribute(`data-i18n-${attribute}`)]);
      });
    }
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    try { localStorage.setItem(storageKey, language); } catch { /* File previews or privacy settings may disable storage. */ }
  }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  let language = 'zh';
  try {
    const saved = localStorage.getItem(storageKey);
    if (Object.hasOwn(translations, saved)) language = saved;
  } catch { /* Use Chinese when storage is unavailable. */ }
  setLanguage(language);
  document.getElementById('year').textContent = new Date().getFullYear();
})();
