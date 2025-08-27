import { ActionIcon } from '@mantine/core'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'

export function WhatsappFloating() {
  const isMobile = useMediaQuery('(max-width: 48em)') // sesuai sm breakpoint Mantine (768px)

  return (
    <ActionIcon
      component="a"
      href="https://wa.me/6285117477481"
      target="_blank"
      rel="noopener noreferrer"
      variant="filled"
      color="green"
      radius="100%"
      size={isMobile ? 40 : 48} // responsif di sini, bukan di CSS
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
      }}
    >
      <IconBrandWhatsapp
        size={isMobile ? 26 : 32}
        stroke={1.5}
        style={{ width: '70%', height: '70%' }}
      />
    </ActionIcon>
  )
}
