import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Mainpage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="content">
      {isSmallScreen ? null : (
        <video autoPlay muted loop className="background-video">
          <source src="https://videocdn.cdnpk.net/cdn/content/video/free/video0533/large_preview/_import_62e8b2d3ada819.23428853.mp4?filename=1472495_people_3840x2160.mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="container">
        <br></br>
        <CustomImage
          src="http://fresh2refresh.com/wp-content/uploads/2018/06/Tiruvalluvar.jpg"
          alt="Games"
          description="Thirukural"
          to="/TK"
        />
        <CustomImage
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/92/9b/63/929b63f5-af2e-fcfa-d164-6fb4c00b325d/source/512x512bb.jpg"
          alt="Games"
          description="Word Finder"
          to="/word"
        />
        <CustomImage
          src="https://cdn-icons-png.flaticon.com/512/6169/6169056.png"
          alt="Learning"
          description="Memory Test"
          to="/memory"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
};

const CustomImage = ({ src, alt, description, to }) => {
  return (
    <div className="image-container">
      <Link to={to} className="image-link">
        <img src={src} alt={alt} className="image" />
        <br></br>
        <Typography variant="body2" className="word"><h1>{description}</h1></Typography>
      </Link>
    </div>
  );
};

export default Mainpage;
