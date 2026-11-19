import type { Metadata } from 'next'
import { Box, Button, Container, Stack, Text } from '@mantine/core'
import { IconBrandWhatsapp } from '@tabler/icons-react'

export const metadata: Metadata = {
  title:
    'Service Komputer Jakarta - IT Support & Maintenance Kantor',

  description:
    'Jasa service komputer Jakarta & Jabodetabek: maintenance kantor, Linux server, Mikrotik, CCTV, jaringan, email Zimbra. IT support onsite & remote, konsultasi gratis.',

  keywords: [
    'service komputer jakarta',
    'IT support jakarta',
    'maintenance komputer kantor',
    'service laptop jakarta',
    'linux server jakarta',
    'mikrotik jakarta',
    'jasa jaringan kantor',
    'cctv jakarta',
    'email server zimbra',
    'backup disaster recovery',
  ],

  alternates: {
    canonical: 'https://www.denext.biz.id/service-komputer-jakarta',
  },

  openGraph: {
    title: 'Service Komputer Jakarta | IT Support & Maintenance - DENEXT',
    description:
      'Service komputer, server, Mikrotik, CCTV, dan jaringan kantor Jakarta & Jabodetabek oleh DENEXT.',
    url: 'https://www.denext.biz.id/service-komputer-jakarta',
    images: ['/og-banner.png'],
  },
}


const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah DENEXT melayani service komputer onsite di Jakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Tim DENEXT melayani service komputer onsite di Jakarta dan Jabodetabek, sekaligus support remote untuk penanganan lebih cepat.",
      },
    },
    {
      "@type": "Question",
      name: "Layanan IT apa saja yang tersedia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DENEXT menyediakan service komputer, maintenance kantor, setup Linux server, konfigurasi Mikrotik, instalasi CCTV, jaringan kantor, email server Zimbra, dan backup disaster recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada konsultasi gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Hubungi DENEXT via WhatsApp untuk konsultasi gratis kebutuhan IT bisnis Anda.",
      },
    },
  ],
}

export default function ServiceKomputerJakartaPage() {
  return (
    <Container size="lg" py={80}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Stack gap={40}>
        <Box>
          <Text
            component="h1"
            size="48px"
            fw={800}
            lh={1.2}
          >
            Service Komputer Jakarta
          </Text>

          <Text size="lg" mt="lg" lh={1.8}>
            DENEXT menyediakan jasa service komputer Jakarta
            untuk perusahaan, kantor, UMKM, dan bisnis modern.
            Kami melayani maintenance komputer, Linux server,
            Mikrotik, CCTV, jaringan kantor, email server
            Zimbra, dan solusi IT profesional untuk area
            Jabodetabek.
          </Text>
        </Box>

        <Box>
          <Text component="h2" size="36px" fw={700}>
            Layanan Kami
          </Text>

          <Text mt="md" lh={1.8}>
            Kami melayani berbagai kebutuhan IT seperti:
          </Text>

          <ul
            style={{
              lineHeight: 2,
              marginTop: 20,
            }}
          >
            <li>Service komputer kantor</li>
            <li>Maintenance komputer perusahaan</li>
            <li>Install ulang Windows & Linux</li>
            <li>Setup Linux server</li>
            <li>Konfigurasi Mikrotik</li>
            <li>Instalasi CCTV</li>
            <li>Setup NAS storage</li>
            <li>Email server Zimbra</li>
            <li>Jaringan kantor</li>
            <li>IT support onsite & remote</li>
          </ul>
        </Box>

        <Box>
          <Text component="h2" size="36px" fw={700}>
            Kenapa Memilih DENEXT
          </Text>

          <Text mt="md" lh={1.8}>
            DENEXT memiliki pengalaman dalam menangani
            kebutuhan IT perusahaan dan bisnis modern.
            Kami memberikan solusi yang cepat, profesional,
            scalable, dan sesuai kebutuhan bisnis Anda.
          </Text>

          <ul
            style={{
              lineHeight: 2,
              marginTop: 20,
            }}
          >
            <li>Respon cepat</li>
            <li>Teknisi profesional</li>
            <li>Support onsite Jabodetabek</li>
            <li>Maintenance berkala</li>
            <li>Konsultasi gratis</li>
          </ul>
        </Box>

        <Box>
          <Text component="h2" size="36px" fw={700}>
            Area Layanan
          </Text>

          <Text mt="md" lh={1.8}>
            Kami melayani area:
          </Text>

          <ul
            style={{
              lineHeight: 2,
              marginTop: 20,
            }}
          >
            <li>Jakarta</li>
            <li>Bogor</li>
            <li>Depok</li>
            <li>Tangerang</li>
            <li>Bekasi</li>
          </ul>
        </Box>

        <Box>
          <Text component="h2" size="36px" fw={700}>
            Konsultasi Gratis
          </Text>

          <Text mt="md" lh={1.8}>
            Hubungi tim DENEXT sekarang untuk konsultasi
            kebutuhan IT perusahaan Anda.
          </Text>

          <Button
            component="a"
            href="https://wa.me/6285117477481"
            target="_blank"
            color="green"
            radius="xl"
            size="lg"
            mt="xl"
            leftSection={<IconBrandWhatsapp size={20} />}
          >
            Hubungi Kami
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
