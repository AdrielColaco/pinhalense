# Pinhalense Design System

Design system for **Pinhalense Máquinas Agrícolas** — a Brazilian manufacturer of agricultural
machinery, world leader in technology for processing coffee and other grains. Founded in Espírito
Santo do Pinhal (SP), the company builds harvesters, processing equipment, shredders and parts for
coffee and many other crops (cacao, peanuts, beans, cereals, pepper, seeds, nuts).

> "3 em 4 xícaras de café no mundo passam por nossas máquinas."
> (3 in 4 cups of coffee in the world pass through our machines.)

The public-facing product is the **pinhalense.com.br marketing website** — a Portuguese-language
site presenting the company, its machines (organized by crop/culture and category), a parts
section, and a news/blog ("Notícias"). This system captures that website's visual language.

## Sources

- **Figma:** "Interface.fig" (attached, mounted read-only). Page-1 contains 8 desktop frames:
  Home, Máquinas–Café–Lista de Máquinas, Máquinas–Café–Todas as categorias, Máquinas–Culturas,
  Produto–Detalhes, Blog–Lista, Blog–Post, Blog–Eventos. Component families: Botão (button),
  Header v3/v4/v5, Footer v3/v4, Busca (search), Banner rotativo (carousel), Header–Menu Itens,
  Menu Navbar. Figma Variables collection "Ungrouped" holds 6 color tokens.
- **Live site:** pinhalense.com.br (the recreations here are based on the Figma file, the source of truth).
- Site credited "Desenvolvido por SIOUX" in the footer.

The Figma reconstruction JSX was used as design reference only (not copied verbatim). Token values,
icons and imagery were extracted from the file.

---

## CONTENT FUNDAMENTALS

**Language.** All copy is **Brazilian Portuguese**. Recreations should stay in Portuguese to feel
authentic; English is acceptable only for internal annotation.

