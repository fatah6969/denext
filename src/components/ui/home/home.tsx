'use client'

import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import Image from 'next/image'
import hero from '../../../assets/hero_background.png'
import gifHero from '../../../assets/gif_hero.gif'
import { useMediaQuery } from '@mantine/hooks'
import classes from './home.module.css'

export function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Flex
      justify={isMobile ? 'start' : 'space-between'}
      direction={isMobile ? 'column' : 'row'}
      align="center"
      gap={isMobile ? 20 : 48}
      id="home"
      pt={isMobile ? 40 : 0}
      px={isMobile ? 'md' : 0}
      className={classes.homeContainer}
    >
      <Stack gap={6} ta={isMobile ? 'center' : 'start'} justify="center" w="100%" maw="100%" style={{ overflowWrap: 'break-word' }}>
        <Box className={classes.heroTitle}>
          <Box className={classes.heroKicker}>
            <Text size="13px" fw={800} tt="uppercase">
              Solusi IT Profesional
            </Text>
          </Box>
          <Text
            component="h1"
            size={isMobile ? '34px' : '64px'}
            fw={800}
            lh={1.08}
          >
            Service Komputer &{' '}
            <Text span fw={900} className={classes.highlightGreen}>
              IT Support
            </Text>
          </Text>

          <Text
            size={isMobile ? '24px' : '48px'}
            fw={700}
            pt={12}
            className={classes.heroSubtitle}
          >
            JABODETABEK
          </Text>
        </Box>

        <Text
          size="lg"
          fw={400}
          lh={1.75}
          mt="md"
          c="var(--color-ink-3)"
          className={classes.heroDescription}
        >
          DENEXT menyediakan jasa service komputer, maintenance server, Linux
          server, Mikrotik, CCTV, jaringan kantor, dan email server Zimbra
          untuk perusahaan di Jabodetabek.
        </Text>

        <Box pt={isMobile ? 16 : 24} className={classes.heroButton}>
          <Button
            component="a"
            href="https://wa.me/6285117477481?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20terkait%20layanan%20IT%20Denext."
            target="_blank"
            rel="noopener noreferrer"
            color="green"
            radius="xl"
            size={isMobile ? 'md' : 'lg'}
            fullWidth={isMobile}
            className={classes.exploreButton}
            leftSection={<IconBrandWhatsapp size={20} />}
            style={{ whiteSpace: isMobile ? 'normal' : 'nowrap' }}
          >
            Konsultasi Gratis
          </Button>

          <Text mt={isMobile ? 'md' : 0}>
            <a
              href="/service-komputer-jakarta"
              style={{
                color: '#166534',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Lihat Layanan Service Komputer Jakarta →
            </a>
          </Text>
        </Box>
      </Stack>

      <Flex
        justify={isMobile ? 'center' : 'flex-end'}
        className={classes.heroImageContainer}
      >
        <Box visibleFrom="sm">
          <Image
            src={hero}
            alt="Service Komputer dan IT Support Jabodetabek"
            height={721}
            width={837}
            className={classes.heroImageDesktop}
          />
        </Box>

        {isMobile && (
          <Box>
            <Image
              src={gifHero}
              alt="Jasa IT Support dan Maintenance Server"
              height={200}
              width={200}
              className={classes.heroImageMobile}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
