import {Text, Heading } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import BiographyFatorRh  from './BiographyFatorRh';
import { TableSection } from './TableSection'


export const FatorRh = () => {
    return(
        <>
            <LayoutIntroduction query="FUNDAMENTOS">Fator Rhesus</LayoutIntroduction>

            <LayoutBaseModify
            isRowReverse
            isImage
            isImageSrc="../public/img/DNA.png"
            >
                <Heading variant="PrimaryTitle" textAlign="right">O que é</Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex debitis ipsa perferendis id, totam eum eos laborum asperiores pariatur excepturi voluptas harum neque recusandae sunt ducimus corporis possimus. Ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi alias aspernatur architecto, eveniet modi nam deleniti minima impedit atque quas illum repudiandae quisquam excepturi autem culpa dolore velit fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe exercitationem perferendis, sequi deserunt, nam repellendus repudiandae quae dolorum, vel reprehenderit harum fugiat odio odit asperiores nesciunt itaque accusamus molestiae accusantium?</Text>
                <Heading variant="PrimaryTitle" textAlign="right">Importância?</Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel distinctio saepe a earum, magnam qui perspiciatis eveniet velit molestias, nemo quam odio animi quasi atque! Illum sed aliquid facere.</Text>
               
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem obcaecati assumenda. A libero vitae ullam corporis? Incidunt nam ea suscipit facere enim quaerat nesciunt sint. Nisi similique hic aliquid.</Text>
            </LayoutBaseModify>
            <BiographyFatorRh Name="Karl Landsteiner" Url="../public/img/KarlLandsteiner.jpg" PosicaoDoLado={true}/>
            <BiographyFatorRh Name="Alexander S. Wiener" Url="../public/img/Wiener.png" PosicaoDoLado={false}/>
            <TableSection/>
        </>
       
    );
}


