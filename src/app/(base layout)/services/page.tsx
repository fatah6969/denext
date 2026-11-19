import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan IT Support, Server, Jaringan & CCTV",
  description:
    "Daftar layanan DENEXT: IT support onsite & remote, service komputer, instalasi jaringan, virtualisasi server, website & aplikasi, cloud & email hosting, keamanan digital & CCTV, backup disaster recovery.",
  keywords: [
    "layanan IT support jakarta",
    "jasa jaringan kantor",
    "virtualisasi server jakarta",
    "jasa instalasi cctv jakarta",
    "email hosting perusahaan",
    "backup disaster recovery indonesia",
    "service komputer jabodetabek",
  ],
  alternates: { canonical: "https://www.denext.biz.id/services" },
  openGraph: {
    title: "Layanan IT DENEXT - Support, Server, Jaringan & CCTV",
    description:
      "Solusi IT lengkap untuk bisnis: support, jaringan, server, website, cloud, CCTV, backup.",
    url: "https://www.denext.biz.id/services",
    images: ["/og-banner.png"],
  },
};

const layanan = [
  ["IT Support (Remote & On-Site)", "/it-support-jakarta"],
  ["Instalasi Jaringan & Infrastruktur", "/service-komputer-jakarta"],
  ["Virtualisasi Server", "/service-komputer-jakarta"],
  ["Website & Aplikasi", "/service-komputer-jakarta"],
  ["Cloud & Email Hosting", "/service-komputer-jakarta"],
  ["Keamanan Digital & CCTV", "/jasa-instalasi-cctv-jakarta"],
  ["Backup & Disaster Recovery", "/service-komputer-jakarta"],
  ["Perangkat IT & Pemeliharaan", "/service-komputer-bogor"],
];

export default function ServicesPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>Layanan Kami</h1>
      <p>
        DENEXT menyediakan solusi IT end-to-end untuk UMKM dan perusahaan di
        Jabodetabek. Pilih layanan di bawah ini untuk detail lengkap.
      </p>
      <ul>
        {layanan.map(([nama, href]) => (
          <li key={nama}>
            <Link href={href}>{nama}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
