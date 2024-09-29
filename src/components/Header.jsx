import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
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
            <div className='brand'>
                <Link to='/'>
                    <img id='logo' src={logoNoBg} alt='ZYD logo'/>
                </Link>
            </div>
            <nav className='menu'>
                <Link to='/'>
                    <Button id='home-btn'>Home</Button>
                </Link>
                <Link to='/about-us'>
                    <Button id='about-us-btn'>About Us</Button>
                </Link>
                <Button id='what-we-do-btn'>What We Do</Button>
                <Button id='contact-us-btn'>Contact Us</Button>
            </nav>
            <Button variant='outlined' className='donate-btn'>Donate</Button>
        </header>
    );
}

export default Header;