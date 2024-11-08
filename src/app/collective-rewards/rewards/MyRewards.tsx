import { getLastCycleRewards } from '@/app/collective-rewards/utils/getLastCycleRewards'
import { useAlertContext } from '@/app/providers'
import { formatBalanceToHuman } from '@/app/user/Balances/balanceUtils'
import { Button } from '@/components/Button'
import { MetricsCardWithSpinner } from '@/components/MetricsCard/MetricsCard'
import { Popover } from '@/components/Popover'
import { HeaderTitle, Paragraph } from '@/components/Typography'
import { tokenContracts } from '@/lib/contracts'
import { formatCurrency, toFixed } from '@/lib/utils'
import { PricesContextProvider, usePricesContext } from '@/shared/context/PricesContext'
import { FC, useEffect } from 'react'
import { Address } from 'viem'
import {
  useClaimAllRewards,
  useClaimStateReporting,
  useGetRewardDistributedLogs,
  useGetTokenProjectedReward,
} from './hooks'

export const Rewards: FC<{ builder: Address }> = ({ builder }) => {
  const { isClaimFunctionReady, claimAllRewards, ...claimTx } = useClaimAllRewards(builder)

  useClaimStateReporting({ ...claimTx })

  return (
    <>
      <HeaderTitle className="mb-8 font-normal">Builder Dashboard</HeaderTitle>
      <PricesContextProvider>
        <Reward builder={builder} rewardToken={tokenContracts.RBTC} rewardTokenSymbol="RBTC" />
        <Reward builder={builder} rewardToken={tokenContracts.RIF} rewardTokenSymbol="RIF" />
      </PricesContextProvider>

      <Popover
        disabled={isClaimFunctionReady}
        content={
          <Paragraph variant="normal" className="text-sm">
            Wait a moment, please. Preparing the claim functionality.
          </Paragraph>
        }
        trigger="hover"
        background="dark"
        size="small"
        position="bottom"
        className="z-[100]"
      >
        <Button onClick={claimAllRewards} disabled={!isClaimFunctionReady} variant="primary">
          {/* TODO: adapt size once metrics are in place */}
          Claim all
        </Button>
      </Popover>
    </>
  )
}

type RewardProps = {
  rewardToken: Address
  rewardTokenSymbol?: string
  builder: Address
  currency?: string
}

const Reward = ({ rewardToken, rewardTokenSymbol, builder, currency = 'USD' }: RewardProps) => {
  const { setMessage: setErrorMessage } = useAlertContext()
  const {
    data: rewardDistributedLogs,
    isLoading: logsLoading,
    error: rewardsError,
  } = useGetRewardDistributedLogs(rewardToken, builder)
  const {
    data: { projectedReward, share },
    isLoading: tokenLoading,
    error: tokenError,
  } = useGetTokenProjectedReward(rewardToken)
  const tokenSymbol = rewardTokenSymbol ?? ''

  const { prices } = usePricesContext()
  const price = prices[tokenSymbol]?.price ?? 0

  const lastCycleRewards = getLastCycleRewards(rewardDistributedLogs, rewardToken)
  const lastCycleRewardsInHuman = Number(formatBalanceToHuman(lastCycleRewards))

  const totalRewards = rewardDistributedLogs.reduce((acc, event) => {
    const amount = event.args.amount_ ?? 0n
    return acc + amount
  }, 0n)
  const totalRewardsInHuman = Number(formatBalanceToHuman(totalRewards))

  const projectedRewardInHuman = Number(formatBalanceToHuman(projectedReward))

  const formatMetrics = (amount: number, symbol: string) => ({
    amount: `${toFixed(amount)} ${symbol}`,
    fiat: `= ${currency} ${formatCurrency(amount * price, currency)}`,
  })

  const totalRewardsMetrics = formatMetrics(totalRewardsInHuman, tokenSymbol)
  const lastCycleRewardsMetrics = formatMetrics(lastCycleRewardsInHuman, tokenSymbol)
  const projectedRewardsMetrics = formatMetrics(projectedRewardInHuman, tokenSymbol)

  const metricsData = [
    { title: 'Total rewards', ...totalRewardsMetrics },
    { title: 'Last cycle rewards', ...lastCycleRewardsMetrics },
    { title: 'Projected rewards', ...projectedRewardsMetrics },
    { title: 'Share', amount: `${share}%`, fiat: '' },
  ]

  const isLoading = logsLoading || tokenLoading

  useEffect(() => {
    if (rewardsError) {
      setErrorMessage({
        severity: 'error',
        title: 'Error loading rewards',
        content: rewardsError.message,
      })
      console.error('🐛 rewardsError:', rewardsError)
    }

    if (tokenError) {
      setErrorMessage({
        severity: 'error',
        title: 'Error loading tokens',
        content: tokenError.message,
      })
      console.error('🐛 tokenError:', tokenError)
    }
  }, [rewardsError, tokenError, setErrorMessage])

  return (
    <div className="mb-[32px]">
      <div className="grid grid-cols-4 gap-[16px] ">
        {metricsData.map(({ title, amount, fiat }, index) => (
          <MetricsCardWithSpinner
            key={index}
            title={title}
            amount={amount}
            fiatAmount={fiat}
            isLoading={isLoading}
            borderless
          />
        ))}
      </div>
    </div>
  )
}