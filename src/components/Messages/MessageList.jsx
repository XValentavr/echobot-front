import React from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import SmartReplies from './SmartReplies';
import EmptyState from './EmptyState';

const MessageList = ({
                         messages,
                         isLoading,
                         smartReplies,
                         onSmartReplySelect,
                         messagesEndRef,
                         suggestions,
                         onSuggestionSelect,
                     }) => {
    const isEmpty = messages.length <= 1;

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Empty state */}
            {isEmpty && (
                <EmptyState
                    suggestions={suggestions}
                    onSelectSuggestion={onSuggestionSelect}
                />
            )}

            {/* Messages */}
            {messages.map((message, index) => {
                const isLatestMessage = index === messages.length - 1;

                return (
                    <div
                        key={message.id || index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <Message message={message} isNew={isLatestMessage} />
                    </div>
                );
            })}

            {/* Loading indicator */}
            {isLoading && (
                <div className="flex justify-start">
                    <TypingIndicator />
                </div>
            )}

            {/* Smart replies */}
            {!isLoading && !isEmpty && smartReplies && smartReplies.length > 0 && (
                <SmartReplies
                    replies={smartReplies}
                    onSelectReply={onSmartReplySelect}
                />
            )}

            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;