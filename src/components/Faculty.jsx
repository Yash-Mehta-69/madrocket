import React from 'react';
import { data } from '../data';

const Faculty = () => {
  return (
    <div className="container">
      <h2>Faculty</h2>
      <ul>
        {data.faculty.map((member, index) => (
          <li key={index}>
            {member.name}: {member.position}, {member.qualification}, {member.experience}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;

