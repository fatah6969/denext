import { Flex, Grid, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import cross from '../../../assets/Cross_Platform.png'
import expert from '../../../assets/Expert_Team.png'
import fast from '../../../assets/Fast,_Efficient.png'
import flexible from '../../../assets/Flexible_Support.png'
import transparent from '../../../assets/Transparent_Flexible.png'
import { useMediaQuery } from '@mantine/hooks'

export function WhyUs() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Stack pt={72} px={isMobile ? 'md' : 0}>
      <Flex justify="center" direction="column" align="center" gap={12}>
        <Text size="2rem" c="#4F8025" fw={800}>
          Mengapa DENEXT?
        </Text>
        <Text size="sm" fw={600} w={{ base: '100%', sm: 600 }} ta="center">
          Lebih dari sekadar penyedia layanan IT, DENEXT hadir sebagai partner strategis
          yang mendukung pertumbuhan bisnis Anda melalui solusi teknologi yang cerdas,
          scalable, dan berkelanjutan.
        </Text>
      </Flex>

      {/* GRID */}
      <Grid columns={24} justify="center" align="stretch" pt={24}>
        
        {/* 1 */}
        <Grid.Col span={{ base: 24, md: 12 }}>
          <CardItem
            title="Tim Profesional & Berpengalaman"
            desc="Didukung oleh tim IT berpengalaman yang siap menangani berbagai kebutuhan teknologi bisnis Anda."
            img={expert}
            isMobile={isMobile}
          />
        </Grid.Col>

        {/* 2 */}
        <Grid.Col span={{ base: 24, sm: 12, md: 6 }}>
          <CardItem
            title="Solusi Cepat & Efisien"
            desc="Kami menghadirkan solusi IT yang cepat, tepat, dan disesuaikan dengan kebutuhan bisnis Anda."
            img={fast}
            isMobile={isMobile}
          />
        </Grid.Col>

        {/* 3 */}
        <Grid.Col span={{ base: 24, sm: 12, md: 6 }}>
          <CardItem
            title="Support Fleksibel"
            desc="Layanan support tersedia secara remote maupun onsite sesuai kebutuhan Anda."
            img={flexible}
            isMobile={isMobile}
          />
        </Grid.Col>

        {/* 4 */}
        <Grid.Col span={{ base: 24, sm: 12, md: 6 }}>
          <CardItem
            title="Harga Transparan & Fleksibel"
            desc="Skema harga yang jelas dan fleksibel, disesuaikan dengan kebutuhan dan skala bisnis Anda."
            img={transparent}
            isMobile={isMobile}
          />
        </Grid.Col>

        {/* 5 */}
        <Grid.Col span={{ base: 24, sm: 12, md: 18 }}>
          <CardItem
            title="Dukungan Multi Platform"
            desc="Mendukung berbagai sistem seperti Windows, Linux, dan macOS untuk fleksibilitas maksimal."
            img={cross}
            isMobile={isMobile}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

/* COMPONENT BIAR RAPI */
function CardItem({ title, desc, img, isMobile }: any) {
  return (
    <Flex
      style={{
        position: 'relative',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '20px',
        paddingTop: '56px',
        paddingBottom: '56px',
        backgroundColor: 'white',
        overflow: 'hidden',
        minHeight: '200px',
        height: '100%',
      }}
    >
      <Flex
        direction="column"
        style={{
          position: 'absolute',
          top: 12,
          left: 12,
          right: isMobile ? 100 : 140, // ✅ FIX mobile
        }}
      >
        <Text size="lg" fw={600}>
          {title}
        </Text>
        <Text size="sm" c="dimmed">
          {desc}
        </Text>
      </Flex>

      <Image
        src={img}
        alt={title}
        width={isMobile ? 90 : 120} // ✅ lebih kecil di HP
        height={isMobile ? 90 : 120}
        style={{
          position: 'absolute',
          bottom: 6,
          right: 6,
        }}
      />
    </Flex>
  )
}
