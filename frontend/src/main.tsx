import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { WishListProvider } from "./context/WishListContext.tsx";
import "./index.css";
import {queryClient} from "./services/queryClient.ts"
import { AuthProvider } from "./context/useAuthStore.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <WishListProvider>
        <BrowserRouter>
          <App />
                  <Toaster duration={3000}position="top-right" richColors/>

        </BrowserRouter>
      </WishListProvider>
          <ReactQueryDevtools initialIsOpen={false} />
</AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);