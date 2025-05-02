import React from 'react';

const ResultDisplay = ({ name, color, hex }) => {
    return (
        <div style={{
            margin: '20px 0',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
        }}>
            <h2>Thank you, {name}!</h2>
            <p>Your assigned color is:</p>
            <div style={{
                display: 'inline-block',
                padding: '15px 30px',
                backgroundColor: hex,
                color: getContrastColor(hex),
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                margin: '10px 0'
            }}>
                {color}
            </div>
        </div>
    );
};

// Reuse the contrast function from ColorPalette
function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
}

export default ResultDisplay;