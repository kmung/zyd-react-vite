import { Link } from 'react-router-dom';
import './header.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import logoNoBg from '../assets/yd_logo-removebg.png';

function Header() {
    return (
        <header>
            <Link to='/' className='brand'>
                <img id='logo' src={logoNoBg} alt='ZYD logo'/>
            </Link>
            <nav className='menu'>
                <ul className='menus'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about-us'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact-us'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;