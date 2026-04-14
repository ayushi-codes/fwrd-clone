# Design Brief

## Tone & Aesthetic
Editorial luxury fashion. Pure minimalism: generous negative space, refined restraint, and intentional hierarchy. Black/white/gray palette only. Anti-trend, anti-generic.

## Differentiation
Elegant gradient placeholders and refined typography create editorial magazine-spread aesthetic. Minimal shadows, no rounded corners (except intentional accents). Generous letter-spacing on display headings. Every surface intentional: no ghost backgrounds.

## Palette (Light Mode Only)

| Token | OKLCH | Use |
|-------|-------|-----|
| Background | 0.98 0 0 | Page background, maximum brightness |
| Foreground | 0.08 0 0 | Text, near-black |
| Card | 0.96 0 0 | Cards, popovers, slight lift |
| Muted | 0.82 0 0 | Secondary text, disabled states |
| Muted-Foreground | 0.35 0 0 | Tertiary text |
| Border | 0.92 0 0 | Subtle dividers, input borders |
| Primary | 0.18 0 0 | Deep charcoal; accents, active states (sparingly) |
| Accent | 0.15 0 0 | Highlights, CTAs |

## Typography

| Tier | Font | Size | Weight | Tracking | Use |
|------|------|------|--------|----------|-----|
| Display-lg | General Sans | 48px | 600 | 0.05em | Hero headlines |
| Display-md | General Sans | 36px | 600 | 0.04em | Section titles |
| Display-sm | General Sans | 28px | 600 | 0.03em | Subsections |
| Body-lg | General Sans | 18px | 400 | normal | Lead text |
| Body-md | General Sans | 16px | 400 | normal | Body copy |
| Body-sm | General Sans | 14px | 400 | normal | Secondary text |
| Mono | Geist Mono | 14px | 400 | normal | Code, technical |

## Structural Zones

| Zone | Background | Border | Shadow | Detail |
|------|-----------|--------|--------|--------|
| Announcement Bar | 0.08 0 0 (black) | none | none | All-caps white text, xs tracking |
| Header | 0.98 0 0 (white) | 0.92 0 0 (subtle) | none | Bold wordmark, thin link underlines |
| Hero | Gradient (0.25→0.5) | none | none | Full-width, white text overlay |
| Content Section | 0.98 0 0 or 0.96 0 0 | alternating | editorial | Rhythm via background alternation |
| Product Card | 0.96 0 0 | 0.92 0 0 | editorial | Image placeholder: gradient |
| Footer | 0.08 0 0 (near-black) | 0.25 0 0 | none | White text, muted link hover |

## Spacing & Rhythm
8px grid. Generous margins on hero (40px–60px sides). Cards 24px padding. Typography leading: 1.6 body, 1.3 display. Alternating background colors create visual rhythm without pattern noise.

## Component Patterns
- **Buttons**: Border or filled primary bg, white text. Hover: scale(1.05), opacity 0.9. Outline style for secondary.
- **Product Cards**: White card, gradient image area, title + price below. Hover: shadow-lifted, scale(1.02).
- **Nav Links**: Thin border-bottom on hover, smooth fade. No background color.
- **Hero Gradient**: Charcoal (#1e293b/0.25) to stone (#78716c/0.5) at 135°.

## Motion & Interaction
- **Hover scale**: 1.02 → 1.05 (interactive elements)
- **Fade**: 200–300ms ease-out
- **Transitions**: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
- **Shadow on lift**: from editorial (8px, 0.08 opacity) to lifted (12px, 0.12 opacity)
- **No bounce**: smooth, refined easing only

## Constraints
- No dark mode
- No rounded corners (radius: 0) except intentional accent usage
- Grayscale only (no color beyond black/white/gray)
- Shadows: editorial hierarchy (8px, 12px, max 24px)
- No gradients on text or buttons; reserved for image placeholders and hero background only

## Signature Detail
**Editorial gradients**: Hero and image placeholders use charcoal→stone/taupe→ivory gradients evoke fashion editorial spreads. Combined with generous letter-spacing (0.05em on display) and pure black/white palette, creates instantly recognizable luxury fashion aesthetic.
