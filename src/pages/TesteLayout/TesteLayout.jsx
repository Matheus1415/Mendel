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
        </>
    )
}