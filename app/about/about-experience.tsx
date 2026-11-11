"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "accessible"
  | "arrow"
  | "arrow-up-right"
  | "calendar"
  | "call"
  | "chat"
  | "check"
  | "clock"
  | "heart"
  | "location"
  | "menu"
  | "moon"
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
  accessible: (
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
  heart: <path d="M20.5 8.8c0 5.1-8.5 10.2-8.5 10.2S3.5 13.9 3.5 8.8A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 8.5 1.7Z" />,
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  moon: <path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.8 8.8 0 1 0 20.5 15.2Z" />,
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
      <path d="M12 20V9m0 0c0-3.5 2-5.5 5.5-6-0 4-1.7 6-5.5 6Z" />
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
  wifi: <path d="M2.5 8.5a14 14 0 0 1 19 0M5.5 12a9.5 9.5 0 0 1 13 0M8.7 15.4a4.8 4.8 0 0 1 6.6 0M12 19h.01" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services & Menu", href: "/services" },
  { label: "Lookbook & Gallery", href: "/lookbook" },
  { label: "About & Reviews", href: "/about" },
  { label: "Contact & Location", href: "/contact" },
];

const artists = [
  {
    name: "Shoyab",
    role: "Master Nail Sculptor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDU1LoyZzdfOabwI3ZMFzWwkYNHjFvAvjUl3a2N9aSTSjwYHKZ-xyBSovWu4wpelY1A3U3sFU92OFAcp89HFIQrZh7A_vvs3K0h8QUbv5BrKgzcB1dDT1iYCX7_GfVSN7sPkwCOqN_Y5JV6eSp7eQOOp7SFg23QzWLgQG9O4Q8fi2xks9sGXJn13bq6mgitWZEmG_ZQeYx0as0grrJvUa7tka-J3V1e1ngUSiUuZyI",
    alt: "Shoyab, master nail sculptor, in the Nailashes studio",
    years: "5+ years craftsmanship",
    description:
      "Celebrated for remarkable speed on full sets without compromising crisp edges, structural durability, or cuticle gentleness.",
    specialties: ["3D sculpture", "Chrome art", "Acrylic"],
    favorite: true,
  },
  {
    name: "Priya M.",
    role: "Lead Eyelash Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-dh0U0opMqTNSpB90pfkwdYlxsC5rwPrLrLW2w0wVPCEbZ0y5ko2EmfrjuykOY1vfgkN2YUupjwBLZO6MN5__MW0JpQELzeXZ8HQPOhrS5aTDz-bKG1i3Wsm4bSPGdncBxNmf0JvAx-IkFHKEK94382-8oOsZSz4iST0IbbF8kfgihCOnGfNhRPbdm0vDFNmOAIAi69KMmCDVo_5FByZ6nljIpJn5O8o2-_5faC8",
    alt: "Priya M., lead lash specialist, holding precision lash tweezers",
    years: "Certified volume master",
    description:
      "Specialist in Russian volume fans and featherweight hybrid mapping, with a focus on natural lash preservation and comfortable application.",
    specialties: ["Classic 1:1", "Russian volume", "Lash lift"],
    favorite: false,
  },
  {
    name: "Aamir K.",
    role: "Senior Nail Artisan",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCKVHjdp87zK0_Z5yCnrs1wCknqhJHSfEev87LQAol38cMGWWTiJENdir2N_AexJQa7iOPCXmunoKewtEgCeM3xi7EhH40W0_x441eO9YvWjHOfO-cRmC__WrW-WEL8pkaC9zL4mm97mkFLGbb2rDrVFr5L_Xefntg33HnjxTeGeACu7KF5yR5N4a8ywdd1UBTU0aQ02r0WfGHtOeehOQgveJwxdexsL4pS1Cx_E",
    alt: "Aamir K., senior nail artisan, with gel polish and studio tools",
    years: "Chrome & hand-painted specialist",
    description:
      "Known for intricate bridal art, airbrushed ombré gradients, and shape recommendations tailored to each guest.",
    specialties: ["French ombré", "Bridal art", "Gel polish"],
    favorite: false,
  },
];

