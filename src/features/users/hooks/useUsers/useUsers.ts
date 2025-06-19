import { useMutation, useQuery } from '@tanstack/react-query'
import { jsonPlaceholderInstance } from '../../../../lib'
import type { CreateUser, User } from '../../../../types'
import { queryClient } from '../../../../providers/ReactQueryProvider'

const getUsers = async (): Promise<User[]> => {
  const response = await jsonPlaceholderInstance.get<User[]>('/users')
  return response.data
}

const createUser = async (user: CreateUser): Promise<User> => {
  const response = await jsonPlaceholderInstance.post<User>('/users', user)
  return response.data
}

const useUsers = () => {
  const { data, isError, isPending, error, refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers
  })

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData<User[]>(['users'], (oldUsers = []) => [
        ...oldUsers,
        newUser
      ])
    }
  })

  return {
    users: data || [],
    isError,
    isPending,
    error,
    refetch,
    createUser: createUserMutation.mutateAsync,
    isCreateUserPending: createUserMutation.isPending,
    isCreateUserError: createUserMutation.isError,
    createUserError: createUserMutation.error
  }
}

export default useUsers
