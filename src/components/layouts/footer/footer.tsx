"use client";

import { Text, Flex, Box } from "@mantine/core";
export function Footer() {
  return (
      <Box
      component="footer"
      pt={{ base: "0px", md: 72 }}
      style={{
        textAlign: "center",
        padding: "1rem",
        borderTop: "1px solid #e9ecef",
      }}
    >
      <Flex justify="center" align="center">
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} DENEXT. All rights reserved.
        </Text>  
      </Flex>
    </Box>
  );
}
