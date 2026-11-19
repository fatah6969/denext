import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Support Jakarta - Onsite & Remote untuk Bisnis",
  description: "Jasa IT support Jakarta untuk kantor dan perusahaan: bantuan onsite & remote, troubleshooting, maintenance, pengelolaan server, jaringan, dan CCTV. Respon cepat, teknisi profesional.",
  keywords: ["IT support jakarta", "jasa IT support jakarta", "IT support onsite", "IT support remote", "maintenance IT kantor"],
  alternates: { canonical: "https://www.denext.biz.id/it-support-jakarta" },
  openGraph: {
    title: "IT Support Jakarta - Onsite & Remote untuk Bisnis",
    description: "Jasa IT support Jakarta untuk kantor dan perusahaan: bantuan onsite & remote, troubleshooting, maintenance, pengelolaan server, jaringan, dan CCTV. Respon cepat, teknisi profesional.",
    url: "https://www.denext.biz.id/it-support-jakarta",
    images: ["/og-banner.png"],
  },
};

export default function Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>IT Support Jakarta untuk Kantor & Perusahaan</h1>
      <p>DENEXT menyediakan jasa IT support di Jakarta dengan layanan onsite dan remote. Tim kami membantu troubleshoot harian, maintenance komputer karyawan, pengelolaan server, konfigurasi jaringan, hingga pengawasan CCTV agar operasional bisnis tetap berjalan.</p>
      <h2>Layanan IT Support</h2>
      <ul>
      <li>Helpdesk & troubleshooting karyawan (remote/onsite)</li>
      <li>Maintenance komputer & laptop kantor</li>
      <li>Konfigurasi email perusahaan & Zimbra</li>
      <li>Pengelolaan server & backup data</li>
      <li>Audit IT & dokumentasi aset</li>
    </ul>
      <h2>Kenapa Memilih DENEXT</h2>
      <p>Respon cepat, teknisi berpengalaman, dan cakupan area Jabodetabek. Kami juga melayani service komputer di Bogor dan instalasi CCTV di Jakarta.</p>
      <p>
        <Link href="/service-komputer-jakarta">Lihat layanan IT lainnya →</Link>
      </p>
    </main>
  );
}
