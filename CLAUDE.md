# CLAUDE.md — Omentor.Studio `apps/site/`

> **Ponto de entrada para novos agentes ou sessões futuras.** Leia este arquivo antes de qualquer edição no site.

---

## Visão Geral

Site estático multi-página do **Omentor.Studio** — SaaS de criação de pack digital para especialistas (psicólogos, nutricionistas, coaches, mentores, consultores). Construído com HTML + CSS + JS vanilla, sem frameworks. Design system centralizado em `../../design-system/tokens/core.css`.
Camada visual compartilhada aprovada em onboarding: `../../design-system/base.css`.

**Status do produto (Abril 2026):** SaaS em pré-lançamento. `comecar.html` e `agendar.html` são formulários de captação (waitlist / pre-checkout) enquanto a plataforma não está disponível.

---

## Arquitetura de Arquivos

```
apps/site/
├── index.html         — Home SaaS (landing principal)
├── mentoria.html      — Vendas da Mentoria 1:1 (R$3.700)
├── comecar.html       — Lista de espera SaaS (waitlist)
├── agendar.html       — Pré-checkout Mentoria → redireciona para WhatsApp
├── fale-comigo.html   — Contato genérico (SaaS + Mentoria)
├── style.css          — Importa `../../design-system/base.css` + estilos específicos do site
├── components.js      — IIFE: nav, footer, WhatsApp float, FAQ, progress bar
├── animations.js      — Módulo ES6, Anime.js v4 CDN, animações < 300ms
├── assets/            — Imagens do site (screenshots, fotos)
└── CLAUDE.md          — Este arquivo
```

---

## Design System

- **Tokens:** `../../design-system/tokens/core.css` — prefixo `--ds-*`
- **Base aprovada:** `../../design-system/base.css` — fundação visual compartilhada do cliente
- **Fontes:** Syne 800 (display/logo) · DM Sans (body) — Google Fonts CDN
- **Identidade:** dark premium tech · fundo `#030303` · acento índigo `#6366f1` → rose `#ec4899`
- **Regra crítica:** zero valores de cor, fonte ou espaçamento hardcoded em qualquer HTML/CSS do site — sempre `var(--ds-*)`

---

## Padrões de Código

### `data-root`
O atributo `data-root` no `<html>` define o caminho relativo para a raiz do site — usado pelo `components.js` para montar hrefs corretos:
```html
<html lang="pt-BR" data-root=".">
```
Todas as páginas em `apps/site/` usam `data-root="."`.

### Nav e Footer — IIFE
`components.js` é uma IIFE (auto-executável). **Nunca converter para módulo ES6.** Injeta:
- `<nav>` em `#nav-root` — substituindo o elemento
- `<footer>` em `#footer-root` — substituindo o elemento
- WhatsApp float — appendado ao `<body>`

```html
<!-- Nav -->
<div id="nav-root"></div>

<!-- Footer -->
<div id="footer-root"></div>

<!-- Script sempre ao final do body, antes de animations.js -->
<script src="./components.js"></script>
```

### Animations
`animations.js` é um módulo ES6. Importar apenas nas páginas que usam animações de scroll/hero:
```html
<script type="module">
  import { initHeroTimeline, initScrollReveals, ... } from './animations.js';
  document.addEventListener('DOMContentLoaded', () => {
    initHeroTimeline();
    initScrollReveals();
    // ...
  });
</script>
```
Páginas de formulário (`comecar.html`, `agendar.html`, `fale-comigo.html`) **não importam** `animations.js` — são páginas funcionais, não de conteúdo.

### Background shapes
Padrão visual usado em todas as páginas:
```html
<div class="bg-shapes" aria-hidden="true">
  <div class="bg-shape bg-shape-1"></div>
  <div class="bg-shape bg-shape-2"></div>
  <div class="bg-shape bg-shape-3"></div>
  <div class="bg-shape bg-shape-4"></div>
</div>
```
Definido em `style.css`. Páginas de formulário podem usar as classes `.shape .shape-N` definidas inline (já que não importam `style.css` completo via `<link>` mas via `core.css` diretamente).

