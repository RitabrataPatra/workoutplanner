
import './App.css'
import SignUpPage from './pages/SignUpPage'
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <div>
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
      </Routes>
    </div>
  )
}

export default App
