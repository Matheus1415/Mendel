import React from 'react';
import { LayoutIntroduction } from "../../layout/LayoutIntroduction"
import { Cells } from "./cells";
import { Chromossomes } from "./chromossomes";
import { Gene } from "./gene";
import { Alleles } from "./alleles";
import { GenoPhenoTypes } from "./genoPhenoTypes";

export const Fundamentos = () => {

return (

<>
  <LayoutIntroduction query="FUNDAMENTOS">FUNDAMENTOS DA GENÉTICA</LayoutIntroduction>
  <Cells/>
  <Chromossomes/>
  <Gene/>
  <Alleles/>
  <GenoPhenoTypes/>
</>
);
};