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
      bg="white"
      className={classes.navbarWrapper}
    >
      <Group
        justify="space-between"
        className={classes.navbarContainer}
        py="16px"
        px={{ base: 'md', sm: '40px' }}
        mt="12px"
      >
        {/* Logo + Text */}
        <Flex
          justify={'center'}
          align={'center'}
          direction={'row'}
          className={classes.logoContainer}
        >
          <Link to="home" smooth={true} duration={500} offset={-70}>
            <Flex align={'center'}>
              <Box className={classes.logoImage}>
                <Image src={iconLogo} alt="Logo" height={50} />
              </Box>
              <Flex direction={'column'} gap={2} ml={8}>
                <Text
                  size="1.5rem"
                  fw={700}
                  lts={8.5}
                  className={classes.logoText}
                >
                  DENEXT
                </Text>
                <Text
                  size="8px"
                  fw={400}
                  c="dimmed"
                  className={classes.logoSubtext}
                >
                  DELIVERING THE NEXT INNOVATION
                </Text>
              </Flex>
            </Flex>
          </Link>
        </Flex>

        {/* Navigation Links (desktop) */}
        <Group gap="xl" visibleFrom="sm">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className={`${classes.navLink} ${classes.navbar}`}
          >
            Beranda
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            offset={-70}
            className={`${classes.navLink} ${classes.navbar}`}
          >
            About Us
          </Link>
          <Link
            to="our-service"
            smooth={true}
            duration={500}
            offset={-70}
            className={`${classes.navLink} ${classes.navbar}`}
          >
            Our Service
          </Link>
          <Link
            to="client"
            smooth={true}
            duration={500}
            offset={-70}
            className={`${classes.navLink} ${classes.navbar}`}
          >
            Client Us
          </Link>
        </Group>

        {/* Contact Us Button (desktop) */}
        <Box visibleFrom="sm">
          <Link to="contact-us" smooth={true} duration={500} offset={-70}>
            <Button
              variant="outline"
              color="green"
              radius="xl"
              className={classes.contactButton}
            >
              Contact Us
            </Button>
          </Link>
        </Box>

        {/* Burger (mobile) */}
        <MobileMenu />
      </Group>
    </Group>
  )
}
