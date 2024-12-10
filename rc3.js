import React, { useState, useEffect } from 'react';
const Rc3 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mentors = [
    {
      id: "sans_math",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-5796556-4841555.png",
      name: "Sans",
      position: "Mathematics",
      rating: 4.5
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
          <div className="learning-levels" style={{display:'flex'}}>
            <div className="learning-level" style={{ width: '30%', margin: '5px' }}>
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/mathematics-5135139-4298233.png" alt="Avatar 1" className="avatar1" />
              <br></br>
              <div className="level-details">
                <h2>Level 1</h2>
                <p>Introduction to Basic Concepts</p>
              </div>
            </div>
            <div className="learning-level" style={{ width: '30%', margin: '5px' }}>
              <img src="https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/Objects.png" alt="Avatar 2" className="avatar1" />
              <br/>
              <div className="level-details">
                <h2>Level 2</h2>
                <p>Building on Fundamentals</p>
              </div>
            </div>
            <div className="learning-level" style={{ width: '30%', margin: '5px' }}>
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/math-blocks-9177462-7475613.png" alt="Avatar 3" className="avatar1" />
              <br/>
              <div className="level-details">
                <h2>Level 3</h2>
                <p> Advanced  Topics </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rc3;
