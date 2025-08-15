import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TextField, Button } from "@/components/ui";
import { HOME_PATH } from "@/constants/routePaths";

const Login = () => {
  const [code, setCode] = useState("");
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!code.trim()) {
      setErrorText("El código es requerido");
      return;
    }

    setIsLoading(true);
    setErrorText(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (code.length < 3) {
        setErrorText("El código debe tener al menos 3 dígitos");
        return;
      }

      if (code === "123456") {
        navigate(HOME_PATH);
      } else {
        setErrorText("Código inválido. Intenta nuevamente.");
      }
    } catch {
      setErrorText("Código inválido. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-dvh bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-dvh px-6 py-12">
        {/* Title */}
        <h1 className="mb-auto md:mb-[46px] self-end lg:self-center mt-[25px] mr-[32px] md:mr-[100px] lg:mr-[0px] text-right lg:text-center font-semibold text-[35px] md:text-[60px] text-primary w-[200px] md:w-[300px] lg:w-full">
          Autoservice Admin
        </h1>
        {/* Login Card */}
        <div className="w-full md:max-w-md md:min-w-[558px] bg-blue-card-background rounded-[20px] pt-[29px] pb-[40px] px-[23px] md:p-[50px] shadow-xl">
          <div className="text-left mb-[30px]">
            <h2 className="font-bold text-[25px] md:text-[35px] text-primary">
              Iniciar sesión
            </h2>
          </div>

          <div>
            {/* Code Input */}
            <div className="mb-[20px] md:mb-[30px]">
              <TextField
                label="Código"
                name="code"
                type="number"
                placeholder="Ingresa tu código"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (errorText) setErrorText(null);
                }}
                errorText={errorText}
                required
                className="text-left"
              />
            </div>

            {/* Login Button */}
            <Button
              onPress={handleLogin}
              isLoading={isLoading}
              visuallyDisabled={!code.trim()}
              variant="primary"
              size="lg"
              className="w-full shadow-lg"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
