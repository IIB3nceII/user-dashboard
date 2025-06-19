import './App.css'
import { UsersDashboard } from './features'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <main>
        <UsersDashboard />
      </main>
    </Providers>
  )
}

export default App
