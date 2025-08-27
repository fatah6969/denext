'use client'
import { Box, Flex, Text } from '@mantine/core'
import Image from 'next/image'
import gifAbout from '../../../assets/gif_about.gif'
import aboutus from '../../../assets/aboutus.png'
import { useMediaQuery } from '@mantine/hooks'

export function AboutUs() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Flex
      justify={{ base: 'space-between' }}
      direction={{ base: 'column-reverse', sm: 'row' }}
      // m={"md"}
      gap={'xs'}
      id="about-us"
      pt={46}
    >
      <Flex justify="center" p={0}>
        <Box
          visibleFrom="sm"
          style={{
            borderRadius: '48px',
            overflow: 'hidden',
          }}
        >
          <Image src={aboutus} alt="About us" height={472} width={740} />
        </Box>
        {isMobile && (
          <Box pt={12}>
            <Image src={gifAbout} alt="About GIF" height={200} width={200} />
          </Box>
        )}
      </Flex>

      <Flex
        direction={'column'}
        justify={'center'}
        gap={20}
        w={{ base: '100%', sm: '50%' }}
      >
        <Box>
          <Text size="2rem" c="#4F8025" fw={800}>
            About Us
          </Text>
          <Text size="lg" fw={300} ta={'justify'} pt={16}>
            At{' '}
            <Text span c="#4F8025" fw={600} inherit>
              DENEXT
            </Text>
            , we are more than just an IT Support & Consulting company — we are
            your technology growth partner. Our mission is to deliver smart,
            reliable, and cost-effective solutions designed to empower small
            businesses, startups, and enterprises alike.
            <br />
            <br />
            We believe technology is not only a tool but a powerful strategy to
            unlock efficiency, accelerate growth, and future-proof your
            business. With a people-first approach and a strong focus on
            results, we are here to guide and support your digital
            transformation journey every step of the way.
          </Text>
        </Box>

        <Flex direction={isMobile ? 'column' : 'row'} gap={12}>
          <Box>
            <Text size="2rem" c="#4F8025" fw={800}>
              Our Missions
            </Text>
            <Text size="lg" fw={300} ta={'justify'}>
              We believe technology is not only a tool but a powerful strategy
              to unlock efficiency, accelerate growth, and future-proof your
              business. With a people-first approach and a strong focus on
              results, we are here to guide and support your digital
              transformation journey every step of the way.
            </Text>
          </Box>
          <Box>
            <Text size="2rem" c="#4F8025" fw={800}>
              Who We Are
            </Text>
            <Text size="lg" fw={300} ta={'justify'}>
              we are more than just an IT Support & Consulting company — we are
              your technology growth partner. Our mission is to deliver smart,
              reliable, and cost-effective solutions designed to empower small
              businesses, startups, and enterprises alike.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
