import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ grade, description, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (grade === 5) 
        {
            navigate('/Grade5');
        }
        if (grade === 4)
        {
            navigate('/Grade1');
        }
        if (grade === 3) 
        {
            navigate('/Grade3');
        }
        if (grade === 2) 
        {
            navigate('/Grade4');
        }
        if (grade === 1) 
        {
            navigate('/Grade2');
        }
    };

    return (
        <button className="custom-card" onClick={handleCardClick}>
            <div className="card-content">
                <h2>{description}</h2>
            </div>
            <div className="card-image">
                <img src={imageUrl} alt={`Grade ${grade}`} />
            </div>
        </button>
    );
};

const Learn = () => {
    const cards = [
        { grade: 1, description: 'SolarSystem', imageUrl: 'https://purepng.com/public/uploads/large/unique-solar-system-hza.png' },
        { grade: 2, description: 'Earth', imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987828wxj1f.png' },
        { grade: 3, description: 'Science', imageUrl: 'http://pluspng.com/img-png/png-science-experiment-science-experiment-clipart-1050.png' },
        { grade: 4, description: 'Explore-world', imageUrl: 'https://store-images.s-microsoft.com/image/apps.32807.9007199266588603.195a6972-c26c-45f1-996c-109e1b6e8dd2.62e64353-7c81-4de4-94e4-d96366c77066?mode=scale&q=90&h=1080&w=1920' },
        { grade: 5, description: 'Story', imageUrl: 'https://webstockreview.net/images/disney-clipart-toy-story-1.png' }
    ];
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
        <div className="learn-container">
            {isSmallScreen ? null : (
                <video autoPlay muted loop className="background-video">
                    <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0467/large_preview/_import_61515ca15b8388.17716894.mp4?filename=1109502_1080p_animation_4k_3840x2160.mp4" />
                     Your browser does not support the video tag.
                </video>
            )}
            <div className="learning-content-container">
                {cards.map((card, index) => (
                    <Card key={index} grade={card.grade} description={card.description} imageUrl={card.imageUrl} />
                ))}
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Learn;
