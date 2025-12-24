

import './App.css'
import {Router, Routes , Route, BrowserRouter} from "react-router-dom"

import Login from './pages/login/Login'
import Navbar from './components/navbar/navbar'
import Layout from './layout/Layout'
import Banner from './components/banner/Banner'
import NewCardItemList from './components/cards/NewCardItemList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login/>}/> */}
          <Route path='/' element={<Layout/>}/>
          <Route path='' element={<Banner/>}/>
          <Route path='/card' element={<NewCardItemList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
