// create react context for users

import { createContext, useContext, type ReactNode } from 'react'
import { useUsers } from '../../hooks'
import type { User } from '../../../../types'

type UsersContextType = {
  users: User[]
  isError: boolean
  isPending: boolean
  refetch: () => void
  error: Error | null
}

const UsersContext = createContext<UsersContextType | undefined>(undefined)

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const { users, isError, isPending, error, refetch } = useUsers()

  return (
    <UsersContext.Provider
      value={{ users, isError, isPending, error, refetch }}
    >
      {children}
    </UsersContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => {
  const context = useContext(UsersContext)
  if (!context) throw new Error('useUsers must be used within UsersProvider')
  return context
}
