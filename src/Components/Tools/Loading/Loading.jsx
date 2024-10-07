import React from 'react';
import './Loading.css'; // Custom styles

const Loading = () => {
    return (
        <div className="loading-container d-flex justify-content-center align-items-center">
            <div className="spinner-border text-warning" role="status">
            </div>
            <span className="ml-3 loading-text">Loading, please wait...</span>
        </div>
    );
};

export default Loading;
