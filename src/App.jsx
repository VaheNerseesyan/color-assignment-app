import React, { useState, useEffect } from 'react';
import { getAvailableColors } from './services/sheetService';
import ColorPalette from './components/ColorPalette';
import NameForm from './components/NameForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
    const [colors, setColors] = useState([]);
    const [assignment, setAssignment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing assignment
        const savedAssignment = localStorage.getItem('colorAssignment');
        if (savedAssignment) {
            setAssignment(JSON.parse(savedAssignment));
        }

        // Fetch available colors
        const fetchColors = async () => {
            try {
                const availableColors = await getAvailableColors();
                setColors(availableColors);
            } catch (error) {
                console.error('Error loading colors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchColors();
    }, []);

    const handleNewAssignment = (newAssignment) => {
        setAssignment(newAssignment);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <header>
                <h1>Color Assignment App</h1>
            </header>
            <main>
                {!assignment ? (
                    <>
                        <ColorPalette colors={colors} />
                        <NameForm onAssignment={handleNewAssignment} />
                    </>
                ) : (
                    <ResultDisplay
                        name={assignment.name}
                        color={assignment.color}
                        hex={assignment.hex}
                    />
                )}
            </main>
        </div>
    );
}

export default App;