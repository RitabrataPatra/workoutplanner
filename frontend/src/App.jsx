
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SignUpPage from './pages/SignUpPage'
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </div>
  )
}

export default App
