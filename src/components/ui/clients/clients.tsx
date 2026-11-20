import { Stack, Text, Container, Paper, Group, Badge } from '@mantine/core'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import classes from './client.module.css'

export function Clients() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const clientLogos = [
    {
      name: 'Qoala',
      logo: '/clients/Qoala-Logo.png',
      url: 'https://www.qoala.app/id',
      description: 'Insurance Technology',
      color: '#1f5294',
    },
    {
      name: 'Trijee',
      logo: '/clients/Trijee-Logo.png',
      url: 'https://trijee.com/',
      description: 'Sportswear Retail',
      color: '#77c6cb',
    },
    {
      name: 'Adya Artha Abadi',
      logo: '/clients/AAA_Logo.png',
      url: 'https://adyaarthaabadi.com/',
      description: 'Distributor Farmasi',
      color: '#c1121d',
    },
    {
      name: 'Lembaga Psikologi Perspective',
      logo: '/clients/Lpp_Logo.png',
      url: 'https://psikotes.psikologiperspective.com/',
      description: 'Layanan Psikologi',
      color: '#402365',
    },
    {
      name: 'Siliwangi Express',
      logo: '/clients/Siliwangi-Logo.png',
      url: 'https://www.siliwangiexpress.web.id/',
      description: 'Logistik & Pengiriman',
      color: '#63b4d2',
    },
    {
      name: 'Life Path Coach',
      logo: '/clients/lifepathcoach.png',
      url: 'https://www.lifepathcoach555.com/',
      description: 'Life Coaching Platform',
      color: '#e6d595',
    },
    {
      name: 'EduALL',
      logo: '/clients/EduALL.png',
      url: 'https://edu-all.com/id-en',
      description: 'Platform Edukasi Global',
      color: '#1A1AFF',
    },
    {
      name: 'FNLogistik',
      logo: '/clients/fnlogistik.png',
      url: 'https://www.fnlogistik.com/',
      description: 'Jasa Logistik',
      color: '#1060A0',
    }
  ]

  return (
    <Container size="xl" id="client" pt={72}>
      <Stack gap="xl" align="center" ref={sectionRef}>
        
        {/* Header */}
        <Stack gap="xs" align="center">
          <Badge
            size="lg"
            variant="light"
            color="green"
            radius="xl"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out',
            }}
          >
            Partner Terpercaya
          </Badge>

          <Text
            ta="center"
            size="3rem"
            fw={800}
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.2s',
              background: 'linear-gradient(135deg, #4F8025, #6BA832)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Klien Kami
          </Text>

          <Text
            ta="center"
            size="lg"
            c="dimmed"
            maw={600}
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            Kami bangga dipercaya oleh berbagai perusahaan untuk mendukung
            transformasi digital dan pengembangan teknologi mereka.
          </Text>
        </Stack>

        {/* Grid */}
        <div className={classes.clientGrid}>
          {clientLogos.map((client, index) => (
            <Paper
              key={client.name}
              className={classes.logoCard}
              shadow={hoveredIndex === index ? 'xl' : 'sm'}
              radius="lg"
              p="xl"
              withBorder
              style={{
                transform: isVisible
                  ? hoveredIndex === index
                    ? 'translateY(-8px) scale(1.02)'
                    : 'translateY(0)'
                  : 'translateY(40px)',
                opacity: isVisible ? 1 : 0,
                transition: `all ${0.6 + index * 0.1}s ease-out ${
                  0.2 + index * 0.1
                }s`,
                cursor: 'pointer',
                borderColor: hoveredIndex === index ? '#4F8025' : undefined,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              component="a"
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Stack align="center" gap="md">
                <div className={classes.logoImageContainer}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className={classes.logoImage}
                    style={{
                      filter:
                        hoveredIndex === index ? 'none' : 'grayscale(30%)',
                      transition: '0.3s',
                    }}
                  />
                </div>

                <Badge
                  variant="light"
                  color={client.color}
                  size="sm"
                >
                  {client.description}
                </Badge>
              </Stack>
            </Paper>
          ))}
        </div>

        {/* Stats */}
        <Group justify="space-evenly" mt="md" w="100%">
          <Stack align="center" gap={4}>
            <Text size="2rem" fw={800} c="#4F8025">
              8+
            </Text>
            <Text size="sm" c="dimmed">
              Klien Aktif
            </Text>
          </Stack>

          <Stack align="center" gap={4}>
            <Text size="2rem" fw={800} c="#4F8025">
              100%
            </Text>
            <Text size="sm" c="dimmed">
              Kepuasan Klien
            </Text>
          </Stack>

          <Stack align="center" gap={4}>
            <Text size="2rem" fw={800} c="#4F8025">
              3+
            </Text>
            <Text size="sm" c="dimmed">
              Tahun Pengalaman
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Container>
  )
}
