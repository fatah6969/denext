import { Box, Flex, Grid, Stack, Text } from '@mantine/core'
import {
  IconCloudComputing,
  IconDatabase,
  IconHeadset,
  IconServer2,
  IconShieldLock,
  IconTools,
  IconTopologyStar,
  IconWorldWww,
} from '@tabler/icons-react'
import styles from './ourService.module.css'

const services = [
  {
    icon: IconHeadset,
    title: 'IT Support',
    description: 'Remote & on-site: instalasi, troubleshooting, dan maintenance harian.',
  },
  {
    icon: IconTopologyStar,
    title: 'Jaringan & Infrastruktur',
    description: 'LAN, WiFi, MikroTik, VLAN, dan manajemen bandwidth yang stabil.',
  },
  {
    icon: IconServer2,
    title: 'Server & Virtualisasi',
    description: 'Proxmox, VMware, Windows Server, Active Directory, dan High Availability.',
  },
  {
    icon: IconWorldWww,
    title: 'Website & Aplikasi',
    description: 'Pembuatan web, domain, SSL, maintenance, backup, dan optimasi SEO.',
  },
  {
    icon: IconCloudComputing,
    title: 'Cloud & Email',
    description: 'Google Workspace, Microsoft 365, Zoho Mail, dan keamanan email.',
  },
  {
    icon: IconShieldLock,
    title: 'Security & CCTV',
    description: 'Kamera IP & analog, monitoring remote, dan penyimpanan terpusat.',
  },
  {
    icon: IconDatabase,
    title: 'Backup & Recovery',
    description: 'Backup lokal, offsite, dan cloud plus perencanaan disaster recovery.',
  },
  {
    icon: IconTools,
    title: 'Perangkat IT',
    description: 'Service PC, laptop, MacBook, pengadaan hardware, dan audit aset.',
  },
]

export function OurService() {
  return (
    <Stack id="our-service" pt={72} gap={0}>
      <Flex direction="column" align="center" gap={12} mb={32}>
        <Text size="14px" fw={800} c="#166534" tt="uppercase">
          Solusi IT untuk Bisnis
        </Text>
        <Text size="2.25rem" fw={800} ta="center" lh={1.15}>
          Layanan Kami
        </Text>
        <Text size="md" c="var(--color-ink-3)" ta="center" maw={560}>
          Dukungan teknis menyeluruh untuk operasional kantor Anda — dari
          perangkat hingga infrastruktur server.
        </Text>
      </Flex>

      <Box px="md">
        <Grid gutter={24}>
          {services.map((service) => (
          <Grid.Col key={service.title} span={{ base: 12, sm: 6, md: 3 }}>
            <Box className={styles.serviceCard}>
              <Box className={styles.iconWrapper}>
                <service.icon size={38} stroke={1.7} className={styles.icon} />
              </Box>
              <Text fw={700} size="md" lh={1.3} className={styles.cardTitle}>
                {service.title}
              </Text>
              <Text size="sm" c="var(--color-ink-3)" lh={1.6} className={styles.cardDescription}>
                {service.description}
              </Text>
            </Box>
          </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}
