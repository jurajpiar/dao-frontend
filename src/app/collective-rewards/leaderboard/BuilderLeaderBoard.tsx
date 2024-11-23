import { CycleContextProvider } from '@/app/collective-rewards/metrics'
import { Button } from '@/components/Button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/Collapsible'
import { HeaderTitle } from '@/components/Typography'
import { BuildersLeaderBoardContent } from '@/app/collective-rewards/leaderboard'
import { useRouter } from 'next/navigation'

export const BuildersLeaderBoard = () => {
  const router = useRouter()
  const onManageAllocations = () => {
    router.push('/collective-rewards/allocations')
  }

  return (
    <>
      <Collapsible defaultOpen>
        <CollapsibleTrigger>
          <div className="flex items-center justify-between w-full">
            <HeaderTitle className="">Rewards leaderboard</HeaderTitle>
            <Button variant="primary" onClick={onManageAllocations}>
              Manage Allocations
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CycleContextProvider>
            <BuildersLeaderBoardContent />
          </CycleContextProvider>
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}