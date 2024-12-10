import React from 'react';

function MentorImage() {
  const mentors = [
    {
      id: "john_doe",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/man-7462318-6084599.png",
      name: "John Doe",
      position: "Tamil",
      rating: 4
    },
    {
      id: "sans_math",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-5796556-4841555.png",
      name: "Sans",
      position: "Mathematics",
      rating: 4.5
    },
    {
      id: "jane_smith",
      imageSrc: "http://www.pngmart.com/files/15/Vector-Business-Woman-Transparent-PNG.png",
      name: "Jane Smith",
      position: "English",
      rating: 5
    },
    {
      id: "joseph_science",
      imageSrc: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/14._Teacher.png",
      name: "Joseph",
      position: "Science",
      rating: 3.9
    },
    {
      id: "smith_physics",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/teacher-6853823-5625843.png",
      name: "Smith",
      position: "Physics",
      rating: 4.3
    },
    {
      id: "bhavani_cs",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/female-student-8582470-6759402.png",
      name: "Bhavani",
      position: "Computer Science",
      rating: 5
    },
    {
      id: "liene_social_science",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/beautiful-woman-7664856-6220837.png",
      name: "Liene",
      position: "Social Science",
      rating: 3.5
    },
    {
      id: "John McCarthy _Ai",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/geek-boy-4872320-4061806.png",
      name: "John McCarthy",
      position: "Artificial Intelligence",
      rating: 5
    },
    {
      id: "Peter Naur_Data_Science",
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/young-boy-6438324-5326256.png",
      name: "Peter Naur",
      position: "Data Science",
      rating: 3.5
    },
    {
      id: "Engleberger_Robotics",
      imageSrc: "https://purepng.com/public/uploads/large/purepng.com-robotrobotprogrammableautomatonelectronicscyborg-1701528371874ax93z.png",
      name: "Engleberger",
      position: "Robotics",
      rating: 3.5
    }
  ];

  return (
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
  );
}

export default MentorImage;