const testimonials = [
  {
    initials: "S",
    name: "Shilpa Pathak",
    source: "Google Local Guide",
    date: "1 month ago",
    quote:
      "Absolutely loved my experience! The nail extensions turned out beautiful and exactly how I wanted them. The staff and owner were friendly, professional, and paid great attention to detail. The salon was clean and comfortable, and the service was amazing. I’m really happy with my nails and will definitely be coming back. Highly recommended! A big shout out to Shoyab. 🥰",
  },
  {
    initials: "T",
    name: "Tushika Singh",
    source: "Verified client",
    date: "1 month ago",
    quote:
      "The experience was really good. I got my nails done for the first time. The staff was really nice. They advised me on what shape and color to go for, the pros and cons of each. The nail tech was experienced and did my nails in less than an hour. Highly recommended.",
  },
  {
    initials: "R",
    name: "Rhea Kapoor",
    source: "Verified client",
    date: "Recent visit",
    quote:
      "Cleanest salon suite in Habitat Centre. From the moment you walk in, the ambience feels opulent and calming. The technician helped me choose a subtle French chrome look that stayed pristine for nearly 4 weeks with zero chipping!",
  },
];

const principles = [
  {
    icon: "person" as const,
    title: "Master certified stylists",
    description:
      "Artists train in anatomy, structural balancing, and micro-precision lash placement.",
  },
  {
    icon: "shield" as const,
    title: "Autoclave sterilization",
    description:
      "Medical-grade sterilization pouches are opened individually before each client.",
  },
  {
    icon: "heart" as const,
    title: "Premium cruelty-free",
    description:
      "Vegan pigments and gentle adhesive systems chosen with natural nails and sensitive eyes in mind.",
  },
  {
    icon: "verified" as const,
    title: "Transparent pricing",
    description:
      "Clear service tiers, upfront consultations, shaping guidance, and care instructions.",
  },
];

const amenities = [
  {
    icon: "accessible" as const,
    title: "Full accessibility",
    text: "Wheelchair accessible entrance and comfortable step-free salon seating.",
  },
  {
    icon: "wifi" as const,
    title: "High-speed Wi-Fi",
    text: "Complimentary Wi-Fi to work or stream while your nails cure.",
  },
  {
    icon: "heart" as const,
    title: "LGBTQ+ friendly",
    text: "An inclusive, affirming, and welcoming sanctuary for every client.",
  },
  {
    icon: "check" as const,
    title: "All payment modes",
    text: "Tap-to-pay NFC, UPI, GPay, Paytm, and credit or debit cards.",
  },
];

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

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="about-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => <Icon key={index} name="star" size={size} />)}
    </span>
  );
}

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

