"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "arrow-up-right"
  | "brush"
  | "calendar"
  | "call"
  | "check"
  | "clock"
  | "location"
  | "menu"
  | "moon"
  | "photo"
  | "star"
  | "sun"
  | "verified"
  | "x";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  brush: (
    <>
      <path d="m14 6 4 4M3 21c3.5 0 5-1.5 5-4.2 0-1.5.8-2.3 2.3-2.3H13L21 6l-3-3-8.5 8.5v2.7c0 1.5-.8 2.3-2.3 2.3C4.5 16.5 3 18 3 21Z" />
    </>
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
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  moon: <path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.8 8.8 0 1 0 20.5 15.2Z" />,
  photo: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m21 15-5-5L5 20" />
    </>
  ),
  star: <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 2.8Z" />,
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

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services & Menu", href: "/services" },
  { label: "Lookbook & Gallery", href: "/lookbook" },
  { label: "About & Reviews", href: "/about" },
  { label: "Contact & Location", href: "/contact" },
];

const filters = [
  { id: "all", label: "All creations" },
  { id: "chrome", label: "Chrome & glaze" },
  { id: "lashes", label: "Russian volume lashes" },
  { id: "minimalist", label: "Minimalist French" },
  { id: "festive", label: "Festive mehndi & gel" },
  { id: "bridal", label: "Bridal ombré" },
];

