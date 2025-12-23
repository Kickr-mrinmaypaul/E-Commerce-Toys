

import './App.css'
import {Router, Routes , Route, BrowserRouter} from "react-router-dom"

import Login from './pages/login/Login'
import Navbar from './components/navbar/navbar'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login/>}/> */}
          <Route path='/' element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
