import { TypographyTagVariants } from '@/components/Typography/types'
import { cn } from '@/lib/utils'
import { CSSProperties, FC, ReactNode } from 'react'

const classesByTag: Record<TypographyTagVariants, string> = {
  h1: 'font-bold text-[1.7rem]',
  h2: '',
  p: '',
  label: '',
  span: '',
}

interface Props {
  tagVariant: TypographyTagVariants
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const Typography: FC<Props & CSSProperties> = ({
  tagVariant = 'p',
  children,
  className,
  onClick,
  ...styles
}) => {
  const Component = tagVariant
  const classes = classesByTag[tagVariant]

  return (
    <Component className={cn(['font-sora', classes, className])} style={{ ...styles }} onClick={onClick}>
      {children}
    </Component>
  )
}
