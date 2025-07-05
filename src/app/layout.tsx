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
  title: "Denext | One Stop IT Solutions",
  description: "Solusi lengkap untuk kebutuhan IT Anda: software, hardware, jaringan, dan konsultasi.",
  keywords: ["denext", "it solutions", "konsultan teknologi", "jasa komputer", "service laptop", "software", "hardware", "jaringan"],
  authors: [{ name: "Denext.id", url: "https://denext.id" }],
  metadataBase: new URL("https://denext.id"),
  openGraph: {
    title: "Denext | One Stop IT Solutions",
    description: "Solusi lengkap untuk kebutuhan IT Anda.",
    url: "https://denext.id",
    siteName: "Denext",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Denext Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denext | One Stop IT Solutions",
    description: "Solusi lengkap untuk kebutuhan IT Anda.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
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
            "@type": "Organization",
            "name": "Denext",
            "url": "https://denext.id",
            "logo": "https://denext.id/favicon.png",
            "sameAs": [
              "https://www.instagram.com/denext.id"
    ]
  }
  `}
</Script>

        
        
        {/* Page Content */}
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
