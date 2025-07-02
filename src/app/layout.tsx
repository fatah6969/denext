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
  title: "Denext",
  description: "One Stop IT Solutions",
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

        {/* Page Content */}
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
