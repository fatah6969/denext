"use client";

import { Text, Group, ActionIcon, Box } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

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
      <Group justify="space-between" align="center">
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} DENEXT. All rights reserved.
        </Text>

        <Group gap="xs">
          <ActionIcon
            component="a"
            href="https://facebook.com"
            target="_blank"
            variant="subtle"
            size="lg"
            aria-label="Facebook"
          >
            <IconBrandFacebook size={20} />
          </ActionIcon>

          <ActionIcon
            component="a"
            href="https://instagram.com"
            target="_blank"
            variant="subtle"
            size="lg"
            aria-label="Instagram"
          >
            <IconBrandInstagram size={20} />
          </ActionIcon>

          <ActionIcon
            component="a"
            href="https://linkedin.com"
            target="_blank"
            variant="subtle"
            size="lg"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={20} />
          </ActionIcon>

          <ActionIcon
            component="a"
            href="https://github.com"
            target="_blank"
            variant="subtle"
            size="lg"
            aria-label="GitHub"
          >
            <IconBrandGithub size={20} />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
}
