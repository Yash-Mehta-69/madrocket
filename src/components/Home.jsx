import React from 'react';
import { data } from '../data';
import sportsDayImg from '../assets/images/sports_day.jpg';
import scienceExhibitionImg from '../assets/images/science_exhibition.jpg';
import culturalFestImg from '../assets/images/cultural_fest.jpg';

const Home = () => {
  const carouselImages = [sportsDayImg, scienceExhibitionImg, culturalFestImg];

  return (
    <div className="container">
      <header className="text-center my-4">
        <img src={data.logo} alt="School Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
        <h1>{data.schoolName}</h1>
        <p>{data.introduction}</p>
      </header>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img 
                src={image} 
                className="d-block w-100 carousel-img" 
                alt={data.carouselHighlights[index].title} 
                style={{height: "400px", objectFit: "cover"}} 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data.carouselHighlights[index].title}</h5>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
