/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "arrow-up-right"
  | "brush"
  | "calendar"
  | "call"
  | "chat"
  | "check"
  | "clock"
  | "eye"
  | "location"
  | "menu"
  | "mehndi"
  | "moon"
  | "nail"
  | "percent"
  | "recycle"
  | "science"
  | "shield"
  | "sparkle"
  | "spa"
  | "star"
  | "sun"
  | "verified"
  | "x";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  brush: (
    <path d="m14 6 4 4M3 21c3.5 0 5-1.5 5-4.2 0-1.5.8-2.3 2.3-2.3H13L21 6l-3-3-8.5 8.5v2.7c0 1.5-.8 2.3-2.3 2.3C4.5 16.5 3 18 3 21Z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M7.5 3v4M16.5 3v4M4 9.5h16M8 13h2m4 0h2M8 17h2" />
    </>
  ),
  call: (
    <path d="M7.2 3.5 10 7l-1.8 2.2a14 14 0 0 0 6.6 6.6L17 14l3.5 2.8-.8 3a2 2 0 0 1-2.2 1.5C10.2 20.2 3.8 13.8 2.7 6.5A2 2 0 0 1 4.2 4.3l3-.8Z" />
  ),
  chat: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2 1.2-4.2A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  mehndi: (
    <>
      <path d="M8 20c-1.3-2-1.7-4.4-1.4-7.1L7 8.5a1.2 1.2 0 0 1 2.4.1l-.2 3.2.7-7a1.2 1.2 0 0 1 2.4.1l-.1 6.4.6-7a1.2 1.2 0 0 1 2.4.2l-.3 7 .7-5a1.2 1.2 0 0 1 2.4.4l-.8 8c-.2 2-1.5 4-3.5 5.1H8Z" />
      <path d="M3 8c1.4 0 2.4.8 2.8 2.1M4 5.5c2.2.3 3.8 1.6 4.5 3.6" />
    </>
  ),
  moon: <path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.8 8.8 0 1 0 20.5 15.2Z" />,
  nail: (
    <>
      <path d="M7 21v-9a5 5 0 0 1 10 0v9M7 16h10" />
      <path d="M9.5 9.5 12 6l2.5 3.5" />
    </>
  ),
  percent: (
    <path d="m19 5-14 14M7 7h.01M17 17h.01M8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  ),
  recycle: (
    <>
      <path d="m7 7 2-3 2 3M9 4v6m6 1 3 1.5-3 2M18 12.5l-5 3m-2 1-2 3-2-3m2 3v-6m-5-1-3-1.5 3-2M3 10.5l5-3" />
    </>
  ),
  science: (
    <>
      <path d="M9 3h6m-5 0v6l-5.5 9.2A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.8L14 9V3" />
      <path d="M8 15h8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
      <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </>
  ),
  spa: (
    <>
      <path d="M12 20c-6 0-9-3.5-9-8.5C9 11.5 12 14.5 12 20Zm0 0c0-6 3-9 9-9 0 5.5-3 9-9 9Z" />
      <path d="M12 20V9m0 0c0-3.5 2-5.5 5.5-6-0 4-1.7 6-5.5 6Z" />
    </>
  ),
  star: (
    <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 2.8Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  verified: (
    <>
      <path d="m12 2 2.4 1.5 2.8-.1 1.3 2.4 2.4 1.3-.1 2.8L22 12l-1.2 2.1.1 2.8-2.4 1.3-1.3 2.4-2.8-.1L12 22l-2.1-1.2-2.8.1-1.3-2.4-2.4-1.3.1-2.8L2 12l1.2-2.1-.1-2.8 2.4-1.3 1.3-2.4 2.8.1L12 2Z" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({
  name,
  size = 19,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "star" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

type GroupId = "nails" | "lashes" | "spa" | "festive";

type Service = {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  meta: string;
  duration: string;
  action: string;
};

const serviceGroups: {
  id: GroupId;
  number: string;
  icon: IconName;
  categoryLabel: string;
  title: string;
  description: string;
  note: string;
  services: Service[];
}[] = [
  {
    id: "nails",
    number: "01",
    icon: "nail",
    categoryLabel: "Nail architecture",
    title: "Nail Artistry & Extensions",
    description:
      "Architectural extensions built for resilience, flexibility, and refined natural contours.",
    note: "Most popular · 75 mins",
    services: [
      {
        title: "Acrylic Full Set Extensions",
        description:
          "Classic French, ultra-clear glass, or natural tip overlay. Reinforced structural curvature finished to perfection.",
        price: "₹1,899",
        badge: "Most popular",
        meta: "Ultra flexible",
        duration: "90 mins",
        action: "Book slot",
      },
      {
        title: "Hard Gel Extensions & Overlays",
        description:
          "Featherweight builder gel for sensitive nail beds. Gentle cure under low-heat LED for ultimate nail safety.",
        price: "₹2,199",
        meta: "Add-on available",
        duration: "+20 mins",
        action: "Book slot",
      },
      {
        title: "Chrome & Holographic Glaze",
        description:
          "Hailey Bieber glazed-donut glow, champagne metallic, unicorn iridescence, and liquid chrome mirror pigments.",
        price: "+₹499",
        badge: "Upgrade",
        meta: "Artistry",
        duration: "+25 mins",
        action: "Select add-on",
      },
      {
        title: "Ombre & French Gradient",
        description:
          "Seamless baby-boomer fades, dual-pastel sunsets, micro-French lines, and soft airbrushed transitions.",
        price: "+₹399",
        badge: "Upgrade",
        meta: "Couture accents",
        duration: "Custom",
        action: "Select add-on",
      },
      {
        title: "Handcrafted 3D Art & Swarovski",
        description:
          "Individually placed Swarovski crystals, 3D gel florals, gold chains, pearls, and bespoke hand-painted motifs.",
        price: "From ₹299 / nail",
        meta: "Daily essential",
        duration: "45 mins",
        action: "Consult",
      },
      {
        title: "Chip-Resistant Gel Polish",
        description:
          "Hundreds of high-pigment, 21+ day chip-free salon shades, with dry Russian cuticle prep and nourishing oil soak.",
        price: "₹899",
        meta: "21+ day wear",
        duration: "45 mins",
        action: "Book slot",
      },
    ],
  },
  {
    id: "lashes",
    number: "02",
    icon: "eye",
    categoryLabel: "Lash architecture",
    title: "Eyelash Extensions & Architecture",
    description:
      "Featherweight silk and cashmere fibres customized to your natural eye shape and lash health.",
    note: "Natural finish · 75 mins",
    services: [
      {
        title: "Classic Natural Lash Extensions",
        description:
          "1:1 application using the isolate method for mascara-like elongation and everyday sophistication.",
        price: "₹1,999",
        meta: "Understated",
        duration: "75 mins",
        action: "Book slot",
      },
      {
        title: "Hybrid Feather-Light Set",
        description:
          "A considered blend of classic lashes and hand-crafted volume fans for lush dimension without heaviness.",
        price: "₹2,499",
        meta: "Textured glamour",
        duration: "90 mins",
        action: "Book slot",
      },
      {
        title: "Dramatic Russian Volume",
        description:
          "Handmade 3D–6D multi-lash fans of ultra-fine silk fibres for a fluffy, dense, deeply pigmented lash line.",
        price: "₹2,999",
        meta: "High density",
        duration: "120 mins",
        action: "Book slot",
      },
      {
        title: "Lash Refill & Infill Session",
        description:
          "Replaces grown-out extensions and restores a full, lush appearance. Recommended every 2–3 weeks.",
        price: "From ₹1,299",
        meta: "Maintenance",
        duration: "45–60 mins",
        action: "Book refill",
      },
      {
        title: "Gentle Removal & Conditioning",
        description:
          "Zero-damage solvent removal paired with keratin nourishing serum to protect natural lash follicles.",
        price: "₹699",
        meta: "Lash health",
        duration: "30 mins",
        action: "Book slot",
      },
    ],
  },
  {
    id: "spa",
    number: "03",
    icon: "spa",
    categoryLabel: "25% off spa rituals",
    title: "Spa Manicures & Pedicures",
    description:
      "Relaxing botanical soaks, volcanic exfoliation, and deep nourishment in our private lounge chairs.",
    note: "Save 25% · 45 mins",
    services: [
      {
        title: "Essential Grooming Manicure",
        description:
          "Nail shaping, precision cuticle contouring, an almond-essence massage, and buffing for natural shine.",
        price: "₹699",
        originalPrice: "₹930",
        badge: "25% off",
        meta: "Signature ritual",
        duration: "60 mins",
        action: "Book slot",
      },
      {
        title: "Rose Gold Luxury Spa Pedicure",
        description:
          "Rose petal hydro-soak, organic brown sugar scrub, callosity smoothing, and a rich hydrating rose mask.",
        price: "₹1,299",
        originalPrice: "₹1,730",
        badge: "25% off",
        meta: "Deep moisture",
        duration: "60 mins",
        action: "Book slot",
      },
      {
        title: "Deep Hydration Paraffin Ritual",
        description:
          "A warm paraffin dip that infuses restorative heat, relaxes joints, and softens dehydrated winter skin.",
        price: "₹1,499",
        originalPrice: "₹1,999",
        badge: "25% off",
        meta: "Restorative care",
        duration: "45 mins",
        action: "Book slot",
      },
    ],
  },
  {
    id: "festive",
    number: "04",
    icon: "mehndi",
    categoryLabel: "Verified special",
    title: "Festive, Bridal & Mehndi Specials",
    description:
      "Organic, deep-staining botanical henna applied by master artisans for Karwa Chauth, festivals, and weddings.",
    note: "100% organic henna",
    services: [
      {
        title: "Shagun Mehndi",
        description:
          "Front and back coverage using a chemical-free organic herbal henna cone.",
        price: "₹799",
        meta: "Both hands",
        duration: "Custom",
        action: "Book slot",
      },
      {
        title: "Full Palm Designer Henna",
        description:
          "Intricate bridal florals, traditional peacocks, and symmetrical mandala art.",
        price: "₹1,499",
        meta: "Intricate motifs",
        duration: "Custom",
        action: "Book slot",
      },
      {
        title: "Palm + Wrist Luxury Henna",
        description:
          "Extended cuff elegance past the wrist with bespoke storytelling motifs.",
        price: "₹2,499",
        meta: "Royal bridal",
        duration: "Custom",
        action: "Book slot",
      },
      {
        title: "Gel Polish + Mehndi Pamper",
        description:
          "Flawless chip-resistant gel polish paired with hand-designed mehndi.",
        price: "From ₹1,399",
        meta: "Value combo",
        duration: "Custom",
        action: "Book slot",
      },
    ],
  },
];

const filters: { id: "all" | GroupId; label: string }[] = [
  { id: "all", label: "All services" },
  { id: "nails", label: "Nail extensions & art" },
  { id: "lashes", label: "Lash architecture" },
  { id: "spa", label: "Spa mani & pedi" },
  { id: "festive", label: "Festive & mehndi" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services & Menu", href: "/services" },
  { label: "Lookbook & Gallery", href: "/lookbook" },
  { label: "About & Reviews", href: "/about" },
  { label: "Contact & Location", href: "/contact" },
];

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Nailashes Indirapuram home">
      <img
        className="brand-logo"
        src="/logo.png"
        alt="Nailashes logo"
        width="160"
        height="54"
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
      />
      <span className="brand-copy">
        <span className="brand-name">NAILASHES</span>
        <span className="brand-location">Indirapuram Studio</span>
      </span>
    </a>
  );
}

function bookingHref(title: string) {
  return (
    "https://wa.me/919315069595?text=" +
    encodeURIComponent(
      "Hi Nailashes Indirapuram! I would like to book " + title + ".",
    )
  );
}

export default function ServicesExperience() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeFilter, setActiveFilter] = useState<"all" | GroupId>("all");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nailashes-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("nailashes-theme", theme);
  }, [theme]);

  const visibleGroups = serviceGroups.filter(
    (group) => activeFilter === "all" || group.id === activeFilter,
  );

  return (
    <div className="site-shell services-page">
      <header className="site-header">
        <div className="topline">
          <div className="topline-inner">
            <div className="topline-group">
              <span className="topline-item">
                <Icon name="location" size={15} /> Indirapuram Habitat Centre
                (G-288)
              </span>
              <span className="topline-separator">•</span>
              <span>Open daily 11 AM–9 PM</span>
            </div>
            <div className="topline-group">
              <span className="topline-item">
                <Icon name="star" size={15} /> <strong>4.8</strong>
                <span className="muted">(71 verified reviews)</span>
              </span>
              <span className="topline-separator">•</span>
              <a
                className="topline-item topline-phone"
                href="tel:+919315069595"
              >
                <Icon name="call" size={14} /> +91 93150 69595
              </a>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar-inner">
            <Brand />
            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={
                    item.label === "Services & Menu"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="nav-actions">
              <button
                className="theme-toggle"
                type="button"
                aria-label={
                  "Switch to " + (theme === "dark" ? "light" : "dark") + " mode"
                }
                title={
                  "Switch to " + (theme === "dark" ? "light" : "dark") + " mode"
                }
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
              </button>
              <a
                className="button button-small button-primary header-book"
                href="https://wa.me/919315069595"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="calendar" size={17} />
                <span>Book Appointment</span>
              </a>
              <button
                className="menu-toggle"
                type="button"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? "x" : "menu"} size={22} />
              </button>
            </div>
          </div>
          <nav
            className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <Icon name="arrow-up-right" size={16} />
              </a>
            ))}
            <a
              className="mobile-nav-book"
              href="https://wa.me/919315069595"
              target="_blank"
              rel="noreferrer"
            >
              Book your appointment
              <Icon name="arrow-up-right" size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main className="services-main">
        <section className="services-hero">
          <div className="services-hero-glow services-hero-glow-one" />
          <div className="services-hero-glow services-hero-glow-two" />
          <div className="services-hero-inner">
            <div className="services-hero-copy">
              <span className="services-kicker">
                <Icon name="sparkle" size={16} /> Couture price directory ·
                Indirapuram Habitat Centre
              </span>
              <h1>
                Signature Services <em>&amp; Menu</em>
              </h1>
              <p>
                Tailored nail architecture, flawless lash enhancements, and
                indulgent spa rituals. Masterfully executed by senior artisans
                in our private Indirapuram salon suites.
              </p>
              <div className="services-trust-row">
                <span>
                  <Icon name="star" size={17} />
                  <strong>4.8</strong> · 71 reviews
                </span>
                <span>
                  <Icon name="verified" size={17} />
                  <strong>Exclusive quality</strong> · 90+ studios nationwide
                </span>
              </div>
            </div>
            <div
              className="services-hero-image"
              role="img"
              aria-label="Rose gold chrome nail extension on velvet plum fabric"
            />
          </div>
          <div className="services-promo section-wrap">
            <span className="promo-icon">
              <Icon name="percent" size={24} />
            </span>
            <div className="promo-copy">
              <span className="promo-label">Limited season offer</span>
              <strong>Festive care rituals</strong>
              <p>
                Flat 25% off all spa manicure and pedicure services. Organic
                Shagun Mehndi specials are also available.
              </p>
            </div>
            <a href="#menu" onClick={() => setActiveFilter("spa")}>
              Claim exclusive offer <Icon name="arrow" size={17} />
            </a>
          </div>
        </section>

        <section
          className="services-filter-bar"
          id="menu"
          aria-label="Filter service menu"
        >
          <div className="services-filter-inner">
            <div
              className="services-filters"
              role="group"
              aria-label="Service categories"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={
                    activeFilter === filter.id
                      ? "services-filter is-active"
                      : "services-filter"
                  }
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <span className="services-filter-caption">
              <Icon name="verified" size={16} /> Senior stylists · Thoughtful
              care
            </span>
          </div>
        </section>

        {activeFilter === "all" || activeFilter === "nails" ? (
          <section
            className="services-feature section-wrap"
            aria-label="Featured nail service"
          >
            <div className="featured-art">
              <div
                className="featured-art-image"
                role="img"
                aria-label="Luxury nail extension with metallic rose gold foil and high gloss chrome"
              />
              <div className="featured-art-overlay" />
              <div className="featured-art-copy">
                <div>
                  <span>Couture masterpiece</span>
                  <h2>Architectural Gel &amp; Chrome</h2>
                  <p>
                    Precision apex sculpting paired with mirror chrome pigments
                    cured under medical-grade LED.
                  </p>
                </div>
                <a
                  href={bookingHref("Architectural Gel and Chrome nail art")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consult artist <Icon name="arrow-up-right" size={16} />
                </a>
              </div>
            </div>
            <div className="service-promise">
              <div className="promise-heading">
                <span>Service promise</span>
                <Icon name="verified" size={20} />
              </div>
              <h3>Senior stylists only</h3>
              <p>
                Every appointment is attended by dedicated, certified
                technicians. We never rush the curation, delivering impeccable
                edge sealing and lightweight comfort.
              </p>
              <div className="promise-stats">
                <div>
                  <strong>100%</strong>
                  <span>Satisfaction</span>
                </div>
                <div>
                  <strong>45–90</strong>
                  <span>Min precision</span>
                </div>
              </div>
              <div className="promise-location">
                <Icon name="location" size={17} />
                <span>
                  <strong>Indirapuram Habitat Centre</strong>
                  <small>Ground Floor G-288, next to Baskin Robbins</small>
                </span>
              </div>
            </div>
          </section>
        ) : null}

        <div className="services-groups section-wrap" aria-live="polite">
          {visibleGroups.map((group) => (
            <section
              className="service-category"
              id={"service-" + group.id}
              key={group.id}
            >
              <div className="service-category-heading">
                <div>
                  <span className="service-category-kicker">
                    <Icon name={group.icon} size={17} /> Category {group.number}{" "}
                    · {group.categoryLabel}
                  </span>
                  <h2>{group.title}</h2>
                </div>
                <div className="service-category-note">
                  <p>{group.description}</p>
                  <span>
                    <Icon name="clock" size={15} /> {group.note}
                  </span>
                </div>
              </div>
              <div className="service-menu-grid">
                {group.services.map((service) => (
                  <article className="menu-service-card" key={service.title}>
                    <div className="menu-service-top">
                      <span className="menu-service-icon">
                        <Icon name={group.icon} size={20} />
                      </span>
                      {service.badge ? (
                        <span
                          className={
                            service.badge === "25% off"
                              ? "menu-service-badge discount"
                              : "menu-service-badge"
                          }
                        >
                          {service.badge}
                        </span>
                      ) : null}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="menu-service-details">
                      <span>{service.meta}</span>
                      <span>
                        <Icon name="clock" size={14} /> {service.duration}
                      </span>
                    </div>
                    <div className="menu-service-bottom">
                      <div className="menu-service-price">
                        {service.originalPrice ? (
                          <del>{service.originalPrice}</del>
                        ) : null}
                        <strong>{service.price}</strong>
                      </div>
                      <a
                        href={bookingHref(service.title)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {service.action}
                        <Icon name="arrow-up-right" size={15} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="hygiene-section section-wrap">
          <div className="hygiene-panel">
            <div className="hygiene-intro">
              <span className="services-kicker">
                <Icon name="shield" size={16} /> Clinical hygiene standards
              </span>
              <h2>Hygiene &amp; Technique Guarantee</h2>
              <p>
                At Nailashes Indirapuram, luxury begins with uncompromising
                sterilization. Every tool undergoes hospital-grade autoclaving
                between treatments.
              </p>
            </div>
            <div className="hygiene-points">
              <article>
                <span>
                  <Icon name="verified" size={20} />
                </span>
                <strong>Sterilized sets</strong>
                <p>
                  Hospital-grade autoclave pouches are unsealed directly in
                  front of you.
                </p>
              </article>
              <article>
                <span>
                  <Icon name="science" size={20} />
                </span>
                <strong>Medical adhesive</strong>
                <p>
                  Fume-free, hypoallergenic lash bonds formulated for sensitive
                  eyes.
                </p>
              </article>
              <article>
                <span>
                  <Icon name="recycle" size={20} />
                </span>
                <strong>Single-use kits</strong>
                <p>
                  Fresh disposable buffers, cuticle sticks, and files for every
                  guest.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="services-consult section-wrap">
          <div className="consult-panel">
            <div className="consult-copy">
              <span className="services-kicker">
                Unsure which architecture fits you?
              </span>
              <h2>Need a bespoke consultation before your visit?</h2>
              <p>
                Send our master nail tech a photo of your desired inspiration or
                discuss custom lash curl mapping. We verify slot availability
                and calculate your quote on WhatsApp.
              </p>
              <div className="consult-actions">
                <a
                  className="button button-primary"
                  href="https://wa.me/919315069595?text=Hi%20Nailashes%20Indirapuram!%20I%20have%20an%20inspo%20photo%20and%20would%20like%20a%20consultation."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="chat" size={18} /> WhatsApp art concierge
                </a>
                <a className="button button-outline" href="tel:+919315069595">
                  <Icon name="call" size={17} /> Call +91 93150 69595
                </a>
              </div>
            </div>
            <div className="operating-card">
              <span className="operating-icon">
                <Icon name="clock" size={26} />
              </span>
              <h3>Operating hours</h3>
              <p>Monday – Sunday</p>
              <strong>11:00 AM – 9:00 PM</strong>
              <span>
                Ground Floor, G-288
                <br />
                Indirapuram Habitat Centre
              </span>
            </div>
          </div>
        </section>

        <a
          className="floating-whatsapp"
          href="https://wa.me/919315069595?text=Hi%20Nailashes%20Indirapuram!%20I%20would%20like%20to%20book%20a%20session%20today."
          target="_blank"
          rel="noreferrer"
          aria-label="Book on WhatsApp"
        >
          <Icon name="chat" size={21} />
          <span>WhatsApp booking</span>
        </a>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-about">
            <Brand />
            <span className="footer-luxury">LUXURY BEAUTY STUDIO</span>
            <p>
              Nailashes Indirapuram brings high-couture nail art, bespoke lash
              styling, and indulgent beauty rituals to your neighbourhood.
            </p>
            <div className="footer-rating">
              <Icon name="star" size={15} />
              <strong>4.8 / 5.0</strong>
              <span>Google verified</span>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick links</h3>
            <a href="/">Sanctuary experience</a>
            <a href="/services">Full couture menu</a>
            <a href="/lookbook">Seasonal lookbook</a>
            <a href="/about">Client testimonials</a>
            <a href="/contact">Book a private suite</a>
          </div>
          <div className="footer-column">
            <h3>Signature services</h3>
            <a href="#service-nails">Gel &amp; acrylic extensions</a>
            <a href="#service-nails">Chrome &amp; 3D bespoke art</a>
            <a href="#service-lashes">Russian volume lashes</a>
            <a href="#service-spa">Velvet rose spa mani-pedi</a>
            <a href="#service-festive">Lash lift &amp; brow styling</a>
          </div>
          <div className="footer-column footer-visit">
            <h3>Studio visit</h3>
            <p>
              <Icon name="location" size={18} /> Ground Floor, G-288, Habitat
              Centre, Ahinsa Khand 1, Ghaziabad, UP 201014
            </p>
            <p>
              <Icon name="clock" size={18} /> Daily, 11 AM–9 PM
            </p>
            <a href="tel:+919315069595">
              <Icon name="call" size={17} /> +91 93150 69595
            </a>
            <a
              href="https://wa.me/919315069595"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="arrow-up-right" size={17} /> WhatsApp concierge
            </a>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© 2025 Nailashes Indirapuram. All rights reserved.</span>
          <span>Handcrafted luxury for discerning clientele.</span>
        </div>
      </footer>
    </div>
  );
}
