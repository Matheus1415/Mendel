import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from './theme';
import {Chromosomes} from './pages/Chromosomes'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <Chromosomes />
  </ChakraProvider>
);
