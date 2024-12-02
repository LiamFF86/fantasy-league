import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import DashboardPage from '@/pages/dashboard'
import PlayersPage from '@/pages/players'
import LeaguesPage from '@/pages/leagues'
import ScoresPage from '@/pages/scores'
import SettingsPage from '@/pages/settings'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/scores" element={<ScoresPage />} />
        <Route path="/leagues" element={<LeaguesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App
