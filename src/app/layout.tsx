import Script from "next/script";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "@/utils/customTheme";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Service Komputer Jabodetabek | IT Support, Server & Mikrotik - DENEXT",

  description:
    "DENEXT menyediakan jasa service komputer Jabodetabek, maintenance kantor, Linux server, Mikrotik, CCTV, jaringan, email server Zimbra, dan solusi IT profesional untuk perusahaan.",

  keywords: [
    "service komputer jabodetabek",
    "IT support jakarta",
    "service komputer murah",
    "maintenance komputer kantor",
    "linux server jakarta",
    "mikrotik jakarta",
    "jasa jaringan kantor",
    "email server zimbra",
    "cctv jakarta",
    "service laptop jakarta",
    "IT support jabodetabek",
    "maintenance server jakarta",
  ],

  authors: [{ name: "Denext.id", url: "https://denext.id" }],

  metadataBase: new URL("https://denext.id"),

  openGraph: {
    title:
      "Service Komputer Jabodetabek | IT Support & Server - DENEXT",

    description:
      "Service komputer, Linux server, Mikrotik, maintenance kantor, CCTV, jaringan, dan solusi IT profesional untuk perusahaan.",

    url: "https://denext.id",

    siteName: "DENEXT",

    locale: "id_ID",

    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
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

    images: ["/favicon.png"],
  },

  icons: {
    icon: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
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

      <Script id="ld-json" type="application/ld+json">
  {`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DENEXT",
    "url": "https://denext.id",
    "logo": "https://denext.id/favicon.png",
    "description": "Service komputer Jabodetabek dan solusi IT profesional.",

    "areaServed": [
      "Jakarta",
      "Bogor",
      "Depok",
      "Tangerang",
      "Bekasi"
    ],

    "sameAs": [
      "https://www.instagram.com/denext.id"
    ]
  }
  `}
</Script>
      
    </html>
  );
}
