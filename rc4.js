import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Rc4 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mentors = [
    {
      id: "joseph_science",
      imageSrc: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/14._Teacher.png",
      name: "Joseph",
      position: "Science",
      rating: 3.9
    },
  ];

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
    <div>
      <div className="learning-container" style={{ color: 'white', display: 'flex' }}>
        <div className="mentor-container">
          {mentors.map((mentor) => (
            <div className="mentor-card" key={mentor.id}>
              <img src={mentor.imageSrc} alt={mentor.name} className="mentor-image" />
              <div className="mentor-details">
                <h2>{mentor.name}</h2>
                <p>{mentor.position}</p>
                <div className="mentor-rating">
                  <span className="rating-label">Rating:</span>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={index < mentor.rating ? 'filled' : ''}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-content" style={{ flex: 3 }}>
          {isSmallScreen ? null : (
            <video autoPlay muted loop className="background-video">
              <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0467/large_preview/_import_61516a60ac6332.82576208.mp4?filename=1109515_1080p_animation_4k_3840x2160.mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="learning-levels" style={{ display: 'flex' }}>
            <div className="learning-level" style={{ width: '30%', margin: '5px' }}>
              <Link to="/grade2">
                <img src="http://clipart-library.com/images_k/science-clipart-transparent/science-clipart-transparent-21.png" alt="Avatar 1" className="avatar1" />
                <br></br>
                <div className="level-details">
                  <h1>Level 1</h1>
                  <p>Introduction to Basic Concepts</p>
                </div>
              </Link>
            </div>
            <div className="learning-level" style={{ width: '30%', margin: '5px' }}>
              <Link to="/grade3">
                <img src="https://png.pngtree.com/png-vector/20240409/ourmid/pngtree-d-rendering-of-a-microscope-or-optical-device-laboratory-science-on-png-image_12269512.png" alt="Avatar 2" className="avatar1" />
                <br />
                <div className="level-details">
                  <h1>Level 2</h1>
                  <p>Building on Fundamentals</p>
                </div>
              </Link>
            </div>
            <div className="learning-level" style={{ width: '30%', margin: '5px' }}>
              <Link to="/grade4">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/science-research-5741967-4816904.png" alt="Avatar 3" className="avatar1" />
                <br />
                <div className="level-details">
                  <h1>Level 3</h1>
                  <p> Advanced  Topics </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rc4;
