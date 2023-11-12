import './header.css';
import logoNoBg from '../assets/yd_logo-removebg.png';

function Header() {
    return (
        <header>
            <a className='logo' href='/'>
                <img src={logoNoBg} alt='ZYD logo'/>
            </a>
            <nav className='menu'>
                <ul className='menus'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;