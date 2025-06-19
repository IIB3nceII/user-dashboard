import './App.css'
import { UsersTable } from './features'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <main>
        <UsersTable />
      </main>
    </Providers>
  )
}

export default App
