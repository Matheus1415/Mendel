import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from './theme';
import { RouterAsRouter } from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <ChakraProvider theme={theme}>
    <RouterAsRouter />
  </ChakraProvider>
);
