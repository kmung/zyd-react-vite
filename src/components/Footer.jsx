import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p>©2024 
                <Link to='/'> Zomi YD</Link>
            </p>
            <span> | </span>
           <p>
                Made with ❤️ by
                <a href='https://kmung.github.io/' target='_blank' rel='noreferrer nofollow'>&nbsp;KM</a>
           </p>
        </footer>
    );
}
export default Footer;