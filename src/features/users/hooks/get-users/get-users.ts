import { useQuery } from '@tanstack/react-query'
import { jsonPlaceholderInstance } from '../../../../lib'
import type { User } from '../../../../types'

const getUsers = async (): Promise<User[]> => {
  const response = await jsonPlaceholderInstance.get<User[]>('/users')
  return response.data
}

const useUsers = () => {
  const { data, isError, isPending, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers
  })

  return {
    users: data || [],
    isError,
    isPending,
    error
  }
}

export default useUsers
