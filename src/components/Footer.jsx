import React from 'react';
import { data } from '../data';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>{data.contact.address}</p>
            <p>{data.contact.phone}</p>
            <p>{data.contact.email}</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Location</h5>
            <div dangerouslySetInnerHTML={{ __html: data.contact.googleMapsEmbed }} />
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        © 2023 {data.schoolName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
