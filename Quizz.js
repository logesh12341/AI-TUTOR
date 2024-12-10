import React, { useState, useEffect } from "react";
import RecommendedContent from "./Recommendedcontent";
function QuizzApp() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [percentage, setPercentage] = useState(0); // State to store percentage
  
  const [showCrackEffect, setShowCrackEffect] = useState(false);
  const questions = [
    {
      text: "What is 1 + 1?",
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "2", isCorrect: true },
      ],
    },
    {
      text: "Which animal lives in water?",
      options: [
        { id: 0, text: "Fish", isCorrect: true },
        { id: 1, text: "Elephant", isCorrect: false },
        { id: 2, text: "Tiger", isCorrect: false },
        { id: 3, text: "Lion", isCorrect: false },
      ],
    },
    {
      text: "How many sides does a square have?",
      options: [
        { id: 0, text: "4", isCorrect: true },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
    },
    {
      text: "What is the source of light during the daytime?",
      options: [
        { id: 0, text: "Lamp", isCorrect: false },
        { id: 1, text: "Sun", isCorrect: true },
        { id: 2, text: "Moon", isCorrect: false },
        { id: 3, text: "Stars", isCorrect: false },
      ],
    },
    {
      text: "What do plants need to grow?",
      options: [
        { id: 0, text: "Shelter and warmth", isCorrect: false },
        { id: 1, text: "Water and sunlight", isCorrect: false },
        { id: 2, text: "Air and food", isCorrect: true },
        { id: 3, text: "Electricity", isCorrect: false },
      ],
    }
  ];

  const sendScoreToBackend = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/store-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score: score, percentage: percentage }) // Send the score and percentage data in the request body
      });
      const data = await response.json();
      console.log(data.message); // Log the response message from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  const calculatePercentage = () => {
    const percentage = ((score/(questions.length))) * 100;
    setPercentage(percentage);
  };

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      // Increment score only if the answer is correct
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestion+1  < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculatePercentage();
      setShowResults(true);
      setShowCrackEffect(true);
    }
  };

  const restartGame = async () => {
    // Send the score to the backend before resetting game states
    await sendScoreToBackend();

    // Reset game states
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setShowCrackEffect(false);
  };

  return (
    <div>
      {/* Background video for larger screens */}
      {!isSmallScreen && (
        <video autoPlay muted loop className="background-video">
          <source src="https://www.shutterstock.com/shutterstock/videos/1106582477/preview/stock-footage-abstract-digital-plexus-background-of-blue-purple-gradient-shining-lines-and-dots-minimalistic.webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="App" style={{fontSize: '2em' }}>
        <h1 style={{ color: 'white', }}>Quiz </h1>
        <h2 style={{ color: 'white' , }}>Score: {score}</h2>
        {showResults ? (
          <div className="final-results">
            <h2>Final Results</h2>
            <h3>
              {score} out of {questions.length} 
            </h3>
            <button id="Button1" onClick={restartGame}>Restart game</button>
            <RecommendedContent  score={score} percentage={percentage}/>
          </div>
          
            
        ) : (
          <div className="question-card" style={{fontSize: '1.5em' }}>
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3>{questions[currentQuestion].text}</h3>
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {showCrackEffect && (
                    <div className="quizzcrack-effect">
                        {[...Array(20)].map((_, index) => (
                            <div
                                key={index}
                                className="quizzcrack-image"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    right: `${Math.random() * 100}%`,
                                    bottom: `${Math.random() * 100}%`,
                                }}
                            ></div>
                        ))}
                    </div>
                )}
      </div>
    </div>
  );
}

export default QuizzApp;