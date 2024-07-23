import { Span, Paragraph } from '@/components/Typography'
import { Button } from '@/components/Button'
import { TbFileSearch } from 'react-icons/tb'
import { StakePreviewBalance } from './StakePreviewBalance'
import { StakePreviewBalanceProps } from '@/app/user/Stake/types'
import { ReactNode } from 'react'

interface StakePreviewProps {
  from: Omit<StakePreviewBalanceProps, 'topLeftText'>
  to: Omit<StakePreviewBalanceProps, 'topLeftText'>
  onConfirm: () => void
  onCancel: () => void
  actionName: string
  actionText: string
  customComponentBeforeFooter?: ReactNode
  disableConfirm?: boolean
}

export const StakePreview = ({
  from,
  to,
  onConfirm,
  onCancel,
  customComponentBeforeFooter,
  disableConfirm = true,
  actionName,
  actionText,
}: StakePreviewProps) => {
  return (
    <div className="px-[50px] py-[20px] flex justify-center flex-col">
      <div className="flex justify-center mt-[63px]">
        <div
          style={{
            boxShadow: '0px 0px 16.4px 0px rgba(123,87,252,0.68)',
            padding: 17,
            borderRadius: '30%',
            backgroundColor: 'white',
            width: 80,
          }}
        >
          <TbFileSearch size={48} color="#665EF6" />
        </div>
      </div>
      <Paragraph className="mt-[62px] text-center">{actionName}</Paragraph>{' '}
      <Span className="text-center">{actionText}</Span>
      <div className="flex justify-center">
        <div className="bg-input-bg rounded-[6px] mt-[32px] w-full max-w-[500px]">
          <StakePreviewBalance topLeftText="From" {...from} />
          <StakePreviewBalance topLeftText="To" {...to} />
        </div>
      </div>
      {customComponentBeforeFooter}
      {/* Stake Actions */}
      <div className="flex justify-center pt-10 gap-4">
        <Button variant="secondary" onClick={onCancel} buttonProps={{ 'data-testid': 'Cancel' }}>
          Cancel
        </Button>
        <Button
          onClick={!disableConfirm ? onConfirm : undefined}
          disabled={disableConfirm}
          buttonProps={{ 'data-testid': 'Confirm' }}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}