# Design System Inspired by Meta

## 1. Visual Theme & Atmosphere

Meta Store é uma experiência de varejo orientada por produto. A linguagem mistura showroom e editorial: muito espaço em branco, fotografia forte, poucos elementos e CTA bem visível. O efeito deve ser de catálogo premium, não de interface carregada.

**Padrões-chave**
- white canvas com blocos alternando entre superfícies claras e escuras
- produto/foto como protagonista visual
- headline curta, objetiva, com peso médio
- CTAs em azul saturado e formato pill

## 2. Color Palette & Roles

### Primary
- `#0064E0` Meta Blue
- `#0143B5` hover
- `#004BB9` pressed
- `#47A5FA` lighter blue for dark surfaces

### Surface & Text
- `#FFFFFF` base canvas
- `#F1F4F7` secondary background
- `#1C1E21` dark surface
- `#1C2B33` primary text
- `#5D6C7B` secondary text
- `#65676B` utility text
- `#DEE3E9` divider / border

### Semantic Accents
- `#31A24C` success
- `#E41E3F` error
- `#A121CE` oculus purple
- `#6441D2` work purple
- `rgba(0,0,0,0.6)` overlay

## 3. Typography

- Typeface: `Optimistic VF`
- Fallbacks: `Montserrat, Helvetica, Arial, Noto Sans`
- Use `ss01` and `ss02` when supported

### Scale

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Display 1 | 64px | 500 | hero headline |
| Display 2 | 48px | 500 | section hero |
| Heading 1 | 36px | 500 | major section title |
| Heading 2 | 28px | 300 | lighter subhead |
| Heading 3 | 18px | 700 | cards and callouts |
| Body | 18px | 400 | product copy |
| Body Compact | 16px | 500 | UI labels |
| Caption | 14px | 400 | metadata |
| Button | 14px | 400 | CTA text |

## 4. Components

### Buttons
- primary pill button in `#0064E0`
- secondary outlined pill
- ghost/link button for lighter actions
- hover state should feel active but restrained

### Cards & Containers
- radius around `20px` for standard cards
- flat default with border separation
- subtle shadow only on interaction
- product cards may use full-bleed imagery

### Navigation
- white/sticky surface
- concise links
- pill CTA on the right
- mobile collapses to hamburger

### Image Treatment
- strong photography
- rounded corners
- dark overlay for text-on-image
- do not over-decorate assets

## 5. Layout Principles

- base spacing unit: `8px`
- max container near `1440px`
- grid: 3 columns desktop, 2 tablet, 1 mobile
- generous vertical breathing room
- alternation between white and soft gray sections

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | no shadow | default surfaces |
| Level 1 | `0 2px 4px 0 rgba(0,0,0,0.1)` | hover lift |
| Level 2 | `0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1)` | premium panels |
| Overlay | `rgba(0,0,0,0.6)` | modal backdrop |

## 7. Responsive Behavior

- mobile: single column, compact hero, full-width cards
- tablet: two columns, reduced density
- desktop: full product grid and large hero typography
- large desktop: centered, generous margins

## 8. When to Use

Use Meta when the page needs:

- product showcase energy
- hardware / retail / gallery mood
- cinematic photography and bold CTA

## 9. Do / Don't

### Do
- keep the page airy
- use strong contrast between light and dark surfaces
- keep the CTA unmistakable

### Don't
- fill the layout with decorative noise
- use busy borders or heavy shadows
- weaken the product-first feeling
