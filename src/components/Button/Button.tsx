import { ButtonVariants } from '@/components/Button/types'
import { cn } from '@/lib/utils'
import { FC, JSX, MouseEvent, ReactNode } from 'react'
import { FaSpinner } from 'react-icons/fa6'

export const BUTTON_DEFAULT_CLASSES = 'px-[24px] py-[12px] flex gap-x-1 items-center relative'

interface Props {
  children: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  startIcon?: ReactNode
  variant?: ButtonVariants
  fullWidth?: boolean
  centerContent?: boolean
  disabled?: boolean
  className?: string
  textClassName?: string
  buttonProps?: JSX.IntrinsicElements['button'] & { 'data-testid'?: string }
  loading?: boolean
}

const DEFAULT_DATA_TESTID = 'Button'

export const Button: FC<Props> = ({
  children: text,
  onClick,
  startIcon,
  variant = 'primary',
  fullWidth = false,
  centerContent = true,
  disabled = false,
  className = '',
  textClassName = '',
  buttonProps = {},
  loading = false,
}) => {
  startIcon = loading ? <FaSpinner className="animate-spin" /> : startIcon
  const classes = cn({
    [BUTTON_DEFAULT_CLASSES]: true,
    'bg-primary rounded-[6px]': variant === 'primary',
    'bg-transparent border-secondary rounded-[6px] border-[1px]': variant === 'secondary',
    'bg-secondary border-secondary rounded-[6px] border-[1px]': variant === 'secondary-full',
    'bg-disabled-primary rounded-[6px] border-0': disabled,
    'border-0': variant === 'transparent',
    'border-[1px] border-white rounded-[6px]': variant === 'white',
    'w-full': fullWidth,
    'pl-9': startIcon,
    'justify-start': !centerContent,
    'justify-center': centerContent,
    'cursor-not-allowed': disabled,
    [className]: true,
  })

  const textClasses = cn({
    'font-bold relative': true,
    'text-secondary': variant === 'secondary',
    'text-disabled-secondary': disabled,
    'font-normal text-[rgba(255,255,255,0.8)]': variant === 'transparent',
    [textClassName]: true,
  })

  return (
    <button
      type="button"
      className={classes}
      onClick={e => !disabled && onClick?.(e)}
      {...buttonProps}
      data-testid={`${DEFAULT_DATA_TESTID}${buttonProps['data-testid']}${buttonProps.id}`}
    >
      <span className={textClasses}>
        <span className="absolute left-[-20px] top-[4px]">{startIcon}</span>
        {text}
      </span>
    </button>
  )
}
