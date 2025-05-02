const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypCtD402fLGh6nxzocMeJdAO1nsBzRxPIjcTuAcb9gcLseKwZAA6OVIzhtAXNLWSBoTQ/exec';

export const getAvailableColors = async () => {
    try {
        const response = await fetch(SCRIPT_URL);
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
        });
        return await response.json();
    } catch (error) {
        console.error('Error assigning color:', error);
        return { error: 'Failed to assign color' };
    }
};