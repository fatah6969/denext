import Head from 'next/head'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Layanan | Denext</title>
        <meta
          name="description"
          content="Daftar layanan IT Support, Jaringan, Aplikasi, Cloud, dll."
        />
      </Head>
      <main style={{ padding: '2rem', maxWidth: 800, margin: 'auto' }}>
        <h1>Layanan Kami</h1>
        <ul>
          <li>IT Support (Remote & On-site)</li>
          <li>Instalasi Jaringan & Infrastruktur</li>
          <li>Virtualisasi Server</li>
          <li>Website & Aplikasi</li>
          <li>Cloud & Email Hosting</li>
          <li>Keamanan Digital & CCTV</li>
          <li>Backup & Disaster Recovery</li>
          <li>Perangkat IT & Pemeliharaan</li>
        </ul>
      </main>
    </>
  )
}
