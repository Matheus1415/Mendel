import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {Biography} from "./pages/Biography"
import {Curiosities } from "./pages/Curiosities";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Biography />
    <Curiosities />
  </ChakraProvider>
);
