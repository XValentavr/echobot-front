import React, { useState, useEffect } from 'react';
import MessageList from '../Messages/MessageList';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatExtras from './ChatExtras';
import useChat from '../../hooks/useChat';

const Chat = ({ title = 'Chat Bot' }) => {
    const [showExtras, setShowExtras] = useState(false);

    const {
        messages,
        inputText,
        isLoading,
        retryCount,
        messagesEndRef,
        defaultSuggestions,
        smartReplies,
        handleInputChange,
        handleSendMessage,
        handleKeyPress,
        sendChatMessage,
        retryLastMessage,
        clearChat,
    } = useChat();


    const handleMenuClick = () => {
        if (window.confirm('Clear chat history?')) {
            clearChat();
        }
    };

    const handleToggleExtras = (show) => {
        setShowExtras(show);
    };

    const handleFileUpload = () => alert('File upload not implemented in this demo');
    const handleImageUpload = () => alert('Image upload not implemented in this demo');
    const handleEmojiSelect = () => alert('Emoji picker not implemented in this demo');

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Header */}
            <ChatHeader
                title={title}
                retryCount={retryCount}
                onMenuClick={handleMenuClick}
            />

            {/* Messages */}
            <MessageList
                messages={messages}
                isLoading={isLoading}
                smartReplies={smartReplies}
                onSmartReplySelect={sendChatMessage}
                messagesEndRef={messagesEndRef}
                suggestions={defaultSuggestions}
                onSuggestionSelect={sendChatMessage}
            />

            {/* Extras */}
            <ChatExtras
                showExtras={showExtras}
                onToggleExtras={handleToggleExtras}
                onRetry={retryLastMessage}
                onFileUpload={handleFileUpload}
                onEmojiSelect={handleEmojiSelect}
                onImageUpload={handleImageUpload}
            />

            {/* Input */}
            <ChatInput
                inputText={inputText}
                onChange={handleInputChange}
                onSend={handleSendMessage}
                onKeyPress={handleKeyPress}
                isLoading={isLoading}
                onToggleExtras={handleToggleExtras}
                showExtras={showExtras}
            />
        </div>
    );
};

export default Chat;