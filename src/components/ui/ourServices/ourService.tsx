import { Avatar, Card, Flex, Grid, Stack, Text } from "@mantine/core";
import { IconCloudComputing, IconDatabase, IconHeadset, IconServer2, IconShieldLock, IconTools, IconTopologyStar, IconWorldWww } from "@tabler/icons-react";

export function OurService() {

  return (
    <Stack justify="center" align="center" id="our-service" pt={{ base: "0px", md:"70"}}>
            <Flex
              justify={"center"}
              direction={"column"}
              gap={"md"}
              w={{ base: "100%", sm: "90%" }}
            >
              <Text size="2rem" ta={"center"} py={10}>
                Layanan Kami
              </Text>

              <Grid
                justify="start"
                align="start"
                p={15}
                h={"100%"}
                mih={"100%"}
              >
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconHeadset size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      IT Support (Remote & On-site)
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami menyediakan dukungan teknis harian untuk menangani
                      berbagai permasalahan IT serta menjaga sistem dan
                      perangkat tetap berjalan optimal. Layanan ini mencakup
                      instalasi sistem operasi dan software, pemeliharaan rutin,
                      serta troubleshooting untuk memastikan performa perangkat
                      seperti PC, laptop, dan printer, baik secara remote maupun
                      langsung di lokasi Anda.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconTopologyStar size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Jaringan & Infrastruktur
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami merancang dan mengimplementasikan sistem jaringan
                      kantor, termasuk LAN, WAN, dan WiFi. Instalasi dan
                      konfigurasi mencakup perangkat seperti MikroTik, Ubiquiti,
                      Cisco, dan TP-Link, lengkap dengan manajemen bandwidth,
                      pengaturan VLAN, serta pengamanan jaringan untuk
                      memastikan koneksi yang stabil dan aman.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconServer2 size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Virtualisasi & Server
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami membantu bisnis membangun infrastruktur server fisik
                      maupun virtual menggunakan platform seperti Proxmox,
                      VMware, Hyper-V, dan Windows Server. Layanan mencakup
                      konfigurasi Active Directory, DNS, DHCP, replikasi, hingga
                      High Availability (HA) untuk menjaga keandalan sistem
                      operasional Anda.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconWorldWww size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Website & Aplikasi
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami mengembangkan website dan aplikasi berbasis web
                      sesuai kebutuhan bisnis Anda. Layanan mencakup pendaftaran
                      domain, instalasi dan pengelolaan SSL, maintenance rutin,
                      backup otomatis, serta optimasi SEO untuk meningkatkan
                      visibilitas dan performa bisnis Anda secara online.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconCloudComputing size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Cloud & Email Hosting
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami melayani migrasi dan pengelolaan layanan cloud bisnis
                      seperti Google Workspace, Microsoft 365, dan Zoho Mail.
                      Kami juga menyediakan integrasi email bisnis, penyimpanan
                      cloud, dan solusi kolaborasi tim, lengkap dengan
                      pengamanan email melalui konfigurasi SMTP, DKIM, dan SPF
                      untuk menjaga reputasi dan keamanan data.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconShieldLock size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Keamanan Digital & CCTV
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami menyediakan solusi pengawasan digital melalui
                      instalasi CCTV analog maupun IP, menggunakan perangkat
                      dari merek terpercaya seperti Hikvision, Dahua, dan Ezviz.
                      Sistem kami mendukung pemantauan lokal dan jarak jauh,
                      serta integrasi dengan jaringan dan penyimpanan terpusat
                      seperti NAS maupun cloud.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconDatabase size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Backup & Disaster Recovery
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami menawarkan solusi backup lokal, offsite, dan cloud
                      menggunakan teknologi seperti Synology, ZFS, rsync, dan
                      Google Drive. Selain itu, kami juga menangani sinkronisasi
                      data antar server, misalnya antara kantor pusat dan data
                      center, serta perencanaan dan implementasi Disaster
                      Recovery Plan (DRP) yang solid.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="lg" h={300}>
                    <Avatar color="green" radius="md" size="lg">
                      <IconTools size={32} />
                    </Avatar>

                    <Text fw={500} size="lg" mt="md">
                      Perangkat IT & Pemeliharaan
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm" ta={"justify"}>
                      Kami melayani perbaikan dan upgrade perangkat seperti PC,
                      laptop, dan MacBook untuk sistem operasi Windows, macOS,
                      maupun Linux. Layanan mencakup pengadaan hardware,
                      instalasi, audit infrastruktur IT, hingga dokumentasi aset
                      untuk mendukung pengelolaan perangkat Anda secara efisien
                      dan terstruktur.
                    </Text>
                  </Card>
                </Grid.Col>
              </Grid>
            </Flex>
          </Stack>
  )
}
