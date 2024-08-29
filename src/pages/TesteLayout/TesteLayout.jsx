<<<<<<< HEAD
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
export const TesteLayout = () =>{
    return(
        <>
        <LayoutIntroduction query="GENÉTICA">INTRODUÇÃO SOBRE GENÉTICA</LayoutIntroduction>
        <LayoutBaseModify
            title='Biografia'
            titleStyle='SecondTitle'
            isRowReverse
            isImage
            isImageSrc="assets/estatuaMendel.png"
        >
           <Heading variant="PrimaryTitle">Minha pagina</Heading>
           <Text variant="Paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam adipisci porro quo animi nulla illo delectus quibusdam vel ab recusandae consequuntur enim voluptas maiores, ipsum iste placeat sint optio?
           </Text>
           <Text variant="Paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam adipisci porro quo animi nulla illo delectus quibusdam vel ab recusandae consequuntur enim voluptas maiores, ipsum iste placeat sint optio?
           </Text>
           <Heading variant="PrimaryTitle">Minha pagina</Heading>
           <Text variant="Paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam adipisci porro quo animi nulla illo delectus quibusdam vel ab recusandae consequuntur enim voluptas maiores, ipsum iste placeat sint optio?
           </Text>
           <Text variant="Paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam adipisci porro quo animi nulla illo delectus quibusdam vel ab recusandae consequuntur enim voluptas maiores, ipsum iste placeat sint optio?
           </Text>
           <Heading variant="PrimaryTitle">Minha pagina</Heading>
           <Text variant="Paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam adipisci porro quo animi nulla illo delectus quibusdam vel ab recusandae consequuntur enim voluptas maiores, ipsum iste placeat sint optio?
           </Text>
           <Text variant="Paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam adipisci porro quo animi nulla illo delectus quibusdam vel ab recusandae consequuntur enim voluptas maiores, ipsum iste placeat sint optio?
           </Text>
        </LayoutBaseModify>
=======
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { CiTextAlignCenter } from 'react-icons/ci';
export const TesteLayout = () =>{
    return(
        <>
            <LayoutIntroduction query="FUNDAMENTOS"> INTRODUÇÃO SOBREFUNDAMENTOS </LayoutIntroduction>
            <LayoutBaseModify
                title='Ola mundo'
                isImage
                isImageSrc="/Gregor_Mendel.jpg"
            >

                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Button variant="readMore">Ola mundo</Button>
            </LayoutBaseModify>
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
        </>
    )
}