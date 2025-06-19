import { Box, Modal, Typography } from '@mui/material'
import type { User } from '../../../types'

type UserDetailsModalProps = {
  open: boolean
  onClose: () => void
  user: User
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const UserDetailsModal = ({ open, onClose, user }: UserDetailsModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography id="user-details-modal-title" variant="h6" component="h2">
          User Details
        </Typography>
        <Typography id="user-details-modal-description" sx={{ mt: 2 }}>
          Name: {user.name}
        </Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Username: {user.username}</Typography>
        <Typography>Company: {user.company.name}</Typography>
      </Box>
    </Modal>
  )
}

export default UserDetailsModal
