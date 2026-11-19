import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Instalasi CCTV Jakarta - Pemasangan & Maintenance",
  description: "Pasang CCTV di Jakarta bersama DENEXT: survei lokasi, instalasi kamera CCTV IP/analog, konfigurasi monitoring, storage, dan maintenance. Cocok untuk kantor, toko, dan gudang.",
  keywords: ["jasa instalasi cctv jakarta", "pasang cctv jakarta", "cctv kantor", "instalasi cctv ip camera", "maintenance cctv jakarta"],
  alternates: { canonical: "https://www.denext.biz.id/jasa-instalasi-cctv-jakarta" },
  openGraph: {
    title: "Jasa Instalasi CCTV Jakarta - Pemasangan & Maintenance",
    description: "Pasang CCTV di Jakarta bersama DENEXT: survei lokasi, instalasi kamera CCTV IP/analog, konfigurasi monitoring, storage, dan maintenance. Cocok untuk kantor, toko, dan gudang.",
    url: "https://www.denext.biz.id/jasa-instalasi-cctv-jakarta",
    images: ["/og-banner.png"],
  },
};

export default function Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>Jasa Instalasi CCTV Jakarta & Sekitarnya</h1>
      <p>DENEXT melayani pemasangan CCTV untuk kantor, toko, dan gudang di Jakarta. Kami melakukan survei lokasi, memilih kamera yang sesuai kebutuhan, instalasi kabel, konfigurasi recorder dan monitoring, hingga pelatihan penggunaan.</p>
      <h2>Layanan CCTV Kami</h2>
      <ul>
      <li>Survei & desain titik kamera</li>
      <li>Instalasi CCTV IP camera dan analog</li>
      <li>Konfigurasi NVR/DVR & remote monitoring</li>
      <li>Setup storage & backup rekaman</li>
      <li>Maintenance dan perbaikan CCTV</li>
    </ul>
      <h2>Area Pemasangan</h2>
      <p>Kami melayani pemasangan CCTV di Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Butuh IT support sekaligus? Lihat layanan IT support Jakarta.</p>
      <p>
        <Link href="/service-komputer-jakarta">Lihat layanan IT lainnya →</Link>
      </p>
    </main>
  );
}
