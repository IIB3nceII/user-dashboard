import { Box, Container, Typography } from '@mui/material'
import './App.css'
import { UsersDashboard } from './features'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <main>
        <Container maxWidth="lg">
          <Box sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              User Management Dashboard
            </Typography>
            <UsersDashboard />
          </Box>
        </Container>
      </main>
    </Providers>
  )
}

export default App
