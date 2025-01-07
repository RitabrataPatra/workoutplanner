
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App
