import React from "react";

interface RoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPress: () => void;
  title: string;
  textClassName?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "solid" | "outline";
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  onPress,
  title,
  textClassName = "",
  isLoading = false,
  disabled = false,
  variant = "solid",
  className = "",
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && !isLoading && onPress) {
      onPress();
    }
  };

  const baseClasses = `
        inline-flex items-center justify-center
        rounded-full px-6 py-3
        font-semibold text-[14px] md:text-[22px]
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
    `;

  const variantClasses = {
    solid: `
        bg-primary text-white
        hover:bg-gray-800 active:bg-gray-950
        disabled:hover:bg-gray-900
    `,
    outline: `
        bg-transparent border-2 border-white text-white
        hover:bg-white hover:text-[#2E1E6A]
        disabled:hover:bg-transparent disabled:hover:text-white
    `,
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {isLoading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      <span className={`${textClassName}`}>{title}</span>
    </button>
  );
};

export default RoundedButton;
