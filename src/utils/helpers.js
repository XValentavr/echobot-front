export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }).format(date);
};

export const getSmartReplies = (message) => {
    if (!message) return [];

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('help')) {
        return ['Yes, please help me', 'No thanks', 'Tell me more'];
    } else if (lowerMessage.includes('?')) {
        return ['Yes', 'No', 'Maybe', 'Can you explain more?'];
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return ['Hello!', 'How are you?', 'Nice to meet you'];
    } else if (lowerMessage.includes('thank')) {
        return ["You're welcome!", 'No problem', 'Glad I could help'];
    }

    return [];
};

export const throttle = (func, delay) => {
    let lastCall = 0;

    return function (...args) {
        const now = new Date().getTime();

        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        return func(...args);
    };
};