---

## Páginas — Funções e CTAs

| Página | Função | CTA principal |
|---|---|---|
| `index.html` | Landing SaaS completa | `comecar.html?plano=completo` |
| `mentoria.html` | Vendas Mentoria 1:1 R$3.700 | `agendar.html` |
| `comecar.html` | Waitlist SaaS (lançamento) | Webhook → confirmação email |
| `agendar.html` | Pré-checkout Mentoria | WhatsApp (mensagem pré-preenchida) |
| `fale-comigo.html` | Contato genérico (dúvidas) | WhatsApp (mensagem pré-preenchida) |

---

## Formulários — Padrão Step-by-Step

`comecar.html` e `agendar.html` usam o mesmo padrão:
- Formulário multi-etapa (1 pergunta por tela)
- Barra de progresso superior
- Navegação sticky bottom (Voltar / Próximo → Enviar)
- Atalhos de teclado: `Enter` avança, `Shift+Enter` volta
- `fale-comigo.html` usa formulário de página única (simples, com grid)

### Webhooks (substituir pelo endpoint real)
```js
// comecar.html
const WEBHOOK_URL = 'https://webhooks.envia.click/webhook/omentor-studio-waitlist';

// agendar.html
const WEBHOOK = 'https://webhooks.envia.click/webhook/omentor-studio-agendar';

// fale-comigo.html
const WEBHOOK = 'https://webhooks.envia.click/webhook/omentor-studio-fale-comigo';
```

### Parâmetro `?plano=` em `comecar.html`
A URL aceita `?plano=essencial` ou `?plano=completo` para pré-selecionar o plano na Etapa 4. Usado pelos CTAs do `index.html`.

---

## WhatsApp

Número configurado em `components.js`:
```js
const WA_NUMBER = '5500000000000'; // Substituir pelo número real de Luan
```
**Também substituir** nas páginas `agendar.html` e `fale-comigo.html` (cada uma tem seu próprio `const WA_NUMBER`).

---

## Copy e Estratégia

- **Home SaaS:** `strategy/copy_website.md` (v2.0)
- **Mentoria:** `strategy/copy_mentoria.md`
- **Voz:** direto, consultivo, confiante — linguagem do especialista, sem guru. Sem exclamações.
- **Objeções principais:** "mais uma IA genérica", "preciso de tecnologia", "template como todo mundo", "caro"

---

## Convenções de Acessibilidade

- Todas as imagens têm `alt` descritivo
- `aria-label` em botões sem texto visível
- `role="region"` com `aria-label` nas seções de formulário
- `aria-live="polite"` nas áreas de feedback dinâmico (progresso, sucesso)
- Links externos com `target="_blank" rel="noopener noreferrer"`
- Foco gerenciado manualmente nos formulários step-by-step (`setTimeout(() => inp.focus(), 80)`)

---

## Servidor local

```bash
# Rodar da raiz do projeto
python3 -m http.server 8000

# Acessar
http://localhost:8000/clients/omentor-studio/apps/site/
http://localhost:8000/clients/omentor-studio/apps/site/comecar.html
http://localhost:8000/clients/omentor-studio/apps/site/agendar.html
http://localhost:8000/clients/omentor-studio/apps/site/fale-comigo.html
```

---

## Pendências de Luan (não-código)

- [ ] Substituir `WA_NUMBER` pelo número real em `components.js`, `agendar.html` e `fale-comigo.html`
- [ ] Substituir webhooks pelos endpoints reais (Make / n8n / Zapier)
- [ ] Inserir screenshots do site e posts da Lígia em `assets/` e atualizar `index.html` (seção case)
- [ ] Preencher link externo do site da Lígia no `index.html`
- [ ] Substituir hrefs `#checkout-essencial` e `#checkout-completo` pelos links reais de Hotmart/Kiwify quando o SaaS for lançado

---

*Arquivo criado em: Abril 2026*
*Fase 5a — Site HTML: concluída*
