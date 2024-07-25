import React from 'react';
import { data } from '../data';

const Admissions = () => {
  return (
    <div className="container">
      <h2>Admissions</h2>
      <h3>Process</h3>
      <p>{data.admissions.process}</p>
      <h3>Criteria</h3>
      <p>{data.admissions.criteria}</p>
      <h3>Important Dates</h3>
      <ul>
        <li>Admission Form Availability: {data.admissions.importantDates.formAvailability}</li>
        <li>Last Date for Submission: {data.admissions.importantDates.submissionDeadline}</li>
        <li>Entrance Test: {data.admissions.importantDates.entranceTest}</li>
        <li>Announcement of Results: {data.admissions.importantDates.resultAnnouncement}</li>
      </ul>
    </div>
  );
};

export default Admissions;
