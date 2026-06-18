/* @ds-bundle: {"format":3,"namespace":"PinhalenseDesignSystem_74ee66","components":[{"name":"Breadcrumb","sourcePath":"components/content/Breadcrumb.jsx"},{"name":"ImageCard","sourcePath":"components/content/ImageCard.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"Pagination","sourcePath":"components/content/Pagination.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"FilterSelect","sourcePath":"components/forms/FilterSelect.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Logo","sourcePath":"components/navigation/Logo.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/Breadcrumb.jsx":"4063c2149715","components/content/ImageCard.jsx":"d5b10b04773b","components/content/NewsCard.jsx":"4eb5cb3bbc79","components/content/Pagination.jsx":"d6affdbd08d6","components/core/Badge.jsx":"54bdc8b3e4bd","components/core/Button.jsx":"7680addcd007","components/core/IconButton.jsx":"617ef8e18a64","components/core/SectionLabel.jsx":"6e09c61bde68","components/core/StatBlock.jsx":"b2aee6d8e849","components/forms/FilterSelect.jsx":"f7c4ca980517","components/forms/Input.jsx":"f684b3939f97","components/forms/SearchBar.jsx":"2c835eeac8c6","components/navigation/Logo.jsx":"4b675dbf4197","components/navigation/SiteFooter.jsx":"9f5280b0746e","components/navigation/SiteHeader.jsx":"3397b4f691d5","ui_kits/website/HomeScreen.jsx":"eb9ae3d15a72","ui_kits/website/InnerScreens.jsx":"6fac84784c01"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PinhalenseDesignSystem_74ee66 = window.PinhalenseDesignSystem_74ee66 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Breadcrumb.jsx
try { (() => {
/**
 * Breadcrumb — uppercase trail with › separators, used under hero titles.
 * `HOME › MÁQUINAS › CULTURAS › CAFÉ`
 */
function Breadcrumb({
  items = [],
  tone = 'inverse',
  style = {}
}) {
  const color = tone === 'inverse' ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    const label = typeof item === 'string' ? item : item.label;
    const href = typeof item === 'string' ? undefined : item.href;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, href && !last ? /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        color: 'inherit',
        textDecoration: 'none',
        opacity: 0.85
      }
    }, label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? tone === 'inverse' ? 'var(--branco)' : 'var(--text-strong)' : 'inherit',
        fontWeight: last ? 'var(--weight-semibold)' : 'var(--weight-regular)'
      }
    }, label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        opacity: 0.6
      }
    }, "\u203A"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/content/Pagination.jsx
try { (() => {
/**
 * Centered pagination — wine active chip, gray numerals, chevron arrows.
 */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  maxVisible = 4,
  style = {}
}) {
  const go = p => {
    if (p >= 1 && p <= total) onChange?.(p);
  };

  // Build a compact list: 1..maxVisible, ellipsis, total
  const pages = [];
  for (let i = 1; i <= Math.min(maxVisible, total); i++) pages.push(i);
  if (total > maxVisible + 1) {
    pages.push('…');
    pages.push(total);
  } else if (total === maxVisible + 1) pages.push(total);
  const Arrow = ({
    dir
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "14",
    viewBox: "0 0 9 14",
    fill: "none",
    "aria-hidden": "true",
    style: {
      transform: dir === 'next' ? 'none' : 'rotate(180deg)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const cell = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 38,
    height: 38,
    padding: '0 6px',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-body)',
    color: 'var(--text-body)'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...cell,
      color: 'var(--cinza-texto)'
    },
    onClick: () => go(page - 1),
    "aria-label": "Anterior"
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "prev"
  })), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      ...cell,
      cursor: 'default',
      color: 'var(--cinza-texto)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    style: {
      ...cell,
      background: p === page ? 'var(--vermelho)' : 'transparent',
      color: p === page ? 'var(--branco)' : 'var(--text-body)',
      fontWeight: p === page ? 'var(--weight-semibold)' : 'var(--weight-regular)'
    }
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: {
      ...cell,
      color: 'var(--cinza-texto)'
    },
    onClick: () => go(page + 1),
    "aria-label": "Pr\xF3ximo"
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "next"
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category badge / tag — small black pill with white label.
 * Used on machine, culture and news cards ("Colheitadeiras", "Lançamento").
 */
