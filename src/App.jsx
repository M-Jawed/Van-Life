import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage'
import Layout from './components/layout/layout'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import Vans from './components/pages/Vans/Vans'
import VanDetails from './components/pages/Vans/VanDetails'
import Dashboard from './components/pages/Host/Dashboard'
import Income from './components/pages/Host/Income'
import Reviews from './components/pages/Host/Reviews'
import HostVan from './components/pages/Host/HostVans'
import HostLayout from './components/layout/HostLayout'
import HostVanDetails from './components/pages/Host/HostVanDetails'
import HostVanInfo from './components/pages/Host/HostVanInfo'
import HostVanPhoto from './components/pages/Host/HostVanPhoto'
import HostVanPricing from './components/pages/Host/HostVanPricing'
import NotFound from './components/pages/NotFound'
import AuthRequired from './components/layout/AuthRequired'
import Login from './components/pages/Login'
import AuthProvider from './components/AuthContext'



function App() {

  return (
    <>
    <AuthProvider>
        <Router>
          <Routes>

            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='about' element={<About />} />

              <Route path='vans'>

                <Route index element={<Vans />} />
                <Route path=':id' element={<VanDetails />} />
                
              </Route>

            <Route element={<AuthRequired />}>
              <Route path='host' element={<HostLayout />}>

                  <Route index element={<Dashboard />}/>
                  <Route path='income' element={<Income />} />
                  <Route path='vans' element={<HostVan />} />

                    <Route path='vans/:id' element={<HostVanDetails />}>
                        <Route index  element={<HostVanInfo />}/>
                        <Route path='pricing' element={<HostVanPricing />} />
                        <Route path='photos' element={<HostVanPhoto />} />
                    </Route>

                  <Route path='reviews' element={<Reviews />} />

              </Route>
            </Route>

              <Route path='login' element={<Login />} />

            <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
