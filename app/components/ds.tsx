"use client";

// ============================================================
// Pinhalense Design System — React components
// Ported from the Claude Design bundle (Logo, Button,
// SectionLabel, Badge, ImageCard).
// ============================================================

import React, { useState } from "react";

type CSS = React.CSSProperties;

// ---------------- Logo ----------------
export function Logo({
  color = "var(--branco)",
  height = 34,
  showWordmark = true,
  style = {},
  ...rest
}: {
  color?: string;
  height?: number;
  showWordmark?: boolean;
  style?: CSS;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        color,
        fontFamily: "var(--font-sans)",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      <svg width={height} height={height} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 3.5C10.9 3.5 3.5 10.9 3.5 20S10.9 36.5 20 36.5c7.2 0 13.3-4.6 15.6-11"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 11c5 0 9 4 9 9s-4 9-9 9c-3.6 0-6.7-2.1-8.1-5.2"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="20" cy="20" r="3.4" fill={color} />
      </svg>
      {showWordmark && (
        <span
          style={{
            fontSize: height * 0.66,
            fontWeight: "var(--weight-bold)" as unknown as number,
            letterSpacing: "-0.01em",
          }}
        >
          Pinhalense
        </span>
      )}
    </span>
  );
}

// ---------------- Button ----------------
type ButtonVariant = "primary" | "dark" | "light" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const palette = {
    primary: { bg: "var(--action-primary)", bgHover: "var(--action-primary-hover)", fg: "var(--branco)" },
    dark: { bg: "var(--action-dark)", bgHover: "var(--action-dark-hover)", fg: "var(--branco)" },
    light: { bg: "var(--branco)", bgHover: "var(--cinza-3)", fg: "var(--preto)" },
    outline: { bg: "transparent", bgHover: "rgba(112,29,70,0.08)", fg: "var(--vermelho)" },
  }[variant];
  const sizes = {
    sm: { height: 38, padding: "0 18px", font: "14px" },
    md: { height: 45, padding: "0 25px", font: "var(--fs-body)" },
    lg: { height: 54, padding: "0 32px", font: "var(--fs-lead)" },
  }[size];
  const [hover, setHover] = useState(false);
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        width: fullWidth ? "100%" : "auto",
        height: sizes.height,
        padding: sizes.padding,
        border: variant === "outline" ? "1px solid var(--vermelho)" : "none",
        borderRadius: "var(--radius-md)",
        background: disabled ? "var(--cinza-borda)" : hover ? palette.bgHover : palette.bg,
        color: disabled ? "var(--cinza-texto)" : palette.fg,
        fontFamily: "var(--font-sans)",
        fontSize: sizes.font,
        fontWeight: "var(--weight-medium)" as unknown as number,
        lineHeight: 1,
        textDecoration: "none",
        textAlign: "center",
        whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background var(--dur-fast) var(--ease-standard)",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

// ---------------- SectionLabel ----------------
type LabelTone = "brand" | "brick" | "light" | "white";

export function SectionLabel({
  children,
  tone = "brand",
  rulePosition = "after",
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  tone?: LabelTone;
  rulePosition?: "before" | "after";
  style?: CSS;
} & React.HTMLAttributes<HTMLDivElement>) {
  const color = {
    brand: "var(--vermelho)",
    brick: "var(--tijolo)",
    light: "var(--cinza-3)",
    white: "var(--branco)",
  }[tone];
  const textColor = tone === "light" || tone === "white" ? "var(--branco)" : color;
  const ruleColor = tone === "light" ? "var(--cinza-3)" : tone === "white" ? "var(--branco)" : color;
  const rule = (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "var(--rule-width)",
        height: "var(--rule-height)",
        borderRadius: "var(--radius-pill)",
        background: ruleColor,
        flexShrink: 0,
      }}
    />
  );
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-4)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: "var(--weight-semibold)" as unknown as number,
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: textColor,
        ...style,
      }}
      {...rest}
    >
      {rulePosition === "before" && rule}
      <span>{children}</span>
      {rulePosition === "after" && rule}
    </div>
  );
}

// ---------------- Badge ----------------
export function Badge({
  children,
  tone = "dark",
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  tone?: "dark" | "brand" | "light";
  style?: CSS;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const palette = {
    dark: { bg: "var(--preto)", fg: "var(--branco)" },
    brand: { bg: "var(--vermelho)", fg: "var(--branco)" },
    light: { bg: "var(--cinza-3)", fg: "var(--preto)" },
  }[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "9px 14px",
        borderRadius: "var(--radius-md)",
        background: palette.bg,
        color: palette.fg,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: "var(--weight-regular)" as unknown as number,
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

// ---------------- ImageCard ----------------
export function ImageCard({
  image,
  title,
  caption,
  badge,
  height = 370,
  radius = "var(--radius-lg)",
  onClick,
  style = {},
}: {
  image: string;
  title: string;
  caption?: string;
  badge?: string;
  height?: number;
  radius?: string;
  onClick?: () => void;
  style?: CSS;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        height,
        borderRadius: radius,
        overflow: "hidden",
        textDecoration: "none",
        cursor: onClick ? "pointer" : "default",
        boxShadow: hover ? "var(--shadow-card)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url(${image}) center / cover no-repeat`,
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-standard)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      {badge && (
        <div style={{ position: "absolute", top: "var(--space-4)", right: "var(--space-4)" }}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          left: "var(--space-8)",
          right: "var(--space-8)",
          bottom: "var(--space-6)",
          fontFamily: "var(--font-sans)",
          color: "var(--branco)",
        }}
      >
        <div style={{ fontSize: "var(--fs-card-title)", fontWeight: "var(--weight-bold)" as unknown as number, lineHeight: 1.1 }}>
          {title}
        </div>
        {caption && (
          <div
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--fs-body)",
              fontWeight: "var(--weight-regular)" as unknown as number,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
