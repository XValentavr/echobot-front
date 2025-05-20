import React, { useRef } from 'react';
import { Send, Paperclip } from 'lucide-react';
import InputField from '../UI/InputField';
import IconButton from '../UI/IconButton';

const ChatInput = ({
                       inputText,
                       onChange,
                       onSend,
                       onKeyPress,
                       isLoading,
                       onToggleExtras,
                       showExtras,
                   }) => {
    const inputRef = useRef(null);

    const handleSend = () => {
        onSend();
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    return (
        <div className="bg-white border-t border-gray-200 p-4 flex items-center shadow-md">
            <IconButton
                icon={<Paperclip />}
                onClick={() => onToggleExtras(!showExtras)}
                variant={showExtras ? 'active' : 'ghost'}
                ariaLabel="Attachments"
                className="mr-2"
            />

            <InputField
                ref={inputRef}
                value={inputText}
                onChange={onChange}
                onKeyPress={onKeyPress}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1"
            />

            <IconButton
                icon={<Send />}
                onClick={handleSend}
                disabled={!inputText || inputText.trim() === '' || isLoading}
                variant="primary"
                ariaLabel="Send Message"
            />
        </div>
    );
};

export default ChatInput;