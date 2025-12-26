import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import ViewCardDetails from './components/cards/ViewCardDetails.jsx'
import CardContextProvider from './context/cards/CardContextProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/view-card-details/:type/:id' element={<ViewCardDetails/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextProvider>
      <RouterProvider router={router}/>
    </CardContextProvider>
  </StrictMode>,
)
