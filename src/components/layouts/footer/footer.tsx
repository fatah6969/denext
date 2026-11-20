"use client";

import { Box, Flex, Text } from "@mantine/core";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      py="xl"
      bg="#F6F8F7"
      style={{
        borderTop: "1px solid var(--color-divider)",
        textAlign: "center",
      }}
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap={6}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Box>
          <Text fw={800} size="lg" c="#14532d">
            DENEXT
          </Text>
          <Text size="xs" c="#64748b" mt={4}>
            Service Komputer &middot; Server &middot; Jaringan &middot; CCTV &middot; Security IT
          </Text>
        </Box>

        <Box
          w="full"
          h="4px"
          mt={6}
          style={{
            background: "linear-gradient(90deg, #14532d, #22c55e, #14532d)",
            borderRadius: "999px",
          }}
        />

        <Text size="sm" c="#64748b" tt="capitalize">
          &copy; {year} DENEXT. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
