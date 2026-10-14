
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation'
import Homepage from './routes/Homepage'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Post from './Post/Post'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="post" element={<Post />} />
      </Route>
    </Routes>
  )
}

export default App
