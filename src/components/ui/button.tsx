import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  visuallyDisabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  variant = "primary",
  size = "md",
  isLoading = false,
  visuallyDisabled = false,
  children,
  className = "",
  ...props
}) => {
  const shouldDisableAction = visuallyDisabled || isLoading;

  const handleClick = () => {
    if (!shouldDisableAction && onPress) {
      onPress();
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-[32px]
    transition-colors duration-200 focus:outline-none
    disabled:cursor-not-allowed border border-transparent
    min-h-[45px] md:min-h-[60px] text-base font-semibold
  `;

  const variantClasses = {
    primary: shouldDisableAction
      ? "bg-secondary text-white cursor-not-allowed"
      : "bg-primary text-white hover:bg-primary/90",
    secondary: shouldDisableAction
      ? "bg-secondary text-white cursor-not-allowed"
      : "bg-secondary text-gray-700 hover:bg-secondary/80",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      aria-disabled={shouldDisableAction}
      {...props}
    >
      {isLoading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
};

export default Button;
