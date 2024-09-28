import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import logoNoBg from '../assets/yd_logo-removebg.png';
import Button from './Button';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <Link to='/' className='brand'>
                <img id='logo' src={logoNoBg} alt='ZYD logo'/>
            </Link>
            <nav className='menu'>
                <Button
                    id='home-btn'
                    >Home
                </Button>
                <Button id='about-us-btn'>About Us</Button>
                <Button id='what-we-do-btn'>What We Do</Button>
                <Button id='contact-us-btn'>Contact Us</Button>
            </nav>
            <Button variant='outlined' className='donate-btn'>Donate</Button>
        </header>
    );
}

export default Header;