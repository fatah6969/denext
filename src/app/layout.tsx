import Script from "next/script";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "@/utils/customTheme";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.denext.biz.id"),

  title: {
    default:
      "DENEXT - Service Komputer & IT Support Jabodetabek",
    template: "%s | DENEXT",
  },

  description:
    "DENEXT menyediakan jasa service komputer, IT support, maintenance kantor, Linux server, Mikrotik, CCTV, jaringan, email server Zimbra, backup & disaster recovery untuk UMKM dan perusahaan di Jakarta, Bogor, Depok, Tangerang, Bekasi.",

  applicationName: "DENEXT",

  category: "IT Support & Computer Service",

  keywords: [
    "service komputer jakarta",
    "service komputer bogor",
    "service komputer depok",
    "service laptop jakarta",
    "service laptop bogor",
    "IT support jakarta",
    "IT support jabodetabek",
    "IT support bogor",
    "maintenance komputer kantor",
    "jasa service komputer kantor",
    "linux server jakarta",
    "setup linux server",
    "mikrotik jakarta",
    "konfigurasi mikrotik",
    "jasa jaringan kantor",
    "instalasi jaringan jakarta",
    "cctv jakarta",
    "jasa instalasi cctv",
    "email server zimbra",
    "email hosting perusahaan",
    "virtualisasi server proxmox",
    "backup disaster recovery",
    "IT konsultan jakarta",
    "jasa IT support onsite remote",
  ],

  authors: [{ name: "Denext", url: "https://www.denext.biz.id" }],

  alternates: {
    canonical: "https://www.denext.biz.id/",
  },

  openGraph: {
    title:
      "Service Komputer Jabodetabek | IT Support & Server - DENEXT",

    description:
      "Service komputer, Linux server, Mikrotik, maintenance kantor, CCTV, jaringan, dan solusi IT profesional untuk perusahaan.",

    url: "https://denext.biz.id",

    siteName: "DENEXT",

    locale: "id_ID",

    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "DENEXT IT Solutions",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Service Komputer Jabodetabek | DENEXT",

    description:
      "IT support, Linux server, Mikrotik, maintenance komputer kantor dan solusi jaringan.",

    images: ["/og-banner.png"],
  },

  icons: {
    icon: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.denext.biz.id/#organization",
      "name": "DENEXT",
      "url": "https://www.denext.biz.id",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.denext.biz.id/favicon.png"
      },
      "email": "info.denext@gmail.com",
      "telephone": "+6285117477481",
      "sameAs": ["https://www.instagram.com/denext.id"]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.denext.biz.id/#localbusiness",
      "name": "DENEXT - IT Support & Service Komputer",
      "url": "https://www.denext.biz.id",
      "image": "https://www.denext.biz.id/og-banner.png",
      "telephone": "+6285117477481",
      "email": "info.denext@gmail.com",
      "priceRange": "Rp",
      "description":
        "Jasa service komputer, IT support onsite & remote, maintenance kantor, Linux server, Mikrotik, CCTV, jaringan, email server Zimbra, dan backup disaster recovery di Jabodetabek.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogor",
        "addressRegion": "Jawa Barat",
        "addressCountry": "ID"
      },
      "areaServed": ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"].map(
        (name) => ({ "@type": "City", name })
      ),
      "sameAs": ["https://www.instagram.com/denext.id"],
      "parentOrganization": {
        "@id": "https://www.denext.biz.id/#organization"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Layanan IT DENEXT",
        "itemListElement": [
          "Service Komputer & Laptop",
          "IT Support Onsite & Remote",
          "Maintenance Komputer Kantor",
          "Instalasi Jaringan & Infrastruktur",
          "Setup Linux Server & Virtualisasi",
          "Konfigurasi Mikrotik",
          "Instalasi CCTV",
          "Email Server Zimbra",
          "Backup & Disaster Recovery",
          "Website & Aplikasi"
        ].map((name) => ({
          "@type": "OfferCatalog",
          name,
          itemListElement: {
            "@type": "Service",
            name,
            provider: { "@id": "https://www.denext.biz.id/#organization" },
            areaServed: "Jabodetabek"
          }
        }))
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.denext.biz.id/#website",
      "url": "https://www.denext.biz.id",
      "name": "DENEXT",
      "inLanguage": "id-ID",
      "publisher": { "@id": "https://www.denext.biz.id/#organization" }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.className}`}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZT2G9T1CSM"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZT2G9T1CSM');
          `}
      </Script>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
    </html>
  );
}