export default function AboutExperience() {
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
    <div className="site-shell about-page">
      <header className="site-header">
        <div className="topline">
          <div className="topline-inner">
            <div className="topline-group">
              <span className="topline-item"><Icon name="location" size={15} /> Indirapuram Habitat Centre (G-288)</span>
              <span className="topline-separator">•</span><span>Open daily 11 AM–9 PM</span>
            </div>
            <div className="topline-group">
              <span className="topline-item"><Icon name="star" size={15} /> <strong>4.8</strong><span className="muted">(71 verified reviews)</span></span>
              <span className="topline-separator">•</span><a className="topline-item topline-phone" href="tel:+919315069595"><Icon name="call" size={14} /> +91 93150 69595</a>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar-inner">
            <Brand />
            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map((item) => <a key={item.label} className={item.label === "About & Reviews" ? "nav-link active" : "nav-link"} href={item.href}>{item.label}</a>)}
            </nav>
            <div className="nav-actions">
              <button className="theme-toggle" type="button" aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"} title={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><Icon name={theme === "dark" ? "sun" : "moon"} size={18} /></button>
              <a className="button button-small button-primary header-book" href="https://wa.me/919315069595" target="_blank" rel="noreferrer"><Icon name="calendar" size={17} /><span>Book Appointment</span></a>
              <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "x" : "menu"} size={22} /></button>
            </div>
          </div>
          <nav className={menuOpen ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Icon name="arrow-up-right" size={16} /></a>)}
            <a className="mobile-nav-book" href="/contact" onClick={() => setMenuOpen(false)}>Book a private consultation<Icon name="arrow-up-right" size={16} /></a>
          </nav>
        </div>
      </header>

      <main className="about-main">
        <section className="about-hero">
          <div className="about-hero-inner section-wrap">
            <div className="about-hero-copy">
              <span className="about-network-pill"><Icon name="verified" size={15} /> 90+ studios nationwide <i>•</i> Indirapuram suite</span>
              <h1>The Art of <em>Refined Beauty</em></h1>
              <p>Part of India’s premier beauty studio network, bringing international hygiene standards and master craftsmanship to Indirapuram, Ghaziabad.</p>
              <div className="about-hero-actions">
                <a className="button button-primary" href="/contact"><Icon name="calendar" size={18} /> Plan your visit</a>
                <a className="button button-outline" href="#heritage">Discover our approach <Icon name="arrow" size={17} /></a>
              </div>
            </div>
            <div className="about-hero-rating">
              <div className="about-rating-number"><strong>4.8</strong><span>out of 5.0</span></div>
              <Stars size={17} />
              <p>Based on 71+ Google verified reviews from clients across NCR.</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer"><Icon name="verified" size={15} /> Verified Google Business studio</a>
            </div>
          </div>
          <div className="about-hero-image-wrap">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrOmc4lYeIfJ0FMWVndOWYR4l0kPICb05wf_e1KGXfq4LN2KvWTHBSws74P0nq-3AwMpHFYufDgLW_7QgsOAHz9IhGiYVYrTCexMNpOdi2B9bAsnH_BMYSdJR4m7UU7UMxR71gusNFc_tS0i6DUZo_VkrUtWpzqFIu1zL7LJKbyMOmQB_buG3Z9pyElyxkzqPviNjcvvuXnFrDtjqTjSnvhErT87JiRhJNuCXeuF8" alt="Luxury Nailashes salon suite with plush chairs, marble manicure tables, and rose gold lighting" fetchPriority="high" />
            <div className="about-hero-image-shade" />
            <div className="about-image-caption"><Icon name="location" size={18} /><span><strong>Habitat Centre Studio</strong><small>Private nail suites &amp; lash sanctuary · G-288</small></span><Icon name="arrow-up-right" size={17} /></div>
          </div>
        </section>

        <section className="about-heritage section-wrap" id="heritage">
          <div className="heritage-copy">
            <span className="about-eyebrow">Our heritage</span>
            <h2>Founded on precision, hygiene <em>&amp; individualized luxury.</em></h2>
            <p>Nailashes Indirapuram was conceived to elevate nail couture and lash architecture from routine appointments into transformative self-care rituals. Situated on the Ground Floor (G-288) at the prestigious Indirapuram Habitat Centre, our studio offers a calm retreat in Ghaziabad.</p>
            <p>Whether you’re preparing for a milestone occasion, maintaining signature Russian volume lashes, or discovering sculpted acrylic extensions for the first time, every visit begins with a personal consultation shaped around your natural anatomy, lifestyle, and aesthetic vision.</p>
            <div className="heritage-stats">
              <div><strong>90+</strong><span>Pan-India studios</span></div>
              <div><strong>&lt;60m</strong><span>Swift full sets</span></div>
              <div><strong>100%</strong><span>Sterilized tools</span></div>
            </div>
            <a className="about-text-link" href="/services">Explore our service menu <Icon name="arrow-up-right" size={16} /></a>
          </div>
          <div className="heritage-visual">
            <div className="heritage-photo heritage-photo-main">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBihQZl9eq-W16E2GmP96PAcBd4jzgvI_Bc2FHy9jLGudzYumkkF2Fi0YCLgZI9CTfkU5G2ZzdjxDJ1UtlPe0GDXOgcrOYEeRxy05Ax-Tz_6Iii2u3xRD6gFjdotcKUOZs3tRXLFabebJFXMJRDwhSeHCY4-AoUlh2tHnLe_bPVN7QYsmiZQMko3jC2ZHDe14as1FCMXpJdjBJrcbAwnk0LaGlwP7uZXuCPWhKN5oU" alt="Nail artist carefully shaping a rose gold ombré gel extension" loading="lazy" />
              <span><Icon name="sparkle" size={17} /> Artisan precision</span>
            </div>
            <div className="heritage-photo heritage-photo-small">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDajRXJ7JWK_TKAtGjhlH7dzQO3fVrTiVjgFYvERNg1k6Z1kuYsZLo7bfUGJSsRTRqhwpZdUKP7om_SZEshQqy7WC0vhR455I2elta8dnAyv35OWuG703h7VvV68FuPMkIz4hX-u6Hr_J1Inu3ud-rU4F-rriPplO89tupjN0eHdWXZ3Hf44sxHmfLoqZoaN8Y2J2ToYVGvuvK6fK84gkwBLONZb_BzMVcxsXtWo9Y" alt="Autoclaved manicure tools and botanical cuticle oils" loading="lazy" />
              <span><Icon name="shield" size={17} /> Care you can trust</span>
            </div>
          </div>
        </section>

        <section className="about-principles">
          <div className="section-wrap">
            <div className="about-section-heading">
              <span className="about-eyebrow">The Nailashes standard</span>
              <h2>Beautiful results start with <em>thoughtful care.</em></h2>
            </div>
            <div className="principles-grid">
              {principles.map((principle, index) => <article className="principle-card" key={principle.title}><span className="principle-index">0{index + 1}</span><span className="principle-icon"><Icon name={principle.icon} size={23} /></span><h3>{principle.title}</h3><p>{principle.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="about-artists section-wrap">
          <div className="about-section-heading artists-heading">
            <div><span className="about-eyebrow">Crafted by artisans</span><h2>Master sculptors <em>&amp; lash architects.</em></h2></div>
            <p>Behind every bespoke set is a dedicated artist who blends anatomy, design aesthetics, and gentle finesse.</p>
          </div>
          <div className="artists-grid">
            {artists.map((artist) => <article className="artist-card" key={artist.name}>
              <div className="artist-photo">
                <img src={artist.image} alt={artist.alt} loading="lazy" />
                {artist.favorite ? <span className="artist-favorite"><Icon name="star" size={13} /> Client favorite</span> : null}
              </div>
              <div className="artist-content">
                <div className="artist-heading"><div><h3>{artist.name}</h3><span>{artist.role}</span></div><Icon name="verified" size={20} /></div>
                <span className="artist-years">{artist.years}</span>
                <p>{artist.description}</p>
                <div className="artist-specialties">{artist.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}</div>
              </div>
            </article>)}
          </div>
          <div className="artist-spotlight">
            <span className="spotlight-stars"><Stars size={14} /></span>
            <p>“A big shout out to Shoyab. 🥰 Paid great attention to detail!”</p>
            <span>Verified guest mention</span>
          </div>
        </section>

        <section className="about-testimonials" id="reviews">
          <div className="section-wrap">
            <div className="reviews-summary">
              <div className="about-section-heading">
                <span className="about-eyebrow"><Icon name="verified" size={15} /> Client testimonials</span>
                <h2>Loved by discerning guests <em>across Ghaziabad.</em></h2>
                <p>Every appointment is measured by satisfaction, hygiene comfort, and artistry that lasts. Here are a few notes from our guests.</p>
              </div>
              <div className="review-score-card">
                <div className="review-score-top"><strong>4.8 <small>/ 5.0</small></strong><Stars size={15} /></div>
                <span className="review-total">71 total reviews</span>
                <div className="rating-breakdown">
                  <div><span>5 stars</span><span className="rating-track"><i style={{ width: "91%" }} /></span><strong>91%</strong></div>
                  <div><span>4 stars</span><span className="rating-track"><i style={{ width: "7%" }} /></span><strong>7%</strong></div>
                  <div><span>3 &amp; below</span><span className="rating-track"><i style={{ width: "2%" }} /></span><strong>2%</strong></div>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer">Read all 71 Google reviews <Icon name="arrow-up-right" size={15} /></a>
              </div>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-meta"><Stars size={15} /><span>{testimonial.date}</span></div>
                <span className="testimonial-quote-icon"><Icon name="quote" size={22} /></span>
                <p>{testimonial.quote}</p>
                <div className="testimonial-author"><span>{testimonial.initials}</span><div><strong>{testimonial.name}</strong><small><Icon name="verified" size={12} /> {testimonial.source}</small></div></div>
              </article>)}
            </div>
            <p className="google-disclaimer"><Icon name="verified" size={14} /> Reviews shown are verified guest feedback from the Nailashes Google Business profile.</p>
          </div>
        </section>

        <section className="about-amenities section-wrap">
          <div className="about-section-heading">
            <span className="about-eyebrow">Comfort &amp; inclusivity</span>
            <h2>Thoughtful amenities <em>designed for you.</em></h2>
            <p>Located on the Ground Floor at Indirapuram Habitat Centre, with easy parking and the hospitality touches that make your visit feel effortless.</p>
          </div>
          <div className="about-amenities-grid">
            {amenities.map((amenity) => <article key={amenity.title}><span><Icon name={amenity.icon} size={22} /></span><div><h3>{amenity.title}</h3><p>{amenity.text}</p></div></article>)}
          </div>
        </section>

        <section className="about-location section-wrap">
          <div className="about-location-image"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrOmc4lYeIfJ0FMWVndOWYR4l0kPICb05wf_e1KGXfq4LN2KvWTHBSws74P0nq-3AwMpHFYufDgLW_7QgsOAHz9IhGiYVYrTCexMNpOdi2B9bAsnH_BMYSdJR4m7UU7UMxR71gusNFc_tS0i6DUZo_VkrUtWpzqFIu1zL7LJKbyMOmQB_buG3Z9pyElyxkzqPviNjcvvuXnFrDtjqTjSnvhErT87JiRhJNuCXeuF8" alt="Nailashes private studio suite at Indirapuram Habitat Centre" loading="lazy" /><div><span>Find us</span><strong>Indirapuram Habitat Centre</strong></div></div>
          <div className="about-location-copy">
            <span className="about-eyebrow">Indirapuram Habitat Centre</span>
            <h2>A little sanctuary, <em>right next door.</em></h2>
            <p>Ground Floor – Unit G-288, directly next to Baskin Robbins, Plot No. 16, Habitat Centre, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014.</p>
            <div className="location-detail"><Icon name="clock" size={18} /><span><strong>Daily hours</strong><small>Monday–Sunday · 11:00 AM–9:00 PM</small></span></div>
            <div className="location-detail"><Icon name="call" size={18} /><span><strong>Direct studio line</strong><small>+91 93150 69595</small></span></div>
            <div className="about-location-actions"><a className="button button-primary" href="/contact"><Icon name="location" size={17} /> Get directions</a><a className="button button-outline" href="tel:+919315069595"><Icon name="call" size={17} /> Call studio</a></div>
          </div>
        </section>

        <section className="about-final-cta section-wrap">
          <div className="about-cta-panel">
            <div className="about-cta-orb" />
            <div><span className="about-eyebrow">Your ritual awaits</span><h2>Experience the Nailashes standard <em>today.</em></h2><p>Book a private consultation or drop by our Indirapuram studio for tailored nail extensions, bespoke art, and couture lash styling.</p></div>
            <div className="about-cta-actions"><a className="button button-primary" href="/contact"><Icon name="calendar" size={18} /> Book an appointment</a><a className="button button-glass" href="tel:+919315069595"><Icon name="call" size={18} /> 093150 69595</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-about"><Brand /><span className="footer-luxury">LUXURY BEAUTY STUDIO</span><p>Nailashes Indirapuram brings high-couture nail art, bespoke lash styling, and indulgent beauty rituals to your neighbourhood.</p><div className="footer-rating"><Icon name="star" size={15} /><strong>4.8 / 5.0</strong><span>Google verified</span></div></div>
          <div className="footer-column"><h3>Quick links</h3><a href="/">Sanctuary experience</a><a href="/services">Full couture menu</a><a href="/lookbook">Seasonal lookbook</a><a href="/about#reviews">Client testimonials</a><a href="/contact">Book a private suite</a></div>
          <div className="footer-column"><h3>Signature services</h3><a href="/services">Gel &amp; acrylic extensions</a><a href="/services">Chrome &amp; 3D bespoke art</a><a href="/services">Russian volume lashes</a><a href="/services">Velvet rose spa mani-pedi</a><a href="/services">Lash lift &amp; brow styling</a></div>
          <div className="footer-column footer-visit"><h3>Studio visit</h3><p><Icon name="location" size={18} /> Ground Floor, G-288, Habitat Centre, Ahinsa Khand 1, Ghaziabad, UP 201014</p><p><Icon name="clock" size={18} /> Daily, 11 AM–9 PM</p><a href="tel:+919315069595"><Icon name="call" size={17} /> +91 93150 69595</a><a href="https://wa.me/919315069595" target="_blank" rel="noreferrer"><Icon name="arrow-up-right" size={17} /> WhatsApp concierge</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2025 Nailashes Indirapuram. All rights reserved.</span><span>Handcrafted luxury for discerning clientele.</span></div>
      </footer>
    </div>
  );
}
