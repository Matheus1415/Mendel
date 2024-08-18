import {Text, Heading } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import BiographyFatorRh  from './BiographyFatorRh';
import { TableSection } from './TableSection'
import { ExamFactorRh } from './ExamFactorRh';


export const FatorRh = () => {
    return(
        <>
            <LayoutIntroduction query="Fator Rh">Fator Rh</LayoutIntroduction>

            <LayoutBaseModify
            isRowReverse
            isImage
            isImageSrc="../public/img/DNA.png"
            children
            >
                <Heading variant="PrimaryTitle" textAlign="right">O que é</Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel distinctio saepe a earum, magnam qui perspiciatis eveniet velit molestias, nemo quam odio animi quasi atque! Illum sed aliquid facere.</Text>
               
               <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem obcaecati assumenda. A libero vitae ullam corporis? Incidunt nam ea suscipit facere enim quaerat nesciunt sint. Nisi similique hic aliquid.</Text>
                <Heading variant="PrimaryTitle" textAlign="right">Importância</Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel distinctio saepe a earum, magnam qui perspiciatis eveniet velit molestias, nemo quam odio animi quasi atque! Illum sed aliquid facere.</Text>
               
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem obcaecati assumenda. A libero vitae ullam corporis? Incidunt nam ea suscipit facere enim quaerat nesciunt sint. Nisi similique hic aliquid.</Text>
            </LayoutBaseModify>
            <Heading variant="PrimaryTitle" textAlign="center">Criadores</Heading>
            <BiographyFatorRh title="Karl Landsteiner" isImageSrc="../public/img/KarlLandsteiner.jpg" isRowReverse={false}/>
            <BiographyFatorRh title="Alexander Solomon Wiener" isImageSrc="../public/img/Wiener.png" isRowReverse={false}/>
            <TableSection/>
            <ExamFactorRh/>
        </>
       
    );
}


