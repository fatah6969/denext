// file sidebar.tsx
import { Drawer, Group } from "@mantine/core";
import { Link } from 'react-scroll'
import classes from './sidebar.module.css';

export function Sidebar({ opened, close }: { opened: boolean, close: () => void }) {
  return (
    <Drawer
      hiddenFrom="md"
      position="left"
      size="xs"
      opened={opened}
      onClose={close}
      withCloseButton={false}
    >
      <Group
        w="100%"
        gap={"xl"}
        pt={70}
        style={{ flexDirection: "column", alignItems: "flex-start" }}
      >
        <Link
         to="home"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          onClick={close}
          className={classes.link}
        >Beranda</Link>
         <Link
         to="about-us"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          onClick={close}
          className={classes.link}
        >Tentang</Link>
          <Link
         to="our-service"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          onClick={close}
          className={classes.link}
        >Layanan</Link>
         <Link
         to="client"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          onClick={close}
          className={classes.link}
        >Klien Kami</Link>
         <Link
         to="contact-us"
          smooth={true}
          duration={500}
          offset={-70}   // geser ke bawah biar ga ketutup Navbar
          onClick={close}
          className={classes.link}
        >Kontak Kami</Link>
      </Group>
    </Drawer>
  )
}
