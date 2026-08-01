/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-08-01T19:22:23.006Z
 * Kundennummer: 263
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "technotrans SE",
  branche: "",
  unternehmenszweck: null,
  ort: "Sassenberg",
  slogan: "technotrans SE",
  adresse: "Robert-Linnemann-Straße 17, 48336 Sassenberg",
  maps_url: "https://www.google.com/maps/place/?q=place_id:ChIJ56oPvT2OuUcRk_1Z13iUgck",
  // Geokoordinaten → cookie-freie OSM-Karte im Kontakt; null = Adress-Box.
  // Aus kunden.lat/lng (persistiert) → überlebt jeden Redeploy (kein stiller Verlust).
  geo: { lat: 51.9782795, lon: 8.0536932 } as { lat: number; lon: number } | null,
  telefon: "02583 3011000",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/cdn-cgi/image/width=320,fit=contain,quality=78,format=auto/konzepte/autofit/autofit_logo.webp",
  standort_bild: null,
  // Foto-Attribution (Unsplash/Pexels) → Footer-Hinweis „Fotos: …". Leer = kein Hinweis.
  bildAttributionen: {"hero":{"autor":"Sebastian Herrmann","autorUrl":"https://unsplash.com/@officestock","quelle":"unsplash"},"ueberUns":{"autor":"Vitaly Gariev","autorUrl":"https://unsplash.com/@silverkblack","quelle":"unsplash"},"karriere":{"autor":"Austin Distel","autorUrl":"https://unsplash.com/@austindistel","quelle":"unsplash"}} as {
    hero?: { autor: string; autorUrl: string; quelle: string };
    ueberUns?: { autor: string; autorUrl: string; quelle: string };
    standort?: { autor: string; autorUrl: string; quelle: string };
    karriere?: { autor: string; autorUrl: string; quelle: string };
    leistungen?: Record<string, { autor: string; autorUrl: string; quelle: string }>;
  },

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/cdn-cgi/image/width=1600,fit=cover,quality=78,format=auto/kunden/263/stock-xhtkb8.jpg",
    bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=768,fit=cover,quality=78,format=auto/kunden/263/stock-xhtkb8.jpg 768w, https://r2.kuwezu.de/cdn-cgi/image/width=1280,fit=cover,quality=78,format=auto/kunden/263/stock-xhtkb8.jpg 1280w, https://r2.kuwezu.de/cdn-cgi/image/width=1920,fit=cover,quality=78,format=auto/kunden/263/stock-xhtkb8.jpg 1920w",
    bildSizes: "100vw",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Werkstatt in Sassenberg – technotrans SE",
    ueberschriftHighlight: "technotrans SE",
    ueberschriftLines: ["Ihre Werkstatt in Sassenberg –", "technotrans SE"],
    untertext: "Präzisionstechnik aus Sassenberg – zuverlässige Werkstattlösungen von technotrans SE für Ihre Anlagen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/cdn-cgi/image/width=1280,fit=cover,quality=78,format=auto/kunden/263/stock-19vayte.jpg",
    bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=640,fit=cover,quality=78,format=auto/kunden/263/stock-19vayte.jpg 640w, https://r2.kuwezu.de/cdn-cgi/image/width=1024,fit=cover,quality=78,format=auto/kunden/263/stock-19vayte.jpg 1024w, https://r2.kuwezu.de/cdn-cgi/image/width=1536,fit=cover,quality=78,format=auto/kunden/263/stock-19vayte.jpg 1536w",
    bildSizes: "(max-width: 1024px) 100vw, 50vw",
    ueberschrift: "technotrans SE — Ihr Partner in Sassenberg",
    text1: "Als führender Systemanbieter für Thermomanagement und Flüssigkeitstechnologien betreut technotrans SE mit Hauptsitz in Sassenberg im Münsterland Kunden aus Branchen wie Kunststoffverarbeitung, Laser, Print und Healthcare & Analytics mit maßgeschneiderten Kühl- und Temperiersystemen. In unserer Werkstatt vor Ort kümmern sich erfahrene Techniker um Installation, Wartung und Reparatur Ihrer Anlagen – zuverlässig, präzise und mit kurzen Wegen dank 24/7-Ersatzteilbereitstellung. Als Teil eines weltweit agierenden Konzerns verbinden wir internationale Innovationskraft mit persönlichem Service direkt aus dem Münsterland. Sprechen Sie uns an – wir sorgen dafür, dass Ihre Systeme rund um die Uhr zuverlässig laufen.",
    text2: "",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [
      { value: "32332", label: "Zufriedene Kunden" },
      { value: "23", label: "Fachkräfte" },
      { value: "3232", label: "Aufträge/Jahr" },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp 800w",
      description: "Professionelle Achsvermessung — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Bremsen/1777878346158-bremsen_service.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Bremsen/1777878346158-bremsen_service.webp 800w",
      description: "Professionelle Bremsen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "inspektion",
      title: "Inspektion",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Inspektion/1777829697827-leistung_inspektion.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Inspektion/1777829697827-leistung_inspektion.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Inspektion/1777829697827-leistung_inspektion.webp 800w",
      description: "Professionelle Inspektion — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "hu-au",
      title: "HU/AU",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/HU/AU/1777878273976-leistung_tu_v.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/HU/AU/1777878273976-leistung_tu_v.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/HU/AU/1777878273976-leistung_tu_v.webp 800w",
      description: "Professionelle HU/AU — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp 800w",
      description: "Professionelle Ersatzwagen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      bildSrcset: "https://r2.kuwezu.de/cdn-cgi/image/width=400,fit=cover,quality=78,format=auto/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp 400w, https://r2.kuwezu.de/cdn-cgi/image/width=800,fit=cover,quality=78,format=auto/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp 800w",
      description: "Professionelle Autoglas — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    }
  ] as { slug: string; title: string; bild: string; bildSrcset: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  // Kundenpflegbar (Stammdaten) bzw. künftig autoservice.jobs-Feed — keine
  // erfundenen Platzhalter-Stellen mehr. jobs: [] → Template blendet
  // "Offene Stellen" aus; enabled: false → ganze Section entfällt.
  karriere: {
    enabled: true as boolean,
    jobs: [

    ] as { title: string; type: string; experience: string }[],
    benefits: null as { title: string; text: string }[] | null,
    // null = In-Page-Anker #kontakt; http(s)-URL öffnet im neuen Tab
    buttonUrl: null as string | null,
    // Öffentlicher autoservice.jobs-Profil-Link (aus Slug) → „Offene Stellen ansehen"
    autoserviceUrl: null as string | null,
    // Karriere-/Team-Bild (Bild-Slot typ="karriere"); null = kein Bild.
    bild: "https://r2.kuwezu.de/cdn-cgi/image/width=1280,fit=cover,quality=78,format=auto/kunden/263/stock-1r2iszm.jpg" as string | null,
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  // Wiederkehrende TÜV-/HU-Termine — leer/null: kein Infoblock auf der Seite
  tuev_slots: [{ day: "mo", from: "08:00", to: "16:00" }] as { day: string; from: string; to: string }[] | null,
  tuev_hinweis: null as string | null,
  oeffnungszeiten: {
    mo_fr: "07:00 – 18:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 07:00 – 18:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "dasdsadsad" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,

  // ── Impressum / Rechtsangaben (Migration 095) ───────────────────────────────
  impressum: {} as {
    inhaber?: string; rechtsform?: string; ust_id?: string; handelsregister?: string;
    registergericht?: string; aufsichtsbehoerde?: string; verantwortlicher?: string;
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
