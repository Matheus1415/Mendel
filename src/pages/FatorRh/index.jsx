import {Text, Heading, Divider, Box} from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import {VideoCardSection} from '../../components/FatorRContentSection/VideoCardSection'
import { CardImageSection } from '../../components/FatorRContentSection/CardImageSection';
import BiographyKarlWiener from '../../components/MendelPage/BiographyKarlWiener';


export const FatorRh = () => {
    return(
        <>
            <LayoutIntroduction query="FUNDAMENTOS">Fator Rhesus</LayoutIntroduction>

            <LayoutBaseModify
            isRowReverse
            >
                <Heading variant="PrimaryTitle">O que é Fator Rh?</Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex debitis ipsa perferendis id, totam eum eos laborum asperiores pariatur excepturi voluptas harum neque recusandae sunt ducimus corporis possimus. Ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi alias aspernatur architecto, eveniet modi nam deleniti minima impedit atque quas illum repudiandae quisquam excepturi autem culpa dolore velit fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe exercitationem perferendis, sequi deserunt, nam repellendus repudiandae quae dolorum, vel reprehenderit harum fugiat odio odit asperiores nesciunt itaque accusamus molestiae accusantium?</Text>
                <Heading variant="PrimaryTitle">Qual a sua importância na tipagem sanguíneo?</Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel distinctio saepe a earum, magnam qui perspiciatis eveniet velit molestias, nemo quam odio animi quasi atque! Illum sed aliquid facere.</Text>
                <Heading variant="PrimaryTitle">Como ele pode influenciar transfussões de sangue a saúde durante a gravidez? </Heading>
                <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem obcaecati assumenda. A libero vitae ullam corporis? Incidunt nam ea suscipit facere enim quaerat nesciunt sint. Nisi similique hic aliquid.</Text>
            </LayoutBaseModify>
            <CardImageSection />
            <Divider width='90%' height='2px' borderRadius='35px' margin='0 auto' marginTop='20px' backgroundColor='#fff'/>
            <VideoCardSection />
            <BiographyKarlWiener />
        </>
       
    );
}


