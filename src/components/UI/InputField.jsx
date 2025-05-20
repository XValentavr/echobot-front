import React, {forwardRef} from 'react';

const InputField = forwardRef(({
                                   value,
                                   onChange,
                                   onKeyPress,
                                   placeholder = 'Type here...',
                                   disabled = false,
                                   fullWidth = true,
                                   className = '',
                                   multiline = false,
                                   rows = 1,
                                   ...props
                               }, ref) => {
    const baseClasses =
        'border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow disabled:bg-gray-100 disabled:cursor-not-allowed';
    const widthClasses = fullWidth ? 'w-full' : '';

    if (!multiline) {
        return (
            <input
                ref={ref}
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                disabled={disabled}
                className={`${baseClasses} ${widthClasses} ${className}`}
                {...props}
            />
        );
    }

    return (
        <textarea
            ref={ref}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={`${baseClasses} ${widthClasses} resize-none rounded-2xl ${className}`}
            {...props}
        />
    );
});

InputField.displayName = 'InputField';

export default InputField;