import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TextField, Button } from "@/components/ui";
import PasswordStrengthIndicator from "@/components/ui/passwordStrengthIndicator";
import { HOME_PATH } from "@/constants/routePaths";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (
    password: string,
  ): { isValid: boolean; message: string | null } => {
    if (password.length < 6) {
      return {
        isValid: false,
        message: "La contraseña debe tener al menos 6 caracteres",
      };
    }
    if (!/[A-Z]/.test(password)) {
      return {
        isValid: false,
        message: "La contraseña debe contener al menos una mayúscula",
      };
    }
    if (!/[a-z]/.test(password)) {
      return {
        isValid: false,
        message: "La contraseña debe contener al menos una minúscula",
      };
    }
    if (!/\d/.test(password)) {
      return {
        isValid: false,
        message: "La contraseña debe contener al menos un número",
      };
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      return {
        isValid: false,
        message: "La contraseña debe contener al menos un carácter especial",
      };
    }
    return { isValid: true, message: null };
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setErrorText("El correo y contraseña son requeridos");
      return;
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setErrorText(passwordValidation.message);
      return;
    }

    setIsLoading(true);
    setErrorText(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorText("Ingresa un correo válido");
        return;
      }

      navigate(HOME_PATH);
    } catch {
      setErrorText("Error al iniciar sesión. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterClick = () => {
    // TODO: Implementar navegación a registro
    console.log("Navegar a registro");
  };

  return (
    <div className="min-h-dvh bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-dvh px-4 sm:px-6 py-8 sm:py-12">
        {/* Title */}
        <h1 className="mb-8 sm:mb-12 text-center font-semibold text-2xl sm:text-4xl lg:text-6xl text-primary max-w-xs sm:max-w-md lg:max-w-2xl">
          Autoservice Admin
        </h1>

        {/* Login Card */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-blue-card-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-primary">
              Iniciar sesión
            </h2>
          </div>

          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <TextField
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorText) setErrorText(null);
                }}
                errorText={errorText && !password.trim() ? errorText : null}
                required
                className="text-left"
              />
            </div>

            {/* Password Input */}
            <div>
              <TextField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorText) setErrorText(null);
                }}
                errorText={errorText && !email.trim() ? errorText : null}
                required
                className="text-left"
              />

              {/* Password Strength Indicator */}
              {password.length > 0 && (
                <PasswordStrengthIndicator
                  password={password}
                  className="mt-3"
                />
              )}
            </div>

            {/* Error Text */}
            {errorText && email.trim() && password.trim() && (
              <div className="text-red-500 text-sm text-center">
                {errorText}
              </div>
            )}

            {/* Login Button */}
            <Button
              onPress={handleLogin}
              isLoading={isLoading}
              visuallyDisabled={!email.trim() || !password.trim()}
              variant="primary"
              size="lg"
              className="w-full shadow-lg"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>

            {/* Register Link */}
            <div className="text-center pt-4">
              <button
                onClick={handleRegisterClick}
                className="text-primary hover:text-primary/80 underline text-sm sm:text-base transition-colors"
              >
                ¿No tienes cuenta? Regístrate aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
