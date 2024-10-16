import { Address } from 'viem'
import { useFetchNftHolders } from '@/shared/hooks/useFetchNftHolders'
import { HeaderTitle, Span } from '@/components/Typography'
import { Table } from '@/components/Table'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Button } from '@/components/Button'
import { EXPLORER_URL } from '@/lib/constants'
import { RxExternalLink } from 'react-icons/rx'
import Image from 'next/image'
import { ReactNode } from 'react'

interface HolderColumnProps {
  address: string
  rns?: string
}
const HolderColumn = ({ address, rns }: HolderColumnProps) => {
  return (
    <a
      href={`${EXPLORER_URL}/address/${address}`}
      target="_blank"
      className="flex items-center gap-1.5 text-white"
    >
      <Image src="/images/treasury/holders.png" width={24} height={24} alt="Holders Image" />
      <Span className="underline text-left overflow-hidden whitespace-nowrap text-[14px]">
        {rns || address}
      </Span>
      <RxExternalLink size={18} />
    </a>
  )
}

interface IdNumberColumnProps {
  id: string
}
const IdNumberColumn = ({ id }: IdNumberColumnProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <Image src="/images/holders-square.png" width={24} height={24} alt="Holders Image Square" />
      <span className="tracking-widest">#{id}</span>
    </div>
  )
}

interface HoldersSectionProps {
  address: Address
}

export const NftHoldersSection = ({ address }: HoldersSectionProps) => {
  const { data, isFetchingNextPage, isLoading, hasNextPage, fetchNextPage } = useFetchNftHolders(address)
  // @TODO pending BE data
  const holders = data?.pages?.reduce<{ holder: ReactNode; quantity: string }[]>((prev, currentPage) => {
    currentPage.items.forEach(({ address, id }) => {
      prev.push({
        holder: <HolderColumn address={address.hash} rns={address.ens_domain_name} />,
        quantity: <IdNumberColumn id={id} />,
      })
    })
    return prev
  }, [])
  return (
    <div>
      <HeaderTitle>Holders</HeaderTitle>
      {holders && holders?.length > 0 && <Table data={holders} />}
      {isLoading && <LoadingSpinner />}
      {isFetchingNextPage ? (
        <LoadingSpinner className="w-52" />
      ) : hasNextPage ? (
        <Button variant="secondary" onClick={() => fetchNextPage()}>
          Load more
        </Button>
      ) : null}
    </div>
  )
}
