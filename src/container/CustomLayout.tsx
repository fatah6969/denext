// Updated version of CustomLayout.tsx with UI/UX improvements
"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Burger,
  Card,
  Container,
  Drawer,
  em,
  Flex,
  Grid,
  Group,
  Text,
  UnstyledButton,
  Button,
} from "@mantine/core";
import classes from "./custom.module.css";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import iconLogo from "../../public/favicon.png";
import gifHero from "../assets/gif_hero.gif";
import gifAbout from "../assets/gif_about.gif";
import { useEffect, useState } from "react";
import {
  IconBrandWhatsapp,
  IconCircleDashedCheck,
  IconHeadset,
  IconTopologyStar,
  IconServer2,
  IconWorldWww,
  IconCloudComputing,
  IconShieldLock,
  IconDatabase,
  IconTools,
} from "@tabler/icons-react";
import { GetInTouch } from "./ContactUs";

const CustomLayout = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [widthHeght, setWidthHeight] = useState<number>(500);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  useEffect(() => {
    setWidthHeight(isMobile ? 300 : 500);
  }, [isMobile]);

  const iconCheck = <IconCircleDashedCheck size={20} />;

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px={{ base: "xl", sm: "5rem" }}>
          <Group justify="space-between" style={{ flex: 1 }}>
            <Flex justify="center" align="center" gap={10}>
              <Image src={iconLogo} alt="Logo" height={40} />
              <Flex direction="column" gap={0}>
                <Text size="lg" fw={800} lts={2}>
                  DENEXT
                </Text>
                <Text size="xs" fw={400} c="dimmed">
                  DELIVERING THE NEXT INNOVATION
                </Text>
              </Flex>
            </Flex>
            <Group gap="xl" visibleFrom="sm">
              {["Beranda", "Tentang", "Layanan", "Kontak"].map((label, i) => (
                <UnstyledButton
                  key={i}
                  className={classes.control}
                  component="a"
                  href={`#${label.toLowerCase().replace(" ", "-")}`}
                >
                  {label}
                </UnstyledButton>
              ))}
            </Group>
          </Group>
          <Burger opened={opened} onClick={open} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Main style={{ display: "flex", flexDirection: "column", gap: isMobile ? "3rem" : "2rem" }}>
        <Drawer hiddenFrom="md" position="left" size="xs" opened={opened} onClose={close} withCloseButton={false}>
          <Group gap="xl" style={{ flexDirection: "column", alignItems: "flex-start" }}>
            {["Home", "About Us", "Services", "Contact Us"].map((text, i) => (
              <UnstyledButton key={i} className={classes.control}>{text}</UnstyledButton>
            ))}
          </Group>
        </Drawer>

        <AppShell.Section id="home" py="xl">
          <Container>
            <Flex justify={{ base: "center", sm: "space-around" }} direction={{ base: "column-reverse", sm: "row" }} gap="md">
              <Flex direction="column" justify="center" gap={10}>
                <Text size="sm" fw={300} mb={10}>- Expert Consulting -</Text>
                <Text size="2.5rem" fw={700} lh={1.2}>DENEXT</Text>
                <Text size="2.5rem"><Text span c="#4F8025" fw={600} inherit>DELIVERING THE NEXT INNOVATION</Text></Text>
                <Text size="lg" fw={300}>Solusi IT cerdas untuk mendukung pertumbuhan dan efisiensi bisnis Anda.</Text>
              </Flex>
              <Flex justify="center">
                <Image src={gifHero} alt="Hero GIF" height={widthHeght} width={widthHeght} />
              </Flex>
            </Flex>
          </Container>
        </AppShell.Section>

        <AppShell.Section id="about-us" py="xl">
          <Container>
            <Flex justify={{ base: "center" }} direction={{ base: "column-reverse", sm: "row" }} gap="md">
              <Flex justify="center">
                <Image src={gifAbout} alt="About GIF" height={widthHeght} width={widthHeght} />
              </Flex>
              <Flex direction="column" justify="center" gap={20} w={{ base: "100%", sm: "50%" }}>
                <Text size="2rem">Tentang Kami</Text>
                <Text size="lg" fw={300} ta="justify">
                  <Text span c="#4F8025" fw={600} inherit>DENEXT</Text> adalah perusahaan IT Support & Konsultan Teknologi modern yang
                berkomitmen untuk memberikan solusi teknologi yang handal,
                fleksibel, dan terjangkau bagi UMKM, startup, hingga perusahaan
                berskala besar. Kami memandang teknologi bukan sekadar alat
                bantu, tetapi sebagai strategi utama untuk mendorong pertumbuhan
                dan efisiensi bisnis. Dengan pendekatan yang berpusat pada
                manusia dan berorientasi pada hasil, kami hadir sebagai mitra
                terpercaya dalam mendampingi transformasi digital bisnis Anda.
                </Text>
                <Text size="2rem">Kenapa DENEXT?</Text>
                <Flex gap={10} wrap="wrap">
                  {["Tim Profesional & Berpengalaman", "Solusi Cepat & Efisien", "Bisa Remote & Onsite", "Harga Transparan & Fleksibel", "Support Multi-platform (Windows, Linux, Mac)"].map((text, i) => (
                    <Badge key={i} color="green" leftSection={iconCheck} size="md">{text}</Badge>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </AppShell.Section>

        <AppShell.Section id="our-services" py="xl">
          <Container>
            <Text size="2rem" ta="center" mb="lg">Layanan Kami</Text>
            <Grid justify="center" align="center" gutter={20}>
              {[{
                title: "IT Support (Remote & On-site)", icon: <IconHeadset size={32} />, desc: "Kami menyediakan dukungan teknis harian untuk membantu
                      menangani berbagai masalah IT serta menjaga agar sistem
                      dan perangkat tetap berjalan optimal. Layanan ini mencakup
                      instalasi sistem operasi dan software, serta pemeliharaan
                      rutin untuk memastikan performa perangkat kerja seperti
                      PC, laptop, dan printer tetap maksimal—baik secara jarak
                      jauh maupun langsung di lokasi Anda."
              }, {
                title: "Jaringan & Infrastruktur", icon: <IconTopologyStar size={32} />, desc: "ami merancang dan mengimplementasikan sistem jaringan
                      kantor seperti LAN, WAN, dan WiFi. Proses instalasi dan
                      konfigurasi mencakup perangkat seperti Mikrotik, Ubiquiti,
                      Cisco, dan TP-Link, dilengkapi dengan manajemen bandwidth,
                      pengaturan VLAN, dan pengamanan jaringan agar tetap stabil
                      dan aman."
              }, {
                title: "Virtualisasi & Server", icon: <IconServer2 size={32} />, desc: "Kami membantu bisnis membangun infrastruktur server fisik
                      maupun virtual menggunakan platform seperti Proxmox,
                      VMware, Hyper-V, dan Windows Server. Layanan ini termasuk
                      konfigurasi Active Directory, DNS, DHCP, hingga sistem
                      replikasi dan High Availability (HA) untuk memastikan
                      keandalan operasional server Anda."
              }, {
                title: "Website & Aplikasi", icon: <IconWorldWww size={32} />, desc: " Kami mengembangkan website dan aplikasi berbasis web yang
                      disesuaikan dengan kebutuhan bisnis Anda. Layanan kami
                      mencakup pendaftaran domain, pengelolaan SSL, maintenance
                      rutin, backup otomatis, dan optimasi SEO agar bisnis Anda
                      tampil maksimal secara online."
              }, {
                title: "Cloud & Email Hosting", icon: <IconCloudComputing size={32} />, desc: "Kami mendukung migrasi dan pengelolaan layanan cloud
                      seperti Google Workspace, Microsoft 365, dan Zoho Mail.
                      Kami juga mengintegrasikan email bisnis, penyimpanan
                      cloud, dan kolaborasi tim, dilengkapi konfigurasi keamanan
                      email seperti SMTP, DKIM, dan SPF untuk menjaga reputasi
                      email dan keamanan data."
              }, {
                title: "Keamanan Digital & CCTV", icon: <IconShieldLock size={32} />, desc: "Kami menyediakan solusi pengawasan digital melalui
                      instalasi CCTV analog maupun IP dari merek terpercaya
                      seperti Hikvision, Dahua, dan Ezviz. Sistem kami mendukung
                      pemantauan lokal maupun jarak jauh, serta integrasi dengan
                      jaringan dan penyimpanan terpusat seperti NAS atau cloud."
              }, {
                title: "Backup & Disaster Recovery", icon: <IconDatabase size={32} />, desc: " Kami menawarkan solusi backup lokal, offsite, dan cloud
                      menggunakan sistem seperti Synology, ZFS, rsync, dan
                      Google Drive. Selain itu, kami menangani sinkronisasi data
                      antar server (misalnya antara kantor pusat dan data
                      center) serta menyusun dan menerapkan rencana pemulihan
                      bencana (Disaster Recovery Plan)."
              }, {
                title: "Perangkat IT & Pemeliharaan", icon: <IconTools size={32} />, desc: "Kami melayani perbaikan dan upgrade perangkat seperti PC,
                      laptop, dan MacBook untuk berbagai sistem operasi
                      (Windows, macOS, Linux). Layanan kami juga mencakup
                      pengadaan perangkat keras, instalasi, audit infrastruktur
                      IT, dan dokumentasi aset untuk membantu manajemen
                      perangkat Anda lebih tertata."
              }].map((item, i) => (
                <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="md" padding="lg" style={{ transition: "transform 0.2s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                    <Avatar color="green" radius="md" size="lg">{item.icon}</Avatar>
                    <Text fw={500} size="lg" mt="md">{item.title}</Text>
                    <Text mt="xs" c="dimmed" size="sm" ta="justify">{item.desc}</Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>

            <Flex justify="center" mt="xl">
              <Button variant="light" color="green" size="md" radius="xl" component="a" href="#contact-us">
                Hubungi Kami Sekarang
              </Button>
            </Flex>
          </Container>
        </AppShell.Section>

        <AppShell.Section id="contact-us" py="xl">
          <Container>
            <GetInTouch />
          </Container>
        </AppShell.Section>

        <ActionIcon variant="filled" aria-label="Whatsapp" size="3rem" color="green" radius="100%"
          style={{ position: "fixed", bottom: 20, right: 20 }} component="a" target="_blank"
          rel="noopener noreferrer" onClick={() => window.open("https://wa.me/6285117477481")}
        >
          <IconBrandWhatsapp style={{ width: "70%", height: "70%" }} size={20} stroke={1.5} />
        </ActionIcon>

        <AppShell.Section p="md" style={{ borderTop: "1px solid #eaeaea" }}>
          <footer style={{ textAlign: "center" }}>
            <Text size="sm" c="dimmed">© {new Date().getFullYear()} DENEXT. All rights reserved.</Text>
          </footer>
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
};

export default CustomLayout;
