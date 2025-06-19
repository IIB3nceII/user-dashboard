import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import { IconButton, Tooltip } from '@mui/material'
import {
  MaterialReactTable,
  MRT_ShowHideColumnsButton,
  useMaterialReactTable,
  type MRT_ColumnDef
} from 'material-react-table'
import type { User } from '../../../types'

type UsersTableProps = {
  columns: MRT_ColumnDef<User>[]
  users: User[]
  onRowClick: (user: User) => void
  onRefresh: () => void
  onOpenCreateUser: () => void
}

const UsersTable = ({
  columns,
  users,
  onRowClick,
  onRefresh,
  onOpenCreateUser
}: UsersTableProps) => {
  const table = useMaterialReactTable({
    columns,
    data: users,
    initialState: { showGlobalFilter: true },
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        onRowClick?.(row.original)
      }
    }),
    renderToolbarInternalActions: ({ table }) => (
      <>
        <Tooltip title="Add User">
          <IconButton onClick={() => onOpenCreateUser()}>
            <AddOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh">
          <IconButton onClick={() => onRefresh()}>
            <RefreshOutlinedIcon />
          </IconButton>
        </Tooltip>

        <MRT_ShowHideColumnsButton table={table} />
      </>
    )
  })

  return <MaterialReactTable table={table} />
}

export default UsersTable
