
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button'
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 text-center";
  const variants = {
    primary: "bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
