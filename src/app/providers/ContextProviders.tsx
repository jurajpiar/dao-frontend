'use client'
import { config } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { AlertProvider } from './AlertProvider'
import ErrorBoundary from '@/components/ErrorPage/ErrorBoundary'
import { BuilderContextProviderWithPrices } from '../collective-rewards/user'
import { AllocationsContextProvider } from '../collective-rewards/allocations/context'

interface Props {
  children: ReactNode
}

export const ContextProviders = ({ children }: Props) => {
  const queryClient = new QueryClient()
  return (
    <ErrorBoundary>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <BuilderContextProviderWithPrices>
              <AllocationsContextProvider>{children}</AllocationsContextProvider>
            </BuilderContextProviderWithPrices>
          </AlertProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  )
}
