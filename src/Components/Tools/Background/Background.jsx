import React from 'react';
import './Background.css';

const Background = () => {
    return (
        <div className="background-container">
            <div className="blurred-circle blue"></div>
            <div className="blurred-circle pink"></div>
            <div className="blurred-circle yellow"></div>
            {/* Add more blurred elements as needed */}
        </div>
    );
};

export default Background;