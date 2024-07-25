import React from 'react';
import { data } from '../data';

const About = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>{data.aboutUs.history}</p>
      <h3>Vision</h3>
      <p>{data.aboutUs.vision}</p>
      <h3>Mission</h3>
      <p>{data.aboutUs.mission}</p>
      <h3>Principal's Message</h3>
      <p>{data.aboutUs.principalMessage}</p>
      <h3>Infrastructure and Facilities</h3>
      <ul>
        {data.aboutUs.infrastructure.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
