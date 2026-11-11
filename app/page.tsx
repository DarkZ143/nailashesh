/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "accessibility"
  | "arrow"
  | "arrow-up-right"
  | "calendar"
  | "call"
  | "card"
  | "check"
  | "clock"
  | "heart"
  | "icecream"
  | "location"
  | "mehndi"
  | "menu"
  | "moon"
  | "nail"
  | "person"
  | "quote"
  | "shield"
  | "sparkle"
  | "spa"
  | "star"
  | "sun"
  | "verified"
  | "wifi"
  | "x";

const iconPaths: Record<IconName, ReactNode> = {
  accessibility: (
    <>
      <circle cx="12" cy="4.5" r="1.5" />
      <path d="M5 8.5h14M12 8.5v5m0 0-4 6m4-6 4 6M7 9l2 5m8-5-2 5" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M7.5 3v4M16.5 3v4M4 9.5h16M8 13h2m4 0h2M8 17h2" />
    </>
  ),
  call: (
    <path d="M7.2 3.5 10 7l-1.8 2.2a14 14 0 0 0 6.6 6.6L17 14l3.5 2.8-.8 3a2 2 0 0 1-2.2 1.5C10.2 20.2 3.8 13.8 2.7 6.5A2 2 0 0 1 4.2 4.3l3-.8Z" />
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 9h18M7 15h4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  heart: (
    <path d="M20.5 8.8c0 5.1-8.5 10.2-8.5 10.2S3.5 13.9 3.5 8.8A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 8.5 1.7Z" />
  ),
  icecream: (
    <>
      <path d="M12 3a6 6 0 0 0-5.7 7.8L12 21l5.7-10.2A6 6 0 0 0 12 3Z" />
      <path d="M7.5 10.5c1.4 1.1 2.9 1.1 4.5 0 1.5 1.1 3 1.1 4.5 0" />
    </>
  ),
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  mehndi: (
    <>
      <path d="M8 20c-1.3-2-1.7-4.4-1.4-7.1L7 8.5a1.2 1.2 0 0 1 2.4.1l-.2 3.2.7-7a1.2 1.2 0 0 1 2.4.1l-.1 6.4.6-7a1.2 1.2 0 0 1 2.4.2l-.3 7 .7-5a1.2 1.2 0 0 1 2.4.4l-.8 8c-.2 2-1.5 4-3.5 5.1H8Z" />
      <path d="M3 8c1.4 0 2.4.8 2.8 2.1M4 5.5c2.2.3 3.8 1.6 4.5 3.6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  moon: <path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.8 8.8 0 1 0 20.5 15.2Z" />,
  nail: (
    <>
      <path d="M7 21v-9a5 5 0 0 1 10 0v9M7 16h10" />
      <path d="M9.5 9.5 12 6l2.5 3.5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  quote: <path d="M10 11H5V6h6v6l-3 6H5l2-4m12-3h-5V6h6v6l-3 6h-3l2-4" />,
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
      <path d="M12 20V9m0 0c0-3.5 2-5.5 5.5-6 0 4-1.7 6-5.5 6Zm0 3v-7C12 5 10 3 6.5 2.5 6.5 6.5 8 9 12 9Z" />
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
  wifi: (
    <>
      <path d="M2.5 8.5a14 14 0 0 1 19 0M5.5 12a9.5 9.5 0 0 1 13 0M8.7 15.4a4.8 4.8 0 0 1 6.6 0M12 19h.01" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({
  name,
  size = 20,
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

const appointmentUrl =
  "https://wa.me/919315069595?text=" +
  encodeURIComponent(
    "Hi Nailashes Indirapuram! I would like to book an appointment.",
  );

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services & Menu", href: "/services" },
  { label: "Lookbook & Gallery", href: "/lookbook" },
  { label: "About & Reviews", href: "/about" },
  { label: "Contact & Location", href: "/contact" },
];

const services = [
  {
    category: "Artistry",
    price: "From ₹1,299",
    title: "Acrylic & Gel Extensions",
    description:
      "Sculpted overlays, ombré, French tips, chrome metallics, and bespoke hand-painted 3D art by master technicians.",
    duration: "60–90 mins",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9FEu972PYJQXM6oyY3fvfKILbOjgXJoiQu2ms8JdRnPwiKY5KXgXKNcWakrFdhFFucyIIcew5-sReael1MzHmV3b-QNR7ZVB1cs4mV32EFecsDhCsfoqti6gRVI-JcElj971QSns0_zMY23GGcTW1lO1u8mnw2q-KY2Xam51xsORhjbuV-haPTiJwuHdLSDAq4jo83-_a6ApVS2MTr8NB5toNqz4PQVpIB6NQTlA",
    alt: "French ombré chrome nail extensions with pearl details",
    icon: "nail" as const,
  },
  {
    category: "Lash lounge",
    price: "From ₹1,499",
    title: "Eyelash Extensions",
    description:
      "Classic featherweight lashes, hybrid volume, Russian mega fans, and precision infill refills using hypoallergenic adhesives.",
    duration: "75 mins",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGDONJhZinJcCDOP0zDrq0UhdSzcLy3g25kZQWW1VpAEX0U8qcCpyI7NYuIbPXfqg1jya7Co_J4mO8Vf7JTbqXZleHzTlIEzq58FHJJm69YmxOcZ9bJ0RgM0bHsZFRU-zMqbDDcWwSj-a2UzhMAwMqP6hISW2gpDkXrJr2oihw6XLRsfPntukznvJQ-UNFplCft2FnO7yo1KJZQ-LuogiJ_0btspgmxEx6QrSID1g",
    alt: "Russian volume lash extensions with rose gold makeup",
    icon: "sparkle" as const,
  },
  {
    category: "Pampering",
    price: "Flat 25% off",
    title: "Signature Spa Mani & Pedi",
    description:
      "Botanical soaks, volcanic exfoliation, restorative mask wrapping, and cuticle and heel care made into a calming ritual.",
    duration: "60 mins",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCF3JNhCnJX-p5m3VxD-NN4Qa3-IDwV6EcPbvrNkGVRYsGneZ7ZPJjszoHPq98pFa_wHN33_pXPwOC1uOPMiJmSXBLlEzKSYRK7NhE5m2zhR0eVIrX2nMvEGcCgm-H9W1Vp9KzYhhbRyFqDUG5yZkeocfJ0bA-A-Ms8O02J_8FY2FVer-9cSXzpQEe6r_gaNjFKbUIs7WP_5HtvhKV6PZqv8SdVUXufgvlUo1CD6ss",
    alt: "Rose petal pedicure ritual in a private spa suite",
    icon: "spa" as const,
  },
  {
    category: "Festive & bridal",
    price: "From ₹1,399",
    title: "Mehndi & Gel Combos",
    description:
      "Natural henna designs paired with chip-proof gel polish combos, curated for bridal celebrations and festive days.",
    duration: "Custom session",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSbZffTZmiFvVTjBv_BLO1KTsb66ikIbGO2FaH9NwuiXLuRSz-K-wO5s69_1OhGYkMttzlWB0SXx_A27hph9dAHbS3d8fS-cDf766MoKR7OUxaeWjAovyK0u1r5ph19GzyiqEbXi0JI88NRkP0eb-H-t0egyIBJCuMb-V9JcYIul4LF6yoTtFWhP8LFoZvzgDzbJxImk52vbpQF5gYMPXDkxWofq8IVCTzX7sLSXM",
    alt: "Intricate bridal mehndi with polished festive nails",
    icon: "mehndi" as const,
  },
];

const amenities = [
  {
    icon: "wifi" as const,
    title: "Complimentary Wi-Fi",
    detail: "High-speed streaming",
  },
  {
    icon: "accessibility" as const,
    title: "Wheelchair Accessible",
    detail: "Entrance & seating",
  },
  {
    icon: "heart" as const,
    title: "LGBTQ+ Friendly",
    detail: "A safe, welcoming space",
  },
  {
    icon: "card" as const,
    title: "Digital & Cards",
    detail: "GPay, NFC, cards",
  },
  {
    icon: "icecream" as const,
    title: "Prime Habitat Centre",
    detail: "Next to Baskin Robbins",
  },
];

const reviews = [
  {
    initials: "SP",
    name: "Shilpa Pathak",
    service: "Nail Extensions Client · Indirapuram Studio",
    quote:
      "Absolutely loved my experience! The nail extensions turned out beautiful and exactly how I wanted them. The staff and owner were friendly, professional, and paid great attention to detail. The salon was clean and comfortable, and the service was amazing. I’m really happy with my nails and will definitely be coming back. Highly recommended!",
  },
  {
    initials: "TS",
    name: "Tushika Singh",
    service: "First-Time Client · Express Sculpting",
    quote:
      "The experience was really good. I got my nails done for the first time. The staff was really nice and advised me on what shape and color to go for. The nail tech was experienced and did my nails in less than an hour. Highly recommended!",
  },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Nailashes Indirapuram home">
      <img
        className="brand-logo"
        src="/logo.png"
        alt="Nailashes logo"
        width="44"
        height="44"
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

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nailashes-theme");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("nailashes-theme", theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="topline">
          <div className="topline-inner">
            <div className="topline-group">
              <span className="topline-item">
                <Icon name="location" size={15} />
                Indirapuram Habitat Centre (G-288)
              </span>
              <span className="topline-separator">•</span>
              <span>Open daily 11 AM–9 PM</span>
            </div>
            <div className="topline-group">
              <span className="topline-item">
                <Icon name="star" size={15} />
                <strong>4.8</strong>
                <span className="muted">(71 verified reviews)</span>
              </span>
              <span className="topline-separator">•</span>
              <a
                className="topline-item topline-phone"
                href="tel:+919315069595"
              >
                <Icon name="call" size={14} />
                +91 93150 69595
              </a>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="navbar-inner">
            <Brand />
            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  className={index === 0 ? "nav-link active" : "nav-link"}
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
                href={appointmentUrl}
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
              href={appointmentUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book your appointment
              <Icon name="arrow-up-right" size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="announcement" aria-label="Studio rating">
          <div className="announcement-inner">
            <span className="announcement-stars" aria-label="Five stars">
              <Icon name="star" size={14} />
              <Icon name="star" size={14} />
              <Icon name="star" size={14} />
              <Icon name="star" size={14} />
              <Icon name="star" size={14} />
            </span>
            <span>
              <strong>4.8 Rating on Google</strong> · 71+ verified reviews
            </span>
            <span className="announcement-divider">✦</span>
            <span className="announcement-network">
              <Icon name="verified" size={15} /> Official network studio
            </span>
          </div>
        </section>

        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Couture salon & lash sanctuary
            </p>
            <h1>
              Indulge in <em>haute couture</em> nails &amp; master lash
              artistry.
            </h1>
            <p className="hero-description">
              Welcome to Nailashes Indirapuram — the flagship retreat of India’s
              premier beauty studio network, with 90+ outlets nationwide. Find
              us at Indirapuram Habitat Centre, next to Baskin Robbins.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={appointmentUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="calendar" size={19} />
                Book via WhatsApp
                <span className="button-phone">093150 69595</span>
              </a>
              <a className="button button-outline" href="/services">
                Explore services
                <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="hero-location">
              <Icon name="location" size={19} />
              <span>
                G-288, Ground Floor, Habitat Centre, Ahinsa Khand 1{" "}
                <span className="location-dot">·</span> Daily, 11 AM–9 PM
              </span>
            </div>
          </div>

          <div className="hero-art" id="lookbook">
            <div className="hero-image-frame">
              <img
                className="hero-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfwhvG4qaQYUYgHPu1HF6xJQIx9dUmJcB46B8mL9xXOK-D_BuBnTH1CvM9DPFF1pN_AOkCNZX5z2MG1Upz4B93KddE13hn0-g3W0Oa1BwkXmYmedkp0VdjXrEP4uaobgsX9JNfwyxuutUgXTcvZ-QIgJKiobSjO2rf_z6V8sM8J51RcKpu6WDX0ECeTM_kJ0nK6NzcUiWPBy4ac4YRNrc3j7UKomu8T1NmuuU2M_E"
                alt="Rose gold chrome nail art and sculpted lash styling"
                fetchPriority="high"
              />
              <div className="hero-image-shade" />
              <div className="craft-card">
                <div>
                  <span className="craft-label">Signature craft</span>
                  <strong>Sculpted chrome &amp; gel</strong>
                </div>
                <span className="craft-icon">
                  <Icon name="sparkle" size={20} />
                </span>
              </div>
            </div>
            <div className="floating-review">
              <div className="floating-stars">
                <Icon name="star" size={15} />
                <strong>4.8</strong>
                <span>/ 5</span>
              </div>
              <span>Trusted by our lovely clients</span>
              <div className="avatar-stack" aria-hidden="true">
                <span>SP</span>
                <span>TS</span>
                <span>+</span>
              </div>
            </div>
            <div className="hero-stamp">
              <Icon name="verified" size={24} />
              <span>
                Carefully
                <br />
                crafted
              </span>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Studio highlights">
          <div className="stats-inner">
            <div className="stat-item">
              <Icon name="shield" size={22} />
              <div>
                <strong>100%</strong>
                <span>Certified artists</span>
              </div>
            </div>
            <div className="stat-item">
              <Icon name="location" size={22} />
              <div>
                <strong>90+</strong>
                <span>Studios nationwide</span>
              </div>
            </div>
            <div className="stat-item">
              <Icon name="nail" size={22} />
              <div>
                <strong>100+</strong>
                <span>Gel &amp; chrome shades</span>
              </div>
            </div>
            <div className="stat-item">
              <Icon name="verified" size={22} />
              <div>
                <strong>Strict</strong>
                <span>Hygiene protocol</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" /> Couture offerings
              </p>
              <h2>
                Signature services <em>&amp; rituals</em>
              </h2>
              <p className="section-intro">
                Thoughtfully tailored treatments, high-end pigments, and gentle
                formulas chosen for your hands, eyes, and personal style.
              </p>
            </div>
            <a
              className="text-link"
              href={appointmentUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ask our artists <Icon name="arrow-up-right" size={17} />
            </a>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-image-wrap">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-category">{service.category}</span>
                </div>
                <div className="service-content">
                  <div className="service-title-row">
                    <h3>{service.title}</h3>
                    <span className="service-icon">
                      <Icon name={service.icon} size={19} />
                    </span>
                  </div>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span className="service-price">{service.price}</span>
                    <span className="service-duration">
                      <Icon name="clock" size={15} /> {service.duration}
                    </span>
                  </div>
                  <a
                    className="service-link"
                    href={appointmentUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reserve service <Icon name="arrow-up-right" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-section" id="craft">
          <div className="craft-inner section-wrap">
            <div className="craft-photo">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9FEu972PYJQXM6oyY3fvfKILbOjgXJoiQu2ms8JdRnPwiKY5KXgXKNcWakrFdhFFucyIIcew5-sReael1MzHmV3b-QNR7ZVB1cs4mV32EFecsDhCsfoqti6gRVI-JcElj971QSns0_zMY23GGcTW1lO1u8mnw2q-KY2Xam51xsORhjbuV-haPTiJwuHdLSDAq4jo83-_a6ApVS2MTr8NB5toNqz4PQVpIB6NQTlA"
                alt="Close-up of detailed chrome nail art"
                loading="lazy"
              />
              <div className="photo-caption">
                <Icon name="sparkle" size={17} />
                <span>Artistry in every detail</span>
              </div>
            </div>
            <div className="craft-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" /> The Indirapuram standard
              </p>
              <h2>
                Where artisanal precision meets <em>velvet luxury.</em>
              </h2>
              <p>
                At Nailashes Indirapuram, every set of extensions and every lash
                arrangement is treated as an architectural work of art. Our
                seasoned stylists take time to understand your nail health, eye
                contour, and the look you love.
              </p>
              <div className="quality-list">
                <div className="quality-item">
                  <span className="quality-icon">
                    <Icon name="verified" size={21} />
                  </span>
                  <div>
                    <strong>Single-use hygiene pouches</strong>
                    <span>
                      Tools are fresh-sealed or carefully sterilized for each
                      visit.
                    </span>
                  </div>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">
                    <Icon name="person" size={21} />
                  </span>
                  <div>
                    <strong>Master artists</strong>
                    <span>
                      Meet experienced stylists known for delicate application
                      and detailed 3D art.
                    </span>
                  </div>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">
                    <Icon name="heart" size={21} />
                  </span>
                  <div>
                    <strong>Gentle removal</strong>
                    <span>
                      Thoughtful soak-offs and e-file care help preserve natural
                      nail strength.
                    </span>
                  </div>
                </div>
              </div>
              <a
                className="button button-outline craft-cta"
                href="tel:+919315069595"
              >
                <Icon name="call" size={17} /> Speak with a senior consultant
              </a>
            </div>
          </div>
        </section>

        <section className="amenities-section section-wrap">
          <div className="amenities-heading">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Studio comfort &amp; hospitality
            </p>
            <h2>
              Thoughtfully curated <em>amenities</em>
            </h2>
          </div>
          <div className="amenities-grid">
            {amenities.map((amenity) => (
              <article className="amenity-card" key={amenity.title}>
                <span className="amenity-icon">
                  <Icon name={amenity.icon} size={24} />
                </span>
                <strong>{amenity.title}</strong>
                <span>{amenity.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="reviews-inner section-wrap">
            <div className="reviews-heading">
              <div>
                <p className="eyebrow">
                  <Icon name="star" size={15} /> Verified Google feedback
                </p>
                <h2>
                  Client love <em>&amp; experiences</em>
                </h2>
              </div>
              <div className="rating-pill">
                <span className="rating-number">
                  4.8 <small>/ 5</small>
                </span>
                <span className="rating-stars">
                  <Icon name="star" size={14} />
                  <Icon name="star" size={14} />
                  <Icon name="star" size={14} />
                  <Icon name="star" size={14} />
                  <Icon name="star" size={14} />
                </span>
                <span>71 verified reviews</span>
              </div>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-card-top">
                    <span className="quote-mark">
                      <Icon name="quote" size={22} />
                    </span>
                    <span className="verified-label">
                      <Icon name="verified" size={14} /> Verified review
                    </span>
                  </div>
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    <Icon name="star" size={15} />
                    <Icon name="star" size={15} />
                    <Icon name="star" size={15} />
                    <Icon name="star" size={15} />
                    <Icon name="star" size={15} />
                  </div>
                  <p className="review-quote">“{review.quote}”</p>
                  <div className="review-author">
                    <span className="review-avatar">{review.initials}</span>
                    <span>
                      <strong>{review.name}</strong>
                      <small>{review.service}</small>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-section section-wrap" id="contact">
          <div className="booking-panel">
            <div className="booking-orb" />
            <div className="booking-copy">
              <span className="live-pill">
                <span className="live-dot" /> Daily rituals live · 11 AM–9 PM
              </span>
              <h2>
                Reserve your private suite at <em>Habitat Centre.</em>
              </h2>
              <p>
                Walk-ins are welcome, subject to technician availability. For
                priority seating, bridal consultations, or festive combos, save
                your time slot with our WhatsApp concierge.
              </p>
              <div className="booking-details">
                <span>
                  <Icon name="location" size={17} /> Indirapuram Habitat Centre
                  (G-288)
                </span>
                <span>
                  <Icon name="clock" size={17} /> Open 7 days a week
                </span>
              </div>
            </div>
            <div className="booking-actions">
              <a
                className="button button-primary"
                href={appointmentUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="calendar" size={18} /> WhatsApp appointment
              </a>
              <a className="button button-glass" href="tel:+919315069595">
                <Icon name="call" size={18} /> Direct call: 093150 69595
              </a>
            </div>
          </div>
        </section>
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
            <a href="#home">Sanctuary experience</a>
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
            <a href={appointmentUrl} target="_blank" rel="noreferrer">
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
