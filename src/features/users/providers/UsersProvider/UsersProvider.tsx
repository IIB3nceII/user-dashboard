import { createContext, useContext, type ReactNode } from 'react'
import type { CreateUser, User } from '../../../../types'
import { useUsers } from '../../hooks'

type UsersContextType = {
  users: User[]
  isError: boolean
  isPending: boolean
  refetch: () => void
  error: Error | null
  createUser: (user: CreateUser) => void
  isCreateUserPending: boolean
  isCreateUserError: boolean
  createUserError: Error | null
}

const UsersContext = createContext<UsersContextType | undefined>(undefined)

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const {
    users,
    isError,
    isPending,
    error,
    refetch,
    createUser,
    isCreateUserPending,
    isCreateUserError,
    createUserError
  } = useUsers()

  return (
    <UsersContext.Provider
      value={{
        users,
        isError,
        isPending,
        error,
        refetch,
        createUser,
        isCreateUserPending,
        isCreateUserError,
        createUserError
      }}
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
