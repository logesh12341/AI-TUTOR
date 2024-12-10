import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ grade, description, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (grade === 5) 
        {
            navigate('/Time');
        }
        if (grade === 4)
        {
            navigate('/');
        }
        if (grade === 3) 
        {
            navigate('/leader');
        }
        if (grade === 2) 
        {
            navigate('/Decision');
        }
        if (grade === 1) 
        {
            navigate('/respect');
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

const Skill = () => {
    const cards = [
        { grade: 1, description: 'Respect', imageUrl: 'https://png.pngtree.com/png-clipart/20221229/original/pngtree-tni-chibi-respect-png-image_8823332.png' },
        { grade: 2, description: 'Decision-making ', imageUrl: 'https://static.vecteezy.com/system/resources/previews/020/915/213/original/decision-3d-illustration-icon-png.png' },
        { grade: 3, description: 'Leadership', imageUrl: 'https://static.vecteezy.com/system/resources/previews/022/483/393/non_2x/confident-3d-boy-king-great-for-empowerment-or-leadership-inspired-designs-transparent-background-free-png.png' },
        { grade: 4, description: 'Become-Responsible', imageUrl: 'https://png.pngtree.com/png-clipart/20231026/original/pngtree-3d-boy-character-playing-laptop-with-laughing-png-image_13442178.png' },
        { grade: 5, description: 'Time-Management', imageUrl: 'https://static.vecteezy.com/system/resources/previews/015/214/642/original/time-management-3d-illustration-icon-png.png' }
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
            <br />
        </div>
    );
}

export default Skill;
