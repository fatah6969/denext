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
      px={0} // ⬅️ penting, biar center bener
      className={classes.navbarWrapper}
    >
      <Group
        justify="space-between"
        className={classes.navbarContainer}
        py="12px"
        px="24px"
      >
        {/* Logo */}
        <Flex align="center" className={classes.logoContainer}>
          <Link to="home" smooth duration={500} offset={-70}>
            <Flex align="center">
              <Image src={iconLogo} alt="Logo" height={40} />
              <Flex direction="column" ml={8}>
                <Text fw={700} size="1.3rem" className={classes.logoText}>
                  DENEXT
                </Text>
                <Text size="8px" c="dimmed">
                  DELIVERING THE NEXT INNOVATION
                </Text>
              </Flex>
            </Flex>
          </Link>
        </Flex>

        {/* Desktop Menu */}
        <Group gap="lg" visibleFrom="sm">
          <Link to="home" smooth duration={500} offset={-70} className={classes.navLink}>
            Beranda
          </Link>
          <Link to="about-us" smooth duration={500} offset={-70} className={classes.navLink}>
            About Us
          </Link>
          <Link to="our-service" smooth duration={500} offset={-70} className={classes.navLink}>
            Our Service
          </Link>
          <Link to="client" smooth duration={500} offset={-70} className={classes.navLink}>
            Client
          </Link>
        </Group>

        {/* CTA */}
        <Box visibleFrom="sm">
          <Link to="contact-us" smooth duration={500} offset={-70}>
            <Button
              variant="outline"
              color="green"
              radius="xl"
              className={classes.contactButton}
            >
              Konsultasi
            </Button>
          </Link>
        </Box>

        {/* Mobile */}
        <MobileMenu />
      </Group>
    </Group>
  )
}
