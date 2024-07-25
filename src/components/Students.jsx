import React from 'react';
import { data } from '../data';

const Students = () => {
  return (
    <div className="container">
      <h2>Student Life</h2>
      <h3>Extracurricular Activities</h3>
      <p>{data.students.life}</p>
      <h3>Clubs and Societies</h3>
      <p>{data.students.clubs.join(', ')}</p>
      <h3>Achievements</h3>
      <ul>
        {data.students.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <h3>Student Council</h3>
      <ul>
        <li>President: {data.students.council.president}</li>
        <li>Vice President: {data.students.council.vicePresident}</li>
        <li>Secretary: {data.students.council.secretary}</li>
      </ul>
    </div>
  );
};

export default Students;
