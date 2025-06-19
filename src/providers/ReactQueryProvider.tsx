import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient()

type ReactQueryProviderProps = {
  children: ReactNode | ReactNode[]
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
