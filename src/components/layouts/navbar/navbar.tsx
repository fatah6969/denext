'use client'

import { Box, Button, Flex, Group, Text } from '@mantine/core'
import Image from 'next/image'
import iconLogo from '../../../../public/favicon.png'
import classes from './navbar.module.css'
import { Link } from 'react-scroll'
import { MobileMenu } from './sidebar'
import { useCallback, useEffect, useRef, useState } from 'react'

const SECTIONS = ['home', 'about-us', 'our-service', 'client', 'contact-us'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')

  // Scroll-aware navbar (bg solid)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => {
      if (s) observer.observe(s)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = useCallback((section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <Group
      h="70px"
      px={0}
      className={`${classes.navbarWrapper} ${scrolled ? classes.scrolled : ''}`}
    >
      <Group
        justify="space-between"
        className={classes.navbarContainer}
        py="12px"
        px="24px"
      >
        {/* Logo */}
        <Flex align="center" className={classes.logoContainer}>
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            className={`${classes.navLink} ${activeSection === 'home' ? classes.active : ''}`}
          >
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
          {SECTIONS.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-70}
              data-nav={section}
              className={`${classes.navLink} ${activeSection === section ? classes.active : ''}`}
              onClick={() => goTo(section)}
            >
              {section === 'home' ? 'Beranda' : section === 'about-us' ? 'Tentang Kami' : section === 'our-service' ? 'Layanan' : section === 'client' ? 'Klien' : 'Kontak'}
            </Link>
          ))}
        </Group>

        {/* CTA */}
        <Box visibleFrom="sm">
          <Link to="contact-us" smooth duration={500} offset={-70}>
            <Button
              variant="outline"
              color="green.8"
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