function Badge({
  children,
  tone = 'dark',
  style = {},
  ...rest
}) {
  const palette = {
    dark: {
      bg: 'var(--preto)',
      fg: 'var(--branco)'
    },
    brand: {
      bg: 'var(--vermelho)',
      fg: 'var(--branco)'
    },
    light: {
      bg: 'var(--cinza-3)',
      fg: 'var(--preto)'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '9px 14px',
      borderRadius: 'var(--radius-md)',
      background: palette.bg,
      color: palette.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Image card — the signature Pinhalense machine / culture card.
 * Full-bleed photo, bottom-up black scrim, white title + caption bottom-left,
 * optional category badge top-right. 15px radius by default.
 */
function ImageCard({
  image,
  title,
  caption,
  badge,
  height = 370,
  radius = 'var(--radius-lg)',
  href,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      textDecoration: 'none',
      cursor: href ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${image}) center / cover no-repeat`,
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.92) 100%)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      right: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-8)',
      right: 'var(--space-8)',
      bottom: 'var(--space-6)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--branco)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-card-title)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1.1
    }
  }, title), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.3,
      color: 'rgba(255,255,255,0.92)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { ImageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageCard.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * News / blog card — image on top with floating category badge,
 * bold title and gray excerpt below. No border.
 */
function NewsCard({
  image,
  badge,
  title,
  excerpt,
  href,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      cursor: href ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 250,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${image}) center / cover no-repeat`,
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      right: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-5) 0 var(--space-3)',
      fontSize: 'var(--fs-lead)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1.25,
      color: hover ? 'var(--vermelho)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-small)',
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, excerpt));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pinhalense primary action button.
 * Solid fill, 10px radius, ~45px tall, centered label.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const palette = {
    primary: {
      bg: 'var(--action-primary)',
      bgHover: 'var(--action-primary-hover)',
      fg: 'var(--branco)'
    },
    dark: {
      bg: 'var(--action-dark)',
      bgHover: 'var(--action-dark-hover)',
      fg: 'var(--branco)'
    },
    light: {
      bg: 'var(--branco)',
      bgHover: 'var(--cinza-3)',
      fg: 'var(--preto)'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'rgba(112,29,70,0.08)',
      fg: 'var(--vermelho)'
    }
  }[variant] || {};
  const sizes = {
    sm: {
      height: 38,
      padding: '0 18px',
      font: '14px'
    },
    md: {
      height: 45,
      padding: '0 25px',
      font: 'var(--fs-body)'
    },
    lg: {
      height: 54,
      padding: '0 32px',
      font: 'var(--fs-lead)'
    }
  }[size] || {};
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      width: fullWidth ? '100%' : 'auto',
      height: sizes.height,
      padding: sizes.padding,
      border: variant === 'outline' ? '1px solid var(--vermelho)' : 'none',
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--cinza-borda)' : hover ? palette.bgHover : palette.bg,
      color: disabled ? 'var(--cinza-texto)' : palette.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: sizes.font,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      textDecoration: 'none',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular 45px icon button — header search / menu, carousel arrows.
 * Pass an SVG/icon node as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 45,
  label,
  style = {},
  ...rest
}) {
  const palette = {
    ghost: {
      bg: 'transparent',
      fg: 'var(--branco)',
      bgHover: 'rgba(255,255,255,0.15)'
    },
    solid: {
      bg: 'var(--action-primary)',
      fg: 'var(--branco)',
      bgHover: 'var(--action-primary-hover)'
    },
    light: {
      bg: 'var(--branco)',
      fg: 'var(--preto)',
      bgHover: 'var(--cinza-3)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--preto)',
      bgHover: 'var(--cinza-2)'
    }
  }[variant] || {};
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      padding: 0,
      border: variant === 'outline' ? '1px solid var(--border-hairline)' : 'none',
      borderRadius: 'var(--radius-pill)',
      background: hover ? palette.bgHover : palette.bg,
      color: palette.fg,
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow label + the signature 60px accent rule.
 * The most identifiable graphic device in the Pinhalense system —
 * sits above every section title.
 */
function SectionLabel({
  children,
  tone = 'brand',
  rulePosition = 'after',
  style = {},
  ...rest
}) {
  const color = {
    brand: 'var(--vermelho)',
    brick: 'var(--tijolo)',
    light: 'var(--cinza-3)',
    white: 'var(--branco)'
  }[tone] || 'var(--vermelho)';

  // On dark surfaces the text is light but the rule keeps the brand color
  const textColor = tone === 'light' || tone === 'white' ? 'var(--branco)' : color;
  const ruleColor = tone === 'light' ? 'var(--cinza-3)' : tone === 'white' ? 'var(--branco)' : color;
  const rule = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: 'var(--rule-width)',
      height: 'var(--rule-height)',
      borderRadius: 'var(--radius-pill)',
      background: ruleColor,
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: textColor,
      ...style
    }
  }, rest), rulePosition === 'before' && rule, /*#__PURE__*/React.createElement("span", null, children), rulePosition === 'after' && rule);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number proof point — value + caption.
 * Used in the "Sobre" band (2.140+ clientes, 74+ anos, 25+ patentes).
 */
function StatBlock({
  value,
  caption,
  tone = 'inverse',
  style = {},
  ...rest
}) {
  const colors = {
    inverse: {
      value: 'var(--branco)',
      caption: 'rgba(255,255,255,0.85)'
    },
    default: {
      value: 'var(--preto)',
      caption: 'var(--text-body)'
    },
    brand: {
      value: 'var(--vermelho)',
      caption: 'var(--text-body)'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1,
      color: colors.value,
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      maxWidth: 180,
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.35,
      color: colors.caption
    }
  }, caption));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterSelect.jsx
