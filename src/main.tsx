import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";

const theme = extendTheme({});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={routes} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
