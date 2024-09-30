import React from 'react';
import './home.css';
import VideoBox from '../VideoBox';

function Home() {
    return (
        <>
        <div className="hero">
            <div className="hero-text-box">
                <h1>Welcome to Zomi YD</h1>
                <h2>Zomi Picing | Siamsin Picing</h2>
                <p>Empowering the youth through technology...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <section className='yd-theme-video'>
            <div className='video-color-banner'></div>
            <VideoBox src='https://www.youtube.com/embed/PLuHDYufJRM?si=VeGebn5-6uru1Ns5' title='YD Theme Video' />
        </section>
        </>
    );
}

export default Home;
