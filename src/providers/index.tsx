import { type ReactNode } from 'react'
import ReactQueryProvider from './ReactQueryProvider'

type ProvidersProps = {
  children: ReactNode | ReactNode[]
}

const Providers = ({ children }: ProvidersProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}

export default Providers
