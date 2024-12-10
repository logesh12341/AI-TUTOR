import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Mainpage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="content">
      {isSmallScreen ? null : (
        <video autoPlay muted loop className="background-video">
          <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0482/large_preview/_import_62b69d6b5cd1d2.59366085.mp4" />
           Your browser does not support the video tag.
        </video>
      )}
      <div className="container">
        <br/>
        <CustomImage
          src="https://vectorified.com/images/self-assessment-icon-14.png"
          alt="Games"
          description="Quizz"
          to="/quizz"
        />
        <CustomImage
          src="https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-6368706-5250853.png"
          alt="Learning"
          description="class 1-5"
          to="/grade"
        />
        <CustomImage
          src="https://cdn-icons-png.freepik.com/256/12166/12166443.png?ga=GA1.1.1838517361.1711559184&"
          alt="Skill Learn"
          description="Learn content"
          to="/lcontent"
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
