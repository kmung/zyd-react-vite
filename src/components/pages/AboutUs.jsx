import React from 'react';
import './aboutus.css';
import missionImage from '../../assets/mission.jpg';
import visionImage from '../../assets/vision.jpg';
import teamImage from '../../assets/team.jpg';
import Cover from '../Cover';
import coverImage from '../../assets/img3.jpg';

function AboutUs() {
  return (
    <div className="about-us">
      <Cover title='Who We Are' backgroundImage={coverImage} />
      <section className="mission">
        <h1>Our Mission</h1>
        <img src={missionImage} alt="Mission" />
        <p>Our mission is to empower the youth through technology and innovation...</p>
      </section>
      <section className="vision">
        <h1>Our Vision</h1>
        <img src={visionImage} alt="Vision" />
        <p>Our vision is to create a world where every young person has the opportunity to succeed...</p>
      </section>
      <section className="team">
        <h1>Our Team</h1>
        <img src={teamImage} alt="Team" />
        <div className="team-members">
          <div className="team-member">
            <h2>John Doe</h2>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <h2>Jane Smith</h2>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <h2>Emily Johnson</h2>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;