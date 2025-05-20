/**
 * Chat API service
 * Handles communication with the backend API
 */

const API_URL = import.meta.env.VITE_API_URL;

export const sendMessage = async (message) => {
    try {
        const response = await fetch(`${API_URL}/chat/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message}),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};