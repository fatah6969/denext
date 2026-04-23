'use client';

import { Box, Menu, Burger, Group, Divider, Button } from '@mantine/core'
import { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './navbar.module.css'

export function MobileMenu() {
  const [opened, setOpened] = useState(false)

  const closeMenu = () => setOpened(false)

  const menuItems = [
    { to: 'home', label: 'Beranda', icon: '🏠' },
    { to: 'about-us', label: 'Tentang Kami', icon: '👥' },
    { to: 'our-service', label: 'Layanan', icon: '⚙️' },
    { to: 'client', label: 'Klien', icon: '🤝' },
  ]

  return (
    <Group>
      <Box hiddenFrom="sm">
        <Menu
          opened={opened}
          onChange={setOpened}
          position="bottom-end"
          withArrow
          shadow="xl"
          transitionProps={{
            transition: 'slide-down',
            duration: 250,
          }}
        >
          {/* BURGER */}
          <Menu.Target>
            <div className={styles.burgerWrapper}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                className={`${styles.burgerMenu} ${
                  opened ? styles.burgerOpened : ''
                }`}
              />
              <div className={styles.burgerGlow}></div>
            </div>
          </Menu.Target>

          {/* DROPDOWN */}
          <Menu.Dropdown
            pt={24}
            pb={16}
            w={240}
            className={styles.mobileDropdown}
          >
            {/* HEADER */}
            <div className={styles.dropdownHeader}>
              <div className={styles.headerLine}></div>
              <span className={styles.headerText}>Menu</span>
              <div className={styles.headerLine}></div>
            </div>

            {/* MENU */}
            {menuItems.map((item, index) => (
              <Menu.Item
                key={item.to}
                onClick={closeMenu}
                className={styles.mobileMenuItem}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-70}
                  className={styles.link}
                  onClick={closeMenu}
                >
                  <span className={styles.menuIcon}>{item.icon}</span>
                  <span className={styles.menuText}>{item.label}</span>
                  <span className={styles.menuArrow}>→</span>
                </Link>
              </Menu.Item>
            ))}

            {/* CTA SECTION 🔥 */}
            <Divider my="sm" />

            <Menu.Item className={styles.mobileMenuItem}>
              <Button
                fullWidth
                radius="xl"
                color="green"
                component="a"
                href="https://wa.me/6285117477481"
              >
                Konsultasi Gratis
              </Button>
            </Menu.Item>

            {/* FOOTER DOT */}
            <div className={styles.dropdownFooter}>
              <div className={styles.footerDot}></div>
            </div>
          </Menu.Dropdown>
        </Menu>
      </Box>
    </Group>
  )
}