try { (() => {
const Chevron = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "8",
  viewBox: "0 0 15 8",
  fill: "none",
  "aria-hidden": "true",
  style: {
    transition: 'transform var(--dur-fast) var(--ease-standard)',
    transform: open ? 'rotate(180deg)' : 'none'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 1l6.5 6L14 1",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none"
}));

/**
 * Filter dropdown chip — "Cultura: café ▾".
 * Label is muted, the selected value is bold. Light pill, 10px radius.
 */
function FilterSelect({
  label,
  value,
  options = [],
  onChange,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      height: 45,
      padding: '0 18px',
      minWidth: 200,
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-faint)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", null, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, label, ": "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, value)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cinza-texto)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Chevron, {
    open: open
  }))), open && /*#__PURE__*/React.createElement("ul", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      right: 0,
      zIndex: 20,
      margin: 0,
      padding: 'var(--space-2)',
      listStyle: 'none',
      background: 'var(--branco)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)'
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("li", {
    key: opt
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onChange?.(opt);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '10px 12px',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      background: opt === value ? 'var(--cinza-3)' : 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: opt === value ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, opt)))));
}
Object.assign(__ds_scope, { FilterSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — 10px radius, light surface, Montserrat.
 */
function Input({
  label,
  hint,
  invalid = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      height: 45,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${invalid ? 'var(--tijolo)' : focus ? 'var(--vermelho)' : 'var(--border-hairline)'}`,
      outline: 'none',
      background: 'var(--surface-faint)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      boxShadow: focus ? '0 0 0 3px rgba(112,29,70,0.12)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: invalid ? 'var(--tijolo)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SearchGlyph = ({
  color = 'currentColor',
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M 23.63 22.078 L 17.348 15.797 C 18.708 14.133 19.458 12.038 19.458 9.75 C 19.458 4.364 15.092 0 9.708 0 C 4.323 0 0 4.365 0 9.75 C 0 15.135 4.365 19.5 9.708 19.5 C 11.995 19.5 14.093 18.707 15.755 17.389 L 22.036 23.67 C 22.298 23.892 22.589 24 22.875 24 C 23.161 24 23.451 23.89 23.67 23.67 C 24.108 23.231 24.108 22.519 23.63 22.078 Z M 2.25 9.75 C 2.25 5.615 5.615 2.25 9.75 2.25 C 13.885 2.25 17.25 5.615 17.25 9.75 C 17.25 13.885 13.885 17.25 9.75 17.25 C 5.615 17.25 2.25 13.884 2.25 9.75 Z",
  fill: color
}));

/**
 * Search field — pill / rounded input with the brand magnifying-glass icon.
 * Set `iconOnly` for the 45px circular header trigger.
 */
function SearchBar({
  placeholder = 'Buscar',
  iconOnly = false,
  tone = 'light',
  style = {},
  ...rest
}) {
  const isDark = tone === 'dark';
  if (iconOnly) {
    return /*#__PURE__*/React.createElement("button", _extends({
      "aria-label": "Buscar",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        background: 'transparent',
        color: isDark ? 'var(--branco)' : 'var(--preto)',
        cursor: 'pointer',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(SearchGlyph, {
      size: 22
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      height: 45,
      padding: '0 18px',
      borderRadius: 'var(--radius-md)',
      background: isDark ? 'rgba(255,255,255,0.12)' : 'var(--surface-faint)',
      border: isDark ? 'none' : '1px solid var(--border-hairline)',
      color: isDark ? 'var(--branco)' : 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(SearchGlyph, {
    size: 18,
    color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--cinza-texto)'
  }), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'inherit'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pinhalense logo — spiral coffee-cherry mark + "Pinhalense" wordmark.
 * NOTE: the original logo art is a flattened boolean op in the source file
 * and could not be extracted; this is a faithful text recreation. Replace
 * the mark with the official SVG when available.
 */
function Logo({
  color = 'var(--branco)',
  height = 34,
  showWordmark = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color,
      fontFamily: 'var(--font-sans)',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: height,
    height: height,
    viewBox: "0 0 40 40",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 3.5C10.9 3.5 3.5 10.9 3.5 20S10.9 36.5 20 36.5c7.2 0 13.3-4.6 15.6-11",
    stroke: color,
    strokeWidth: "3.2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 11c5 0 9 4 9 9s-4 9-9 9c-3.6 0-6.7-2.1-8.1-5.2",
    stroke: color,
    strokeWidth: "3.2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "3.4",
    fill: color
  })), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: height * 0.66,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-0.01em'
    }
  }, "Pinhalense"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const Social = ({
  name,
  color
}) => {
  const paths = {
    facebook: /*#__PURE__*/React.createElement("path", {
      d: "M15 8h-2a1 1 0 00-1 1v2h3l-.4 3H12v7H9v-7H7v-3h2V8.5A3.5 3.5 0 0112.5 5H15z",
      fill: color
    }),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "5",
      stroke: color,
      strokeWidth: "1.8",
      fill: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.5",
      stroke: color,
      strokeWidth: "1.8",
      fill: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16.5",
      cy: "7.5",
      r: "1",
      fill: color
    })),
    youtube: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "6",
      width: "18",
      height: "12",
      rx: "3.5",
      stroke: color,
      strokeWidth: "1.8",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 9.5l4 2.5-4 2.5z",
      fill: color
    })),
    linkedin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2.5",
      stroke: color,
      strokeWidth: "1.8",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10v6M8 7.5v.01M11.5 16v-3.2a1.8 1.8 0 013.6 0V16",
      stroke: color,
      strokeWidth: "1.8",
      strokeLinecap: "round",
      fill: "none"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-label": name
  }, paths[name]);
};
const COLS = [{
  heading: 'Navegue',
  links: ['Sobre nós', 'Máquinas', 'Culturas', 'Peças']
}, {
  heading: '\u00A0',
  links: ['Pós vendas', 'Onde comprar', 'Política de privacidade', 'Trabalhe conosco', 'Fornecedores - Qualidade']
}];

/**
 * Site footer — black band, rounded top corners, logo + address,
 * contact, link columns, social row, "Desenvolvido por".
 */
function SiteFooter({
  address = 'Rua Honório Soares, 80, Espírito Santo do Pinhal – São Paulo - Brasil - CEP: 13990-045',
  phone = '(19) 3651 - 9200',
  email = 'contato@pinhalense.com.br',
  credit = 'SIOUX',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--preto)',
      color: 'var(--branco)',
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
      padding: '56px var(--page-gutter) 28px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    color: "var(--branco)",
    height: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.6,
      color: 'var(--cinza-texto)'
    }
  }, address), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, ['facebook', 'instagram', 'youtube', 'linkedin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    "aria-label": n,
    style: {
      display: 'inline-flex',
      opacity: 0.85
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.85
  }, /*#__PURE__*/React.createElement(Social, {
    name: n,
    color: "var(--branco)"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "Entre em contato"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-caption)',
      color: 'var(--cinza-texto)'
    }
  }, phone), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '24px 0 8px',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "E-mail"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-caption)',
      color: 'var(--cinza-texto)'
    }
  }, email)), COLS.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--weight-bold)',
      minHeight: 18
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--cinza-texto)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--branco)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--cinza-texto)'
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      fontSize: 'var(--fs-eyebrow)',
      color: 'var(--cinza-texto)',
      opacity: 0.7
    }
  }, "Desenvolvido por ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--branco)',
      opacity: 0.8
    }
  }, credit)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const NAV = ['Sobre Nós', 'Máquinas', 'Peças', 'Notícias', 'Onde Comprar', 'Contato'];
const Burger = ({
  color
}) => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "14",
  viewBox: "0 0 22 14",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("line", {
  x1: "0",
  y1: "1",
  x2: "22",
  y2: "1",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("line", {
  x1: "0",
  y1: "7",
  x2: "22",
  y2: "7",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("line", {
  x1: "0",
  y1: "13",
  x2: "22",
  y2: "13",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round"
}));

/**
 * Site header — logo + uppercase nav + search + menu, over a top-down
 * black gradient so it reads on hero photos. `solid` for opaque white pages.
 */
function SiteHeader({
  items = NAV,
  active,
  variant = 'overlay',
  onNavigate,
  style = {}
}) {
  const onPhoto = variant === 'overlay';
  const fg = onPhoto ? 'var(--branco)' : 'var(--preto)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      zIndex: 10,
      width: '100%',
      height: 120,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--page-gutter)',
      background: onPhoto ? 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)' : 'var(--branco)',
      borderBottom: onPhoto ? 'none' : '1px solid var(--cinza-3)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate?.('home');
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    color: fg,
    height: 34
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, items.map(label => {
    const isActive = active === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.(label);
      },
      style: {
        position: 'relative',
        fontSize: 'var(--fs-small)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: fg,
        textDecoration: 'none',
        opacity: isActive ? 1 : 0.92,
        paddingBottom: 4,
        borderBottom: isActive ? '2px solid var(--vermelho)' : '2px solid transparent',
        transition: 'opacity var(--dur-fast) var(--ease-standard)'
      },
      onMouseEnter: e => e.currentTarget.style.opacity = 1,
      onMouseLeave: e => e.currentTarget.style.opacity = isActive ? 1 : 0.92
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchBar, {
    iconOnly: true,
    tone: onPhoto ? 'dark' : 'light'
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 45,
      height: 45,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: 'transparent',
      color: fg,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Burger, {
    color: fg
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Pinhalense website UI kit — Home screen.
   Reads primitives from the compiled bundle (window.PinhalenseDesignSystem_74ee66)
   and exposes HomeScreen on window for app.jsx. */
(function () {
  const DS = window.PinhalenseDesignSystem_74ee66;
  const {
    SiteHeader,
    SiteFooter,
    SectionLabel,
    Button,
    StatBlock,
    ImageCard,
    NewsCard,
    Badge
  } = DS;
  const IMG = '../../assets/images';
  function HomeScreen({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--branco)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Hero",
      style: {
        position: 'relative',
        minHeight: 640,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: `url(${IMG}/machine-card.png) center/cover`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(270deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(SiteHeader, {
      active: "M\xE1quinas",
      variant: "overlay",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '90px var(--page-gutter) 110px',
        maxWidth: 760,
        color: 'var(--branco)'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "white"
    }, "Somos especialistas em gr\xE3os"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '24px 0 0',
        fontSize: 'var(--fs-display)',
        fontWeight: 700,
        lineHeight: 1.05
      }
    }, "3 em 4 x\xEDcaras de caf\xE9 no mundo passam por ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--branco)'
      }
    }, "nossas m\xE1quinas.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNavigate?.('Máquinas')
    }, "Conhe\xE7a nossas m\xE1quinas"))))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Sobre",
      style: {
        position: 'relative',
        background: 'var(--gradient-hero)',
        color: 'var(--branco)',
        overflow: 'hidden',
        padding: '64px var(--page-gutter) 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 64,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "white",
      rulePosition: "before"
    }, "Conhe\xE7a a Pinhalense"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '20px 0 28px',
        fontSize: 'var(--fs-h2)',
        fontWeight: 700,
        lineHeight: 1.1,
        maxWidth: 360
      }
    }, "L\xEDder mundial em tecnologia para processamento de caf\xE9 e outros gr\xE3os."), /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      onClick: () => onNavigate?.('Sobre Nós')
    }, "Saiba mais")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body)',
        lineHeight: 1.625,
        color: 'rgba(255,255,255,0.92)'
      }
    }, "A Pinhalense M\xE1quinas Agr\xEDcolas completa 70 anos comprometida com o relacionamento direto e o aux\xEDlio aos desafios contempor\xE2neos das pessoas do campo, para lhes trazer melhores resultados."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0',
        fontSize: 'var(--fs-body)',
        lineHeight: 1.625,
        color: 'rgba(255,255,255,0.92)'
      }
    }, "Investe permanentemente em pesquisa de novas tecnologias, qualidade e inova\xE7\xE3o em suas tr\xEAs unidades fabris, que somam mais de 60 mil m\xB2 de planta industrial em Esp\xEDrito Santo do Pinhal (SP)."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 72,
        marginTop: 56,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: "99+",
      caption: "pa\xEDses usam nossas m\xE1quinas"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "2.140+",
      caption: "clientes atendidos ao redor do globo"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "74+",
      caption: "anos produzindo a melhor tecnologia em gr\xE3os"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "25+",
      caption: "patentes em diversas etapas do processamento"
    }))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / M\xE1quinas",
      style: {
        background: 'var(--cinza-3)',
        padding: '72px 0',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--page-gutter)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "brick"
    }, "Nossas m\xE1quinas"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        fontSize: 'var(--fs-h2)',
        fontWeight: 400,
        maxWidth: 380,
        lineHeight: 1.12
      }
    }, "Conhe\xE7a nossos principais ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "destaques em m\xE1quinas"))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate?.('Máquinas')
    }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        padding: '0 var(--page-gutter)',
        overflowX: 'auto'
      }
    }, [{
      t: 'P1000 TR Evolution',
      b: 'Colheitadeiras'
    }, {
      t: 'P1000 TR Smart',
      b: 'Colheitadeiras'
    }, {
      t: 'P1000 Evolution',
      b: 'Colheitadeiras'
    }].map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: '0 0 360px'
      }
    }, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/machine-card.png`,
      height: 360,
      title: m.t,
      caption: "Ideal para voc\xEA que lorem ipsum dolor sit amet.",
      badge: m.b,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.('produto');
      }
    }))))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Culturas",
      style: {
        background: 'var(--branco)',
        padding: '80px var(--page-gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "brand"
    }, "Nossas culturas"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        fontSize: 'var(--fs-h2)',
        fontWeight: 400,
        maxWidth: 520,
        lineHeight: 1.12
      }
    }, "Conhe\xE7a nossas m\xE1quinas para cada uma das culturas")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate?.('Máquinas')
    }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: 'span 1'
      }
    }, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/coffee-field.jpg`,
      height: 250,
      title: "Caf\xE9",
      caption: "Ideal para voc\xEA que lorem ipsum dolor sit amet.",
      href: "#"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/grains-seeds.jpg`,
      height: 250,
      title: "Cacau",
      caption: "Ideal para voc\xEA que lorem ipsum dolor sit amet.",
      href: "#"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/grains-seeds.jpg`,
      height: 250,
      title: "Amendoim",
      caption: "Ideal para voc\xEA que lorem ipsum dolor sit amet.",
      href: "#"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/agriculture.jpg`,
      height: 250,
      title: "Pimenta",
      caption: "Ideal para voc\xEA que lorem ipsum.",
      href: "#"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/coffee-field.jpg`,
      height: 250,
      title: "Castanhas",
      caption: "Ideal para voc\xEA que lorem ipsum.",
      href: "#"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/grains-seeds.jpg`,
      height: 250,
      title: "Sementes",
      caption: "Ideal para voc\xEA que lorem ipsum.",
      href: "#"
    })))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Not\xEDcias",
      style: {
        background: 'var(--cinza-2)',
        padding: '70px var(--page-gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--branco)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        padding: '56px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "brick"
    }, "Not\xEDcias"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        fontSize: 'var(--fs-h2)',
        fontWeight: 400,
        lineHeight: 1.12
      }
    }, "Fique por dentro das \xFAltimas novidades")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate?.('Notícias')
    }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 30
      }
    }, /*#__PURE__*/React.createElement(NewsCard, {
      image: `${IMG}/news-1.png`,
      badge: "Lan\xE7amento",
      title: "Pinhalense apresenta lan\xE7amento durante a FEMAGRI",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non faucibus sapien.",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.('blog');
      }
    }), /*#__PURE__*/React.createElement(NewsCard, {
      image: `${IMG}/news-2.png`,
      badge: "Novidade",
      title: "A Pinhalense lan\xE7a sua nova Colheitadeira de Caf\xE9 \u2013 P1000 TR SMART",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non faucibus sapien.",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.('blog');
      }
    }), /*#__PURE__*/React.createElement(NewsCard, {
      image: `${IMG}/coffee-field.jpg`,
      badge: "Projetos",
      title: "Como reduzir os defeitos no caf\xE9 para obter mais qualidade?",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non faucibus sapien.",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.('blog');
      }
    })))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Trabalhe",
      style: {
        background: 'var(--cinza-3)',
        padding: '64px var(--page-gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 18
      }
    }, [['Segurança e bem-estar', 'work-culture.png'], ['Tecnologia e inovação', 'machine-card.png'], ['Valorização da equipe', 'work-culture.png']].map(([t, im], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/${im}`,
      height: 260,
      title: t,
      radius: "var(--radius-md)"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "brand"
    }, "Trabalhe conosco"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '20px 0 28px',
        fontSize: 'var(--fs-h2)',
        fontWeight: 400,
        lineHeight: 1.15
      }
    }, "Venha fazer parte do ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "time da Pinhalense"), " e lorem ipsum sit amet curabitur faucibus."), /*#__PURE__*/React.createElement(Button, {
      variant: "dark"
    }, "Envie seu curr\xEDculo")))), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InnerScreens.jsx
try { (() => {
/* Pinhalense website UI kit — inner screens: MachineList, Product, BlogPost. */
(function () {
  const DS = window.PinhalenseDesignSystem_74ee66;
  const {
    SiteHeader,
    SiteFooter,
    SectionLabel,
    Button,
    ImageCard,
    NewsCard,
    Badge,
    Breadcrumb,
    FilterSelect,
    Pagination
  } = DS;
  const IMG = '../../assets/images';

  /* Inner-page hero: photo + dark scrim + breadcrumb + title */
  function PageHero({
    crumbs,
    title,
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        minHeight: 360,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: `url(${IMG}/agriculture.jpg) center/cover`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(255,255,255,0.85) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(SiteHeader, {
      active: active,
      variant: "overlay",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '56px var(--page-gutter) 64px'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: crumbs
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '20px 0 0',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        fontSize: 'var(--fs-h1)',
        fontWeight: 700,
        color: 'var(--branco)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 44,
        background: 'var(--vermelho)',
        borderRadius: 4,
        display: 'inline-block'
      }
    }), title))));
  }

  /* ============ MACHINE LIST ============ */
  function MachineListScreen({
    onNavigate
  }) {
    const [cultura, setCultura] = React.useState('café');
    const [cat, setCat] = React.useState('colheitadeiras');
    const [page, setPage] = React.useState(1);
    const cards = ['P1000 Evolution', 'P1000 TR Evolution', 'P1000 TR Smart', 'P1000 TR Smart', 'P1000 Evolution', 'P1000 TR Evolution'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--branco)'
      }
    }, /*#__PURE__*/React.createElement(PageHero, {
      active: "M\xE1quinas",
      onNavigate: onNavigate,
      crumbs: [{
        label: 'Home',
        href: '#'
      }, 'Máquinas', 'Culturas', 'Café'],
      title: "Nossas m\xE1quinas"
    }), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "M\xE1quinas / Lista",
      style: {
        padding: '56px var(--page-gutter) 80px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-h2)',
        fontWeight: 400,
        maxWidth: 560,
        lineHeight: 1.15,
        color: 'var(--text-strong)'
      }
    }, "Conhe\xE7a nossas ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "colheitadeiras"), " para processamento de ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "caf\xE9"), "."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        maxWidth: 720,
        fontSize: 'var(--fs-body)',
        lineHeight: 1.625,
        color: 'var(--text-body)'
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mi non lorem dapibus ultrices. ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "L\xEDder mundial em tecnologia"), " etiam congue ornare pellentesque."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 16,
        margin: '32px 0 36px'
      }
    }, /*#__PURE__*/React.createElement(FilterSelect, {
      label: "Cultura",
      value: cultura,
      options: ['café', 'cacau', 'amendoim', 'pimenta'],
      onChange: setCultura
    }), /*#__PURE__*/React.createElement(FilterSelect, {
      label: "Categoria",
      value: cat,
      options: ['colheitadeiras', 'secadores', 'classificadores'],
      onChange: setCat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 28
      }
    }, cards.map((t, i) => /*#__PURE__*/React.createElement(ImageCard, {
      key: i,
      image: `${IMG}/machine-card.png`,
      height: 300,
      title: t,
      caption: "Ideal para voc\xEA que lorem ipsum dolor sit amet, consectetur adipiscing elital.",
      badge: "Colheitadeiras",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.('produto');
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement(Pagination, {
      page: page,
      total: 9,
      onChange: setPage
    }))), /*#__PURE__*/React.createElement(SiteFooter, null));
  }

  /* ============ PRODUCT DETAIL ============ */
  function ProductScreen({
    onNavigate
  }) {
    const [tab, setTab] = React.useState('LSC-10P');
    const specs = [['Largura do trabalho (m)', '1.40'], ['Tipo de transmissão', '540'], ['Nº de martelos', '14'], ['Potência tomada – Força do trator (HP)', '30/75'], ['Peso líquido (kg)', '520'], ['Outra informação', 'Lorem ipsum dolor sit amet.']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--branco)'
      }
    }, /*#__PURE__*/React.createElement(PageHero, {
      active: "M\xE1quinas",
      onNavigate: onNavigate,
      crumbs: [{
        label: 'Home',
        href: '#'
      }, 'Máquinas', 'Trinchas'],
      title: "Triturador Pinhalens Leve TPL-140"
    }), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Produto / Intro",
      style: {
        padding: '56px var(--page-gutter) 0'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        display: 'flex',
        gap: 18,
        fontSize: 'var(--fs-h2)',
        fontWeight: 400,
        lineHeight: 1.2,
        maxWidth: 620,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        background: 'var(--vermelho)',
        borderRadius: 4,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, "Nossos ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "trituradores agr\xEDcolas"), " lorem ipsum sit amet curabitur lorem ipsum.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '24px 0 0 22px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body)',
        lineHeight: 1.625,
        color: 'var(--text-body)'
      }
    }, "Descubra a efici\xEAncia e a sustentabilidade dos Trituradores Pinhalense, essenciais para otimizar a gest\xE3o de res\xEDduos no campo. Nossos ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "equipamentos de alta qualidade"), " s\xE3o projetados para triturar restos de culturas e vegeta\xE7\xE3o, enriquecendo o solo com ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "tecnologia avan\xE7ada"), ", praticidade e resultados superiores."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Baixar cat\xE1logo")))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Produto / Diferenciais",
      style: {
        padding: '64px var(--page-gutter)'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      tone: "brick"
    }, "Diferenciais"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '18px 0 32px',
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        maxWidth: 480,
        lineHeight: 1.15,
        color: 'var(--text-strong)'
      }
    }, "Conhe\xE7a os atributos essenciais dos nossos ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "trituradores agr\xEDcolas"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/grains-seeds.jpg`,
      height: 290,
      title: "Tritura\xE7\xE3o de galhos de at\xE9 6 cm de di\xE2metro.",
      caption: "Que possibilita maior velocidade de trabalho.",
      radius: "var(--radius-md)"
    }), /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/coffee-field.jpg`,
      height: 290,
      title: "Prote\xE7\xE3o do solo",
      caption: "O material triturado se torna mat\xE9ria org\xE2nica, fonte de nutrientes.",
      radius: "var(--radius-md)"
    }), /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/machine-card.png`,
      height: 250,
      title: "Martelos italianos de alta resist\xEAncia.",
      radius: "var(--radius-md)"
    }), /*#__PURE__*/React.createElement(ImageCard, {
      image: `${IMG}/agriculture.jpg`,
      height: 250,
      title: "Tritura\xE7\xE3o de galhos de at\xE9 6 cm de di\xE2metro.",
      radius: "var(--radius-md)"
    }))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Produto / Galeria",
      style: {
        padding: '0 var(--page-gutter) 56px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        color: 'var(--text-strong)',
        margin: '0 0 24px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 28,
        background: 'var(--vermelho)',
        borderRadius: 4
      }
    }), "Galeria de Imagens"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--cinza-2)',
        borderRadius: 'var(--radius-md)',
        padding: 40,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${IMG}/machine-product.png`,
      alt: "Triturador",
      style: {
        maxHeight: 380,
        maxWidth: '100%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-small)',
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, "Legenda"))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Produto / Ficha",
      style: {
        padding: '0 var(--page-gutter) 80px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        color: 'var(--text-strong)',
        margin: '0 0 24px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 28,
        background: 'var(--vermelho)',
        borderRadius: 4
      }
    }), "Ficha t\xE9cnica"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginBottom: 28
      }
    }, ['LSC-10P', 'LSC-20P', 'LSC-30P'].map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      style: {
        height: 38,
        padding: '0 18px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-small)',
        fontWeight: 600,
        background: tab === t ? 'var(--vermelho)' : 'var(--cinza-3)',
        color: tab === t ? 'var(--branco)' : 'var(--text-body)'
      }
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '28px 64px'
      }
    }, specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: '1px solid var(--cinza-3)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-small)',
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-lead)',
        fontWeight: 700,
        color: 'var(--text-strong)',
        marginTop: 4
      }
    }, v))))), /*#__PURE__*/React.createElement(SiteFooter, null));
  }

  /* ============ BLOG POST ============ */
  function BlogPostScreen({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--branco)'
      }
    }, /*#__PURE__*/React.createElement(PageHero, {
      active: "Not\xEDcias",
      onNavigate: onNavigate,
      crumbs: [{
        label: 'Home',
        href: '#'
      }, 'Notícias', 'Café do mês'],
      title: "Fique por dentro"
    }), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Blog / Post",
      style: {
        padding: '56px var(--page-gutter) 72px',
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.4fr',
        gap: 64
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        display: 'flex',
        gap: 18,
        margin: 0,
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        lineHeight: 1.2,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        background: 'var(--vermelho)',
        borderRadius: 4,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 700
      }
    }, "Descubra o caf\xE9 do m\xEAs de maio."), " Uma viagem pelos aromas e sabores mais exclusivos da Am\xE9rica Central.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        margin: '28px 0 0 22px'
      }
    }, ['F', 'X', 'in', 'wa'].map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-md)',
        background: 'var(--cinza-3)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: 'var(--vermelho)',
        fontWeight: 700
      }
    }, s))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        marginLeft: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate?.('Notícias')
    }, "Voltar para as not\xEDcias"))), /*#__PURE__*/React.createElement("article", {
      style: {
        fontSize: 'var(--fs-body)',
        lineHeight: 1.7,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0
      }
    }, "Bem-vindos, amantes do caf\xE9! Estamos entusiasmados em apresentar a voc\xEAs o ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "Caf\xE9 do M\xEAs"), ", uma jornada sensorial que nos leva a explorar os mais requintados gr\xE3os de caf\xE9 de todo o mundo."), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        color: 'var(--text-strong)',
        margin: '36px 0 12px'
      }
    }, "O Caf\xE9 do M\xEAs de Maio: Origens e Hist\xF3ria"), /*#__PURE__*/React.createElement("p", null, "Este m\xEAs, nossa jornada nos leva \xE0s altas montanhas da Am\xE9rica Central, onde encontramos uma joia da cafeicultura: o Caf\xE9 Especial Monta\xF1a. Vamos mergulhar na hist\xF3ria desses gr\xE3os, desde sua origem nas fazendas ensolaradas at\xE9 a x\xEDcara perfumada que chega \xE0 nossa mesa."), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        color: 'var(--text-strong)',
        margin: '36px 0 12px'
      }
    }, "Como extrair o melhor desse gr\xE3o?"), /*#__PURE__*/React.createElement("p", null, "Queremos que sua experi\xEAncia com o Caf\xE9 Especial Monta\xF1a seja verdadeiramente excepcional, por isso compartilhamos algumas dicas e truques para preparar o caf\xE9 perfeito."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18,
        margin: '28px 0'
      }
    }, ['coffee-field.jpg', 'grains-seeds.jpg', 'agriculture.jpg'].map((im, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 220,
        borderRadius: 'var(--radius-md)',
        background: `url(${IMG}/${im}) center/cover`
      }
    }))), /*#__PURE__*/React.createElement("p", null, "Um Brinde ao Caf\xE9 do M\xEAs: \xE0 medida que chegamos ao final desta viagem pelo Caf\xE9 Especial Monta\xF1a, queremos levantar nossas x\xEDcaras em um brinde \xE0 paix\xE3o e dedica\xE7\xE3o por tr\xE1s de cada gr\xE3o de caf\xE9."))), /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Blog / Leia tamb\xE9m",
      style: {
        background: 'var(--cinza-3)',
        padding: '64px var(--page-gutter)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        fontSize: 'var(--fs-h3)',
        fontWeight: 400,
        color: 'var(--text-strong)',
        margin: '0 0 36px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 28,
        background: 'var(--vermelho)',
        borderRadius: 4
      }
    }), "Leia tamb\xE9m"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 30
      }
    }, /*#__PURE__*/React.createElement(NewsCard, {
      image: `${IMG}/news-1.png`,
      badge: "Lan\xE7amento",
      title: "Pinhalense apresenta lan\xE7amento durante a FEMAGRI",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#"
    }), /*#__PURE__*/React.createElement(NewsCard, {
      image: `${IMG}/news-2.png`,
      badge: "Novidade",
      title: "A Pinhalense lan\xE7a sua nova Colheitadeira de Caf\xE9 \u2013 P1000 TR SMART",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#"
    }), /*#__PURE__*/React.createElement(NewsCard, {
      image: `${IMG}/coffee-field.jpg`,
      badge: "Projetos",
      title: "Como reduzir os defeitos no caf\xE9 para obter mais qualidade?",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#"
    }))), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  window.MachineListScreen = MachineListScreen;
  window.ProductScreen = ProductScreen;
  window.BlogPostScreen = BlogPostScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InnerScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.ImageCard = __ds_scope.ImageCard;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.FilterSelect = __ds_scope.FilterSelect;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
