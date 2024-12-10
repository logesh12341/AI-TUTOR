import React from 'react';
import MentorCard from './Mentor';

function MenntorImage() {
  const mentors = [
    {
      imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/man-7462318-6084599.png",
      name: "John Doe",
      position: "Software Engineer",
      rating: 4
    },
    {
      imageSrc: "path/to/image2.jpg",
      name: "Jane Smith",
      position: "Data Scientist",
      rating: 5
    }
  ];

  return (
    <div className="App">
      {mentors.map((mentor, index) => (
        <MentorCard 
          key={index} 
          imageSrc={mentor.imageSrc} 
          name={mentor.name} 
          position={mentor.position} 
          rating={mentor.rating} 
          className="custom-mentor-card"
        />
      ))}
    </div>
  );
}

export default MenntorImage;
