import React from 'react';

const ColorPalette = ({ colors }) => {
    return (
        <div className="color-palette">
            <h2>Available Colors</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
                margin: '20px 0'
            }}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: color.hex,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: getContrastColor(color.hex),
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                        }}
                    >
                        {color.color.charAt(0).toUpperCase()}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper function to determine text color based on background
function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
}

export default ColorPalette;