const looks = [
  {
    id: "rose-gold-chrome",
    categories: ["chrome"],
    label: "Chrome & glaze",
    artist: "Shoyab",
    shape: "Almond shape",
    title: "Rose Gold Chrome Mirror Nails",
    description:
      "Metallic glaze, sculpted almond silhouette with diamond-infused mirror pigments for high gloss and zero chipping.",
    price: "₹1,999+",
    alt: "Almond nails with a reflective rose gold mirror chrome finish on black velvet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqPLos9IIMSzJbgulHttTVqrRApE6IE-XjfaSjxIUzNGmkjGRVQIH3Ap4wyD21vSGt33BGmDHjomMabycc8o8T6_xC4k407nHlK5behhuSXP1sHFOA47YMmJC9f7Hgu1QCSevsD_x_7XdcYqojBQFR_lofkxE3f_wENbhVsHSa1jKKSdpbRq5YxMUx5U_chHLXtMUG4XNt2hQluHjrx6jTOO-oXYjhJtCqsUHb98o",
  },
  {
    id: "wispy-russian-lashes",
    categories: ["lashes"],
    label: "Russian volume lashes",
    artist: "Priya S.",
    shape: "14mm cat-eye",
    title: "Wispy Russian Hybrid Lashes",
    description:
      "Feather-light, cruelty-free faux mink fans mapped with a 14mm cat-eye curl for dramatic yet natural fullness.",
    price: "₹2,499+",
    alt: "Wispy Russian volume lash extensions with a dramatic cat-eye curl",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3fdb8kPkXCtY6ssIot89jUR-AxuXXPzclaSOkt9yysh2Zq62Q7r6KIGc4Yr6tuYRz6RvxaClCrAm9sIoKEtvE0pDKYson4lo5VGZZyATBBakmsNmD_a9851DUVwXlyfVof7381jkb_g5UNEWkgYa_LTtHpPulc663Ai4_S7o523-Je5XGDiaUjjrHKV4hCmJV-Sj69HjQac1ytY7gyNyJwcWTtwlo1LI0gNGxEPo",
  },
  {
    id: "ombre-french-velvet",
    categories: ["minimalist", "bridal"],
    label: "Minimalist French",
    artist: "Shoyab",
    shape: "Soft square",
    title: "Ombre French Velvet Tips",
    description:
      "A soft blush foundation fading into shimmering champagne tips, accented with delicate micro-gems.",
    price: "₹1,799+",
    alt: "French manicure with blush ombré and champagne velvet tips",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACvPCJiz8v-EHJYDHqOO4F6mXD_sur8J31c5bDp1yjTxY-OWl9Dt7KwlhuQsPMDvk0wSqTXJTdIc03PyXxukAqRhrAlwZmrksb9BrecgmDJAckYAhsmnBijHBOjYzPzBKzNif6vByml4NG-4QXY1LIc31NzgJ06JSTHQbooZDo8wpHD6RuiYKk-Kmcz2b6Ian6HLiSmi8UUVxmWaIZvQMW7SPBq7Uxo9tWxBuYE9o",
  },
  {
    id: "swarovski-bridal",
    categories: ["bridal"],
    label: "Bridal ombré",
    artist: "Rohit K.",
    shape: "Coffin / ballerina",
    title: "Swarovski 3D Bridal Nails",
    description:
      "Sculpted acrylic with encapsulated rose-gold leaf and hand-placed crystal clusters for celebratory radiance.",
    price: "₹3,499+",
    alt: "Bridal nail extensions with gold leaf, 3D floral details, and crystal clusters",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjADsjjto4OblbKuJWn5VYmj05eDGZZRZlbGEdISYxl3_fiWPcwP64l48Xvy1xwlIPf-endKgTD-kbrG3lBxa3CiKKpF-KJ38NMh6oJKseJvK6lcAMv_-Y8PJcS1KOnIRzFzL6SSysW99Q_OxXcGo8LHvBYylkl5ewrbyNe_A_JsNekCdC66WJo2PvpxVsGHyZyPhN8XuGlRj5lrMU6mhVYXmG8IX31ElT6gCiJKw",
  },
  {
    id: "clean-girl-nude",
    categories: ["minimalist"],
    label: "Minimalist French",
    artist: "Taranjeet",
    shape: "Squoval nude",
    title: "Clean Girl Minimalist Nude Gel",
    description:
      "Precision e-file cuticle care, a translucent milky-rose overlay, and an ultra-durable diamond-glass topcoat.",
    price: "₹1,299+",
    alt: "Short squoval nails with sheer rose nude gel polish",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqnzP_8tFGYDSSze5DdcUYtNgNJnsWzP24dHExDTYrlJHugMFqyuMmw9ecBH1V_9ygpigacAHo9DnO4v7GOTXkfaqkkFd7DcAL8AYBcALP4hCAt7Vk9y6sYuHhcU07Mc7aR-so4Fov7RPI6j9sVDkm-76ArGIF8xm8Qf1y_gDcLP2N2IDbU0Vss4WsyjA17x8m6lJHLVbrJtsGYi2aK5-oxHb9ScWkYrhVoGyhi-8",
  },
  {
    id: "festive-henna-gel",
    categories: ["festive"],
    label: "Festive mehndi & gel",
    artist: "Shoyab & team",
    shape: "Both hands",
    title: "Festive Organic Henna & Gel Combo",
    description:
      "Natural Sojat henna with intricate bridal mandala work, paired with a matching jewel-toned gel overlay.",
    price: "₹1,399+",
    alt: "Karwa Chauth henna pattern and matching ruby red and gold gel nails",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI88qyUjalUwgMXDaR6C3J4VR3ajmFcXnG1uBR8AVXTL5s7KtJkLDttF4FC2-xvsrPNf3-klKnbUImSMdxQMOu0F0acDwSH3XUjTeK3SzvE3kcMfQpYFosqBxD-4mIcGbdJFaSbZolIQtgloJZavge4_RW-dZfdiGuklDobI7yzM03xnsC-EXiNyOf5hEGHBgMzB57MEZqAbmIZMuDFh0Q3m1AMkvRCjUlDQSdclQ",
  },
  {
    id: "cat-eye-velvet",
    categories: ["chrome"],
    label: "Chrome & glaze",
    artist: "Shoyab",
    shape: "Soft stiletto",
    title: "Cat-Eye Velvet Magnetic Gel Nails",
    description:
      "Dimensional multi-spectrum magnetic particles create an ethereal, silky glow across a deep velvet finish.",
    price: "₹2,199+",
    alt: "Deep plum magnetic cat-eye gel nails with rose gold shimmer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdmru41mvhi98i4iMmE7gkI91Kz3KGFkilMMm2_AabgCjix5yUTfrboJ4ng_nQKFA-u7Q_Lp98094lEgmQHIsKyvTBON7hIlAKifvxAyyRKHSv9qsCvIRDsH55SLp4BZqdYhaAOo19moX2G1mdm_V-dw7mlIBxYgLPrG5E9L3w4lF2eBcapPqNxSrvtw8WNgB5wcty-Bc1OtqKlZdivMCd5ODQjsbRwvsLZ5-Uh4",
  },
  {
    id: "volume-lash-refill",
    categories: ["lashes"],
    label: "Russian volume lashes",
    artist: "Neha V.",
    shape: "Refill & lift",
    title: "Volume Lash Refill & Lift",
    description:
      "A full-density refresh combined with our signature keratin lash-health barrier protection.",
    price: "₹1,899+",
    alt: "Full volume eyelash extensions with a keratin lash lift finish",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9j7X2UjyDRrdkfxgRn2WOaoqA_X6niFqRSY-0CWrbdCDs7N10uyzNi0Tk1AojHwR9OTBRs-WtMp9Pox-ELq-Bvh0GRh8Eab3Cx1kvD0wsBxVk71H5yHb_hXY3Lk0X9s5aJjHXq0iHpWbjjVgei0lYkpfgEhush1yWLuks0vQo2NxwQm-7zmeBBTCJcm54F4K9c3ZE04nLpSHylCbaWryePcT00PEQlg3b2pVQPIU",
  },
];

