import { StatusSeverity } from '@/components/Status/types'
import { Paragraph } from '@/components/Typography/Paragraph'
import { cn } from '@/lib/utils'
import { FC, JSX } from 'react'

type Props = JSX.IntrinsicElements['div'] & {
  severity: StatusSeverity
  label?: string
}

const DEFAULT_CLASSES = 'inline-block text-white text-center rounded-[4px] px-1 py-[3px] w-[86px] h-[26px]'

const parseDefaultLabel = (severity: string) => {
  const label = severity.charAt(0).toUpperCase() + severity.slice(1)
  return label.replace('-', ' ')
}

export const Status: FC<Props> = ({ severity = 'success', label, ...rest }) => {
  const classes = cn({
    [DEFAULT_CLASSES]: true,
    'bg-st-success': severity === 'success',
    'bg-st-info': severity === 'in-progress',
    'bg-st-error': severity === 'rejected',
    'bg-st-white': severity === 'canceled',
    'bg-st-queue': severity === 'queue',
    'text-black': severity === 'canceled',
  })

  let labelToUse = !label ? parseDefaultLabel(severity) : label

  return (
    <div className={classes} {...rest}>
      <Paragraph variant="semibold" className="text-[12px]">
        {labelToUse}
      </Paragraph>
    </div>
  )
}
