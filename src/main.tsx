import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

import App from "@/App.tsx";
import { queryClient } from "@/services/clients/queryClient";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