**Voice & tone.** Confident, industrial, heritage-proud, but warm toward "as pessoas do campo"
(the people of the field). The brand leads with scale and authority ("Líder mundial em tecnologia
para processamento de café e outros grãos") then softens into approachability and service. Copy is
declarative and benefit-led, not jargon-heavy.

**Person.** Speaks about itself in the third person / first-person-plural ("A Pinhalense…",
"nossas máquinas", "Conheça nossos destaques"). Addresses the reader directly and informally with
**você** ("Ideal para você que…", "Venha fazer parte do time"). Imperative verbs open most CTAs:
*Conheça, Saiba mais, Confira, Baixar catálogo, Ver todas, Envie seu currículo*.

**Casing.**
- **Eyebrow labels** are ALL-CAPS, short, tracked: `SOMOS ESPECIALISTAS EM GRÃOS`, `NOSSAS MÁQUINAS`,
  `CONHEÇA A PINHALENSE`, `NOTÍCIAS`, `TRABALHE CONOSCO`. They always sit above a section title with a
  small wine/brick underline rule.
- **Section titles & body** use sentence case ("Conheça nossas máquinas para cada uma das culturas").
- **Nav items** are UPPERCASE ("SOBRE NÓS", "MÁQUINAS", "PEÇAS", "NOTÍCIAS", "ONDE COMPRAR", "CONTATO").
- Product names keep their exact casing (P1000 TR Evolution, P1000 TR Smart, TPL-140).

**Emphasis.** Within a heading or sentence, a key phrase is bolded inline to carry the idea
("3 em 4 xícaras… passam por **nossas máquinas**", "Nossos **trituradores agrícolas** lorem ipsum",
"**Líder mundial em tecnologia**"). This bold-inside-regular contrast is a signature device.

**Stats.** Big-number proof points appear as `value + caption` blocks: `2.140+` clientes atendidos,
`74+` anos produzindo, `25+` patentes, `99+` países. Numbers are large and bold; captions small and quiet.

**No emoji.** The brand never uses emoji. Tone is professional/industrial.

**Microcopy examples.** Breadcrumb: `HOME › MÁQUINAS › CULTURAS › CAFÉ`. Filters: `Cultura: café`,
`Categoria: colheitadeiras`. Footer columns: Navegue, Entre em contato, E-mail. Category tag on cards:
`Colheitadeiras`.

---

## VISUAL FOUNDATIONS

**Color.** Built on a **wine/burgundy primary** (`--vermelho` #701D46) paired with a **brick red**
(`--tijolo` #801F24) and a deep brick (`--tijolo-escuro` #57171A) used together in the signature hero
gradient. Neutrals do the heavy lifting: pure white pages, black for inverse surfaces (footer, image
scrims, badges), a body-text gray (#54565B), and two cool light grays (#E9EAEF, #F8F8F8) for alternating
section backgrounds. The palette is restrained — essentially one brand hue (red, in two temperatures)
over a black-and-gray foundation. Accents are used sparingly: the wine appears as buttons, the small
underline rules, and the active pagination chip.

**Type.** **Montserrat only**, across display and body (brand directive; the original file mixed
Montserrat with Gotham/Effra but the system standardizes on Montserrat). Headings sit at ~100% line
height and lean on **Bold (700)** for impact, with **Regular (400)** body at a comfortable 26px line
height. Eyebrow labels are 12px uppercase with wide tracking. The bold-phrase-inside-a-regular-heading
device (see Content) is the main typographic texture.

**The accent rule.** A recurring **60px × 2px rounded bar** in wine (or brick, or light gray when on a
dark surface) sits next to or beneath every eyebrow label. It is the system's most identifiable
graphic signature. A taller version appears as a left-border on hero page titles.

**Backgrounds.** Mostly clean white with full-width **section bands** alternating white →
light-gray (#E9EAEF) → dark brand gradient. The home hero is a full-bleed photo with a left-to-right
black scrim (`linear-gradient(270deg, transparent 50%, black)`) for text legibility. The "Sobre"
section is the wine→brick diagonal gradient with a faint (9% opacity) decorative "Intersect" shape
overlaid. No repeating patterns or textures; imagery is photographic.

**Imagery.** Warm, real photography — coffee fields, grains/seeds in burlap sacks, roasting and
brewing, agricultural workers, and product machine cutouts (the blue harvesters) on transparent
backgrounds. Tone is natural/warm, documentary, not over-styled. Product shots are isolated cutouts
floated on light gray gallery panels.

**Cards.**
- *Image cards* (machines, cultures, news heroes): photo fills the card, a bottom-up black gradient
  scrim fades in, white title + caption sit at the bottom-left. Radius **15px** (machine/culture) or
  **10px** (news). A small black **category badge** (radius 10px, 12px white text) floats top-right.
- *Content cards* (news list, blog "leia também"): image on top (radius 10px) with a floating black
  category badge, bold title below, gray excerpt, no border.
- *Surface cards*: white, radius 10px, soft outer shadow `0 0 20px rgba(0,0,0,.2)` — used to lift the
  news block off the page.

**Shadows.** Two outer-shadow recipes: the standard lift `0 0 20px rgba(0,0,0,.2)` and an
upward-casting `0 -10px 20px rgba(0,0,0,.2)` where a white section overlaps a darker one above it.
A stronger `0 0 20px rgba(0,0,0,.5)` exists for emphasis. No inner shadows.

**Corner radii.** 10px is the workhorse (buttons, badges, inputs, news cards, footer top corners).
15px for the larger machine/culture image cards. Pills only for circular icon buttons.

**Buttons.** Solid fill, radius 10px, ~45px tall, 15px/25px padding, centered label (16px). Primary =
wine fill, white text. A dark/black variant also appears. Search & menu are 45px circular icon buttons.

**Hover / press.** Subtle and quick. Hover darkens the fill (wine → deeper wine; black → #262626) and
image cards lift slightly / brighten the scrim. Press settles the color (no large scale bounce). Links
in nav reveal an underline or shift to wine. Transitions ~150–250ms on a standard ease.

**Transparency & blur.** Used for legibility scrims only — the header top gradient (black→transparent
at 80% opacity over hero photos) and the bottom-up black gradient on image cards. No glassmorphism/blur.

**Layout.** ~98px left/right page gutter on the 1366px desktop frame; a ~1170px inner content column.
Generous vertical rhythm between bands. Eyebrow + rule + title + lead + CTA is the canonical section
header pattern. Pagination is centered with a wine active chip and gray numerals.

---

## ICONOGRAPHY

Pinhalense uses a **light, line-based icon style** with the occasional solid glyph — extracted as SVGs
from the Figma file and stored in `assets/icons/` (all use `fill="currentColor"` so they inherit text
color):

- `search.svg` — magnifying glass (header "Busca").
- `chevron.svg` — thin down/expand chevron (dropdowns, accordions).
- `vector-prod-1.svg` — solid play triangle (video module).
- `vector-prod-3/4.svg`, `vector-list-3.svg` — small UI vectors (carousel arrows / nav).

**Social icons** in header/footer (Facebook, Instagram, YouTube, LinkedIn, X/Twitter) were stored in
Figma as boolean operations with no extractable geometry, so the **Lucide** icon set (CDN, matching
thin-line style) is substituted for them in UI kits. ⚠️ *Substitution — see CAVEATS.*

**Logo** ("Pinhalense" wordmark + double-spiral coffee-cherry mark) is likewise a flattened
boolean operation in the file and could not be extracted as vector art. A clean text recreation is used.
⚠️ *Please supply the official logo SVG — see CAVEATS.*

No icon font is used; no unicode characters as icons; **no emoji** anywhere.

---

## Index / manifest

- `styles.css` — global entry (import this). Pulls in everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `fig-tokens.css` (raw Figma vars).
- `components/` — reusable primitives (see below).
- `ui_kits/website/` — full-screen recreations of the Pinhalense marketing site.
- `assets/icons/` — extracted SVG icons. `assets/images/` — brand photography & product cutouts.
- `guidelines/` — foundation specimen cards (Design System tab).
- `SKILL.md` — Agent-Skill manifest for downloading/using this system in Claude Code.

### Components
Button, IconButton, Badge, SectionLabel, StatBlock, ImageCard, NewsCard, Input, SearchBar,
FilterSelect, Pagination, SiteHeader, SiteFooter, Breadcrumb.

### UI kits
- **website** — Home, Machine List (Nossas máquinas), Product Detail (Produto), Blog Post.
