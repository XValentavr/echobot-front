import React from 'react';

const SmartReplies = ({ replies, onSelectReply }) => {
    if (!replies || replies.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-2 mt-2 justify-center animate-fade-in">
            {replies.map((reply, index) => (
                <button
                    key={index}
                    onClick={() => onSelectReply(reply)}
                    className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                    {reply}
                </button>
            ))}
        </div>
    );
};

export default SmartReplies;