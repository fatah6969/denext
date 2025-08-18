import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Denext",
  description: "Partner IT untuk UMKM & perusahaan besar.",
};

export default function AboutPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "auto" }}>
      <h1>Tentang Kami</h1>
      <p>
        DENEXT adalah perusahaan IT Support & Konsultan Teknologi modern yang berkomitmen menghadirkan solusi teknologi yang handal, fleksibel, dan terjangkau bagi UMKM, startup, hingga perusahaan berskala besar.
        Kami memandang teknologi bukan sekadar alat bantu, melainkan sebagai strategi utama dalam mendorong pertumbuhan dan efisiensi bisnis.
        Dengan pendekatan yang berpusat pada manusia dan berorientasi pada hasil, kami hadir sebagai mitra terpercaya dalam mendampingi transformasi digital bisnis Anda.
      </p>
    </main>
  );
}
