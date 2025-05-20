import React from 'react';
import { Paperclip, X, RefreshCw, Image, Smile } from 'lucide-react';
import IconButton from '../UI/IconButton';

const ChatExtras = ({
                        showExtras,
                        onToggleExtras,
                        onRetry,
                        onFileUpload,
                        onEmojiSelect,
                        onImageUpload
                    }) => {
    if (!showExtras) {
        return null;
    }

    return (
        <div className="bg-white border-t border-gray-200 p-2 flex justify-around items-center animate-slide-up">
            <IconButton
                icon={<Image />}
                onClick={onImageUpload}
                ariaLabel="Upload Image"
            />

            <IconButton
                icon={<Paperclip />}
                onClick={onFileUpload}
                ariaLabel="Attach File"
            />

            <IconButton
                icon={<Smile />}
                onClick={onEmojiSelect}
                ariaLabel="Select Emoji"
            />

            <IconButton
                icon={<RefreshCw />}
                onClick={onRetry}
                ariaLabel="Retry Last Message"
            />

            <IconButton
                icon={<X />}
                onClick={() => onToggleExtras(false)}
                ariaLabel="Close Menu"
            />
        </div>
    );
};

export default ChatExtras;