import React from "react";

interface ButtonProps {
  children: React.ReactNode; // The content of the button
  color?: string; // Optional color prop
  onClick?: () => void; // Optional click handler
  className?: string; // Optional additional classes
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "bg-_pink",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-[2px] text[17px] leading-5 text-white ${color} hover:opacity-90 transition-opacity ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
