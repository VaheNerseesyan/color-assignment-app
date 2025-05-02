const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxABWGZwPz9DyHn697LL9Aq-CzbyUzltLqRL9_EcnuKyrQm0ebvEkrQjceX3jp22lXtBg/exec';

export const getAvailableColors = async () => {
    try {
        const response = await fetch(`${SCRIPT_URL}?cache=${Date.now()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching colors:', error);
        return [];
    }
};

export const assignColor = async (name) => {
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
            mode: 'cors'
        });
        return await response.json();
    } catch (error) {
        console.error('Error assigning color:', error);
        return { error: 'Failed to assign color' };
    }
};