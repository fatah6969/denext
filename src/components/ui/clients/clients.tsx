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
      description: 'Pharmaceutical Distributor',
      color: '#c1121d',
    },
    {
      name: 'Lembaga Psikologi Perspective',
      logo: '/clients/Lpp_Logo.png',
      url: 'https://psikotes.psikologiperspective.com/',
      description: 'Psychological Assessment',
      color: '#402365',
    },
    {
      name: 'Siliwangi Express',
      logo: '/clients/Siliwangi-Logo.png',
      url: 'https://www.siliwangiexpress.web.id/',
      description: 'Cargo & Freight Logistics',
      color: '#63b4d2',
    },
    {
      name: 'Life Path Coach',
      logo: '/clients/lifepathcoach.png',
      url: 'https://www.lifepathcoach555.com/',
      description: 'Spiritual & Holistic Life Coaching Platform',
      color: '#e6d595',
    },
    {
      name: 'Maxistyle',
      logo: '/clients/maxi-logo.png',
      url: 'https://www.maxistyle.com/',
      description: 'Premium Textile Brand',
      color: '#a41c24',
    },
  ]

  return (
    <Container size="xl" id="client" pt={72}>
      <Stack gap="xl" align="center" ref={sectionRef}>
        {/* Header Section */}
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
            Trusted Partners
          </Badge>
          <Text
            ta="center"
            size="3rem"
            c="#4F8025"
            fw={800}
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.2s',
              background: 'linear-gradient(135deg, #4F8025, #6BA832)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Clients
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
            We are proud to work with amazing companies that trust us with their
            digital transformation journey
          </Text>
        </Stack>

        {/* Clients Grid */}
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
                    : 'translateY(0) scale(1)'
                  : 'translateY(40px)',
                opacity: isVisible ? 1 : 0,
                transition: `all ${0.6 + index * 0.1}s ease-out ${
                  0.2 + index * 0.1
                }s`,
                cursor: 'pointer',
                background: 'var(--mantine-color-white)',
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
                        hoveredIndex === index ? 'none' : 'grayscale(20%)',
                      transition: 'filter 0.3s ease',
                    }}
                  />
                </div>
                <Stack align="center" gap={4}>
                  {/* Hanya Badge deskripsi */}
                  <Badge
                    variant="light"
                    color={client.color}
                    size="sm"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0.7,
                      transform:
                        hoveredIndex === index ? 'scale(1)' : 'scale(0.95)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {client.description}
                  </Badge>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </div>

        {/* Stats Section */}
        <Group
          gap="xl"
          mt="md"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease-out 1s',
          }}
        >
          <Stack align="center" gap={4}>
            <Text size="2rem" fw={800} c="#4F8025">
              7+
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              Trusted Clients
            </Text>
          </Stack>
          <Stack align="center" gap={4}>
            <Text size="2rem" fw={800} c="#4F8025">
              100%
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              Success Rate
            </Text>
          </Stack>
          <Stack align="center" gap={4}>
            <Text size="2rem" fw={800} c="#4F8025">
              2+
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              Years Experience
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Container>
  )
}
