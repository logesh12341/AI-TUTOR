import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecommendedContent({ score, percentage }) {
    const [recommendedContent, setRecommendedContent] = useState([]);

    useEffect(() => {
        // Fetch recommended content when the component mounts
        fetchRecommendedContent(score, percentage);
    }, [score, percentage]);

    const fetchRecommendedContent = async (score, percentage) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/store-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ score: score, percentage: percentage }) // Use the passed score and percentage
            });

            const data = await response.json();
            const content = data.recommended_content;
            setRecommendedContent(content);
        } catch (error) {
            console.error('Error fetching recommended content:', error);
        }
    };

    return (
        <div className="recommended-content-container">
            <h2>Recommended Learning Content</h2>
            {recommendedContent.map((item, index) => (
                <div className="content-item" key={index}>
                    <Link to={item.link} className="content-link">
                        <img src={item.image} alt={item.title} className="content-image" />
                        <div className="content-details">
                            <h3 className="content-title">{item.title}</h3>
                            <p className="content-description">{item.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RecommendedContent;
