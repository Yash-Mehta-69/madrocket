import React from 'react';
import { data } from '../data';
// import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4">Gallery</h2>
      
      <div className="row mb-4">
        <div className="col-12">
          <h3>Photo Gallery</h3>
        </div>
        {data.gallery.photos.map((photo, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="photo-wrapper">
              <img src={photo.image} className="photo-image" alt={photo.description} />
              <p className="photo-description">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="row">
        <div className="col-12">
          <h3>Video Gallery</h3>
        </div>
        {data.gallery.videos.map((video, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="video-wrapper">
              <video controls className="video-player">
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
