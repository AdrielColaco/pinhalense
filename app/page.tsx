"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Logo, Button, SectionLabel, ImageCard } from "./components/ds";
import {
  catalog,
  getNode,
  countLeaves,
  trailFor,
  subFor,
  leaves,
  norm,
  makePdf,
} from "./lib/catalog";

type Screen = "login" | "checkEmail" | "authenticating" | "app";

type CSS = React.CSSProperties;

type DownloadNode = {
  id?: string;
  label?: string;
  version?: string;
  size?: string;
  year?: number;
};

interface RecentEntry {
  id: string;
  title: string;
  node: DownloadNode;
  trail: string[];
}

const ICON = {
  doc: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.7" fill="none" />
    </svg>
  ),
  download: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
      <path d="M12 3v11m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

// Subscribe to the viewport width via an external store. Using
// useSyncExternalStore keeps SSR deterministic (server snapshot = 1280)
// and avoids hydration mismatches without a setState-in-effect.
function subscribeWidth(cb: () => void) {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
}

export default function Home() {
  const width = useSyncExternalStore(
    subscribeWidth,
    () => window.innerWidth,
    () => 1280,
  );
  const [screen, setScreen] = useState<Screen>("login");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [sending, setSending] = useState(false);
  const [path, setPath] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [recent, setRecent] = useState<RecentEntry[]>([]);

  const auth = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const send = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const toastT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => {
      clearTimeout(auth.current);
      clearTimeout(send.current);
      clearTimeout(toastT.current);
    };
  }, []);

  // Debounce the live query into `debouncedQuery` (drives the results list).
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedQuery(query);
      setSearching(false);
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  // ---------- navigation ----------
  const navTo = useCallback((p: string[]) => {
    setPath(p);
    setQuery("");
    setDebouncedQuery("");
    setSearching(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, []);

  const onBack = () => navTo(path.slice(0, -1));
  const goHome = () => navTo([]);
  const logout = () => {
    setScreen("login");
    setPath([]);
    setQuery("");
    setDebouncedQuery("");
    setSearching(false);
  };

  // ---------- search ----------
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setQuery(v);
    setSearching(v.trim() !== "");
  };
  const clearSearch = () => {
    setQuery("");
    setDebouncedQuery("");
    setSearching(false);
  };

  // ---------- auth ----------
  const onSendLink = () => {
    const em = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setEmailError("Informe um e-mail válido.");
      return;
    }
    setSending(true);
    clearTimeout(send.current);
    send.current = setTimeout(() => {
      setScreen("checkEmail");
      setSending(false);
    }, 900);
  };
  const onEmailKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSendLink();
  };
  const showToast = (msg: string, ms = 2600) => {
    setToast(msg);
    clearTimeout(toastT.current);
    toastT.current = setTimeout(() => setToast(null), ms);
  };
  const onResend = () => showToast("Link reenviado para " + (email || "seu e-mail"));
  const onOpenLink = () => {
    setScreen("authenticating");
    clearTimeout(auth.current);
    auth.current = setTimeout(() => {
      setScreen("app");
      setPath([]);
      setQuery("");
      setDebouncedQuery("");
    }, 1700);
  };
  const onBackToLogin = () => setScreen("login");

  // ---------- download ----------
  const download = useCallback((node: DownloadNode, trail: string[]) => {
    const name =
      norm(node.label).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-manual.pdf";
    const blob = makePdf(node.label || "", trail.join("  >  "), node);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    const entry: RecentEntry = {
      id: node.id || "",
      title: node.label || "",
      node,
      trail,
    };
    setRecent((prev) => [entry, ...prev.filter((r) => r.id !== node.id)].slice(0, 4));
    setToast("Manual baixado · " + name);
    clearTimeout(toastT.current);
    toastT.current = setTimeout(() => setToast(null), 2800);
  }, []);

  // ---------- derived ----------
  const isMobile = width < 760;
  const notMobile = !isMobile;
  const node = getNode(path);
  const isHome = path.length === 0;
  const isInner = !isHome;
  const hasQuery = query.trim() !== "";

  const showLogin = screen === "login";
  const showCheck = screen === "checkEmail";
  const showAuth = screen === "authenticating";
  const showApp = screen === "app";

  const showResults = showApp && hasQuery;
  const showHomeBrowse = showApp && isHome && !hasQuery;
  const showInnerBrowse = showApp && isInner && !hasQuery;

  const cultures = useMemo(
    () =>
      catalog.map((cu) => ({
        title: cu.label,
        caption: cu.caption,
        image: cu.image,
        badge: countLeaves(cu) + " manuais",
        onOpen: () => navTo([cu.id]),
      })),
    [navTo],
  );

  const rows = useMemo(() => {
    if (!isInner) return [];
    return (node.children || []).map((ch) => {
      if (ch.children) {
        return {
          isCat: true as const,
          title: ch.label || "",
          sub: countLeaves(ch) + " manuais",
          onOpen: () => navTo([...path, ch.id!]),
        };
      }
      const trail = trailFor(path);
      return {
        isCat: false as const,
        title: ch.label || "",
        meta: "PDF · " + ch.version + " · " + ch.size + " · " + ch.year,
        onOpen: () => download(ch, trail),
      };
    });
  }, [isInner, node, path, navTo, download]);

  const crumbs = useMemo(() => {
    const cr: {
      label: string;
      onClick: () => void;
      clickable: boolean;
      plain: boolean;
      showSep: boolean;
    }[] = [
      {
        label: "Início",
        onClick: () => navTo([]),
        clickable: path.length > 0,
        plain: path.length === 0,
        showSep: false,
      },
    ];
    let acc: string[] = [];
    path.forEach((id, i) => {
      acc = [...acc, id];
      const snap = acc.slice();
      const last = i === path.length - 1;
      cr.push({
        label: getNode(snap).label || "",
        onClick: () => navTo(snap),
        clickable: !last,
        plain: last,
        showSep: true,
      });
    });
    return cr;
  }, [path, navTo]);

  const currentLabel = isInner ? node.label || "" : "";
  const currentSub = subFor(node);

  const results = useMemo(() => {
    const q = debouncedQuery.trim();
    if (!q) return [];
    const nq = norm(q);
    return leaves()
      .filter((l) => norm(l.label).includes(nq) || norm(l.trail.join(" ")).includes(nq))
      .map((l) => ({
        title: l.label,
        path: l.trail.join(" › "),
        meta: "PDF · " + l.version + " · " + l.size + " · " + l.year,
        onOpen: () => download(l, l.trail),
      }));
  }, [debouncedQuery, download]);

  const q = debouncedQuery.trim();
  const hasResults = !searching && q !== "" && results.length > 0;
  const noResults = !searching && q !== "" && results.length === 0;
  const cnt = results.length;
  const resultsHeading = searching
    ? "Buscando…"
    : cnt + (cnt === 1 ? " manual encontrado" : " manuais encontrados") + " para “" + query.trim() + "”";

  const recentVisible = recent.length > 0;
  const displayEmail = email || "tecnico@pinhalense.com.br";
  const initials = (displayEmail.trim()[0] || "U").toUpperCase();

  const gx = isMobile ? "18px" : "40px";
  const container: CSS = {
    maxWidth: 1170,
    margin: "0 auto",
    padding: `0 ${gx}`,
    boxSizing: "border-box",
    width: "100%",
  };
  const sectionWrap: CSS = {
    ...container,
    paddingTop: isMobile ? 36 : 48,
    paddingBottom: 8,
  };

  // ============================================================
  return (
    <div style={{ fontFamily: "var(--font-sans)", minHeight: "100vh" }}>
      {/* ============ LOGIN ============ */}
      {showLogin && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            fontFamily: "var(--font-sans)",
          }}
        >
          {!isMobile && (
            <div
              style={{
                flex: 1,
                minWidth: 0,
                background: "var(--gradient-hero)",
                color: "#fff",
                padding: "56px 60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", right: -80, top: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(255,255,255,.06)" }} />
              <div style={{ position: "absolute", right: 60, bottom: -120, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,.05)" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <Logo color="var(--branco)" height={30} />
              </div>
              <div style={{ position: "relative", zIndex: 2, maxWidth: 440 }}>
                <SectionLabel tone="white">Pinhalense · Pós-venda</SectionLabel>
                <h1 style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.12, margin: "18px 0 16px", color: "#fff" }}>
                  Tudo o que você precisa para operar e manter suas <strong style={{ fontWeight: 700 }}>máquinas Pinhalense</strong>.
                </h1>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)" }}>
                  Manuais de operação, manutenção e catálogos de peças de toda a linha — organizados por cultura e categoria.
                </p>
              </div>
              <div style={{ position: "relative", zIndex: 2, display: "flex", gap: 40, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1 }}>74+</div>
                  <div style={{ fontSize: 12, opacity: 0.78, marginTop: 5, maxWidth: 120, lineHeight: 1.4 }}>anos de tecnologia em grãos</div>
                </div>
                <div>
                  <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1 }}>2.140+</div>
                  <div style={{ fontSize: 12, opacity: 0.78, marginTop: 5, maxWidth: 130, lineHeight: 1.4 }}>clientes ao redor do globo</div>
                </div>
                <div>
                  <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1 }}>99+</div>
                  <div style={{ fontSize: 12, opacity: 0.78, marginTop: 5, maxWidth: 110, lineHeight: 1.4 }}>países atendidos</div>
                </div>
              </div>
            </div>
          )}

          <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", background: "#fff" }}>
            <div style={{ width: "100%", maxWidth: 400 }}>
              {isMobile && (
                <div style={{ marginBottom: 30 }}>
                  <Logo color="var(--preto)" height={28} />
                </div>
              )}
              <SectionLabel tone="brand">Acesso à conta</SectionLabel>
              <h2 style={{ margin: "16px 0 8px", fontSize: 28, fontWeight: 700, color: "var(--text-strong)", lineHeight: 1.1 }}>Entre com seu e-mail</h2>
              <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)" }}>
                Enviaremos um link de acesso seguro. Sem senhas para lembrar.
              </p>

              <label style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-strong)" }}>E-mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  onKeyDown={onEmailKey}
                  placeholder="seu@email.com.br"
                  style={{
                    height: 50,
                    padding: "0 16px",
                    borderRadius: 10,
                    border: "1px solid " + (emailError ? "var(--tijolo)" : "var(--cinza-borda)"),
                    outline: "none",
                    background: "var(--surface-faint)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    color: "var(--text-strong)",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
                {emailError && <span style={{ fontSize: 13, color: "var(--tijolo)", fontWeight: 500 }}>{emailError}</span>}
              </label>

              <Button variant="primary" fullWidth disabled={sending} onClick={onSendLink} style={{ width: "100%", marginTop: 22, height: 50 }}>
                {sending ? "Enviando…" : "Enviar link de acesso"}
              </Button>

              <p style={{ margin: "18px 0 0", fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.7" fill="none" />
                </svg>
                O link de acesso expira em 15 minutos.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============ CHECK EMAIL ============ */}
      {showCheck && (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", background: "var(--cinza-2)", fontFamily: "var(--font-sans)" }}>
          <div style={{ width: "100%", maxWidth: 460, background: "#fff", borderRadius: 15, boxShadow: "var(--shadow-card)", padding: "44px 40px", animation: "fadeIn .3s ease" }}>
            <div style={{ width: 74, height: 74, borderRadius: 999, background: "rgba(112,29,70,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--vermelho)", marginBottom: 24 }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7.5l8 6 8-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 style={{ margin: "0 0 10px", fontSize: 26, fontWeight: 700, color: "var(--text-strong)", lineHeight: 1.15 }}>Verifique seu e-mail</h2>
            <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>
              Enviamos um link de acesso para <strong style={{ color: "var(--text-strong)" }}>{displayEmail}</strong>. Abra o link para entrar — ele expira em 15 minutos.
            </p>

            <Button variant="primary" fullWidth onClick={onOpenLink} style={{ width: "100%", height: 50 }}>
              Abrir link de acesso
            </Button>
            <p style={{ margin: "10px 0 0", textAlign: "center", fontSize: 12, color: "var(--text-muted)" }}>simulação do clique no link recebido por e-mail</p>

            <div style={{ height: 1, background: "var(--cinza-3)", margin: "28px 0" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <button onClick={onResend} style={{ background: "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--text-body)", padding: 0 }}>
                Reenviar e-mail
              </button>
              <button onClick={onBackToLogin} style={{ background: "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--vermelho)", padding: 0 }}>
                Usar outro e-mail
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============ AUTHENTICATING ============ */}
      {showAuth && (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, background: "var(--cinza-2)", fontFamily: "var(--font-sans)", textAlign: "center" }}>
          <div style={{ width: 48, height: 48, border: "4px solid var(--cinza-3)", borderTopColor: "var(--vermelho)", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
          <h3 style={{ margin: "26px 0 8px", fontSize: 20, fontWeight: 700, color: "var(--text-strong)" }}>Validando seu acesso…</h3>
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted)", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace" }}>GET /auth/callback?token=•••••••••••••</p>
        </div>
      )}

      {/* ============ APP ============ */}
      {showApp && (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff", fontFamily: "var(--font-sans)", color: "var(--text-body)" }}>
          {/* HEADER */}
          <header style={{ position: "sticky", top: 0, zIndex: 30, background: "#fff", borderBottom: "1px solid var(--cinza-3)" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: isMobile ? 64 : 80, padding: `0 ${gx}`, boxSizing: "border-box" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
                <span onClick={goHome} style={{ display: "inline-flex", cursor: "pointer" }}>
                  <Logo color="var(--preto)" height={28} />
                </span>
                {notMobile && (
                  <>
                    <span style={{ width: 1, height: 26, background: "var(--cinza-3)" }} />
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Central de Manuais</span>
                  </>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 999, background: "var(--vermelho)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{initials}</div>
                {notMobile && (
                  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, marginRight: 4 }}>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Conectado</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-strong)" }}>{displayEmail}</span>
                  </div>
                )}
                <Button variant="outline" size="sm" onClick={logout}>Sair</Button>
              </div>
            </div>
          </header>

          {/* HERO (home) */}
          {isHome && (
            <section style={{ position: "relative", overflow: "hidden", background: "url(/assets/images/machine-card.png) center 32%/cover no-repeat" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(0,0,0,.86) 0%,rgba(0,0,0,.6) 42%,rgba(0,0,0,.18) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.15) 0%,rgba(0,0,0,.35) 100%)" }} />
              <div style={{ position: "relative", zIndex: 2, maxWidth: 1170, margin: "0 auto", padding: isMobile ? "52px 18px 46px" : "78px 40px 66px", boxSizing: "border-box", width: "100%" }}>
                <SectionLabel tone="white">Biblioteca técnica</SectionLabel>
                <h1 style={{ margin: "14px 0 0", color: "#fff", fontWeight: 400, lineHeight: 1.1, maxWidth: 640, fontSize: isMobile ? 27 : 42, textWrap: "balance" }}>
                  Manuais e catálogos de toda a <strong style={{ fontWeight: 700 }}>linha Pinhalense</strong>.
                </h1>
                <p style={{ margin: "14px 0 28px", color: "rgba(255,255,255,.9)", maxWidth: 540, lineHeight: 1.55, fontSize: isMobile ? 15 : 18 }}>
                  Busque pelo nome da máquina ou navegue pelas culturas para baixar o manual em PDF.
                </p>
                <div style={{ maxWidth: 620 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, height: 56, padding: "0 20px", borderRadius: 10, background: "#fff", boxShadow: "var(--shadow-card)" }}>
                    <span style={{ color: "var(--cinza-texto)", display: "inline-flex" }}>{ICON.search}</span>
                    <input value={query} onChange={onSearch} placeholder="Buscar manual (ex: P1000, secador, DRC, cacau)…" style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-strong)" }} />
                    {hasQuery && (
                      <button onClick={clearSearch} aria-label="Limpar" style={{ border: "none", background: "var(--cinza-3)", color: "var(--cinza-escuro)", width: 26, height: 26, borderRadius: 999, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SUBHEADER (inner) */}
          {isInner && (
            <div style={{ background: "var(--cinza-2)", borderBottom: "1px solid var(--cinza-3)" }}>
              <div style={{ maxWidth: 1170, margin: "0 auto", padding: isMobile ? "26px 18px 28px" : "30px 40px 32px", boxSizing: "border-box", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 18 }}>
                  {crumbs.map((cr, i) => (
                    <React.Fragment key={i}>
                      {cr.showSep && <span aria-hidden="true" style={{ opacity: 0.45 }}>›</span>}
                      {cr.clickable && <span onClick={cr.onClick} style={{ cursor: "pointer", color: "inherit" }}>{cr.label}</span>}
                      {cr.plain && <span style={{ color: "var(--text-strong)", fontWeight: 600 }}>{cr.label}</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 20, alignItems: isMobile ? "stretch" : "flex-end", flexDirection: isMobile ? "column" : "row", flexWrap: isMobile ? "nowrap" : "wrap" }}>
                  <div style={{ minWidth: 0 }}>
                    <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--vermelho)", padding: 0, marginBottom: 10 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Voltar
                    </button>
                    <h1 style={{ margin: 0, fontWeight: 700, color: "var(--text-strong)", lineHeight: 1.1, fontSize: isMobile ? 24 : 30 }}>{currentLabel}</h1>
                    <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--text-muted)" }}>{currentSub}</p>
                  </div>
                  <div style={isMobile ? { width: "100%" } : { flex: "0 0 340px", maxWidth: 340, width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, height: 46, padding: "0 16px", borderRadius: 10, background: "#fff", border: "1px solid var(--cinza-borda)" }}>
                      <span style={{ color: "var(--cinza-texto)", display: "inline-flex" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      </span>
                      <input value={query} onChange={onSearch} placeholder="Buscar em todos os manuais…" style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-strong)" }} />
                      {hasQuery && (
                        <button onClick={clearSearch} aria-label="Limpar" style={{ border: "none", background: "var(--cinza-3)", color: "var(--cinza-escuro)", width: 24, height: 24, borderRadius: 999, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MAIN */}
          <main style={{ flex: 1 }}>
            {/* SEARCH RESULTS */}
            {showResults && (
              <div style={sectionWrap}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                  <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--text-strong)" }}>{resultsHeading}</h2>
                  {searching && <div style={{ width: 18, height: 18, border: "2.5px solid var(--cinza-3)", borderTopColor: "var(--vermelho)", borderRadius: "50%", animation: "spin .7s linear infinite" }} />}
                </div>

                {hasResults && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {results.map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: "#fff", border: "1px solid var(--cinza-3)", borderRadius: 10, padding: "14px 16px" }}>
                        <div style={{ width: 50, height: 50, borderRadius: 10, background: "rgba(112,29,70,.08)", color: "var(--vermelho)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{ICON.doc}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 11, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 3 }}>{r.path}</div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-strong)" }}>{r.title}</div>
                          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{r.meta}</div>
                        </div>
                        <Button variant="primary" size="sm" onClick={r.onOpen} style={{ flexShrink: 0 }}>{ICON.download}Baixar</Button>
                      </div>
                    ))}
                  </div>
                )}

                {noResults && (
                  <div style={{ textAlign: "center", padding: "56px 20px", color: "var(--text-muted)" }}>
                    <div style={{ width: 72, height: 72, borderRadius: 999, background: "var(--cinza-2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: "var(--cinza-texto)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-strong)" }}>Nenhum manual encontrado</div>
                    <p style={{ margin: "8px auto 22px", maxWidth: 380, fontSize: 14, lineHeight: 1.6 }}>Não encontramos manuais para “{query.trim()}”. Verifique a ortografia ou tente outro termo.</p>
                    <Button variant="outline" onClick={clearSearch}>Limpar busca</Button>
                  </div>
                )}
              </div>
            )}

            {/* HOME BROWSE */}
            {showHomeBrowse && (
              <div style={sectionWrap}>
                {recentVisible && (
                  <div style={{ marginBottom: 40 }}>
                    <SectionLabel tone="brand">Baixados recentemente</SectionLabel>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                      {recent.map((rc) => (
                        <button key={rc.id} onClick={() => download(rc.node, rc.trail)} style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: "1px solid var(--cinza-3)", borderRadius: 10, padding: "10px 14px", cursor: "pointer", fontFamily: "var(--font-sans)", textAlign: "left", maxWidth: 280 }}>
                          <span style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(112,29,70,.08)", color: "var(--vermelho)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" fill="none" /><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.7" fill="none" /></svg>
                          </span>
                          <span style={{ minWidth: 0 }}>
                            <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rc.title}</span>
                            <span style={{ display: "block", fontSize: 11, color: "var(--text-muted)" }}>baixar novamente</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <SectionLabel tone="brand">Nossas culturas</SectionLabel>
                <h2 style={{ margin: "10px 0 0", fontWeight: 700, color: "var(--text-strong)", fontSize: isMobile ? 22 : 28 }}>Selecione a cultura</h2>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: "var(--text-muted)", maxWidth: 560 }}>Escolha a cultura para ver as categorias de máquinas e baixar seus manuais.</p>

                <div style={{ display: "grid", gap: isMobile ? 14 : 20, gridTemplateColumns: width < 760 ? "1fr" : "repeat(2,1fr)", marginTop: isMobile ? 22 : 28 }}>
                  {cultures.map((c, i) => (
                    <ImageCard key={i} image={c.image} title={c.title} caption={c.caption} badge={c.badge} height={320} onClick={c.onOpen} style={{ cursor: "pointer" }} />
                  ))}
                </div>
              </div>
            )}

            {/* INNER BROWSE */}
            {showInnerBrowse && (
              <div style={sectionWrap}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {rows.map((row, i) =>
                    row.isCat ? (
                      <div key={i} onClick={row.onOpen} style={{ display: "flex", alignItems: "center", gap: 18, background: "#fff", border: "1px solid var(--cinza-3)", borderRadius: 10, padding: "18px 22px", cursor: "pointer", transition: "box-shadow .2s,transform .15s,border-color .2s" }}>
                        <div style={{ width: 46, height: 46, borderRadius: 10, background: "rgba(112,29,70,.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--vermelho)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 012-2h3.5l2 2H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.7" fill="none" /></svg>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-strong)" }}>{row.title}</div>
                          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{row.sub}</div>
                        </div>
                        <span style={{ color: "var(--cinza-texto)", display: "inline-flex", flexShrink: 0 }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    ) : (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, background: "#fff", border: "1px solid var(--cinza-3)", borderRadius: 10, padding: "16px 18px", flexWrap: "wrap" }}>
                        <div style={{ width: 50, height: 50, borderRadius: 10, background: "rgba(112,29,70,.08)", color: "var(--vermelho)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{ICON.doc}</div>
                        <div style={{ flex: 1, minWidth: 160 }}>
                          <div style={{ fontSize: 17, fontWeight: 700, color: "var(--text-strong)" }}>{row.title}</div>
                          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>{row.meta}</div>
                        </div>
                        <Button variant="primary" size="sm" onClick={row.onOpen} style={{ flexShrink: 0 }}>{ICON.download}Baixar manual</Button>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </main>

          {/* FOOTER */}
          <footer style={{ marginTop: 64, borderTop: "1px solid var(--cinza-3)", background: "#fff" }}>
            <div style={{ maxWidth: 1170, margin: "0 auto", padding: `24px ${gx}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 12, color: "var(--text-muted)", boxSizing: "border-box", width: "100%" }}>
              <span>© 2026 Pinhalense Máquinas Agrícolas · Central de Manuais</span>
              <span>
                Precisa de ajuda?{" "}
                <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--vermelho)", textDecoration: "none", fontWeight: 600 }}>Fale com o pós-venda</a>
              </span>
            </div>
          </footer>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div style={{ position: "fixed", left: "50%", bottom: 28, transform: "translateX(-50%)", background: "var(--preto)", color: "#fff", padding: "14px 22px", borderRadius: 10, boxShadow: "var(--shadow-strong)", display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontFamily: "var(--font-sans)", zIndex: 60, animation: "fadeUp .25s ease", maxWidth: "90vw" }}>
          <span style={{ color: "#fff", display: "inline-flex", background: "var(--vermelho)", borderRadius: 999, width: 22, height: 22, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
