import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Komputer Bogor - IT Support Onsite & Remote",
  description: "Butuh service komputer di Bogor? DENEXT melayani perbaikan PC/laptop, maintenance kantor, setup jaringan, Linux server, dan CCTV onsite maupun remote. Konsultasi gratis.",
  keywords: ["service komputer bogor", "service laptop bogor", "IT support bogor", "maintenance komputer bogor", "jaringan kantor bogor"],
  alternates: { canonical: "https://www.denext.biz.id/service-komputer-bogor" },
  openGraph: {
    title: "Service Komputer Bogor - IT Support Onsite & Remote",
    description: "Butuh service komputer di Bogor? DENEXT melayani perbaikan PC/laptop, maintenance kantor, setup jaringan, Linux server, dan CCTV onsite maupun remote. Konsultasi gratis.",
    url: "https://www.denext.biz.id/service-komputer-bogor",
    images: ["/og-banner.png"],
  },
};

export default function Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>Service Komputer Bogor & IT Support Onsite</h1>
      <p>DENEXT melayani service komputer dan IT support di wilayah Bogor dan sekitarnya. Kami menangani perbaikan PC dan laptop, install ulang Windows/Linux, maintenance komputer kantor, hingga setup jaringan dan server untuk UMKM dan perusahaan.</p>
      <h2>Layanan Service Komputer di Bogor</h2>
      <ul>
      <li>Service PC & laptop (Windows, macOS, Linux)</li>
      <li>Install ulang & optimasi kinerja komputer</li>
      <li>Maintenance komputer kantor berkala</li>
      <li>Setup jaringan & WiFi kantor</li>
      <li>Instalasi CCTV dan storage NAS</li>
    </ul>
      <h2>Area Layanan Sekitar Bogor</h2>
      <p>Selain Bogor, tim kami juga melayani Depok, Jakarta, Tangerang, dan Bekasi. Untuk area Jabodetabek lainnya, kunjungi halaman service komputer Jakarta.</p>
      <p>
        <Link href="/service-komputer-jakarta">Lihat layanan IT lainnya →</Link>
      </p>
    </main>
  );
}
