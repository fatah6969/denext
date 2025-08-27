'use client'
import { Box, Burger, Button, Flex, Group, Menu, Text } from '@mantine/core'
import Image from 'next/image'
import iconLogo from '../../../../public/favicon.png'
import classes from './navbar.module.css'
import { Link } from 'react-scroll'
import { useState } from 'react'

export function Navbar() {
  const [opened, setOpened] = useState<boolean>(false)

  // Function to close the mobile menu
  const closeMenu = () => {
    setOpened(false)
  }

  return (
    <Group
      h="70px"
      px={{ base: 'md', sm: '5rem' }}
      bg="white"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Group
        justify="space-between"
        style={{
          flex: 1,
          borderRadius: '9999px',
        }}
        bg="#F7F7F7"
        py="16px"
        px={{ base: 'md', sm: '40px' }}
        mt="12px"
      >
        {/* Logo + Text */}
        <Flex
          justify={'center'}
          align={'center'}
          direction={'row'}
          style={{ cursor: 'pointer' }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Flex align={'center'}>
              <Image src={iconLogo} alt="Logo" height={50} />
              <Flex direction={'column'} gap={2}>
                <Text size="1.5rem" fw={700} lts={8.5}>
                  DENEXT
                </Text>
                <Text size="8px" fw={400}>
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
            className={classes.navbar}
          >
            Beranda
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            offset={-70}
            className={classes.navbar}
          >
            About Us
          </Link>
          <Link
            to="our-service"
            smooth={true}
            duration={500}
            offset={-70}
            className={classes.navbar}
          >
            Our Service
          </Link>
          <Link
            to="client"
            smooth={true}
            duration={500}
            offset={-70}
            className={classes.navbar}
          >
            Client Us
          </Link>
        </Group>

        {/* Contact Us Button (desktop) - using react-scroll for consistency */}
        <Box visibleFrom="sm">
          <Link to="contact-us" smooth={true} duration={500} offset={-70}>
            <Button variant="outline" color="green" radius="xl">
              Contact Us
            </Button>
          </Link>
        </Box>

        {/* Burger (mobile) */}
        <Box hiddenFrom="sm">
          <Menu
            opened={opened}
            onChange={setOpened}
            position="bottom-end"
            withArrow
            shadow="md"
          >
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
              />
            </Menu.Target>

            <Menu.Dropdown pt={27} w={200} bg="#F7F7F7">
              <Menu.Item
                onClick={() => {
                  closeMenu()
                }}
              >
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={classes.link}
                  onClick={closeMenu}
                >
                  Beranda
                </Link>
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  closeMenu()
                }}
              >
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={classes.link}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  closeMenu()
                }}
              >
                <Link
                  to="our-service"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={classes.link}
                  onClick={closeMenu}
                >
                  Our Service
                </Link>
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  closeMenu()
                }}
              >
                <Link
                  to="client"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={classes.link}
                  onClick={closeMenu}
                >
                  Client Us
                </Link>
              </Menu.Item>

              <Menu.Item
                onClick={() => {
                  closeMenu()
                }}
              >
                <Link
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={classes.link}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Group>
    </Group>
  )
}
