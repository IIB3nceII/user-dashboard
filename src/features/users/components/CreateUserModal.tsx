import {
  Box,
  Button,
  Modal,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { useRef, useState } from 'react'
import { CreateUserSchema } from '../../../types'
import { useUsersContext } from '../providers'

const CreateUserModal = ({
  open,
  onClose
}: {
  open: boolean
  onClose: () => void
}) => {
  const { createUser, isCreateUserPending, createUserError } = useUsersContext()
  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const websiteRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const companyNameRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)

  const handleSubmit = async () => {
    const name = nameRef.current?.value.trim() || ''
    const username = usernameRef.current?.value.trim() || ''
    const email = emailRef.current?.value.trim() || ''
    const phone = phoneRef.current?.value.trim() || ''
    const website = websiteRef.current?.value.trim() || ''
    const city = cityRef.current?.value.trim() || ''
    const companyName = companyNameRef.current?.value.trim() || ''

    const parsedUser = CreateUserSchema.safeParse({
      name,
      username,
      email,
      phone,
      website,
      address: { city },
      company: { name: companyName }
    })

    if (!parsedUser.success) {
      setError(parsedUser.error.errors.map((e) => e.message).join(', '))
      return
    }

    setError('')

    await createUser(parsedUser.data)

    if (!isCreateUserPending && !createUserError) {
      setSnackbarOpen(true)
      setTimeout(() => {
        setSnackbarOpen(false)
        onClose()
        if (nameRef.current) nameRef.current.value = ''
        if (usernameRef.current) usernameRef.current.value = ''
        if (emailRef.current) emailRef.current.value = ''
        if (phoneRef.current) phoneRef.current.value = ''
        if (websiteRef.current) websiteRef.current.value = ''
        if (cityRef.current) cityRef.current.value = ''
        if (companyNameRef.current) companyNameRef.current.value = ''
      }, 2000)
    }
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            overflowY: 'auto',
            maxHeight: '90vh'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Create User
          </Typography>

          <TextField
            label="Name"
            inputRef={nameRef}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Username"
            inputRef={usernameRef}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            inputRef={emailRef}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            inputRef={phoneRef}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Website"
            inputRef={websiteRef}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            inputRef={cityRef}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company Name"
            inputRef={companyNameRef}
            fullWidth
            margin="normal"
          />

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          {isCreateUserPending && (
            <Typography sx={{ mt: 1 }}>Creating user...</Typography>
          )}

          {createUserError && (
            <Typography color="error" sx={{ mt: 1 }}>
              {createUserError.message}
            </Typography>
          )}

          <Button
            disabled={isCreateUserPending}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Create
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="User created successfully"
      />
    </>
  )
}

export default CreateUserModal
