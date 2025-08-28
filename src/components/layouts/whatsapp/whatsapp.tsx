import { ActionIcon } from '@mantine/core'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'

export function WhatsappFloating() {
  const isMobile = useMediaQuery('(max-width: 48em)') // sesuai sm breakpoint Mantine (768px)

  return (
    <ActionIcon
      component="a"
      href="https://wa.me/6285117477481?text=Halo%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Denext.%20Mohon%20informasinya%20ya."
      target="_blank"
      rel="noopener noreferrer"
      variant="filled"
      color="green"
      radius="100%"
      size={isMobile ? 40 : 48} // responsif di sini
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999, // biar ga ketutup elemen lain
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
