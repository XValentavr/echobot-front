import React from 'react';

const EmptyState = ({suggestions, onSelectSuggestion}) => {
    return (
        <div className="flex flex-col items-center justify-center h-full opacity-50 space-y-4 py-10">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="text-blue-500 text-2xl">AI</div>
            </div>
            <p className="text-center text-gray-500">Welcome to the chat!</p>

            {suggestions && suggestions.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-2 max-w-xs">
                    {suggestions.map((suggestion, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectSuggestion(suggestion)}
                            className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EmptyState;