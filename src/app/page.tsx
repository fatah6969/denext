"use client";

import { Footer } from "@/components/layouts/footer/footer";
import { Navbar } from "@/components/layouts/navbar/navbar";
import { Sidebar } from "@/components/layouts/sidebar/sidebar";
import { AboutUs } from "@/components/ui/aboutUs/aboutUs";
import { Clients } from "@/components/ui/clients/clients";
import { GetInTouch } from "@/components/ui/contactUs/ContactUs";
import { Home } from "@/components/ui/home/home";
import { OurService } from "@/components/ui/ourServices/ourService";
import { Box, Container, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Page = () => {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <Container fluid px="md">
      {/* Sidebar terhubung ke state */}
      <Sidebar opened={opened} close={close} />
        <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "white", // biar ga transparan
        }}
      >
        <Navbar opened={opened} toggle={toggle} />
      </Box>

      <Stack pt={70}>
        <Home />
        <AboutUs />
        <OurService />
        <Clients />
        <GetInTouch />
        <Footer />
      </Stack>
    </Container>
  )
};

export default Page;
