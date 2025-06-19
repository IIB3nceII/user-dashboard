import type { MRT_ColumnDef } from 'material-react-table'
import { useMemo } from 'react'
import type { User } from '../../../types'
import { useUsersContext } from '../providers'
import UsersTable from './UsersTable'

const UsersDashboard = () => {
  const COLUMNS = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150
      },
      {
        accessorKey: 'username', //normal accessorKey
        header: 'Username',
        size: 200
      },
      {
        accessorKey: 'company.name',
        header: 'Company',
        size: 150
      }
    ],
    []
  )

  const { users, isPending, isError, error } = useUsersContext()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError && error instanceof Error) {
    return <div>Error: {error?.message}</div>
  }

  return <UsersTable columns={COLUMNS} users={users} />
}

export default UsersDashboard
