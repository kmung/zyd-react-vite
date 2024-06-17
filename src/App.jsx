import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import NotFound from './components/pages/NotFound';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
