export {
  createClient,
  createClient as createWagmiClient,
  Provider,
  Provider as WagmiProvider,
  useClient,
  useClient as useWagmiClient,
} from './context'
export type {
  ClientConfig,
  ClientConfig as WagmiClientConfig,
  ProviderProps,
  ProviderProps as WagmiProviderProps,
} from './context'

export {
  useAccount,
  useBalance,
  useBlockNumber,
  useConnect,
  useContract,
  useContractEvent,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useFeeData,
  useNetwork,
  useProvider,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
  useSigner,
  useToken,
  useWaitForTransaction,
  useWebSocketProvider,
} from './hooks'

export { deserialize, serialize } from './utils'

export {
  Client,
  Connector,
  WagmiClient,
  alchemyRpcUrls,
  allChains,
  chain,
  chainId,
  createStorage,
  createWagmiStorage,
  defaultChains,
  defaultL2Chains,
  erc20ABI,
  erc721ABI,
  etherscanBlockExplorers,
  infuraRpcUrls,
} from '@wagmi/core'
export type {
  Chain,
  ConnectorData,
  ConnectorEvents,
  Storage,
  Unit,
  WagmiStorage,
} from '@wagmi/core'
