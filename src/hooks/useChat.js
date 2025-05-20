import { useState, useEffect, useCallback, useRef } from 'react';
import { sendMessage } from '../services/api';
import { generateId, getSmartReplies } from '../utils/helpers';

export const useChat = (initialState = {}) => {
    const {
        initialMessages = [{
            id: generateId(),
            text: 'Hello! How can I help you today?',
            sender: 'bot',
            timestamp: new Date()
        }],
    } = initialState;

    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);
    const messagesEndRef = useRef(null);
    const lastMessageRef = useRef(null);

    // Default suggestions for quick replies
    const defaultSuggestions = [
        'How are you?',
        'Tell me a joke',
        "What's the weather like?",
        'Help me with something'
    ];

    const smartReplies = useCallback(() => {
        const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
        if (!lastBotMessage) return [];

        return getSmartReplies(lastBotMessage.text);
    }, [messages]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const sendChatMessage = useCallback(async (text) => {
        if (!text || text.trim() === '') return;

        const messageId = generateId();

        const userMessage = {
            id: messageId,
            text,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setError(null);

        try {
            const data = await sendMessage(text);

            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: generateId(),
                    text: data.reply,
                    sender: 'bot',
                    timestamp: new Date()
                }]);
                setIsLoading(false);
            }, 300);

        } catch (err) {
            console.error('Failed to send message:', err);
            setError('Failed to get response. Please try again.');

            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: generateId(),
                    text: "Sorry, I'm having trouble connecting right now. Please try again later.",
                    sender: 'bot',
                    isError: true,
                    timestamp: new Date()
                }]);
                setIsLoading(false);
            }, 300);
        }
    }, []);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        const currentInput = inputText;
        setInputText('');
        sendChatMessage(currentInput);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const retryLastMessage = () => {
        if (messages.length < 2) return;

        const lastUserMessageIndex = [...messages].reverse().findIndex(m => m.sender === 'user');
        if (lastUserMessageIndex === -1) return;

        const lastUserMessage = [...messages].reverse()[lastUserMessageIndex];
        setRetryCount(prev => prev + 1);

        const newMessages = messages.slice(0, -1);
        setMessages(newMessages);

        sendChatMessage(lastUserMessage.text);
    };

    const clearChat = () => {
        setMessages(initialMessages);
        setRetryCount(0);
    };

    return {
        messages,
        inputText,
        isLoading,
        error,
        retryCount,
        messagesEndRef,
        lastMessageRef,
        defaultSuggestions,
        smartReplies: smartReplies(),
        setInputText,
        handleInputChange,
        handleSendMessage,
        handleKeyPress,
        sendChatMessage,
        retryLastMessage,
        clearChat,
    };
};

export default useChat;