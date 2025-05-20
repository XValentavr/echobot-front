import React from 'react';

const Message = ({ message, isNew }) => {
    const { text, sender, isError, timestamp } = message;

    const messageClasses = `max-w-[80%] p-3 rounded-lg ${
        sender === 'user'
            ? 'bg-blue-500 text-white rounded-br-none'
            : isError
                ? 'bg-red-100 text-red-800 rounded-bl-none'
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
    } ${isNew ? 'animate-message-appear' : ''}`;

    const formattedTime = timestamp
        ? new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(timestamp)
        : '';

    return (
        <div className={messageClasses}>
            <div className="flex flex-col">
                <div>{text}</div>
                {timestamp && (
                    <div className={`text-xs mt-1 text-right ${sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {formattedTime}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Message;