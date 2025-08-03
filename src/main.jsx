import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./Context/authContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigContextProvider } from "./Context/configContext";
const queryClient = new QueryClient({});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ConfigContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
