import { Footer } from "@/components/layouts/footer/footer";
import { Navbar } from "@/components/layouts/navbar/navbar";
import { Sidebar } from "@/components/layouts/sidebar/sidebar";
import { Container, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { close, toggle }] = useDisclosure(false);

    return (
      <Container fluid px="md">
        {/* Sidebar terhubung ke state */}
        <Sidebar opened={opened} close={close} />

        <Stack>
          {/* Navbar juga pakai state yang sama */}
          <Navbar opened={opened} toggle={toggle} />

        {children}
        </Stack>
          <Footer />
      </Container>
    )
}
