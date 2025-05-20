import React from 'react';

const Button = ({
                    children,
                    onClick,
                    disabled = false,
                    variant = 'primary',
                    size = 'md',
                    fullWidth = false,
                    className = '',
                    type = 'button',
                    ...props
                }) => {
    const variants = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizes = {
        sm: 'text-sm py-1 px-3',
        md: 'text-base py-2 px-4',
        lg: 'text-lg py-2 px-6',
    };

    const baseClasses = 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.md;
    const widthClasses = fullWidth ? 'w-full' : '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;