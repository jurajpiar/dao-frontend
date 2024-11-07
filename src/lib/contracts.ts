import { ZeroAddress } from 'ethers'
import { Address } from 'viem'
import { EarlyAdoptersNFTAbi } from './abis/EarlyAdoptersNFTAbi'
import {
  EA_NFT_ADDRESS,
  GENERAL_BUCKET_ADDRESS,
  GOVERNOR_ADDRESS,
  GRANTS_ACTIVE_BUCKET_ADDRESS,
  GRANTS_BUCKET_ADDRESS,
  GROWTH_BUCKET_ADDRESS,
  MULTICALL_ADDRESS,
  RIF_ADDRESS,
  STRIF_ADDRESS,
  SIMPLIFIED_REWARD_DISTRIBUTOR_ADDRESS,
  OG_FOUNDERS_NFT_ADDRESS,
  OG_PARTNERS_NFT_ADDRESS,
  OG_CONTRIBUTORS_NFT_ADDRESS,
  SPONSORS_MANAGER_ADDRESS,
  REWARD_DISTRIBUTOR_ADDRESS,
} from './constants'

const tokenContracts = {
  RIF: RIF_ADDRESS,
  stRIF: STRIF_ADDRESS,
  RBTC: ZeroAddress as Address,
}
export type SupportedTokens = keyof typeof tokenContracts

const nftContracts = {
  EA: EA_NFT_ADDRESS, // Early Adopters
  OG_FOUNDERS: OG_FOUNDERS_NFT_ADDRESS, // Early Adopters
  OG_PARTNERS: OG_PARTNERS_NFT_ADDRESS, // Early Adopters
  OG_CONTRIBUTORS: OG_CONTRIBUTORS_NFT_ADDRESS, // Early Adopters
}

export const DEFAULT_NFT_CONTRACT_ABI = EarlyAdoptersNFTAbi

const abiContractsMap = {
  [nftContracts.EA]: EarlyAdoptersNFTAbi,
  [nftContracts.OG_FOUNDERS]: EarlyAdoptersNFTAbi,
  [nftContracts.OG_CONTRIBUTORS]: EarlyAdoptersNFTAbi,
  [nftContracts.OG_PARTNERS]: EarlyAdoptersNFTAbi,
}

const treasuryContracts = [
  { name: 'Grants', address: GRANTS_BUCKET_ADDRESS },
  { name: 'Grants - Active', address: GRANTS_ACTIVE_BUCKET_ADDRESS },
  { name: 'Growth', address: GROWTH_BUCKET_ADDRESS },
  { name: 'Growth - Rewards', address: REWARD_DISTRIBUTOR_ADDRESS },
  { name: 'General', address: GENERAL_BUCKET_ADDRESS },
]

const GovernorAddress = GOVERNOR_ADDRESS
const MulticallAddress = MULTICALL_ADDRESS
const TreasuryAddress = GRANTS_ACTIVE_BUCKET_ADDRESS

const SimplifiedRewardDistributorAddress = SIMPLIFIED_REWARD_DISTRIBUTOR_ADDRESS || ZeroAddress
const SponsorsManagerAddress = SPONSORS_MANAGER_ADDRESS || ZeroAddress
const RewardDistributor = REWARD_DISTRIBUTOR_ADDRESS || ZeroAddress

export {
  abiContractsMap,
  GovernorAddress,
  MulticallAddress,
  nftContracts,
  tokenContracts,
  TreasuryAddress,
  treasuryContracts,
  SimplifiedRewardDistributorAddress,
  SponsorsManagerAddress,
  RewardDistributor,
}
