(() => {
  const projects = window.portfolioProjects;
  const grid = document.getElementById('work-grid');
  const dialog = document.getElementById('work-dialog');
  const content = document.getElementById('project-content');
  const base = 'assets/works/';
  let fromCard = false;
  const language = () => document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function artwork(file, alt, eager = false) {
    const image = el('img');
    image.src = base + file;
    image.alt = alt;
    image.loading = eager ? 'eager' : 'lazy';
    image.decoding = 'async';
    return image;
  }
  function cover(project, className, eager = false) {
    const copy = project[language()];
    const frame = el('div', className + (project.cover.length > 1 ? ' campaign-cover' : ''));
    project.cover.forEach((file, i) => frame.append(artwork(file, i === 0 ? copy.coverAlt : '', eager)));
    return frame;
  }
  function renderCards() {
    grid.replaceChildren(...projects.map((project, i) => {
      const copy = project[language()];
      const card = el('a', 'work-card' + (i === 0 ? ' work-featured' : ''));
      card.href = '#/' + project.id;
      card.dataset.project = project.id;
      card.setAttribute('aria-label', copy.title + (language() === 'zh' ? '，查看作品详情' : ', view project'));
      const text = el('div', 'work-text');
      const row = el('div', 'work-title-row');
      const arrow = el('span', '', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      row.append(el('h3', '', copy.title), arrow);
      text.append(el('p', 'work-category', copy.category), row, el('p', 'work-summary', copy.summary));
      card.append(cover(project, 'work-cover'), text);
      card.addEventListener('click', () => { fromCard = true; });
      return card;
    }));
  }
  function renderProject(project) {
    content.querySelectorAll('video').forEach(video => video.pause());
    const copy = project[language()];
    const heading = el('div', 'project-heading');
    const title = el('h2', '', copy.title);
    title.id = 'project-title';
    heading.append(el('p', 'work-category', copy.category), title, el('p', 'project-description', copy.description));
    const facts = el('dl', 'project-facts');
    copy.facts.forEach(([label, value]) => {
      const fact = el('div');
      fact.append(el('dt', '', label), el('dd', '', value));
      facts.append(fact);
    });
    const sections = copy.sections.map(([title, text]) => {
      const section = el('section', 'project-section');
      section.append(el('h3', '', title), el('p', '', text));
      return section;
    });
    const gallery = el('div', 'project-gallery' + (project.id === 'pagepeek' ? ' campaign-gallery' : ''));
    project.gallery.forEach((file, i) => {
      const figure = el('figure');
      figure.append(artwork(file, copy.captions[i]), el('figcaption', '', copy.captions[i]));
      gallery.append(figure);
    });
    content.replaceChildren(heading, cover(project, 'project-hero', true), facts, ...sections, gallery);
    if (project.video) {
      const figure = el('figure', 'project-video');
      const video = el('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'none';
      video.src = base + project.video;
      video.poster = base + project.poster;
      video.setAttribute('aria-label', language() === 'zh' ? '装置演示视频' : 'Installation demonstration video');
      figure.append(video, el('figcaption', '', language() === 'zh' ? '装置演示 · 点击播放' : 'Installation demonstration · Play to watch'));
      content.append(figure);
    }
  }
  function sync() {
    const project = projects.find(item => location.hash === '#/' + item.id);
    if (project) {
      renderProject(project);
      dialog.dataset.project = project.id;
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden';
        dialog.querySelector('.work-close').focus();
      }
      dialog.scrollTop = 0;
    } else if (dialog.open) {
      content.querySelectorAll('video').forEach(video => video.pause());
      dialog.close();
      document.body.style.overflow = '';
      if (fromCard) grid.querySelector(`[data-project="${dialog.dataset.project}"]`)?.focus({ preventScroll: true });
      fromCard = false;
    }
  }
  function closeProject() {
    if (fromCard) history.back();
    else {
      history.replaceState(null, '', location.pathname + location.search + '#work');
      sync();
    }
  }
  dialog.querySelector('.work-close').addEventListener('click', closeProject);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeProject();
  });
  document.addEventListener('site-language-change', () => {
    renderCards();
    const project = projects.find(item => location.hash === '#/' + item.id);
    if (project && dialog.open) renderProject(project);
  });
  addEventListener('hashchange', sync);
  renderCards();
  sync();
})();
