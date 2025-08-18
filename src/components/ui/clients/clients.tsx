import { Stack, Text } from "@mantine/core";
import Image from "next/image";
import classes from './client.module.css'

export function Clients() {
  const clientLogos = [
    {
      name: "QOALA",
      logo: "/clients/Qoala-Logo.png",
      url: "https://www.qoala.app/id",
    },
    {
      name: "TRIJEE",
      logo: "/clients/Trijee-Logo.png",
      url: "https://trijee.com/",
    },
    {
      name: "AAA",
      logo: "/clients/AAA_Logo.png",
      url: "https://adyaarthaabadi.com/",
    },
    {
      name: "LPP",
      logo: "/clients/Lpp_Logo.png",
      url: "https://psikotes.psikologiperspective.com/",
    },
    {
      name: "Siliwangi",
      logo: "/clients/Siliwangi-Logo.png",
      url: "https://www.siliwangiexpress.web.id/",
    },
  ];

  return (
    <Stack id="client" pt={{ base: "0px", md:"72"}}>
          <Text ta="center" size="2rem">
            Client Us
          </Text>
          <div className={classes.clientGrid}>
            {clientLogos.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.logoCard}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={80}
                  className={classes.logoImage}
                />
              </a>
            ))}
          </div>
    </Stack>
  )
}
