import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import { WishListProvider } from "./context/WishListContext.tsx";
import "./index.css";
import {queryClient} from "./lib/queryClient.ts"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WishListProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WishListProvider>
          <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  </StrictMode>
);