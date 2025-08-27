'use client'

import { Footer } from '@/components/layouts/footer/footer'
import { Navbar } from '@/components/layouts/navbar/navbar'
import { Container, Stack } from '@mantine/core'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container fluid px="md">
      <Stack>
        <Navbar />
        {children}
      </Stack>
      <Footer />
    </Container>
  )
}
