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
        'Daily technical support to keep your systems running smoothly. From OS and software installation to troubleshooting and preventive maintenance, we ensure your PCs, laptops, and printers perform at their best—whether remotely or on-site.',
    },
    {
      icon: IconTopologyStar,
      title: 'Networking & Infrastructure',
      description:
        'End-to-end design and deployment of office networks (LAN, WAN, WiFi). We configure MikroTik, Ubiquiti, Cisco, and TP-Link devices with VLAN, bandwidth management, and security to keep your connection stable and protected.',
    },
    {
      icon: IconServer2,
      title: 'Virtualization & Servers',
      description:
        'Build and manage physical or virtual servers with Proxmox, VMware, Hyper-V, and Windows Server. Services include Active Directory, DNS, DHCP, replication, and High Availability (HA) to keep your operations reliable.',
    },
    {
      icon: IconWorldWww,
      title: 'Websites & Applications',
      description:
        'Custom websites and web apps tailored to your business. We handle domain setup, SSL management, routine maintenance, backups, and SEO optimization to boost your online presence.',
    },
    {
      icon: IconCloudComputing,
      title: 'Cloud & Email Hosting',
      description:
        'Migration and management for Google Workspace, Microsoft 365, and Zoho Mail. We provide business email integration, cloud storage, and team collaboration with advanced email security (SMTP, DKIM, SPF).',
    },
    {
      icon: IconShieldLock,
      title: 'Security & CCTV',
      description:
        'Complete surveillance solutions with Hikvision, Dahua, and Ezviz. Supporting analog and IP cameras, local or remote monitoring, plus centralized storage via NAS or cloud.',
    },
    {
      icon: IconDatabase,
      title: 'Backup & Disaster Recovery',
      description:
        'Reliable backup solutions—local, offsite, or cloud—using Synology, ZFS, rsync, and Google Drive. We design Disaster Recovery Plans (DRP) to keep your business data secure and always available.',
    },
    {
      icon: IconTools,
      title: 'IT Devices & Maintenance',
      description:
        'Repair and upgrade services for PCs, laptops, and MacBooks across Windows, macOS, and Linux. We also handle hardware procurement, IT audits, and asset documentation for efficient management.',
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
            Our Services
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
