
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation'
import Homepage from './routes/Homepage'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
<<<<<<< HEAD
import Post from './Post/Post'
=======
>>>>>>> 2d53c0f394f39fa740be9c50fd62e4300db64bbd

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
<<<<<<< HEAD
        <Route path="post" element={<Post />} />
=======
>>>>>>> 2d53c0f394f39fa740be9c50fd62e4300db64bbd
      </Route>
    </Routes>
  )
}

export default App
