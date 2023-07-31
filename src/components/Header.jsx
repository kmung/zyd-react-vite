import './header.css';
import logo from '../assets/yd_logo.jpg';

function Header() {
    return (
        <header>
            <div className='logo'>
                <a href='/'>
                    <img src={logo} />
                </a>
            </div>
            <div className='menu'>
                <ul className='menu-navs'>
                    <li>
                        <a href='/'>Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;