const testnet = {
  RIF: '0x19f64674d8a5b4e652319f5e239efd3bc969a1fe', // tRIF
  stRIF: '0xB063c975D63A0fD4e64bd704068a339111060dE0',
  rBTC: '0x0000000000000000000000000000000000000000',
}

const mainnet = {
  RIF: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5',
  stRIF: '', // @TODO get DAO mainnet
  rBTC: '0x0000000000000000000000000000000000000000',
}

const contracts = {
  testnet,
  mainnet,
}

export type SupportedTokens = keyof typeof testnet | keyof typeof mainnet
// @ts-ignore
export const currentEnvContracts = contracts[process.env.NEXT_PUBLIC_ENV] as typeof testnet
