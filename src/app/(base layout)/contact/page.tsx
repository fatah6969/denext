import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Kontak | Denext</title>
        <meta
          name="description"
          content="Hubungi Denext untuk konsultasi dan support IT."
        />
      </Head>
      <main style={{ padding: '2rem', maxWidth: 800, margin: 'auto' }}>
        <h1>Kontak Kami</h1>
        <p>
          Email: <a href="mailto:info@denext.id">info@denext.id</a>
        </p>
        <p>
          WA:{' '}
          <a href="https://wa.me/6285117477481" target="_blank">
            +62 851-1747-7481
          </a>
        </p>
        <p>
          Website:{' '}
          <a href="https://denext.id" target="_blank">
            denext
          </a>
        </p>
      </main>
    </>
  )
}
