# Construction Guide

## How this page is being built

This landing page is being built as a single, static HTML document with embedded CSS and a minimal inline script for behavior.

The structure is organized by blocks:

1. Hero
2. Social proof
3. Problem framing
4. Steps and benefits
5. Value stack
6. Price and CTA
7. FAQ and footer

## Reusable component strategy

- Shared visual pieces should be built once and reused.
- The product lockup is a reusable component with hero and price variants.
- The lockup should keep the same proportions and typography treatment across usages.
- Internal iconography should stay inside the component, not as a separate asset layered elsewhere.

## Visual rules

- Use the design system font stack only.
- Keep the lockup transparent.
- Keep uppercase styling for the brand mark.
- Prefer compact vertical rhythm over large padding.
- Use semantic icon shapes that relate to the product and page intent.

## Editing rules

- Change scale through component width tokens first.
- Change internal spacing before changing the outer page grid.
- Keep the hero and price versions synchronized.
- Prefer inline SVG when the icon needs to be custom or brand-specific.

