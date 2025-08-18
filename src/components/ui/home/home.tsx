'use client'

import { em, Flex, Text } from "@mantine/core";
import Image from "next/image";
import gifHero from '../../../assets/gif_hero.gif'
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export function Home() {
    const [widthHeght, setWidthHeight] = useState<number>(500);

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
            justify="center"
            direction="column"
            gap={"md"}
            id="home"
            py={{ base: "0px", md:"68px"}}
          >
            <Flex direction={"column"} justify={"center"} gap={4} ta="center">
              <Text size="sm" fw={400} tt="uppercase" c="dimmed" mb="xs">
                — Expert Consulting —
              </Text>

              <Text size="48px" fw={700}>
                DENEXT{" "}
                <Text span c="#4F8025" fw={800} inherit>
                  One Stop
                </Text>{" "}
                IT <Text span inherit>Solutions</Text>
              </Text>

              <Text size="lg" fw={300} lh={1.6} mt="md" c="dimmed">
                Memberdayakan bisnis Anda dengan{" "}
                <Text span fw={500} c="#4F8025">analisis cerdas</Text>,<br />
                <Text span fw={500} c="#4F8025">pemecahan masalah efektif</Text>, dan{" "}
                <Text span fw={500} c="teal">solusi IT yang dirancang khusus</Text>{" "}
                untuk pertumbuhan berkelanjutan.
              </Text>
            </Flex>

            <Flex justify="center">
              <Image
                src={gifHero}
                alt="Hero GIF"
                height={widthHeght}
                width={widthHeght}
              />
            </Flex>
          </Flex>
  )
}
