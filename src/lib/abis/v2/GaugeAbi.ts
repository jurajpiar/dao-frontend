export const GaugeAbi = [
  {
    type: 'constructor',
    inputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'allocate',
    inputs: [
      {
        name: 'sponsor_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'allocation_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'timeUntilNextEpoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'allocationDeviation_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'rewardSharesDeviation_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'isNegative_',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'allocationOf',
    inputs: [
      {
        name: 'sponsor',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'allocation',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'builderRewards',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'claimBuilderReward',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'claimBuilderReward',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'claimSponsorReward',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'sponsor_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'claimSponsorReward',
    inputs: [
      {
        name: 'sponsor_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'earned',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'sponsor_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'incentivizeWithCoinbase',
    inputs: [],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'incentivizeWithRewardToken',
    inputs: [
      {
        name: 'amount_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'sponsorsManager_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'lastTimeRewardApplicable',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'lastUpdateTime',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'left',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'moveBuilderUnclaimedRewards',
    inputs: [
      {
        name: 'to_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'notifyRewardAmountAndUpdateShares',
    inputs: [
      {
        name: 'amountERC20_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'builderKickback_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'periodFinish_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epochStart_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epochDuration_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'newGaugeRewardShares_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'rewardData',
    inputs: [
      {
        name: 'rewardToken',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'rewardRate',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'rewardPerTokenStored',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'rewardMissing',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'lastUpdateTime',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'builderRewards',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewardMissing',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewardPerToken',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewardPerTokenStored',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewardRate',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewardShares',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewardToken',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rewards',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'sponsor_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'sponsorRewardPerTokenPaid',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'sponsor_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'sponsorsManager',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract ISponsorsManager',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalAllocation',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'BuilderRewardsClaimed',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'builder_',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount_',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [
      {
        name: 'version',
        type: 'uint64',
        indexed: false,
        internalType: 'uint64',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NewAllocation',
    inputs: [
      {
        name: 'sponsor_',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'allocation_',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NotifyReward',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'builderAmount_',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'sponsorsAmount_',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SponsorRewardsClaimed',
    inputs: [
      {
        name: 'rewardToken_',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'sponsor_',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount_',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AddressEmptyCode',
    inputs: [
      {
        name: 'target',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'AddressInsufficientBalance',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'BeforeDistribution',
    inputs: [],
  },
  {
    type: 'error',
    name: 'BuilderRewardsLocked',
    inputs: [],
  },
  {
    type: 'error',
    name: 'FailedInnerCall',
    inputs: [],
  },
  {
    type: 'error',
    name: 'GaugeHalted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidInitialization',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotAuthorized',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotInitializing',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotSponsorsManager',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SafeERC20FailedOperation',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
] as const