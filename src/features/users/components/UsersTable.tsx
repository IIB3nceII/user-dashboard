import {
  MaterialReactTable,
  MRT_ShowHideColumnsButton,
  MRT_ToggleFullScreenButton,
  useMaterialReactTable,
  type MRT_ColumnDef
} from 'material-react-table'
import type { User } from '../../../types'
import { IconButton, Tooltip } from '@mui/material'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'

type UsersTableProps = {
  columns: MRT_ColumnDef<User>[]
  users: User[]
  onRowClick?: (user: User) => void
  onRefresh?: () => void
}

const UsersTable = ({
  columns,
  users,
  onRowClick,
  onRefresh
}: UsersTableProps) => {
  const table = useMaterialReactTable({
    columns,
    data: users,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        onRowClick?.(row.original)
      }
    }),
    renderToolbarInternalActions: ({ table }) => (
      <>
        <Tooltip title="Refresh">
          <IconButton onClick={() => onRefresh?.()}>
            <RefreshOutlinedIcon />
          </IconButton>
        </Tooltip>

        <MRT_ShowHideColumnsButton table={table} />
        <MRT_ToggleFullScreenButton table={table} />
      </>
    )
  })

  return <MaterialReactTable table={table} />
}

export default UsersTable
