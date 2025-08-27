import { ActionIcon, useMantineTheme } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsappFloating() {
  const theme = useMantineTheme();

  return (
    <ActionIcon
      component="a"
      href="https://wa.me/6285117477481"
      target="_blank"
      rel="noopener noreferrer"
      variant="filled"
      color="green"
      radius="100%"
      size={48} // default size desktop
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
      sx={{
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          size: 40, // lebih kecil di HP
        },
      }}
    >
      <IconBrandWhatsapp
        size={32} // desktop
        stroke={1.5}
        style={{
          width: "70%",
          height: "70%",
        }}
      />
    </ActionIcon>
  );
}
