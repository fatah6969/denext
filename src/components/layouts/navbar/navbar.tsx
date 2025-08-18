// file navbar.tsx
import { Burger, Flex, Group, Text, UnstyledButton } from "@mantine/core"
import Image from "next/image"
import iconLogo from '../../../../public/favicon.png'
import classes from './navbar.module.css'
import { Link } from "react-scroll"

export function Navbar({ opened, toggle }: { opened: boolean, toggle: () => void }) {
  return (
    <nav>
      <Group h="100%" px={{ base: "xl", sm: "5rem" }}>
        <Group justify="space-between" style={{ flex: 1 }}>
          <Flex justify={"center"} align={"center"} style={{ cursor: 'pointer'}}>
            <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          className={classes.link}
            >
            <Image src={iconLogo} alt="Logo" height={50} />
            </Link>
            <Flex direction={"column"} gap={2}>
              <Link
              to="home"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          className={classes.link}
              >
              <Text size="1.5rem" fw={700} lts={8.5}>
                DENEXT
              </Text>
              <Text size="8px" fw={400}>
                DELIVERING THE NEXT INNOVATION
              </Text>
              </Link>
            </Flex>
          </Flex>
          <Group gap={"xl"} visibleFrom="sm">
            <UnstyledButton className={classes.control} component="a" href="#home">
              Beranda
            </UnstyledButton>
            <UnstyledButton className={classes.control} component="a" href="#about-us">
              Tentang
            </UnstyledButton>
            <UnstyledButton className={classes.control} component="a" href="#our-service">
              Layanan
            </UnstyledButton>
            <UnstyledButton className={classes.control} component="a" href="#client">
              Klien Kami
            </UnstyledButton>
            <UnstyledButton className={classes.control} component="a" href="#contact-us">
              Kontak
            </UnstyledButton>
          </Group>
        </Group>
        {/* Burger di sini memanggil toggle */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </nav>
  )
}