const reviewItems = [
  {
    initials: "SP",
    name: "Shilpa Pathak",
    quote:
      "Absolutely loved my experience! The nail extensions turned out beautiful and exactly how I wanted them. The staff and owner were friendly, professional, and paid great attention to detail. The salon was clean and comfortable. A big shout out to Shoyab.",
  },
  {
    initials: "TS",
    name: "Tushika Singh",
    quote:
      "The experience was really good. I got my nails done for the first time. The staff was really nice. They advised me on what shape and color to go for, the pros and cons of each. The nail tech was experienced and did my nails in less than an hour!",
  },
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

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="lookbook-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Icon key={index} name="star" size={size} />
      ))}
    </span>
  );
}

export default function LookbookExperience() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeFilter, setActiveFilter] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nailashes-theme");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("nailashes-theme", theme);
  }, [theme]);

  const visibleLooks = looks.filter(
    (look) => activeFilter === "all" || look.categories.includes(activeFilter),
  );

  return (
    <div className="site-shell lookbook-page">
      <header className="site-header">
        <div className="topline">
          <div className="topline-inner">
            <div className="topline-group">
              <span className="topline-item"><Icon name="location" size={15} /> Indirapuram Habitat Centre (G-288)</span>
              <span className="topline-separator">•</span>
              <span>Open daily 11 AM–9 PM</span>
            </div>
            <div className="topline-group">
              <span className="topline-item"><Icon name="star" size={15} /> <strong>4.8</strong> <span className="muted">(71 verified reviews)</span></span>
              <span className="topline-separator">•</span>
              <a className="topline-item topline-phone" href="tel:+919315069595"><Icon name="call" size={14} /> +91 93150 69595</a>
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
                  className={item.label === "Lookbook & Gallery" ? "nav-link active" : "nav-link"}
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
                aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
                title={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
              </button>
              <a className="button button-small button-primary header-book" href="https://wa.me/919315069595" target="_blank" rel="noreferrer">
                <Icon name="calendar" size={17} /> <span>Book Appointment</span>
              </a>
              <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? "x" : "menu"} size={22} />
              </button>
            </div>
          </div>
          <nav className={menuOpen ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}<Icon name="arrow-up-right" size={16} />
              </a>
            ))}
            <a className="mobile-nav-book" href="https://wa.me/919315069595" target="_blank" rel="noreferrer">
              Book your appointment<Icon name="arrow-up-right" size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main className="lookbook-main">
        <section className="lookbook-hero">
          <div className="lookbook-hero-glow lookbook-hero-glow-one" />
          <div className="lookbook-hero-glow lookbook-hero-glow-two" />
          <div className="lookbook-hero-inner">
            <div className="lookbook-hero-copy">
              <span className="lookbook-kicker"><Icon name="star" size={15} /> Haute Esthétique Atelier</span>
              <h1>The Lookbook &amp; <em>Artistry Gallery</em></h1>
              <p>
                Explore bespoke creations crafted by master stylists at Indirapuram Habitat Centre. Where avant-garde nail geometry, featherlight lash extensions, and artisanal beauty merge.
              </p>
            </div>
            <div className="lookbook-score-card">
              <div>
                <span className="lookbook-score-label">Client score</span>
                <div className="lookbook-score-line"><strong>4.8</strong><Stars size={15} /></div>
                <span className="lookbook-score-caption">71 verified reviews</span>
              </div>
              <span className="lookbook-score-divider" />
              <div>
                <span className="lookbook-score-label">Network</span>
                <strong className="lookbook-network-count">90+ Studios</strong>
                <span className="lookbook-score-caption">Across India</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-filter-bar" aria-label="Filter lookbook gallery">
          <div className="gallery-filter-inner">
            <div className="gallery-filters" role="group" aria-label="Filter by service">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={activeFilter === filter.id ? "gallery-filter is-active" : "gallery-filter"}
                  type="button"
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <span className="portfolio-note"><Icon name="verified" size={16} /> Original Habitat Centre portfolio</span>
          </div>
        </section>

        <section className="lookbook-gallery section-wrap" aria-label="Nailashes lookbook">
          <div className="lookbook-results" aria-live="polite">
            Showing <strong>{visibleLooks.length}</strong> {visibleLooks.length === 1 ? "creation" : "creations"}
          </div>
          <div className="lookbook-grid">
            {visibleLooks.map((look, index) => {
              const message = "Hi Nailashes Indirapuram! I want to recreate the " + look.title + (look.artist === "Shoyab" ? " (Artist: Shoyab)" : "");
              const bookingLink = "https://wa.me/919315069595?text=" + encodeURIComponent(message);

              return (
                <article className="look-card" key={look.id}>
                  <div className="look-image-wrap">
                    <img src={look.image} alt={look.alt} loading={index < 4 ? "eager" : "lazy"} />
                    <div className="look-image-shade" />
                    <span className="look-category-pill">{look.label}</span>
                    <div className="look-image-details">
                      <span><Icon name="brush" size={14} /> Artist: {look.artist}</span>
                      <span>{look.shape}</span>
                    </div>
                  </div>
                  <div className="look-card-content">
                    <div>
                      <h2>{look.title}</h2>
                      <p>{look.description}</p>
                    </div>
                    <div className="look-card-bottom">
                      <strong>{look.price}</strong>
                      <a href={bookingLink} target="_blank" rel="noreferrer">
                        Recreate look <Icon name="arrow" size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {visibleLooks.length === 0 && <p className="lookbook-empty">No creations in this category yet.</p>}
        </section>

        <section className="lookbook-concierge section-wrap">
          <div className="concierge-panel">
            <div className="concierge-glow" />
            <div className="concierge-copy">
              <span className="lookbook-kicker"><Icon name="photo" size={16} /> Custom artistry concierge</span>
              <h2>Have a design in mind from Pinterest or Instagram?</h2>
              <p>
                Share your reference screenshots with our master techs on WhatsApp for a custom estimate and a personalized shape recommendation before your appointment.
              </p>
              <div className="concierge-benefits">
                <span><Icon name="check" size={16} /> Under 15-minute response</span>
                <span><Icon name="check" size={16} /> Free nail health assessment</span>
                <span><Icon name="check" size={16} /> Walk-ins &amp; appointments welcome</span>
              </div>
            </div>
            <div className="concierge-actions">
              <a className="button button-primary" href="https://wa.me/919315069595?text=Hi%20Nailashes%20Indirapuram!%20I%20have%20a%20Pinterest%2FInstagram%20reference%20photo%20I%20would%20like%20a%20quote%20for." target="_blank" rel="noreferrer">
                <Icon name="photo" size={20} /> Send reference photo
              </a>
              <a className="button button-glass" href="tel:+919315069595">
                <Icon name="call" size={18} /> Call 093150 69595
              </a>
            </div>
          </div>
        </section>

        <section className="lookbook-reviews section-wrap">
          <div className="lookbook-reviews-heading">
            <span>Verified atelier praise</span>
            <h2>Mastery applauded by our guests</h2>
          </div>
          <div className="lookbook-review-grid">
            {reviewItems.map((review) => (
              <article className="lookbook-review-card" key={review.name}>
                <Stars size={18} />
                <p>“{review.quote}”</p>
                <div className="lookbook-review-author">
                  <span>{review.initials}</span>
                  <div><strong>{review.name}</strong><small>Verified Google Review</small></div>
                  <Icon name="verified" size={22} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-about">
            <Brand />
            <span className="footer-luxury">LUXURY BEAUTY STUDIO</span>
            <p>Nailashes Indirapuram brings high-couture nail art, bespoke lash styling, and indulgent beauty rituals to your neighbourhood.</p>
            <div className="footer-rating"><Icon name="star" size={15} /><strong>4.8 / 5.0</strong><span>Google verified</span></div>
          </div>
          <div className="footer-column">
            <h3>Quick links</h3>
            <a href="/">Sanctuary experience</a>
            <a href="/services">Couture services</a>
            <a href="/lookbook">Seasonal lookbook</a>
            <a href="/about">Client testimonials</a>
            <a href="/contact">Book a private suite</a>
          </div>
          <div className="footer-column">
            <h3>Signature services</h3>
            <a href="/services">Gel &amp; acrylic extensions</a>
            <a href="/services">Chrome &amp; 3D bespoke art</a>
            <a href="/services">Russian volume lashes</a>
            <a href="/services">Velvet rose spa mani-pedi</a>
            <a href="/services">Lash lift &amp; brow styling</a>
          </div>
          <div className="footer-column footer-visit">
            <h3>Studio visit</h3>
            <p><Icon name="location" size={18} /> Ground Floor, G-288, Habitat Centre, Ahinsa Khand 1, Ghaziabad, UP 201014</p>
            <p><Icon name="clock" size={18} /> Daily, 11 AM–9 PM</p>
            <a href="tel:+919315069595"><Icon name="call" size={17} /> +91 93150 69595</a>
            <a href="https://wa.me/919315069595" target="_blank" rel="noreferrer"><Icon name="arrow-up-right" size={17} /> WhatsApp concierge</a>
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
