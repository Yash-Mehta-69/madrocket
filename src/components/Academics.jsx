import React from 'react';
import { data } from '../data';

const Academics = () => {
  return (
    <div className="container">
      <h2>Academics</h2>
      <h3>Curriculum</h3>
      <h4>Primary (Grades 1-5)</h4>
      <p>{data.academics.curriculum.primary.join(', ')}</p>
      <h4>Secondary (Grades 6-10)</h4>
      <p>{data.academics.curriculum.secondary.join(', ')}</p>
      <h4>Senior Secondary (Grades 11-12)</h4>
      <p>Science Stream: {data.academics.curriculum.seniorSecondary.science.join(', ')}</p>
      <p>Commerce Stream: {data.academics.curriculum.seniorSecondary.commerce.join(', ')}</p>
      <h3>Teaching Methodologies</h3>
      <p>{data.academics.methodologies}</p>
      <h3>Educational Resources</h3>
      <p>{data.academics.resources}</p>
    </div>
  );
};

export default Academics;
