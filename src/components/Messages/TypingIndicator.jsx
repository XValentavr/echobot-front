import React from 'react';

const TypingIndicator = () => {
    return (
        <div className="flex space-x-2 p-3 bg-gray-100 rounded-lg max-w-[80%] animate-pulse">
            <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{animationDelay: '0ms'}}
            />
            <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{animationDelay: '150ms'}}
            />
            <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{animationDelay: '300ms'}}
            />
        </div>
    );
};

export default TypingIndicator;