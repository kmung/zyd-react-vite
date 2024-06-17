import { Link } from 'react-router-dom';
import './header.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import logoNoBg from '../assets/yd_logo-removebg.png';
import { Button, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    return (
        <header>
            <Link to='/' className='brand'>
                <img id='logo' src={logoNoBg} alt='ZYD logo'/>
            </Link>
            <nav className='menu'>
                <Button
                    id='home-btn'
                    >Home
                </Button>
            </nav>
            <Button disabled variant='outlined' className='donate-btn'>Donate</Button>
        </header>
    );
}

export default Header;