import { Flex ,Text, Heading, Box, useBreakpointValue, Image } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import BiographyFatorRh  from './BiographyFatorRh';
import { TableSection } from './TableSection'
import { ExamFactorRh } from './ExamFactorRh';


export const FatorRh = ({
    isRowReverse = false, 
    isImage = true,
    isImageSrc = '../public/img/DNA.png',
    backgroundImage = '../public/img/background4.png'
}) => {

    const flexDirection = useBreakpointValue({ base: "column", sm: "column", md: isRowReverse?'row-reverse':'row' });
    const contentWidth = useBreakpointValue({  base: "100%",  sm: "100%", md: '50%'});
    const flexAlignContent = useBreakpointValue({  base: "center",  sm: "center", md: ''});
    
    const styleText = {
        fontSize: '17px',
        fontWeight: '275',
        lineHeight: '25.5px',
        alignItems: 'justify-content'
    }
    const styleHeading = {
        fontSize: '40px',
        textAlign: 'right',
        fontWeight: '275',
        alignItems: 'justify-content',
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
                    <Box
                    >
                        {isImage && (
                            <Image
                                w="600px"
                                height="877.46px"
                                borderRadius="2xl"
                                objectFit="cover"
                                src={isImageSrc}
                                alt="Estatua de Mendel"
                            />
                        )}
                    </Box>
                    <Flex 
                    direction="column" 
                    justifyContent="flex-start" 
                    h="100%"
                    w="100%" 
                    maxW={contentWidth} 
                    alignItems={flexAlignContent} 
                    >
                        <Box>
                            <Heading variant="PrimaryTitle" sx={styleHeading}>O que é</Heading>
                            <Text variant="Paragraph" sx={styleText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel distinctio saepe a earum, magnam qui perspiciatis eveniet velit molestias, nemo quam odio animi quasi atque! Illum sed aliquid facere.</Text>
                        
                            
                            <Heading variant="PrimaryTitle" sx={styleHeading}>Importância</Heading>
                            <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel distinctio saepe a earum, magnam qui perspiciatis eveniet velit molestias, nemo quam odio animi quasi atque! Illum sed aliquid facere.</Text>
                        
                            <Text variant="Paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quidem, debitis quos impedit reprehenderit nam quod distinctio rerum veniam quam alias repellendus ut vero quo. Odit neque saepe libero a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores animi sit, repellendus aliquam ipsum rem veritatis voluptas deleniti, unde aspernatur sequi asperiores numquam et ab recusandae voluptatum porro ea hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem obcaecati assumenda. A libero vitae ullam corporis? Incidunt nam ea suscipit facere enim quaerat nesciunt sint. Nisi similique hic aliquid.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <BiographyFatorRh title="Karl Landsteiner" isImageSrc="../public/img/KarlLandsteiner.jpg" isRowReverse={false}/>
            <BiographyFatorRh title="Alexander Solomon Wiener" isImageSrc="../public/img/Wiener.png" isRowReverse={false}/>
            <TableSection/>
            <ExamFactorRh/>
            
        </>
       
    );
}


