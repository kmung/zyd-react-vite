import React from "react";
import './button.css';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const variantClass = `button-${variant}`;

    return (
        <button
            className={`button ${variantClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;