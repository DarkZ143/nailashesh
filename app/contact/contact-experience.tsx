"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

type IconName =
  | "accessible"
  | "arrow"
  | "arrow-up-right"
  | "calendar"
  | "call"
  | "card"
  | "chat"
  | "check"
  | "clock"
  | "heart"
  | "icecream"
  | "location"
  | "lock"
  | "menu"
  | "moon"
  | "nfc"
  | "parking"
  | "person"
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
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 9h18M7 15h4" />
    </>
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
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  moon: <path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.8 8.8 0 1 0 20.5 15.2Z" />,
  nfc: (
    <>
      <path d="M8 5a10 10 0 0 0 0 14M11 8a5.5 5.5 0 0 0 0 8m3-8a5.5 5.5 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  parking: (
    <>
      <path d="M5 21V3h7a5 5 0 0 1 0 10H5" />
      <path d="M9 7v2h3a1 1 0 0 0 0-2H9Z" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
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
  wifi: (
    <>
      <path d="M2.5 8.5a14 14 0 0 1 19 0M5.5 12a9.5 9.5 0 0 1 13 0M8.7 15.4a4.8 4.8 0 0 1 6.6 0M12 19h.01" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services & Menu", href: "/services" },
  { label: "Lookbook & Gallery", href: "/lookbook" },
  { label: "About & Reviews", href: "/about" },
  { label: "Contact & Location", href: "/contact" },
];

const serviceOptions = [
  "Nail Extensions & Bespoke 3D Art (Acrylic / Gel)",
  "Lash Styling (Classic, Hybrid, Volume Lashes)",
  "Velvet Rose Spa Manicure & Pedicure",
  "Festive Combo / Seasonal Special Offer",
  "Gel Paint & French Overlay Refill",
  "Lash Lift & Brow Lamination Treatment",
];

const timeOptions = [
  { value: "11:00 AM - 01:00 PM", label: "Morning Ritual (11:00 AM – 01:00 PM)" },
  { value: "01:00 PM - 03:00 PM", label: "Afternoon Glow (01:00 PM – 03:00 PM)" },
  { value: "03:00 PM - 05:00 PM", label: "High-Teatime Lounge (03:00 PM – 05:00 PM)" },
  { value: "05:00 PM - 07:00 PM", label: "Evening Elegance (05:00 PM – 07:00 PM)" },
  { value: "07:00 PM - 08:30 PM", label: "Night Soirée (07:00 PM – 08:30 PM)" },
];

const hours = [
  ["Monday", "11:00 AM – 9:00 PM"],
  ["Tuesday", "11:00 AM – 9:00 PM"],
  ["Wednesday", "11:00 AM – 9:00 PM"],
  ["Thursday", "11:00 AM – 9:00 PM"],
  ["Friday", "11:00 AM – 9:00 PM"],
  ["Saturday", "11:00 AM – 9:00 PM"],
  ["Sunday", "11:00 AM – 9:00 PM"],
];

const amenities = [
  { icon: "wifi" as const, title: "Free High-Speed Wi-Fi", detail: "Seamless access" },
  { icon: "accessible" as const, title: "Wheelchair Access", detail: "Entrance & seating" },
  { icon: "heart" as const, title: "LGBTQ+ Friendly", detail: "Inclusive safe space" },
  { icon: "spa" as const, title: "Climate Controlled", detail: "Air-conditioned lounge" },
  { icon: "nfc" as const, title: "Easy Payments", detail: "UPI, NFC, cards & cash" },
  { icon: "person" as const, title: "Private Nail Lounge", detail: "A calm studio suite" },
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

type BookingDetails = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

function localDateValue() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

export default function ContactExperience() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");
  const [booking, setBooking] = useState<BookingDetails>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nailashes-theme");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    setMinimumDate(localDateValue());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("nailashes-theme", theme);
  }, [theme]);

  const previewDate = booking.date
    ? new Date(booking.date + "T00:00:00").toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Preferred Date";

  function updateBooking(field: keyof BookingDetails, value: string) {
    setBooking((current) => ({ ...current, [field]: value }));
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi Nailashes Indirapuram,",
      "",
      "I want to book an appointment with details below:",
      "• Name: " + (booking.name.trim() || "Guest"),
      "• Contact: " + booking.phone.trim(),
      "• Service: " + (booking.service || "Luxury Service"),
      "• Preferred Date: " + (booking.date || "Soon"),
      "• Time Slot: " + (booking.time || "Flexible Slot"),
      "• Reference / Requests: " + (booking.notes.trim() || "None"),
      "",
      "Please confirm available slots at Indirapuram Habitat Centre (G-288). Thank you!",
    ].join("\n");
    const whatsappUrl = "https://wa.me/919315069595?text=" + encodeURIComponent(message);
    const opened = window.open(whatsappUrl, "_blank");
    if (opened) opened.opener = null;
    else window.location.assign(whatsappUrl);
  }

  return (
    <div className="site-shell contact-page">
      <header className="site-header">
        <div className="topline">
          <div className="topline-inner">
            <div className="topline-group">
              <span className="topline-item"><Icon name="location" size={15} /> Indirapuram Habitat Centre (G-288)</span>
              <span className="topline-separator">•</span><span>Open daily 11 AM–9 PM</span>
            </div>
            <div className="topline-group">
              <span className="topline-item"><Icon name="star" size={15} /> <strong>4.8</strong><span className="muted">(71 verified reviews)</span></span>
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
                <a key={item.label} className={item.label === "Contact & Location" ? "nav-link active" : "nav-link"} href={item.href}>{item.label}</a>
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
              <a className="button button-small button-primary header-book" href="https://wa.me/919315069595" target="_blank" rel="noreferrer"><Icon name="calendar" size={17} /><span>Book Appointment</span></a>
              <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "x" : "menu"} size={22} /></button>
            </div>
          </div>
          <nav className={menuOpen ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Icon name="arrow-up-right" size={16} /></a>)}
            <a className="mobile-nav-book" href="#booking" onClick={() => setMenuOpen(false)}>Book your appointment<Icon name="arrow-up-right" size={16} /></a>
          </nav>
        </div>
      </header>

      <main className="contact-main">
        <section className="contact-hero section-wrap">
          <div className="contact-hero-copy">
            <div className="contact-breadcrumb"><Icon name="sparkle" size={15} /><span>Concierge &amp; private suites</span><i>•</i><span>Habitat Centre G-288</span></div>
            <h1>Visit our studio &amp; <em>book an appointment</em></h1>
            <p>Located at Indirapuram Habitat Centre. Walk-ins are welcome; prior reservations are recommended.</p>
            <div className="contact-hero-actions">
              <a href="tel:+919315069595"><Icon name="call" size={17} /> Direct call: 093150 69595</a>
              <a href="https://wa.me/919315069595" target="_blank" rel="noreferrer"><Icon name="chat" size={17} /> Instant WhatsApp concierge</a>
              <span className="open-hours-pill"><span /> Open daily · 11 AM–9 PM</span>
            </div>
          </div>
          <div className="contact-hero-decoration" aria-hidden="true"><span className="contact-orbit contact-orbit-one" /><span className="contact-orbit contact-orbit-two" /><span className="contact-hero-seal"><Icon name="location" size={28} />G-288</span></div>
        </section>

        <section className="contact-content section-wrap">
          <div className="contact-information">
            <article className="contact-info-card address-card">
              <div className="contact-card-heading">
                <div><span>Atelier location</span><h2>Indirapuram Studio</h2></div>
                <span className="contact-card-icon"><Icon name="location" size={23} /></span>
              </div>
              <div className="landmark-banner"><span><Icon name="icecream" size={20} /></span><div><small>Immediate landmark</small><strong>Ground floor, right next to Baskin Robbins</strong></div></div>
              <p className="postal-address">Ground Floor – G-288 (Plot No. 16), Indirapuram Habitat Centre, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014, India.</p>
              <div className="address-actions">
                <a href="https://www.google.com/maps/dir//Nailashes+-+Indirapuram/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfbcaf7454ab7:0xa5e775164e577378!2m2!1d77.3688404!2d28.639757999999997" target="_blank" rel="noreferrer"><Icon name="arrow-up-right" size={15} /> Get route</a>
                <a href="tel:+919315069595"><Icon name="call" size={15} /> Call studio</a>
              </div>
            </article>

            <article className="contact-info-card hours-card">
              <div className="contact-card-heading">
                <div><span>Opening schedule</span><h2>Hours of operation</h2></div>
                <span className="hours-status"><span /> 7 days a week</span>
              </div>
              <div className="hours-list">
                {hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}
              </div>
              <p className="last-intake"><Icon name="clock" size={15} /> Last service intake begins at 8:00 PM.</p>
            </article>

            <article className="contact-info-card amenities-card">
              <span className="contact-section-label">Sanctuary comforts</span>
              <h2>Amenities &amp; accessibility</h2>
              <div className="amenities-list">
                {amenities.map((amenity) => <div className="contact-amenity" key={amenity.title}><span><Icon name={amenity.icon} size={18} /></span><div><strong>{amenity.title}</strong><small>{amenity.detail}</small></div></div>)}
              </div>
            </article>

            <article className="network-card">
              <span><Icon name="verified" size={23} /></span>
              <div><h3>India’s leading nail &amp; lash network</h3><p>Part of Nailashes nationwide, with 90+ studios, certified master technicians, medical-grade hygiene autoclaves, and premium lacquers.</p></div>
            </article>
          </div>

          <div className="booking-column" id="booking">
            <section className="booking-form-card">
              <div className="booking-form-heading">
                <div><span>Direct salon reservation</span><h2>Book your luxury session</h2></div>
                <div className="booking-direct-line"><small>Studio direct line</small><strong>+91 93150 69595</strong></div>
              </div>

              <form className="booking-form" onSubmit={submitBooking}>
                <div className="form-grid two-column">
                  <div className="form-field">
                    <label htmlFor="fullName">Full name <span>*</span></label>
                    <div className="form-input-wrap"><Icon name="person" size={18} /><input id="fullName" name="fullName" autoComplete="name" placeholder="e.g. Ananya Sharma" required value={booking.name} onChange={(event) => updateBooking("name", event.target.value)} /></div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="phoneWhatsApp">Phone / WhatsApp number <span>*</span></label>
                    <div className="form-input-wrap"><Icon name="call" size={18} /><input id="phoneWhatsApp" name="phoneWhatsApp" autoComplete="tel" inputMode="tel" placeholder="093150 XXXXX / 98765 XXXXX" required type="tel" value={booking.phone} onChange={(event) => updateBooking("phone", event.target.value)} /></div>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="serviceSelect">Preferred service <span>*</span></label>
                  <div className="form-input-wrap select-wrap"><Icon name="spa" size={18} /><select id="serviceSelect" name="service" required value={booking.service} onChange={(event) => updateBooking("service", event.target.value)}><option disabled value="">Select from Couture Treatment Menu...</option>{serviceOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select><span className="select-chevron">⌄</span></div>
                </div>

                <div className="form-grid two-column">
                  <div className="form-field">
                    <label htmlFor="appointmentDate">Preferred date <span>*</span></label>
                    <div className="form-input-wrap"><Icon name="calendar" size={18} /><input id="appointmentDate" name="appointmentDate" min={minimumDate} required type="date" value={booking.date} onChange={(event) => updateBooking("date", event.target.value)} /></div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="timeSlot">Preferred time slot <span>*</span></label>
                    <div className="form-input-wrap select-wrap"><Icon name="clock" size={18} /><select id="timeSlot" name="timeSlot" required value={booking.time} onChange={(event) => updateBooking("time", event.target.value)}><option disabled value="">Choose studio time slot...</option>{timeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select><span className="select-chevron">⌄</span></div>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="specialRequests">Special request / reference note</label>
                  <textarea id="specialRequests" name="specialRequests" rows={3} placeholder="Share nail length, French/chrome inspiration, bridal needs, or artist preference (e.g. Shoyab)..." value={booking.notes} onChange={(event) => updateBooking("notes", event.target.value)} />
                </div>

                <div className="live-preview">
                  <div><Icon name="verified" size={17} /><strong>Instant concierge sync</strong></div>
                  <p>“Hello Nailashes Indirapuram! My name is <strong>{booking.name.trim() || "Guest"}</strong>. I would like to reserve <strong>{booking.service || "a beauty service"}</strong> on <strong>{previewDate} ({booking.time || "Preferred Time"})</strong>.”</p>
                </div>

                <button className="button button-primary booking-submit" type="submit"><Icon name="arrow-up-right" size={20} /> Confirm booking on WhatsApp</button>
              </form>
              <div className="booking-assurance"><Icon name="lock" size={14} /> Direct reservation · No booking fee · Reschedule anytime</div>
            </section>
          </div>
        </section>

        <section className="contact-map-section section-wrap">
          <div className="contact-map-card">
            <div className="contact-map-heading">
              <div><span>Navigation &amp; parking</span><h2>Habitat Centre studio map</h2><p>Easy ground-floor access, valet, and multi-level parking at Indirapuram Habitat Centre. We’re next to Baskin Robbins.</p></div>
              <a href="https://www.google.com/maps/dir//Nailashes+-+Indirapuram/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfbcaf7454ab7:0xa5e775164e577378!2m2!1d77.3688404!2d28.639757999999997" target="_blank" rel="noreferrer"><Icon name="location" size={17} /> Get directions on Google Maps</a>
            </div>
            <div className="contact-map-visual" role="img" aria-label="Illustrated map view of Indirapuram Habitat Centre">
              <div className="map-grid-lines" />
              <span className="map-road map-road-one" /><span className="map-road map-road-two" /><span className="map-road map-road-three" />
              <div className="map-place-label map-place-label-one"><span />Habitat Centre</div>
              <div className="map-place-label map-place-label-two"><span />Baskin Robbins</div>
              <div className="map-pin"><Icon name="location" size={25} /><span>Nailashes</span></div>
              <div className="map-address-card">
                <span><Icon name="location" size={21} /></span>
                <div><strong>Nailashes Studio <small>G-288</small></strong><p>Indirapuram Habitat Centre, Ahinsa Khand 1, Ghaziabad</p><div><span><Icon name="parking" size={14} /> Valet available</span><i>•</i><span>Ground floor</span></div></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-about">
            <Brand /><span className="footer-luxury">LUXURY BEAUTY STUDIO</span>
            <p>Nailashes Indirapuram brings high-couture nail art, bespoke lash styling, and indulgent beauty rituals to your neighbourhood.</p>
            <div className="footer-rating"><Icon name="star" size={15} /><strong>4.8 / 5.0</strong><span>Google verified</span></div>
          </div>
          <div className="footer-column"><h3>Quick links</h3><a href="/">Sanctuary experience</a><a href="/services">Full couture menu</a><a href="/lookbook">Seasonal lookbook</a><a href="/about">Client testimonials</a><a href="/contact">Book a private suite</a></div>
          <div className="footer-column"><h3>Signature services</h3><a href="/services">Gel &amp; acrylic extensions</a><a href="/services">Chrome &amp; 3D bespoke art</a><a href="/services">Russian volume lashes</a><a href="/services">Velvet rose spa mani-pedi</a><a href="/services">Lash lift &amp; brow styling</a></div>
          <div className="footer-column footer-visit"><h3>Studio visit</h3><p><Icon name="location" size={18} /> Ground Floor, G-288, Habitat Centre, Ahinsa Khand 1, Ghaziabad, UP 201014</p><p><Icon name="clock" size={18} /> Daily, 11 AM–9 PM</p><a href="tel:+919315069595"><Icon name="call" size={17} /> +91 93150 69595</a><a href="https://wa.me/919315069595" target="_blank" rel="noreferrer"><Icon name="arrow-up-right" size={17} /> WhatsApp concierge</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2025 Nailashes Indirapuram. All rights reserved.</span><span>Handcrafted luxury for discerning clientele.</span></div>
      </footer>
    </div>
  );
}
