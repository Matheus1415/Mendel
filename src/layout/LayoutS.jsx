import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export const LayoutS = ({children, titleSyleOverrides = {}, title = '', titleVariant = 'PrimaryTitle', isImage = false, isImageSrc, isRowReverse = false}) => {
    return(
        <Box 
        backgroundRepeat="repeat" 
        backgroundSize="cover" 
        backgroundPosition="center" 
        backgroundImage="url(assets/3_Legado.png)">
            <Flex mx="auto" maxW="1300px" p={8} gap={6} direction={isRowReverse?'row-reverse':'row'} justifyContent="space-between">   
                <Flex direction="column" justifyContent="flex-start" h="100%" w="100%" maxW="50%" >
                    <Heading 
                        variant={titleVariant}
                        sx={titleSyleOverrides}                            
                    >{title}</Heading>
                    {children}
                </Flex>

                {isImage && <Image w="lg" borderRadius="2xl" objectFit="cover" src={isImageSrc} alt="Estatua de Mendel" />
                }
            </Flex>
        </Box>
    )
}