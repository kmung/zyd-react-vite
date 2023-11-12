import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
