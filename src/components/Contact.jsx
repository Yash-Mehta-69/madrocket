import React from 'react';
import { data } from '../data';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>Address: {data.contact.address}</p>
      <p>Phone: {data.contact.phone}</p>
      <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
      <h3>Location</h3>
      <div dangerouslySetInnerHTML={{ __html: data.contact.googleMapsEmbed }} />
      <h3>Contact Form</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
