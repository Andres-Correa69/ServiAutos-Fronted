import React from "react";

interface PasswordRequirement {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

interface PasswordStrengthIndicatorProps {
  password: string;
  className?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  className = "",
}) => {
  const requirements: PasswordRequirement[] = [
    {
      id: "length",
      label: "Mínimo 6 caracteres",
      validator: (pwd) => pwd.length >= 6,
    },
    {
      id: "uppercase",
      label: "Una mayúscula",
      validator: (pwd) => /[A-Z]/.test(pwd),
    },
    {
      id: "lowercase",
      label: "Una minúscula",
      validator: (pwd) => /[a-z]/.test(pwd),
    },
    {
      id: "number",
      label: "Un número",
      validator: (pwd) => /\d/.test(pwd),
    },
    {
      id: "special",
      label: "Un carácter especial",
      validator: (pwd) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd),
    },
  ];

  const getStrengthLevel = (password: string): number => {
    return requirements.filter((req) => req.validator(password)).length;
  };

  const getStrengthColor = (strength: number): string => {
    if (strength === 0) return "bg-red-400";
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-orange-500";
    return "bg-green-500";
  };

  const strength = getStrengthLevel(password);
  const strengthColor = getStrengthColor(strength);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Strength Circles */}
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-600 mr-2">Seguridad:</span>
        <div className="flex space-x-1">
          {requirements.map((req, index) => {
            const isActive = index < strength;

            return (
              <div
                key={req.id}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive ? strengthColor : "bg-gray-300"
                }`}
              />
            );
          })}
        </div>
        <span className="text-xs font-medium ml-2">
          {strength === 0 && "Muy débil"}
          {strength === 1 && "Débil"}
          {strength === 2 && "Débil"}
          {strength === 3 && "Media"}
          {strength === 4 && "Buena"}
          {strength === 5 && "Excelente"}
        </span>
      </div>

      {/* Requirements List */}
      <div className="space-y-1">
        {requirements.map((req) => {
          const isMet = req.validator(password);

          return (
            <div
              key={req.id}
              className={`flex items-center space-x-2 text-xs transition-colors duration-200 ${
                isMet ? "text-green-600" : "text-gray-500"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  isMet ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              <span>{req.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
