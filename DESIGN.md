# Design Brief

## Overview
Premium educational counseling platform for NEET UG aspirants. Conveys trust, transformation, and success through refined typography, strategic color accents, and elevated card-based compositions. Light-mode primary experience with careful attention to professional credibility and emotional resonance.

## Tone & Differentiation
Premium, professional, trustworthy. Uses modern serif display font (Fraunces) for aspirational feel, paired with clean sans-serif body (GeneralSans) for clarity. Gold/amber accents highlight success moments and achievements. Subtle animations on testimonials create engagement without distraction.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary | 0.38 0.15 264 | Deep indigo for headers, CTAs, navigation |
| Secondary | 0.52 0.18 264 | Medium blue for secondary actions |
| Accent | 0.68 0.24 52 | Gold/amber for highlights, success states |
| Background | 0.98 0.01 0 | Off-white for primary surface |
| Card | 1.0 0 0 | Pure white for elevated content cards |
| Muted | 0.88 0.02 264 | Light gray-blue for subtle backgrounds |
| Foreground | 0.18 0.04 264 | Dark blue for body text |
| Border | 0.92 0.02 264 | Subtle blue-gray for dividers |
| Destructive | 0.55 0.22 25 | Red-orange for alerts |

## Typography
- **Display**: Fraunces (serif) — hero titles, section headers, testimonial quotes
- **Body**: GeneralSans (sans-serif) — copy, labels, body text
- **Mono**: JetBrainsMono — code, technical snippets (if needed)
- **Scale**: 32px (h1) → 20px (h2) → 16px (h3) → 14px body → 12px caption

## Structural Zones

| Zone | Background | Border | Treatment |
|------|-----------|--------|-----------|
| Header | `bg-card` | `border-b border-border` | Elevated with shadow-subtle |
| Hero | `bg-background` | None | Gradient overlay accent on text |
| Content Sections | Alternating `bg-background` / `bg-muted/20` | None | 48px vertical spacing |
| Cards (Services, Testimonials) | `bg-card` | `border border-accent/20` | shadow-elevated, rounded-lg |
| Footer | `bg-primary text-primary-foreground` | `border-t border-primary/30` | Full-width, brand anchor |

## Component Patterns
- **Buttons**: Primary (deep indigo bg), secondary (transparent border), accent (gold gradient)
- **Cards**: Rounded corners (12px), subtle shadows, gold accent borders on hover
- **Testimonial Cards**: Quote icon in accent color, name in display font, company/role in muted
- **Section Dividers**: Accent line at 12px height, 3px thickness in gold
- **CTAs**: "Contact @prep2seat" features gold accent, Instagram icon, link to profile

## Motion & Animation
- **Entrance**: Fade-in (500ms) + slide-up (500ms) for sections on scroll
- **Interaction**: Hover states on cards trigger subtle shadow elevation (transition-smooth)
- **Testimonials**: Testimonial cards scale slightly and elevate shadow on hover
- **CTAs**: Gold gradient animation on hover (gradient-accent class)

## Spacing & Rhythm
- **Container padding**: 2rem (32px) horizontal
- **Section gaps**: 48px vertical between sections
- **Card gaps**: 24px between cards in grid
- **Internal padding**: 32px (cards), 16px (UI elements)
- **Border radius**: 12px (lg), 10px (md), 8px (sm)

## Signature Detail
Gold/amber accent color used sparingly: CTA buttons, testimonial quote marks, section dividers, hover states on service cards. Creates visual focal points that guide the eye and reinforce the "achievement" narrative. Accent appears in ~5-10% of UI surface area, maximizing impact through restraint.

## Dark Mode
Deep navy background (0.12 0.02 264), lifted card elevation with increased contrast. Gold accent becomes 0.72 0.24 52 for brightness. All text weights increased slightly for readability. Neutral text color shifted to warm off-white (0.95 0.02 52) for reduced eye strain.

## Constraints
- No arbitrary colors outside palette
- No shadows outside shadow-subtle/shadow-elevated
- No animations longer than 500ms
- No more than 2 font families in view at once
- Accent color reserved for highlights and interactive states only
