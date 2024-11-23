'use client'

import { Button, ButtonProps } from '@/components/Button'
import { Input } from '@/components/Input'
import { cn } from '@/lib/utils'
import { useContext, useState } from 'react'
import { AllocationsContext } from '@/app/collective-rewards/allocations/context'
import { formatEther, parseEther } from 'viem'
import { StakeHint } from './StakeHint'

const PercentageButton = ({ children, variant, ...rest }: ButtonProps) => (
  <Button
    className={cn('px-2 py-1', variant === 'primary' && 'border-[1px] border-primary')}
    variant={variant}
    {...rest}
  >
    {children}
  </Button>
)

const ALLOCATION_EXCEED_AMOUNT_ERROR = 'Builder allocations exceeds amount to allocate'

export const AllocationAmount = () => {
  const {
    state: {
      backer: { balance, totalAllocation, cumulativeAllocation, allocationCount },
    },
    actions: { updateAllocations, updateTotalAllocation },
  } = useContext(AllocationsContext)

  const [activeButton, setActiveButton] = useState<number | null>(null)
  const onPercentageButtonClicked = (percentage: number, index: number) => {
    const newTotalAllocation = (BigInt(balance ?? 0n) * BigInt(percentage)) / BigInt(100)
    updateTotalAllocation(newTotalAllocation)
    setActiveButton(index)
    const allocationValue = allocationCount > 0 ? newTotalAllocation / BigInt(allocationCount) : 0n

    updateAllocations(Array(allocationCount).fill(allocationValue))
  }

  const handleOnChange = (value: string) => {
    updateTotalAllocation(parseEther(value))
  }

  return (
    <div className="flex flex-col items-end gap-4 min-w-[694px] min-h-[130px]">
      <div className="flex flex-col items-center gap-[10px] self-stretch">
        <Input
          type="number"
          className="w-full"
          label="Set amount to allocate"
          labelProps={{ className: 'text-base leading-4 font-normal' }}
          name="allocated-amount"
          fullWidth
          onChange={handleOnChange}
          value={formatEther(totalAllocation)}
          errorMessage={
            cumulativeAllocation > totalAllocation && cumulativeAllocation < balance
              ? ALLOCATION_EXCEED_AMOUNT_ERROR
              : ''
          }
          hint={Number(totalAllocation - cumulativeAllocation) < 0 ? <StakeHint /> : undefined}
        />
      </div>
      <div className="flex items-center gap-3">
        {[10, 20, 50, 100].map((percentage, i) => (
          <PercentageButton
            key={i}
            onClick={() => onPercentageButtonClicked(percentage, i)}
            variant={i === activeButton ? 'primary' : 'secondary'}
          >
            {' '}
            {percentage}%
          </PercentageButton>
        ))}
      </div>
    </div>
  )
}