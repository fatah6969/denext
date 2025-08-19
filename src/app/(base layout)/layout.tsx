'use client'

import { Footer } from '@/components/layouts/footer/footer'
import { Navbar } from '@/components/layouts/navbar/navbar'
import { Container, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <Container fluid px="md">
      <Stack>
        <Navbar opened={opened} toggle={toggle} />
        {children}
      </Stack>
      <Footer />
    </Container>
  )
}
