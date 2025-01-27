import {
  BackerRewards,
  BuilderRewards,
  RewardDetails,
  RewardsSection,
  RewardsSectionHeader,
  BackerRewardsTable,
  useIsBacker,
} from '@/app/collective-rewards/rewards'
import { useGetBuildersByState, useGetBuilderToGauge } from '@/app/collective-rewards/user'
import { getCoinbaseAddress, useHandleErrors } from '@/app/collective-rewards/utils'
import { tokenContracts } from '@/lib/contracts'
import { FC } from 'react'
import { Address, getAddress, zeroAddress } from 'viem'
import { useRouter } from 'next/navigation'
import { useCanManageAllocations } from '@/app/collective-rewards/allocations/hooks'
import { CRWhitepaperLink } from '@/app/collective-rewards/shared'
import { RequiredBuilder } from '@/app/collective-rewards/types'

const SubText = () => {
  return (
    <>
      Track and claim the rewards you earn from Collective Rewards. For more information check the{' '}
      <CRWhitepaperLink />.
    </>
  )
}

export const Rewards: FC<{ builder: Address }> = ({ builder }) => {
  const router = useRouter()
  const { data: activatedBuilders, error: activatedBuildersError } = useGetBuildersByState<RequiredBuilder>({
    activated: true,
  })
  const activatedGauges = activatedBuilders?.map(({ gauge }) => gauge) ?? []
  const { data: gauge, error: gaugeError } = useGetBuilderToGauge(builder)
  const canManageAllocations = useCanManageAllocations()
  // We don't need to show the loading state for the backer rewards since the parent already has a loading state
  const { data: isBacker, error: backerError } = useIsBacker(builder)

  const error = activatedBuildersError ?? gaugeError ?? backerError

  useHandleErrors({ error, title: 'Error loading gauge(s)' })

  // TODO: check where to store this information
  const data: RewardDetails = {
    builder,
    gauges: activatedGauges,
    tokens: {
      rif: {
        address: getAddress(tokenContracts.RIF),
        symbol: 'RIF',
      },
      rbtc: {
        address: getCoinbaseAddress(),
        symbol: 'RBTC',
      },
    },
  }

  return (
    <>
      {gauge && gauge !== zeroAddress && (
        <div className="pb-[46px]">
          <RewardsSection>
            <RewardsSectionHeader
              onSettingsOpen={() => {
                router.push('/user/settings?type=builder')
              }}
              title="Builder Rewards"
              subtext={<SubText />}
            />
            <BuilderRewards gauge={gauge} {...data} />
          </RewardsSection>
        </div>
      )}
      {isBacker && (
        <RewardsSection>
          <RewardsSectionHeader
            onSettingsOpen={() => {
              router.push('/collective-rewards/allocations')
            }}
            title="Backer Rewards"
            subtext={<SubText />}
            showSettingsButton={canManageAllocations}
          />
          <BackerRewards {...data} />
          <BackerRewardsTable {...data} />
        </RewardsSection>
      )}
    </>
  )
}
