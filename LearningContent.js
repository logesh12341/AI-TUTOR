import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({ grade, description, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (grade === 5) {
            navigate('/subject5');
        } 
        if (grade === 4) {
            navigate('/subject4');
        } 
        if (grade === 3) {
            navigate('/subject3');
        } 
        if (grade === 2) {
            navigate('/subject2');
        } 
        if (grade ===1)
        {
            navigate(`/subject1`);
        }
    };

    return (
        <button className="custom-card" onClick={handleCardClick}>
            <div className="card-content">
                <h2>Grade {grade}</h2>
                <p>{description}</p>
            </div>
            <div className="card-image">
                <img src={imageUrl} alt={`Grade ${grade}`} />
            </div>
        </button>
    );
};

const LearnApp = () => {
    const cards = [
        { grade: 1, description: 'Introduction to basic concepts', imageUrl: 'https://png.pngtree.com/png-clipart/20230430/original/pngtree-boys-and-children-figure-3d-png-image_9124277.png' },
        { grade: 2, description: 'Building on foundational skills', imageUrl: 'https://png.pngtree.com/png-clipart/20230413/original/pngtree-character-cartoon-3d-white-background-transparent-png-image_9051572.png' },
        { grade: 3, description: 'Exploring more advanced topics', imageUrl: 'https://png.pngtree.com/png-clipart/20230430/original/pngtree-little-boy-student-cartoon-3d-png-image_9125457.png' },
        { grade: 4, description: 'Preparing for intermediate level', imageUrl: 'https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-cute-3d-boy-with-backpack-cartoon-png-image_6679521.png' },
        { grade: 5, description: 'Mastering advanced concepts', imageUrl: 'https://png.pngtree.com/png-vector/20230323/ourmid/pngtree-3d-boy-cartoon-png-image_6664092.png' }
    ];
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
            <div className="learn-container">
                {isSmallScreen ? null : (
        <video autoPlay muted loop className="background-video">
          <source src="https://videocdn.cdnpk.net/excite/content/video/premium/partners0336/large_preview/brain_comp_blue.mp4" />
          {/* <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0467/large_preview/_import_61516878597381.93871393.mp4?filename=1109514_1080p_animation_4k_3840x2160.mp4" /> */}
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
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
    );
}

export default LearnApp;
