'use client'
import { Badge, em, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import gifAbout from '../../../assets/gif_about.gif'
import { IconCircleDashedCheck } from "@tabler/icons-react";

export function AboutUs() {
  const [widthHeght, setWidthHeight] = useState<number>(500);
  const iconCheck = <IconCircleDashedCheck size={20} />;

      const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

      useEffect(() => {
        if (isMobile) {
          setWidthHeight(300);
        } else {
          setWidthHeight(500);
        }
      }, [isMobile]);
  return (
    <Flex
            justify={{ base: "center" }}
            direction={{ base: "column-reverse", sm: "row" }}
            // m={"md"}
            gap={"xs"}
            id="about-us"
            py={{ base: "0px", md:"156px"}}
          >
            <Flex justify="center" p={0}>
              <Image
                src={gifAbout}
                alt="About GIF"
                height={widthHeght}
                width={widthHeght}
              />
            </Flex>

            <Flex
              direction={"column"}
              justify={"center"}
              gap={20}
              w={{ base: "100%", sm: "50%" }}
            >
              <Text size="2rem">Tentang Kami</Text>
              <Text size="lg" fw={300} ta={"justify"}>
                <Text span c="#4F8025" fw={600} inherit>
                  DENEXT
                </Text>{" "}
                adalah perusahaan IT Support & Konsultan Teknologi modern yang
                berkomitmen menghadirkan solusi teknologi yang handal,
                fleksibel, dan terjangkau bagi UMKM, startup, hingga perusahaan
                berskala besar. Kami memandang teknologi bukan sekadar alat
                bantu, melainkan sebagai strategi utama dalam mendorong
                pertumbuhan dan efisiensi bisnis. Dengan pendekatan yang
                berpusat pada manusia dan berorientasi pada hasil, kami hadir
                sebagai mitra terpercaya dalam mendampingi transformasi digital
                bisnis Anda.
              </Text>

              <Flex direction={"column"} gap={20}>
                <Text size="2rem">Kenapa DENEXT ?</Text>

                <Flex gap={10} wrap="wrap" justify="flex-start">
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Tim Profesional & Berpengalaman
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Solusi Cepat & Efisien
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Bisa Remote & Onsite
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Harga Transparan & Fleksibel
                  </Badge>
                  <Badge color="green" leftSection={iconCheck} size="md">
                    Support Multi-platform (Windows, Linux, Mac)
                  </Badge>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
  )
}
