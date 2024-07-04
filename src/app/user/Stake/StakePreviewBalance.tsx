import { Label, Paragraph } from '@/components/Typography'
import { StakePreviewBalanceProps } from '@/app/user/Stake/types'

export const StakePreviewBalance = ({
  topLeftText,
  amount,
  amountConvertedToCurrency,
  balance,
  tokenName,
  tokenSymbol,
}: StakePreviewBalanceProps) => (
  <div className="flex justify-between p-[16px]">
    <div>
      <Paragraph variant="light">{topLeftText}</Paragraph>
      <div className="flex mt-[8px] gap-4">
        <Paragraph>{amount}</Paragraph>
        <Label variant="light">= {amountConvertedToCurrency}</Label>
      </div>
    </div>
    <div>
      {/* Balance and Token */}
      <Label variant="light">Balance: {balance}</Label>
      <div className="text-right mt-[8px]">
        {/* @TODO ICON {tokenSymbol} */}
        <Paragraph>{tokenName}</Paragraph>
      </div>
    </div>
  </div>
)
