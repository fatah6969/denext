'use client'

import { Footer } from '@/components/layouts/footer/footer'
import { Navbar } from '@/components/layouts/navbar/navbar'
import { WhatsappFloating } from '@/components/layouts/whatsapp/whatsapp'
import { AboutUs } from '@/components/ui/aboutUs/aboutUs'
import { Clients } from '@/components/ui/clients/clients'
import { GetInTouch } from '@/components/ui/contactUs/ContactUs'
import { Home } from '@/components/ui/home/home'
import { OurService } from '@/components/ui/ourServices/ourService'
import { WhyUs } from '@/components/ui/whyUs/whyUs'
import { Container, Stack } from '@mantine/core'

const Page = () => {
  return (
    <Container fluid px={{ base: 0, sm: 84 }}>
      <Navbar />
      <Stack pt={70}>
        <Home />
        <AboutUs />
        <WhyUs />
        <OurService />
        <Clients />
        <GetInTouch />
      </Stack>
      <Footer />
      <WhatsappFloating />
    </Container>
  )
}

export default Page
