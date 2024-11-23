import { FC } from 'react'
import {
  useGetBuilderRewards,
  MetricsCardWithSpinner,
  MetricsCardTitle,
  MetricsCardContent,
  useGetBuilderRewardsClaimedLogs,
  useGetGaugesNotifyReward,
  BuilderRewardDetails,
} from '@/app/collective-rewards/rewards'
import { useHandleErrors } from '@/app/collective-rewards/utils'

type AllTimeShareProps = Omit<BuilderRewardDetails, 'builder'>

export const AllTimeShare: FC<AllTimeShareProps> = ({ gauge, gauges, tokens: { rif } }) => {
  const {
    data: notifyReward,
    isLoading: notifyRewardLoading,
    error: notifyRewardError,
  } = useGetGaugesNotifyReward(gauges, rif.address)
  const {
    data: builderRewardsPerToken,
    isLoading: builderRewardsPerTokenLoading,
    error: builderRewardsPerTokenError,
  } = useGetBuilderRewardsClaimedLogs(gauge)
  const {
    data: claimableRewards,
    isLoading: claimableRewardsLoading,
    error: claimableRewardsError,
  } = useGetBuilderRewards(rif.address, gauge)

  const error = notifyRewardError ?? builderRewardsPerTokenError ?? claimableRewardsError

  useHandleErrors({ error, title: 'Error loading all time share' })

  const isLoading = notifyRewardLoading || builderRewardsPerTokenLoading || claimableRewardsLoading

  const builderClaimedRewards =
    builderRewardsPerToken[rif.address]?.reduce((acc, event) => {
      const amount = event.args.amount_
      return acc + amount
    }, 0n) ?? 0n
  const totalBuilderRewards = builderClaimedRewards + (claimableRewards ?? 0n)

  const notifyRewards = Object.values(notifyReward).reduce(
    (acc, events) =>
      acc +
      events.reduce(
        (acc, { args: { backersAmount_, builderAmount_ } }) => acc + backersAmount_ + builderAmount_,
        0n,
      ),
    0n,
  )

  const amount = !notifyRewards ? '0%' : `${(totalBuilderRewards * 100n) / notifyRewards}%`

  return (
    <MetricsCardWithSpinner isLoading={isLoading} borderless>
      <div className="flex flex-col gap-y-[10px]">
        <MetricsCardTitle title="All time share" data-testid="AllTimeShare" />
        <MetricsCardContent>{amount}</MetricsCardContent>
      </div>
    </MetricsCardWithSpinner>
  )
}