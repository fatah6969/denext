import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Partner IT UMKM & Perusahaan",
  description:
    "Kenali DENEXT: partner IT support & konsultan teknologi untuk UMKM, startup, dan perusahaan di Jakarta, Bogor, Depok, Tangerang, Bekasi. Solusi teknologi handal, fleksibel, terjangkau.",
  keywords: [
    "tentang denext",
    "perusahaan IT support jakarta",
    "konsultan IT jabodetabek",
    "partner teknologi UMKM",
    "jasa IT support perusahaan",
  ],
  alternates: { canonical: "https://www.denext.biz.id/about" },
  openGraph: {
    title: "Tentang DENEXT - Partner IT UMKM & Perusahaan",
    description:
      "DENEXT menghadirkan solusi teknologi handal, fleksibel, terjangkau untuk UMKM, startup, dan perusahaan.",
    url: "https://www.denext.biz.id/about",
    images: ["/og-banner.png"],
  },
};

export default function AboutPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>Tentang Kami</h1>
      <p>
        DENEXT adalah perusahaan IT Support & Konsultan Teknologi modern yang
        berkomitmen menghadirkan solusi teknologi yang handal, fleksibel, dan
        terjangkau bagi UMKM, startup, hingga perusahaan berskala besar. Kami
        memandang teknologi bukan sekadar alat bantu, melainkan sebagai strategi
        utama dalam mendorong pertumbuhan dan efisiensi bisnis. Dengan
        pendekatan yang berpusat pada manusia dan berorientasi pada hasil, kami
        hadir sebagai mitra terpercaya dalam mendampingi transformasi digital
        bisnis Anda.
      </p>
      <h2>Layanan IT Kami</h2>
      <p>
        Mulai dari service komputer, IT support onsite maupun remote,
        maintenance kantor, Linux server, Mikrotik, instalasi CCTV, jaringan,
        email server Zimbra, hingga backup & disaster recovery.
      </p>
    </main>
  );
}
