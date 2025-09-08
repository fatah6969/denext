'use client';

import { Box, Menu, Burger, Group } from '@mantine/core'
import { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './navbar.module.css'

export function MobileMenu() {
  const [opened, setOpened] = useState(false)

  const closeMenu = () => {
    setOpened(false)
  }

  const menuItems = [
    { to: 'home', label: 'Home', icon: '🏠' },
    { to: 'about-us', label: 'About Us', icon: '👥' },
    { to: 'our-service', label: 'Our Service', icon: '⚙️' },
    { to: 'client', label: 'Client Us', icon: '🤝' },
    { to: 'contact-us', label: 'Contact Us', icon: '📞' },
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
            duration: 300,
          }}
        >
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

          <Menu.Dropdown
            pt={32}
            pb={16}
            w={240}
            className={styles.mobileDropdown}
          >
            <div className={styles.dropdownHeader}>
              <div className={styles.headerLine}></div>
              <span className={styles.headerText}>Menu</span>
              <div className={styles.headerLine}></div>
            </div>

            {menuItems.map((item, index) => (
              <Menu.Item
                key={item.to}
                onClick={closeMenu}
                className={styles.mobileMenuItem}
                style={{
                  animationDelay: `${index * 80}ms`,
                  '--item-index': index,
                }}
              >
                <Link
                  to={item.to}
                  smooth={true}
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

            <div className={styles.dropdownFooter}>
              <div className={styles.footerDot}></div>
            </div>
          </Menu.Dropdown>
        </Menu>
      </Box>
    </Group>
  )
}
