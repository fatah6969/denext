'use client'

import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import { IconBrandWhatsapp, IconArrowRight } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'
import classes from './home.module.css'
import { HeroVisual } from './HeroVisual'

export function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Flex
      justify={isMobile ? 'start' : 'space-between'}
      direction={isMobile ? 'column' : 'row'}
      align="center"
      gap={isMobile ? 20 : 48}
      id="home"
      pt={isMobile ? 32 : 0}
      px={isMobile ? 'md' : 0}
      className={classes.homeContainer}
    >
      <Stack
        gap={6}
        ta={isMobile ? 'center' : 'start'}
        justify="center"
        w={isMobile ? '100%' : undefined}
        maw={isMobile ? '100%' : 520}
        style={{ overflowWrap: 'break-word' }}
      >
        <Box className={classes.heroTitle}>
          <Box className={classes.heroKicker}>
            <Text size="12px" fw={800} tt="uppercase" c="inherit">
              IT Support &amp; Solusi Bisnis
            </Text>
          </Box>
          <Text component="h1" size={isMobile ? '36px' : '56px'} fw={800} lh={1.12}>
            Service Komputer &amp;{' '}
            <Text span fw={800} className={classes.highlightGreen}>
              IT Support
            </Text>
          </Text>
          <Text className={classes.heroRegion} tt="uppercase">
            Jabodetabek
          </Text>
        </Box>

        <Text size="lg" fw={400} lh={1.75} mt="md" c="var(--color-ink-3)" className={classes.heroDescription}>
          DENEXT menyediakan jasa service komputer, maintenance server, Linux,
          Mikrotik, CCTV, jaringan kantor, dan email Zimbra untuk perusahaan
          di Jabodetabek.
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
          >
            Konsultasi Gratis
          </Button>

          <Text mt={isMobile ? 'md' : 0}>
            <a href="/service-komputer-jakarta" className={classes.textLink}>
              Lihat layanan komputer Jakarta <IconArrowRight size={16} />
            </a>
          </Text>
        </Box>
      </Stack>

      <Box className={classes.heroImageContainer}>
        <HeroVisual />
      </Box>
    </Flex>
  )
}
