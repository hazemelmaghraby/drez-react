import React from 'react';
import './Separator.css';

const Separator = ({ color = '#007bff', thickness = '4px', width = '100%' }) => {
    return (
        <div className="separator" style={{ backgroundColor: color, height: thickness, width }} />
    );
};

export default Separator;