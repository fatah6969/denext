import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak - Hubungi Tim IT DENEXT",
  description:
    "Hubungi DENEXT untuk konsultasi gratis seputar service komputer, IT support, jaringan, server, dan CCTV di Jakarta, Bogor, Depok, Tangerang, Bekasi. Via WA, email, atau form.",
  keywords: [
    "kontak denext",
    "hubungi IT support jakarta",
    "konsultasi IT gratis",
    "service komputer bogor",
    "WA IT support jakarta",
  ],
  alternates: { canonical: "https://www.denext.biz.id/contact" },
  openGraph: {
    title: "Kontak DENEXT - Konsultasi IT Gratis",
    description:
      "Hubungi tim DENEXT via WhatsApp, email, atau form untuk konsultasi kebutuhan IT bisnis Anda.",
    url: "https://www.denext.biz.id/contact",
    images: ["/og-banner.png"],
  },
};

export default function ContactPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>Kontak Kami</h1>
      <p>
        Email: <a href="mailto:info.denext@gmail.com">info.denext@gmail.com</a>
      </p>
      <p>
        WA:{" "}
        <a href="https://wa.me/6285117477481" target="_blank" rel="noopener noreferrer">
          +62 851-1747-7481
        </a>
      </p>
      <p>
        Website:{" "}
        <a href="https://www.denext.biz.id" target="_blank" rel="noopener noreferrer">
          www.denext.biz.id
        </a>
      </p>
      <h2>Konsultasi IT Gratis</h2>
      <p>
        Ceritakan kebutuhan IT Anda — service komputer, jaringan kantor, setup
        server, atau CCTV. Tim DENEXT siap membantu area Jabodetabek.
      </p>
    </main>
  );
}
