import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PWABadge from "@/PWABadge.tsx";
import { routes } from "@/routes/index.tsx";

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
      <PWABadge />
    </>
  );
};

export default App;
