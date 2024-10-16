import { Address } from 'viem'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchNftHoldersOfAddress } from '@/app/user/Balances/actions'

export const useFetchNftHolders = (address: Address) => {
  return useInfiniteQuery({
    queryKey: [`nftHolders${address}`, address],
    initialPageParam: null,
    queryFn: async ({ pageParam }) => fetchNftHoldersOfAddress(address, pageParam as unknown),
    getNextPageParam: lastPage => {
      return lastPage.params
    },
  })
}
