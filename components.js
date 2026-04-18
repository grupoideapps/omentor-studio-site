/**
 * OMENTOR.STUDIO — COMPONENTS.JS
 * IIFE: injeta Nav, Footer, WhatsApp float e SVG Sprite
 * NÃO converter para módulo ES6 — a injeção quebra.
 */

(function () {
  'use strict';

  const root = document.documentElement.dataset.root || '.';
  const WA_NUMBER = '5532991313371';

  function wa(msg) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  /* ── SVG Sprite ─────────────────────────────────────────── */
  const SVG_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></symbol>
  <symbol id="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></symbol>
  <symbol id="icon-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></symbol>
  <symbol id="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></symbol>
  <symbol id="icon-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></symbol>
  <symbol id="icon-youtube" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></symbol>
  <symbol id="icon-whatsapp" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.97 0C5.377 0 0 5.377 0 11.97c0 2.097.546 4.07 1.499 5.785L.024 24l6.404-1.453A11.93 11.93 0 0 0 11.97 23.94C18.563 23.94 24 18.563 24 11.97 24 5.377 18.563 0 11.97 0zm0 21.862a9.895 9.895 0 0 1-5.049-1.378l-.362-.215-3.754.851.89-3.658-.236-.376A9.862 9.862 0 0 1 2.078 11.97c0-5.455 4.437-9.892 9.892-9.892 5.455 0 9.892 4.437 9.892 9.892 0 5.455-4.437 9.892-9.892 9.892z"/></symbol>
  <symbol id="icon-external-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></symbol>
  <symbol id="icon-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></symbol>
  <symbol id="icon-file-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></symbol>
  <symbol id="icon-image" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></symbol>
  <symbol id="icon-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></symbol>
  <symbol id="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></symbol>
</svg>`;

  /* ── Nav ────────────────────────────────────────────────── */
  function buildNav() {
    const links = [
      { label: 'SaaS',        href: `${root}/index.html` },
      { label: 'Mentoria',    href: `${root}/mentoria.html` },
      { label: 'Fale Comigo', href: `${root}/fale-comigo.html` },
    ];

    const navItems = links.map(l => `
      <li role="presentation">
        <a class="nav-link" role="menuitem" href="${l.href}">${l.label}</a>
      </li>`).join('');

    return `
<nav class="site-nav" role="navigation" aria-label="Menu principal">
  <div class="nav-inner">
    <a href="${root}/index.html" class="nav-logo" aria-label="Omentor.Studio — Página inicial">
      OMENTOR.STUDIO
    </a>

    <div class="nav-links-wrapper">
      <ul class="nav-links" role="menubar">${navItems}</ul>
    </div>

    <div class="nav-actions">
      <a href="${root}/comecar.html?plano=completo" class="nav-cta">Lista de espera</a>
      <!-- Botão temporariamente oculto
      <button type="button" class="nav-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="navMobilePanel">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      -->
    </div>
  </div>

  <div class="nav-mobile-overlay" aria-hidden="true">
    <div class="nav-mobile-panel" id="navMobilePanel" data-state="closed" style="background: #050505; box-shadow: -10px 0 40px rgba(0,0,0,0.9);">
      <div class="nav-mobile-header">
        <span class="nav-mobile-label">Menu</span>
        <button type="button" class="nav-mobile-close-btn" aria-label="Fechar menu">×</button>
      </div>
      <ul class="nav-mobile-links" role="menu">${navItems}</ul>
      <a href="${root}/comecar.html?plano=completo" class="nav-cta nav-mobile-cta">Lista de espera</a>
    </div>
  </div>
</nav>`;
  }

  /* ── Footer ─────────────────────────────────────────────── */
  function buildFooter() {
    return `
<footer class="site-footer" role="contentinfo">
  <div class="footer-inner">
    <div>
      <a href="${root}/index.html" class="footer-logo" aria-label="Omentor.Studio — Página inicial">
        OMENTOR.STUDIO
      </a>
      <p class="footer-tagline">
        "O mesmo processo que transforma conhecimento em presença digital — agora em SaaS e mentoria."
      </p>
    </div>

    <div>
      <p class="footer-col-title">Páginas</p>
      <ul class="footer-links">
        <li><a href="${root}/index.html">SaaS</a></li>
        <li><a href="${root}/mentoria.html">Mentoria</a></li>
        <li><a href="${root}/fale-comigo.html">Fale Comigo</a></li>
      </ul>
    </div>

    <div>
      <p class="footer-col-title">Redes</p>
      <div class="footer-social">
        <a href="https://instagram.com/omentor.studio" target="_blank" rel="noopener noreferrer" class="footer-social-link">
          <svg width="15" height="15"><use href="#icon-instagram"/></svg>
          @omentor.studio
        </a>
        <a href="https://youtube.com/@omentorstudio" target="_blank" rel="noopener noreferrer" class="footer-social-link">
          <svg width="15" height="15"><use href="#icon-youtube"/></svg>
          YouTube
        </a>
        <a href="${wa('Olá, Luan!')}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
          <svg width="15" height="15" style="fill:#25D366"><use href="#icon-whatsapp"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="footer-copyright">© 2026 Luan Bonadie · Omentor.Studio</p>
    <p class="footer-cnpj">CNPJ 24.238.145/0001-93</p>
  </div>
</footer>`;
  }

  /* WhatsApp float removed — no floating button on any page */

  /* ── Video Modal ────────────────────────────────────────── */
  function buildVideoModal() {
    return `
<div id="video-modal" role="dialog" aria-modal="true" aria-label="Vídeo demonstrativo" style="display:none;position:fixed;inset:0;z-index:9000;align-items:center;justify-content:center;padding:1.5rem;">
  <div id="video-modal-backdrop" style="position:absolute;inset:0;background:rgba(3,3,3,0.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);cursor:pointer;"></div>
  <div style="position:relative;z-index:1;width:100%;max-width:860px;border-radius:16px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,0.8),0 0 0 1px rgba(255,255,255,0.06);background:#000;aspect-ratio:16/9;">
    <iframe id="video-modal-iframe"
      src=""
      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
      allowfullscreen
      style="position:absolute;inset:0;width:100%;height:100%;border:none;"
      loading="lazy"
      title="Vídeo demonstrativo — Omentor.Studio">
    </iframe>
    <button id="video-modal-close" aria-label="Fechar vídeo" style="position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:20px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s;z-index:2;">×</button>
  </div>
</div>`;
  }

  function getYouTubeId(href) {
    try {
      const url = new URL(href);
      if (url.hostname === 'youtu.be') return url.pathname.slice(1);
      if (url.hostname.includes('youtube.com')) return url.searchParams.get('v');
    } catch(e) {}
    return null;
  }

  function initVideoModal() {
    document.body.insertAdjacentHTML('beforeend', buildVideoModal());

    const modal   = document.getElementById('video-modal');
    const iframe  = document.getElementById('video-modal-iframe');
    const closeBtn = document.getElementById('video-modal-close');
    const backdrop = document.getElementById('video-modal-backdrop');

    function openModal(videoId) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeModal() {
      modal.style.display = 'none';
      iframe.src = '';
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    closeBtn.addEventListener('mouseover', () => closeBtn.style.background = 'rgba(99,102,241,0.8)');
    closeBtn.addEventListener('mouseout',  () => closeBtn.style.background = 'rgba(0,0,0,0.7)');

    // Intercept all links that point to YouTube
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href*="youtube.com"], a[href*="youtu.be"], [data-video-modal]');
      if (!link) return;
      const videoId =
        link.dataset.videoModal ||
        getYouTubeId(link.getAttribute('href') || '');
      if (!videoId) return;
      e.preventDefault();
      openModal(videoId);
    });
  }

  /* ── Hamburger ──────────────────────────────────────────── */
  function initHamburger() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    const toggle = nav.querySelector('.nav-toggle');
    const overlay = nav.querySelector('.nav-mobile-overlay');
    const panel = nav.querySelector('.nav-mobile-panel');
    const closeBtn = nav.querySelector('.nav-mobile-close-btn');
    const mobileLinks = nav.querySelectorAll('.nav-mobile-links a');

    function setMenuState(open) {
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('has-mobile-open', open);
      overlay?.classList.toggle('is-visible', open);
      panel?.setAttribute('data-state', open ? 'open' : 'closed');
    }

    toggle?.addEventListener('click', () => setMenuState(!toggle.classList.contains('is-open')));
    closeBtn?.addEventListener('click', () => setMenuState(false));
    overlay?.addEventListener('click', e => { if (e.target === overlay) setMenuState(false); });
    mobileLinks.forEach(l => l.addEventListener('click', () => setMenuState(false)));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && toggle.classList.contains('is-open')) setMenuState(false);
    });
  }

  /* ── Active link ────────────────────────────────────────── */
  function markActiveLink() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPath = new URL(link.href, window.location.href).pathname;
      if (path === linkPath || (path.endsWith('/') && linkPath.endsWith('index.html'))) {
        link.classList.add('active');
      }
    });
  }

  /* ── FAQ accordion ──────────────────────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.faq-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('is-open');
        // fecha todos
        document.querySelectorAll('.faq-item.is-open').forEach(i => i.classList.remove('is-open'));
        // abre o clicado (toggle)
        if (!isOpen) item.classList.add('is-open');
      });
    });
  }

  /* ── Reading progress bar ───────────────────────────────── */
  function initProgressBar() {
    const bar = document.querySelector('.progress-bar');
    if (!bar) return;
    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = `${Math.min(100, (scrolled / total) * 100)}%`;
    }, { passive: true });
  }

  /* ── Boot ───────────────────────────────────────────────── */
  function boot() {
    document.body.insertAdjacentHTML('afterbegin', SVG_SPRITE);

    const navRoot = document.getElementById('nav-root');
    if (navRoot) navRoot.outerHTML = buildNav();

    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) footerRoot.outerHTML = buildFooter();

    // WhatsApp float removed

    initHamburger();
    markActiveLink();
    initFAQ();
    initProgressBar();
    initVideoModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
