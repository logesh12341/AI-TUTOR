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
          {/* <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0467/large_preview/_import_61516878597381.93871393.mp4?filename=1109514_1080p_animation_4k_3840x2160.mp4" /> */}
          <source src="https://www.shutterstock.com/shutterstock/videos/1034861858/preview/stock-footage-smart-little-boy-wearing-augmented-reality-headset-plays-with-space-learning-software-with.webm" />
          {/* <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0485/large_preview/_import_61b436a9c16290.44924640.mp4?filename=1118495_4k_telecommunications_flexible_3840x2160.mp4" /> */}
            Your browser does not support the video tag.
        </video>
      )}
      <div className="container">
        <br/>
        <CustomImage 
          src="https://cdn3d.iconscout.com/3d/premium/thumb/game-controller-4022905-3328664.png"
          alt="Games"
          description="Games"
          to="/game"
        />
        <CustomImage
          src="https://static.vecteezy.com/system/resources/previews/024/830/931/original/3d-cute-smiling-university-or-college-student-studying-with-laptop-on-his-lap-transparent-student-3d-render-3d-student-character-isolated-on-transparent-background-student-studying-generative-ai-png.png"
          alt="Learning"
          description="Learning"
          to="/homel"
        />
        <CustomImage
          src="https://cdn-icons-png.freepik.com/256/12166/12166443.png?ga=GA1.1.1838517361.1711559184&"
          alt="Skill Learn"
          description="Skill Learn"
          to="/skill"
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
