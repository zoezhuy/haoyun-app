import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { ExtensionPopup } from './pages/ExtensionPopup/ExtensionPopup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/popup" element={<ExtensionPopup />} />
    </Routes>
  )
}

export default App
