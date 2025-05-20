import React from 'react';
import { MoreVertical } from 'lucide-react';
import IconButton from '../UI/IconButton';

const ChatHeader = ({ title, retryCount, onMenuClick }) => {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-lg font-semibold">{title}</h1>

            <div className="flex items-center">
                {retryCount > 0 && (
                    <span className="text-xs mr-2 bg-blue-700 px-2 py-1 rounded-full">
            Retry: {retryCount}
          </span>
                )}

                <IconButton
                    icon={<MoreVertical />}
                    variant="ghost"
                    onClick={onMenuClick}
                    ariaLabel="Menu"
                    className="text-white"
                />
            </div>
        </div>
    );
};

export default ChatHeader;