'use client'

import { Box, Flex, Grid, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import cross from '../../../assets/Cross_Platform.png'
import expert from '../../../assets/Expert_Team.png'
import fast from '../../../assets/Fast,_Efficient.png'
import flexible from '../../../assets/Flexible_Support.png'
import transparent from '../../../assets/Transparent_Flexible.png'
import { useMediaQuery } from '@mantine/hooks'

// Grid simetris: 3 kartu di baris pertama, 2 kartu lebar di baris kedua
const features = [
  {
    title: 'Tim Profesional & Berpengalaman',
    desc: 'Tim IT berpengalaman siap menangani berbagai kebutuhan teknologi bisnis Anda.',
    img: expert,
    span: { base: 24, sm: 12, md: 8 },
  },
  {
    title: 'Solusi Cepat & Efisien',
    desc: 'Solusi yang cepat, tepat, dan disesuaikan dengan kebutuhan bisnis Anda.',
    img: fast,
    span: { base: 24, sm: 12, md: 8 },
  },
  {
    title: 'Support Fleksibel',
    desc: 'Tersedia secara remote maupun onsite sesuai kebutuhan Anda.',
    img: flexible,
    span: { base: 24, sm: 12, md: 8 },
  },
  {
    title: 'Harga Transparan',
    desc: 'Skema harga yang jelas dan fleksibel, disesuaikan dengan skala bisnis Anda.',
    img: transparent,
    span: { base: 24, sm: 12, md: 12 },
  },
  {
    title: 'Dukungan Multi Platform',
    desc: 'Mendukung Windows, Linux, dan macOS untuk fleksibilitas maksimal.',
    img: cross,
    span: { base: 24, sm: 12, md: 12 },
  },
]

export function WhyUs() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Stack pt={72} px={isMobile ? 'md' : 0} gap={0}>
      <Flex justify="center" direction="column" align="center" gap={12}>
        <Text size="2rem" c="#166534" fw={800} ta="center">
          Mengapa DENEXT?
        </Text>
        <Text size="sm" fw={400} maw={600} ta="center" c="var(--color-ink-3)">
          Partner strategis yang mendukung pertumbuhan bisnis Anda melalui
          solusi teknologi yang cerdas, scalable, dan berkelanjutan.
        </Text>
      </Flex>

      <Grid gutter={24} pt={32}>
        {features.map((feature) => (
          <Grid.Col key={feature.title} span={feature.span}>
            <Flex
              align="flex-start"
              gap={16}
              h="100%"
              p={22}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-divider)',
                borderRadius: 16,
              }}
            >
              <Box
                style={{
                  flex: '0 0 52px',
                  height: 52,
                  borderRadius: 12,
                  background: 'rgba(22, 101, 52, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={feature.img}
                  alt=""
                  width={36}
                  height={36}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Stack gap={6}>
                <Text fw={700} lh={1.3}>
                  {feature.title}
                </Text>
                <Text size="sm" c="var(--color-ink-3)" lh={1.6}>
                  {feature.desc}
                </Text>
              </Stack>
            </Flex>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  )
}
