'use client'

import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import hero from '../../../assets/hero_background.png'
import vector from '../../../assets/content_vector.png'
import gifHero from '../../../assets/gif_hero.gif'
import { useMediaQuery } from '@mantine/hooks'
import classes from './home.module.css'

export function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Flex
      justify="space-between"
      direction={isMobile ? 'column' : 'row'}
      id="home"
      pt={isMobile ? 46 : 0}
      className={classes.homeContainer}
    >
      {/* Floating Particles Background */}
      <div className={classes.floatingParticles}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={classes.particle} />
        ))}
      </div>

      <Stack gap={6} ta="start" justify="center">
        <Box className={classes.heroTitle}>
          <Text
            size={isMobile ? '42px' : '84px'}
            fw={700}
            className={isMobile ? '' : classes.typingAnimation}
          >
            DENEXT{' '}
            <Text
              span
              c="#4F8025"
              fw={800}
              inherit
              className={classes.highlightGreen}
            >
              One Stop
            </Text>
          </Text>

          <Text
            size={isMobile ? '42px' : '84px'}
            fw={700}
            pt={16}
            className={classes.heroSubtitle}
          >
            IT Solutions
          </Text>
        </Box>

        <Text
          size="lg"
          fw={300}
          lh={1.6}
          mt="md"
          c="dimmed"
          className={classes.heroDescription}
        >
          Empowering your business with{' '}
          <Text span fw={500} className={classes.highlightGreen}>
            intelligent analytics
          </Text>
          ,<br />
          <Text span fw={500} className={classes.highlightGreen}>
            effective problem-solving
          </Text>
          , and{' '}
          <Text span fw={500} className={classes.highlightTeal}>
            tailored IT solutions
          </Text>{' '}
          for sustainable growth.
        </Text>

        <Box pt={isMobile ? 12 : 24} className={classes.heroButton}>
          <Button
            color="green"
            radius="xl"
            size="lg"
            className={classes.exploreButton}
          >
            Explore Now!
          </Button>
          {!isMobile && (
            <Image
              src={vector}
              alt="content-vector"
              height={500}
              width={500}
              className={classes.contentVector}
              style={{
                position: 'absolute',
                bottom: 96,
                left: -22,
                zIndex: -999,
              }}
            />
          )}
        </Box>
      </Stack>

      <Flex
        justify={isMobile ? 'center' : 'flex-end'}
        className={classes.heroImageContainer}
      >
        <Box visibleFrom="sm">
          <Image
            src={hero}
            alt="Hero GIF"
            height={721}
            width={837}
            className={classes.heroImageDesktop}
          />
        </Box>
        {isMobile && (
          <Box pt={12}>
            <Image
              src={gifHero}
              alt="Hero GIF"
              height={200}
              width={200}
              className={classes.heroImageMobile}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
