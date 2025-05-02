import React, { useState } from 'react';
import { assignColor } from '../services/sheetService';

const NameForm = ({ onAssignment }) => {
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Please enter your name');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const result = await assignColor(name);
            if (result.error) {
                setError(result.error);
            } else {
                localStorage.setItem('colorAssignment', JSON.stringify({ name, ...result }));
                onAssignment({ name, ...result });
            }
        } catch (err) {
            setError('Failed to assign color. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    marginRight: '10px',
                    width: '200px'
                }}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                {isSubmitting ? 'Assigning...' : 'Get My Color'}
            </button>
        </form>
    );
};

export default NameForm;