import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({ grade, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (grade === "தமிழ்") {
            navigate('/grade4');
        } 
        if (grade === "Science") {
            navigate('/grade3');
        } 
        if (grade === "English") {
            navigate('/grade2');
        } 
        if (grade === "Maths") {
            navigate(`/grade1`);
        }
    };

    return (
        <button className="custom-card" onClick={handleCardClick}>
            <div className="card-content">
                <h2>{grade}</h2>
            </div>
            <div className="card-image">
                <img src={imageUrl} alt={`Grade ${grade}`} />
            </div>
        </button>
    );
};

const Subject2 = () => {
    const cards = [
        { grade: "தமிழ்",  imageUrl: 'https://i.pinimg.com/originals/23/26/5f/23265f7333a01fbc1806f3beae7037fc.png' },
        { grade: "English",  imageUrl: 'https://static.vecteezy.com/system/resources/previews/013/391/077/original/english-book-3d-illustration-free-png.png' },
        { grade: "Maths",  imageUrl: 'https://cdn1.iconfinder.com/data/icons/education-941/512/Mathematics.png' },
        { grade: "Environmental Studies", imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/science-7300015-5914236.png' },
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
          <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0455/large_preview/_import_6091351956fab9.79316699.mp4?filename=1103586_1080p_detail_environment_1920x1080.mp4" />
          {/* <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0467/large_preview/_import_61516878597381.93871393.mp4?filename=1109514_1080p_animation_4k_3840x2160.mp4" /> */}
          Your browser does not support the video tag.
        </video>
      )}
                <div className="learning-content-container">
                    {cards.map((card, index) => (
                        <Card key={index} grade={card.grade}  imageUrl={card.imageUrl} />
                    ))}
                </div>
            </div>
    );
}

export default Subject2;
