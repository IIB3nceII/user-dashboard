import { useMemo } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef
} from 'material-react-table'
import type { User } from '../../../types'

const UsersTable = () => {
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

  return <MaterialReactTable columns={COLUMNS} data={[]} />
}

export default UsersTable
