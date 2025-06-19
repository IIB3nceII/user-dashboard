import type { MRT_ColumnDef } from 'material-react-table'
import { useState } from 'react'
import type { User } from '../../../types'
import { useUsersContext } from '../providers'
import UserDetailsModal from './UserDetailsModal'
import UsersTable from './UsersTable'
import { Typography } from '@mui/material'
import CreateUserModal from './CreateUserModal'

const COLUMNS: MRT_ColumnDef<User>[] = [
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
    accessorKey: 'username',
    header: 'Username',
    size: 200
  },
  {
    accessorKey: 'company.name',
    header: 'Company',
    size: 150
  }
] as const

const UsersDashboard = () => {
  const { users, isPending, isError, error, refetch } = useUsersContext()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [openCreateUserModal, setOpenCreateUserModal] = useState<boolean>(false)

  const openUserDetails = (user: User) => {
    setSelectedUser(user)
  }

  const closeUserDetails = () => {
    setSelectedUser(null)
  }

  if (isPending) {
    return (
      <Typography variant="body1" component="p" gutterBottom>
        Loading...
      </Typography>
    )
  }

  if (isError && error instanceof Error) {
    return (
      <Typography variant="body1" component="p" color="error">
        Error:{' '}
        {error.message?.length > 0 ? error.message : 'Something went wrong'}
      </Typography>
    )
  }

  return (
    <>
      <UsersTable
        columns={COLUMNS}
        users={users}
        onRowClick={openUserDetails}
        onRefresh={refetch}
        onOpenCreateUser={() => setOpenCreateUserModal(true)}
      />
      {selectedUser && (
        <UserDetailsModal
          open={!!selectedUser}
          onClose={closeUserDetails}
          user={selectedUser}
        />
      )}
      {openCreateUserModal && (
        <CreateUserModal
          open={openCreateUserModal}
          onClose={() => setOpenCreateUserModal(false)}
        />
      )}
    </>
  )
}

export default UsersDashboard
