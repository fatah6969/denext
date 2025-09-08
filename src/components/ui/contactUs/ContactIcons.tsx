import { IconAt, IconMapPin, IconPhone } from '@tabler/icons-react'
import { Stack, Text } from '@mantine/core'
import classes from './ContactIcons.module.css'

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.ElementType
  title: React.ReactNode
  description: string
  iconName: string // untuk identifikasi link
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  iconName,
  ...others
}: ContactIconProps) {
  const renderDescription = () => {
    if (iconName === 'email') {
      return (
        <a href={`mailto:${description}`} className={classes.link}>
          {description}
        </a>
      )
    }
    if (iconName === 'phone') {
      return (
        <a href={`tel:${description}`} className={classes.link}>
          {description}
        </a>
      )
    }
    if (iconName === 'location') {
      return (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            description
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          {description}
        </a>
      )
    }
    return description
  }

  return (
    <div className={classes.wrapper} {...others} data-icon={iconName}>
      <div className={classes.iconContainer}>
        <svg className={classes.defs}>
          <defs>
            <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f87171', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <Icon size={26} className={classes.icon} />
        <div className={classes.iconGlow}></div>
      </div>

      <div className={classes.content}>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{renderDescription()}</Text>
      </div>
    </div>
  )
}

const MOCKDATA = [
  {
    title: 'Email',
    description: 'info@denext.id',
    icon: IconAt,
    iconName: 'email',
  },
  {
    title: 'Phone',
    description: '+62 851 1747 7481',
    icon: IconPhone,
    iconName: 'phone',
  },
  {
    title: 'Address',
    description: 'Bogor, Jawa Barat, Indonesia',
    icon: IconMapPin,
    iconName: 'location',
  },
]

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon
      key={index}
      {...item}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    />
  ))
  return <Stack className={classes.stack}>{items}</Stack>
}
