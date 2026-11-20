'use client'
import { Box, Flex, Text, Paper, Group } from '@mantine/core'
import Image from 'next/image'
import gifAbout from '../../../assets/gif_about.gif'
import aboutus from '../../../assets/aboutus.png'
import { useMediaQuery } from '@mantine/hooks'
import { IconTarget, IconUsers } from '@tabler/icons-react'
import styles from './aboutUs.module.css'

export function AboutUs() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Box id="about-us" pt={46} px={isMobile ? 'md' : 0}>
      {/* Main Section */}
      <Flex
        justify={{ base: 'space-between' }}
        direction={{ base: 'column-reverse', sm: 'row' }}
        gap={'xl'}
        mb={60}
      >
        {/* Image Section */}
        <Flex justify="center" p={0} style={{ flex: 1 }}>
          <Box visibleFrom="sm" className={styles.imageContainer}>
            <Image src={aboutus} alt="About us" height={472} width={740} />
          </Box>
          {isMobile && (
            <Box pt={12} className={styles.fadeInUp}>
              <Image src={gifAbout} alt="About GIF" height={200} width={200} />
            </Box>
          )}
        </Flex>

        {/* Content Section */}
        <Flex
          direction={'column'}
          justify={'center'}
          gap={24}
          w={{ base: '100%', sm: '50%' }}
          className={styles.fadeInRight}
        >
          <Box>
            <Text size="2.2rem" c="#4F8025" fw={800} mb={4}>
              Tentang Kami
            </Text>

            <Text size="lg" fw={300} ta={'justify'} pt={20} lh={1.6} c="#333">
              Di{' '}
              <Text
                span
                c="#4F8025"
                fw={700}
                inherit
                className={styles.brandText}
              >
                DENEXT
              </Text>
              , kami bukan sekadar penyedia layanan IT — kami adalah partner
              teknologi yang membantu pertumbuhan bisnis Anda.
              <br />
              <br />
              Kami menghadirkan solusi yang cerdas, handal, dan efisien biaya
              untuk mendukung kebutuhan UMKM hingga perusahaan.
              <br />
              <br />
              Kami percaya teknologi bukan hanya alat, tetapi strategi untuk
              meningkatkan efisiensi, mempercepat pertumbuhan, dan mempersiapkan
              bisnis Anda menghadapi masa depan.
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* Mission & Vision Cards */}
      <Flex
        direction={isMobile ? 'column' : 'row'}
        gap={24}
        className={styles.fadeInUp}
      >
        {/* Mission */}
        <Paper shadow="lg" radius="xl" p={32} className={styles.card}>
          <Group mb={16} gap={12}>
            <Box className={styles.iconContainer}>
              <IconTarget size={24} color="white" />
            </Box>
            <Text size="1.6rem" c="#4F8025" fw={800}>
              Misi Kami
            </Text>
          </Group>

          <Text size="lg" fw={300} ta={'justify'} lh={1.6} c="#555">
            Memberikan solusi IT yang inovatif, terpercaya, dan efisien biaya
            untuk membantu bisnis berkembang lebih cepat dan berkelanjutan.
          </Text>
        </Paper>

        {/* Who We Are */}
        <Paper shadow="lg" radius="xl" p={32} className={styles.card}>
          <Group mb={16} gap={12}>
            <Box className={styles.iconContainer}>
              <IconUsers size={24} color="white" />
            </Box>
            <Text size="1.6rem" c="#4F8025" fw={800}>
              Siapa Kami
            </Text>
          </Group>

          <Text size="lg" fw={300} ta={'justify'} lh={1.6} c="#555">
            Tim profesional di bidang IT yang berpengalaman dalam menangani
            berbagai kebutuhan teknologi, mulai dari UMKM hingga perusahaan.
          </Text>
        </Paper>
      </Flex>
    </Box>
  )
}
