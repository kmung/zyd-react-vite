import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p>©2024 
                <Link to='/'> Zomi YD</Link>
            </p>
        </footer>
    );
}
export default Footer;