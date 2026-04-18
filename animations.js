/**
 * OMENTOR.STUDIO — ANIMATIONS.JS
 * Módulo ES6 — Anime.js v4 via CDN
 * Disparar em DOMContentLoaded nas páginas que precisam.
 * Máximo: 300ms por micro-interação, 500ms por entrada de bloco.
 */

import { createTimeline, animate, stagger }
  from 'https://cdn.jsdelivr.net/npm/animejs@4.0.2/lib/anime.esm.min.js';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function preHide(selectors) {
  if (prefersReduced) return;
  selectors.forEach(sel => {
    const els = typeof sel === 'string'
      ? [...document.querySelectorAll(sel)]
      : [sel];
    els.forEach(el => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    });
  });
}

/* ── 1. HERO TIMELINE (index.html) ──────────────────────── */
export function initHeroTimeline() {
  if (prefersReduced) return;

  preHide(['.hero-title', '.hero-subtitle', '.hero-proof', '.hero-buttons']);

  const tl = createTimeline({ defaults: { ease: 'outQuart' } });
  tl.add('.hero-title',    { opacity: [0, 1], translateY: [24, 0], duration: 700 }, 100);
  tl.add('.hero-subtitle', { opacity: [0, 1], translateY: [16, 0], duration: 600 }, 420);
  tl.add('.hero-proof',    { opacity: [0, 1], translateY: [12, 0], duration: 500 }, 600);
  tl.add('.hero-buttons',  { opacity: [0, 1], translateY: [12, 0], duration: 500 }, 720);
}

/* ── 2. PAGE HERO (páginas internas) ────────────────────── */
export function initPageHeroAnimation() {
  if (prefersReduced) return;

  const els = ['.page-hero-badge', '.page-hero-title', '.page-hero-subtitle', '.page-hero-cta'];
  preHide(els);

  const tl = createTimeline({ defaults: { ease: 'outQuart' } });
  els.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    tl.add(el, { opacity: [0, 1], translateY: [20, 0], duration: 600 }, 80 + i * 140);
  });
}

/* ── 3. SCROLL REVEALS ───────────────────────────────────── */
export function initScrollReveals() {
  if (prefersReduced) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const elements = [...document.querySelectorAll('.reveal-on-scroll')];
  if (!elements.length) return;

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  animate(elements, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 260,
    ease: 'outQuad',
    delay: stagger(60, { start: 60 }),
  });
}

/* ── 4. CARD STAGGER ─────────────────────────────────────── */
export function initCardStagger(containerSelector, delay = 80) {
  if (prefersReduced) return;

  const container = document.querySelector(containerSelector);
  if (!container) return;

  const cards = [...container.children];
  if (!cards.length) return;

  cards.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(18px)';
  });

  animate(cards, {
    opacity: [0, 1],
    translateY: [18, 0],
    duration: 500,
    ease: 'outQuart',
    delay: stagger(delay, { start: 40 }),
  });
}

/* ── 5. WHATSAPP FLOAT ───────────────────────────────────── */
export function initWhatsAppFloat() {
  if (prefersReduced) return;

  const btn = document.querySelector('.whatsapp-float');
  if (!btn) return;

  btn.style.opacity = '0';
  btn.style.transform = 'scale(0.7)';

  animate(btn, { opacity: [0, 1], scale: [0.7, 1], duration: 280, ease: 'outBack', delay: 800 });

  btn.addEventListener('mouseenter', () => animate(btn, { scale: [1, 1.1], duration: 220, ease: 'outQuad' }));
  btn.addEventListener('mouseleave', () => animate(btn, { scale: [1.1, 1], duration: 280, ease: 'outQuart' }));
}

/* ── 6. MANIFESTO REVEAL ─────────────────────────────────── */
export function initManifestoReveal() {
  if (prefersReduced) return;

  const el = document.querySelector('.manifesto-inner');
  if (!el) return;

  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';

  animate(el, { opacity: [0, 1], translateY: [24, 0], duration: 260, ease: 'outQuad', delay: 120 });
}

/* ── 7. STATS COUNTER ────────────────────────────────────── */
export function initStatsCounter() {
  if (prefersReduced) return;

  document.querySelectorAll('.stat-number[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let start = null;
    const duration = 1200;

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = (target % 1 !== 0)
        ? (eased * target).toFixed(0) + suffix
        : current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
}

/* ── 8. BUTTON HOVER ─────────────────────────────────────── */
export function initButtonHover(selector = '.btn-primary') {
  if (prefersReduced) return;

  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('mouseenter', () => animate(btn, { scale: [1, 1.03], duration: 200, ease: 'outQuad' }));
    btn.addEventListener('mouseleave', () => animate(btn, { scale: [1.03, 1], duration: 260, ease: 'outQuart' }));
  });
}

/* ── 9. TYPEWRITER ───────────────────────────────────────── */
export function initTypewriter(selector = '.hero-typewriter') {
  const el = document.querySelector(selector);
  if (!el) return;

  const words = el.dataset.words
    ? el.dataset.words.split(',').map(word => word.trim()).filter(Boolean)
    : [el.textContent.trim()];
  if (words.length < 2) return;

  const TYPING_SPEED = 60;
  const ERASING_SPEED = 35;
  const PAUSE_AFTER = 2200;
  const PAUSE_BEFORE = 280;

  let wordIndex = 0;
  let charIndex = words[0].length;
  let isErasing = true;
  el.textContent = words[0];

  function tick() {
    const current = words[wordIndex];

    if (!isErasing) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isErasing = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isErasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
    }

    setTimeout(tick, isErasing ? ERASING_SPEED : TYPING_SPEED);
  }

  setTimeout(tick, PAUSE_AFTER);
}

/* ── 10. FORM FIELD FOCUS ────────────────────────────────── */
export function initFormAnimations() {
  if (prefersReduced) return;

  const fields = document.querySelectorAll('.form-input, .form-textarea, .form-select');
  fields.forEach(field => {
    field.addEventListener('focus', () => animate(field, { scale: [1, 1.005], duration: 200, ease: 'outQuad' }));
    field.addEventListener('blur', ()  => animate(field, { scale: [1.005, 1], duration: 200, ease: 'outQuad' }));
  });
}
