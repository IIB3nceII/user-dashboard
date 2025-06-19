import { type ReactNode } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import { UsersProvider } from '../features'

type ProvidersProps = {
  children: ReactNode | ReactNode[]
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReactQueryProvider>
      <UsersProvider>{children}</UsersProvider>
    </ReactQueryProvider>
  )
}

export default Providers
