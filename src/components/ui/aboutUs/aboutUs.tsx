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
    <Box id="about-us" pt={46}>
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
            <Text
              size="2.2rem"
              c="#4F8025"
              fw={800}
              mb={4}
            >
              About Us
            </Text>
            <Text size="lg" fw={300} ta={'justify'} pt={20} lh={1.6} c="#333">
              At{' '}
              <Text
                span
                c="#4F8025"
                fw={700}
                inherit
                className={styles.brandText}
              >
                DENEXT
              </Text>
              , we are more than just an IT Support & Consulting company — we
              are your technology growth partner. Our mission is to deliver
              smart, reliable, and cost-effective solutions designed to empower
              small businesses, startups, and enterprises alike.
              <br />
              <br />
              We believe technology is not only a tool but a powerful strategy
              to unlock efficiency, accelerate growth, and future-proof your
              business. With a people-first approach and a strong focus on
              results, we are here to guide and support your digital
              transformation journey every step of the way.
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
        <Paper shadow="lg" radius="xl" p={32} className={styles.card}>
          <Group mb={16} gap={12}>
            <Box className={styles.iconContainer}>
              <IconTarget size={24} color="white" />
            </Box>
            <Text size="1.8rem" c="#4F8025" fw={800}>
              Our Mission
            </Text>
          </Group>
          <Text size="lg" fw={300} ta={'justify'} lh={1.6} c="#555">
            We believe technology is not only a tool but a powerful strategy to
            unlock efficiency, accelerate growth, and future-proof your
            business. With a people-first approach and a strong focus on
            results, we are here to guide and support your digital
            transformation journey every step of the way.
          </Text>
        </Paper>

        <Paper shadow="lg" radius="xl" p={32} className={styles.card}>
          <Group mb={16} gap={12}>
            <Box className={styles.iconContainer}>
              <IconUsers size={24} color="white" />
            </Box>
            <Text size="1.8rem" c="#4F8025" fw={800}>
              Who We Are
            </Text>
          </Group>
          <Text size="lg" fw={300} ta={'justify'} lh={1.6} c="#555">
            We are more than just an IT Support & Consulting company — we are
            your technology growth partner. Our mission is to deliver smart,
            reliable, and cost-effective solutions designed to empower small
            businesses, startups, and enterprises alike.
          </Text>
        </Paper>
      </Flex>
    </Box>
  )
}
