import React from 'react';

const IconButton = ({
                        icon,
                        onClick,
                        disabled = false,
                        variant = 'default',
                        size = 'md',
                        className = '',
                        ariaLabel,
                        ...props
                    }) => {
    const variants = {
        default: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
        primary: 'text-white bg-blue-500 hover:bg-blue-600',
        danger: 'text-white bg-red-500 hover:bg-red-600',
        ghost: 'text-gray-500 hover:text-blue-500',
        active: 'text-blue-500 bg-blue-50 hover:bg-blue-100',
    };

    const sizes = {
        sm: 'p-1',
        md: 'p-2',
        lg: 'p-3',
    };

    const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
    };

    const baseClasses =
        'rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = variants[variant] || variants.default;
    const sizeClasses = sizes[size] || sizes.md;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || 'Button'}
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
            {...props}
        >
            {React.cloneElement(icon, {
                size: iconSizes[size] || iconSizes.md
            })}
        </button>
    );
};

export default IconButton;