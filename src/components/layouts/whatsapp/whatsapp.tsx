import { ActionIcon } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsappFloating() {
  return (
            <ActionIcon
              variant="filled"
              aria-label="Whatsapp"
              size="3rem"
              color="green"
              radius="100%"
              style={{ position: "fixed", bottom: 20, right: 20 }}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("https://wa.me/6285117477481")}
            >
              <IconBrandWhatsapp
                style={{ width: "70%", height: "70%" }}
                size={20}
                stroke={1.5}
              />
            </ActionIcon>
  )
}
