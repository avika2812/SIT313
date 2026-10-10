
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation'
import Homepage from './routes/Homepage'
import Login from './routes/Login'
import SignUp from './routes/SignUp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
