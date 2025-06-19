import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef
} from 'material-react-table'
import type { User } from '../../../types'

type UsersTableProps = {
  columns: MRT_ColumnDef<User>[]
  users: User[]
}

const UsersTable = ({ columns, users }: UsersTableProps) => {
  const table = useMaterialReactTable({
    columns,
    data: users
  })

  return <MaterialReactTable table={table} />
}

export default UsersTable
