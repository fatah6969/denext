import { Card, Flex, Grid, Stack, Text } from '@mantine/core'
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

export function OurService() {
  const services = [
    {
      icon: IconHeadset,
      title: 'IT Support (Remote & On-Site)',
      description:
        'Dukungan teknis harian untuk memastikan sistem Anda berjalan optimal. Mulai dari instalasi OS & software, troubleshooting, hingga maintenance rutin untuk PC, laptop, dan printer—baik remote maupun on-site.',
    },
    {
      icon: IconTopologyStar,
      title: 'Jaringan & Infrastruktur',
      description:
        'Perancangan dan implementasi jaringan kantor (LAN, WAN, WiFi). Konfigurasi MikroTik, Ubiquiti, Cisco, dan TP-Link dengan VLAN, manajemen bandwidth, dan keamanan untuk koneksi yang stabil dan aman.',
    },
    {
      icon: IconServer2,
      title: 'Server & Virtualisasi',
      description:
        'Pembangunan dan pengelolaan server fisik maupun virtual (Proxmox, VMware, Hyper-V, Windows Server). Termasuk Active Directory, DNS, DHCP, replikasi, dan High Availability (HA).',
    },
    {
      icon: IconWorldWww,
      title: 'Website & Aplikasi',
      description:
        'Pembuatan website dan aplikasi web sesuai kebutuhan bisnis. Termasuk domain, SSL, maintenance, backup, dan optimasi SEO untuk meningkatkan visibilitas online Anda.',
    },
    {
      icon: IconCloudComputing,
      title: 'Cloud & Email Hosting',
      description:
        'Migrasi dan pengelolaan Google Workspace, Microsoft 365, dan Zoho Mail. Integrasi email bisnis, cloud storage, serta keamanan email (SMTP, DKIM, SPF).',
    },
    {
      icon: IconShieldLock,
      title: 'Security & CCTV',
      description:
        'Solusi keamanan dan pengawasan dengan Hikvision, Dahua, dan Ezviz. Mendukung kamera analog & IP, monitoring lokal maupun remote, serta penyimpanan terpusat.',
    },
    {
      icon: IconDatabase,
      title: 'Backup & Disaster Recovery',
      description:
        'Solusi backup data (lokal, offsite, atau cloud) dengan Synology, ZFS, rsync, dan Google Drive. Termasuk perencanaan Disaster Recovery (DRP) untuk menjaga data tetap aman.',
    },
    {
      icon: IconTools,
      title: 'Perangkat IT & Maintenance',
      description:
        'Perbaikan dan upgrade PC, laptop, dan MacBook (Windows, macOS, Linux). Termasuk pengadaan hardware, audit IT, dan dokumentasi aset untuk manajemen yang lebih efisien.',
    },
  ]

  return (
    <Stack justify="center" align="center" id="our-service" pt={70}>
      <Flex
        justify={'center'}
        direction={'column'}
        gap={'md'}
        w={{ base: '100%', sm: '100%' }}
      >
        <div className={styles.titleSection}>
          <Text size="2.5rem" fw={800} className={styles.title}>
            Layanan Kami
          </Text>
        </div>

        <Grid justify="start" align="start" p={15} h="100%" mih="100%">
          {services.map((service, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <Card shadow="md" padding="xl" h={320} className={styles.serviceCard}>
                <Flex
                  justify="center"
                  align="center"
                  direction="column"
                  gap={12}
                >
                  <div className={styles.iconWrapper}>
                    <service.icon size={36} className={styles.icon} />
                  </div>

                  <Text
                    fw={700}
                    size="lg"
                    ta="center"
                    lh={1.3}
                    className={styles.cardTitle}
                  >
                    {service.title}
                  </Text>
                </Flex>

                <Text
                  mt="md"
                  c="dimmed"
                  size="sm"
                  ta="justify"
                  lh={1.5}
                  className={styles.cardDescription}
                >
                  {service.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Stack>
  )
}
