'use client'
import { Box, Button, Flex, Group, Text } from '@mantine/core'
import Image from 'next/image'
import iconLogo from '../../../../public/favicon.png'
import classes from './navbar.module.css'
import { Link } from 'react-scroll'
import { MobileMenu } from './sidebar'

export function Navbar() {
  return (
    <Group
      h="70px"
      px={{ base: 'md', sm: '5rem' }}
      className={classes.navbarWrapper}
    >
      <Group
        justify="space-between"
        className={classes.navbarContainer}
        py="12px"
        px={{ base: 'md', sm: '40px' }}
        mt="12px"
      >
        {/* LOGO */}
        <Flex align="center" className={classes.logoContainer}>
          <Link to="home" smooth duration={500} offset={-70}>
            <Flex align="center">
              <Box className={classes.logoImage}>
                <Image src={iconLogo} alt="Logo" height={44} />
              </Box>

              <Flex direction="column" gap={0} ml={8}>
                <Text
                  size="1.3rem"
                  fw={700}
                  lts={6}
                  className={classes.logoText}
                >
                  DENEXT
                </Text>
                <Text size="9px" c="dimmed">
                  IT SOLUTIONS
                </Text>
              </Flex>
            </Flex>
          </Link>
        </Flex>

        {/* MENU DESKTOP */}
        <Group gap="lg" visibleFrom="sm">
          <Link to="home" smooth duration={500} offset={-70} className={classes.navLink}>
            Beranda
          </Link>

          <Link to="about-us" smooth duration={500} offset={-70} className={classes.navLink}>
            Tentang Kami
          </Link>

          <Link to="our-service" smooth duration={500} offset={-70} className={classes.navLink}>
            Layanan
          </Link>

          <Link to="client" smooth duration={500} offset={-70} className={classes.navLink}>
            Klien
          </Link>
        </Group>

        {/* CTA */}
        <Box visibleFrom="sm">
          <Link to="contact-us" smooth duration={500} offset={-70}>
            <Button
              radius="xl"
              className={classes.contactButton}
            >
              Konsultasi
            </Button>
          </Link>
        </Box>

        {/* MOBILE */}
        <MobileMenu />
      </Group>
    </Group>
  )
}
