'use client'

import { Box, Flex, Grid, Stack, Text } from '@mantine/core'
import {
  IconBolt,
  IconDevices,
  IconCurrencyDollar,
  IconUsersGroup,
  IconHeadset,
} from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'

const features = [
  {
    icon: IconUsersGroup,
    title: 'Tim Profesional',
    desc: 'Teknisi berpengalaman untuk UMKM hingga perusahaan.',
    span: { base: 24, sm: 12, md: 8 },
  },
  {
    icon: IconBolt,
    title: 'Solusi Cepat & Efisien',
    desc: 'Respons cepat, tepat sasaran, dan sesuai kebutuhan Anda.',
    span: { base: 24, sm: 12, md: 8 },
  },
  {
    icon: IconHeadset,
    title: 'Support Fleksibel',
    desc: 'Tersedia remote maupun on-site sesuai kondisi lapangan.',
    span: { base: 24, sm: 12, md: 8 },
  },
  {
    icon: IconCurrencyDollar,
    title: 'Harga Transparan',
    desc: 'Biaya jelas di awal, tanpa kejutan di kemudian hari.',
    span: { base: 24, sm: 12, md: 12 },
  },
  {
    icon: IconDevices,
    title: 'Multi Platform',
    desc: 'Mendukung Windows, Linux, dan macOS dalam satu partner.',
    span: { base: 24, sm: 12, md: 12 },
  },
]

export function WhyUs() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Stack pt={72} gap={0}>
      <Flex direction="column" align="center" gap={12}>
        <Text size="14px" fw={800} c="#166534" tt="uppercase">
          Keunggulan Kami
        </Text>
        <Text size="2rem" fw={800} ta="center" lh={1.2}>
          Mengapa DENEXT?
        </Text>
        <Text size="md" c="var(--color-ink-3)" ta="center" maw={600}>
          Kami bukan sekadar penyedia layanan IT — kami partner teknologi
          yang membantu bisnis Anda berjalan lebih efisien.
        </Text>
      </Flex>

      <Box px={isMobile ? 'md' : 0}>
        <Grid columns={24} gutter={24} pt={32}>
          {features.map((feature) => (
            <Grid.Col key={feature.title} span={feature.span}>
              <Flex align="center" gap={16} h="100%" p={24} className="whyCard">
                <Box className="whyIcon">
                  <feature.icon size={28} stroke={1.8} />
                </Box>
                <Stack gap={4}>
                  <Text fw={700} lh={1.3}>{feature.title}</Text>
                  <Text size="14px" c="var(--color-ink-3)" lh={1.6}>{feature.desc}</Text>
                </Stack>
              </Flex>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}
