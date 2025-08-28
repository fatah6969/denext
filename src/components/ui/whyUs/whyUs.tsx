import { Flex, Grid, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import team from '../../../assets/Team.svg'
import lamp from '../../../assets/Lamp.png'

export function WhyUs() {
  return (
    <Stack pt={72}>
      <Flex justify="center" direction="column" align="center" gap={12}>
        <Text size="2rem" c="#4F8025" fw={800}>
          Why DENEXT?
        </Text>
        <Text size="sm" fw={600} w={600} ta="center">
          More than just an IT service provider
          DENEXT stands as a strategic partner that supports your business growth through smart, 
          scalable, and sustainable technology solutions.
        </Text>
      </Flex>

      <Grid columns={24} justify="center" align="center" pt={24}>
        <Grid.Col span={12}>
          <Flex
            justify="space-between"
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
            }}
          >
            <Flex
              direction="column"
              justify="start"
              gap={0}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
              }}
            >
              <Text size="lg" fw={600}>
                Expert Team with Proven Experience
              </Text>
              <Text size="sm" c="dimmed">
                We offer industry-leading IT job training for today’s tech
                landscape.
              </Text>
            </Flex>

            {/* gambar di pojok kanan bawah */}
            <Image
              src={team}
              alt="team"
              width={120}
              height={120}
              style={{
                position: 'absolute',
                bottom: 6, // nempel ke garis bawah
                right: 6, // nempel ke garis kanan
              }}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex
            justify="space-between"
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
            }}
          >
            <Flex
              direction="column"
              justify="start"
              gap={0}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
              }}
            >
              <Text size="lg" fw={600}>
                Fast, Efficient & Tailored Solutions
              </Text>
              <Text size="sm" c="dimmed">
                use cutting-edge technology to keep you ahead of the
                competition.
              </Text>
            </Flex>

            {/* gambar di pojok kanan bawah */}
            <Image
              src={lamp}
              alt="lamp"
              width={120}
              height={120}
              style={{
                position: 'absolute',
                bottom: 6, // nempel ke garis bawah
                right: 6, // nempel ke garis kanan
              }}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex
            justify="space-between"
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
            }}
          >
            <Flex
              direction="column"
              justify="start"
              gap={0}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
              }}
            >
              <Text size="lg" fw={600}>
                Flexible Support: Remote or Onsite
              </Text>
              <Text size="sm" c="dimmed">
                We consistently deliver high-quality results that exceed
                expectations
              </Text>
            </Flex>

            {/* gambar di pojok kanan bawah */}
            <Image
              src={team}
              alt="team"
              width={120}
              height={120}
              style={{
                position: 'absolute',
                bottom: 6, // nempel ke garis bawah
                right: 6, // nempel ke garis kanan
              }}
            />
          </Flex>
        </Grid.Col>
      </Grid>

      <Grid columns={24} justify="center" align="center">
        <Grid.Col span={6}>
          <Flex
            justify="space-between"
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
            }}
          >
            <Flex
              direction="column"
              justify="start"
              gap={0}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
              }}
            >
              <Text size="lg" fw={600}>
                Transparent & Flexible Pricing Plans
              </Text>
              <Text size="sm" c="dimmed">
                use cutting-edge technology to keep you ahead of the
                competition.
              </Text>
            </Flex>

            {/* gambar di pojok kanan bawah */}
            <Image
              src={lamp}
              alt="lamp"
              width={120}
              height={120}
              style={{
                position: 'absolute',
                bottom: 6, // nempel ke garis bawah
                right: 6, // nempel ke garis kanan
              }}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={18}>
          <Flex
            justify="space-between"
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
            }}
          >
            <Flex
              direction="column"
              justify="start"
              gap={0}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
              }}
            >
              <Text size="lg" fw={600}>
                Cross-Platform Support (Windows, Linux, Mac)
              </Text>
              <Text size="sm" c="dimmed">
                We consistently deliver high-quality results that exceed
                expectations
              </Text>
            </Flex>

            {/* gambar di pojok kanan bawah */}
            <Image
              src={team}
              alt="team"
              width={120}
              height={120}
              style={{
                position: 'absolute',
                bottom: 6, // nempel ke garis bawah
                right: 6, // nempel ke garis kanan
              }}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
