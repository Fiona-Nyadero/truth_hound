import './App.css'
import { Routes, Route } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import SelectModePage from './pages/SelectModePage'
import SinglePlayerPage from './pages/SinglePlayerPage'
import MultiplayerPage from './pages/MultiplayerPage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/select-mode" element={<SelectModePage />} />
      <Route path="/single-player" element={<SinglePlayerPage />} />
      <Route path="/multiplayer" element={<MultiplayerPage />} />
    </Routes>
  )
}

export default App
