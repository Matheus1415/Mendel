import { Flex ,Text, Heading, Box, useBreakpointValue, Image } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import BiographyFatorRh  from './BiographyFatorRh';
import { TableSection } from './TableSection'
import { ExamFactorRh } from './ExamFactorRh';


export const FatorRh = ({
    isImage = true,
    isRowReverse = true, 
    isImageSrc = '../public/img/DNA.png',
    backgroundImage = '../public/img/background4.png'
}) => {

    const flexDirection = useBreakpointValue({ base: "column", sm: "column", md: isRowReverse?'row-reverse':'row' });
    const contentWidth = useBreakpointValue({  base: "100%",  sm: "100%", md: '50%'});
    const flexAlignContent = useBreakpointValue({  base: "center",  sm: "center", md: ''});
    
    const styleText = {
        fontSize: '17px',
        fontWeight: 275,
        lineHeight: '25.5px',
        textAlign: 'justify'
    }
    const styleHeading = {
        fontSize: '40px',
        textAlign: 'right',
        fontWeight: 275,
        bgGradient: 'linear(to-r, #0D066780, #19BFCD80)',
        bgClip: 'text'
    }



    return(
        <>
            <LayoutIntroduction query="Fator Rh">Fator Rh</LayoutIntroduction>




            <Box
            backgroundRepeat="repeat"
            backgroundSize="cover" 
            backgroundPosition="center" 
            backgroundImage={`url(${backgroundImage})`}
            >
                <Flex
                mx="auto" 
                maxW="1300px" 
                p={8} 
                gap={6} 
                direction={flexDirection} 
                justifyContent="space-between"
                alignItems="center"
                >
                    <Flex
                    direction="column" 
                    justifyContent="flex-start" 
                    h="100%" w="100%" 
                    maxW={contentWidth} 
                    alignItems={flexAlignContent}
                    >
                        <Heading 
                        variant="PrimaryTitle"
                        sx={styleHeading}
                        >O que é</Heading>
                        <Text 
                        variant="Paragraph"
                        sx={styleText}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem autem porro aperiam enim natus, nemo labore hic. Asperiores eveniet facilis excepturi consequuntur nesciunt laudantium harum voluptate totam corrupti odio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci harum maiores non corporis aliquam minus, repudiandae, sapiente accusamus autem ad excepturi vitae quaerat quo perspiciatis facere tempora maxime facilis.
                        </Text>
                        <Text
                        variant="Paragraph"
                        sx={styleText}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium inventore et aliquid! Fugiat adipisci quis reiciendis. Facere beatae rerum ratione ea! Vel nemo officiis sint, dolore molestiae error libero?
                        </Text>
                        <Heading
                        variant="PrimaryTitle"
                        sx={styleHeading}
                        >
                            Importância
                        </Heading>
                        <Text 
                        variant="Paragraph"
                        sx={styleText}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem autem porro aperiam enim natus, nemo labore hic. Asperiores eveniet facilis excepturi consequuntur nesciunt laudantium harum voluptate totam corrupti odio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci harum maiores non corporis aliquam minus, repudiandae, sapiente accusamus autem ad excepturi vitae quaerat quo perspiciatis facere tempora maxime facilis.
                        </Text>
                        <Text
                        variant="Paragraph"
                        sx={styleText}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium inventore et aliquid! Fugiat adipisci quis reiciendis. Facere beatae rerum ratione ea! Vel nemo officiis sint, dolore molestiae error libero?
                        </Text>
                    </Flex>
                    {
                    isImage && <Image w="lg" borderRadius="2xl" objectFit="cover" src={isImageSrc} alt="Imagem de fundo sobre DNA" />
                    }
                </Flex>
                <Heading
                p="50px"
                textAlign="center"
                variant="PrimaryTitle"
                fontWeight= '275'
                alignItems= 'justify-content'
                bgGradient= 'linear(to-r, #0D066780, #19BFCD80)'
                bgClip= 'text'
                
                >Criadores</Heading>
                <BiographyFatorRh title="Karl Landsteiner" isImageSrc="../public/img/KarlLandsteiner.jpg" isRowReverse={true}/>
                <br />
                <BiographyFatorRh title="Alexander S. Wiener" isImageSrc="../public/img/Wiener.png" isRowReverse={true}/>
            </Box>
            <TableSection/>
            <ExamFactorRh/>
            
        </>
       
    );
}


