import { FC } from 'react'
import { cn } from '@/lib/utils'
import { Modal } from '@/components/Modal/Modal'
import { Header, Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import { BsCardText } from 'react-icons/bs'
import { RiPassportLine } from 'react-icons/ri'
import { BuilderStatus } from '@/app/bim/types'
import { useRouter } from 'next/navigation'
import { SupportedActionAbiName, SupportedProposalActionName } from '@/app/proposals/shared/supportedABIs'

interface BecomeABuilderModalProps {
  onClose: () => void
  builderStatus: BuilderStatus | 'Not found'
}

// TODO: check if this is a hardcoded list or if it should be dynamic
const steps: Array<Step> = [
  {
    description: 'Submit your proposal:',
    steps: [
      {
        description:
          'Provide a detailed description of your project, its goal, and how it will contribute to the Rootstock ecosystem.',
      },
    ],
  },
  {
    description: 'Community vote:',
    steps: [
      {
        description:
          'You proposal will be reviewed and voted on by the DAO community. A majority vote in favor is required for approval.',
      },
    ],
  },
  {
    description: 'Whitelisting:',
    steps: [
      {
        description:
          'If approved, you will be added to the Builder whitelist and can start working on your project.',
      },
    ],
  },
]

export const BecomeABuilderModal: FC<BecomeABuilderModalProps> = ({ onClose, builderStatus }) => {
  const router = useRouter()

  const contractName: SupportedActionAbiName = 'SimplifiedRewardDistributorAbi'
  const action: SupportedProposalActionName = 'whitelistBuilder'

  return (
    <Modal onClose={onClose} width={1016}>
      <div className="px-[50px] pt-[21px] pb-[42px] flex flex-col justify-center">
        <Header variant="h1" className="font-bold text-center py-[50px]">
          How to become a builder
        </Header>
        <div className="flex flex-row pb-[50px] justify-center">
          <Typography tagVariant="span" className="text-[16px] font-light w-9/12">
            <RecursiveOrderedList steps={steps} className="list-decimal" />
          </Typography>
        </div>
        <div className="flex flex-row justify-center items-center text-center gap-x-20">
          <div className="flex flex-col items-center gap-4">
            <RiPassportLine size={48} />
            Verify your <br /> profile persona
            <Button disabled={builderStatus !== 'Not found'}>Start KYC</Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <BsCardText size={48} />
            Create a <br /> proposal
            <Button
              onClick={() => router.push(`/proposals/create?contract=${contractName}&action=${action}`)}
            >
              Submit proposal
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

type Step = {
  description: string
  steps?: Array<Step>
}

type RecursiveOrderedListProps = {
  steps: Array<Step>
  className?: string
}

const RecursiveOrderedList: FC<RecursiveOrderedListProps> = ({ steps, className = '' }) => {
  return (
    <ol className={cn('list-inside', className)}>
      {steps.map((step, index) => (
        <li key={index}>
          {step.description}
          {step.steps && <RecursiveOrderedList steps={step.steps} className="list-[lower-alpha] px-6" />}
        </li>
      ))}
    </ol>
  )
}
