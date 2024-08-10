import { Box, Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

export const LayoutBaseModify = ({children, titleSyleOverrides = {}, title = '', titleVariant = 'PrimaryTitle', isImage = false, isImageSrc, isRowReverse = false}) => {
    const flexDirection = useBreakpointValue({ base: "column", sm: "column", md: isRowReverse?'row-reverse':'row'});
    const contentWidth = useBreakpointValue({  base: "100%",  sm: "100%", md: '50%'});
    const felxAlignContent = useBreakpointValue({  base: "center",  sm: "center", md: ''});
    
    const newC =  children.props.children[0]
    let bg ='blue'
    const newC2 =  {...children.props, bg}
    console.log(newC2);

    return(
        <Box 
        backgroundRepeat="repeat" 
        backgroundSize="cover" 
        backgroundPosition="center" 
        backgroundImage="url(assets/3_Legado.png)">
            <Flex mx="auto" maxW="1300px" p={8} gap={6} direction={flexDirection} justifyContent="space-between">   
                <Flex 
                    direction="column" 
                    justifyContent="flex-start" 
                    h="100%" w="100%" 
                    maxW={contentWidth} 
                    alignItems={felxAlignContent} 
                >
                    <Heading 
                        variant={titleVariant}
                        sx={titleSyleOverrides}                            
                    >{title}</Heading>
                    {children.props.children[0]}
                </Flex>

                {isImage && <Image w="lg" borderRadius="2xl" objectFit="cover" src={isImageSrc} alt="Estatua de Mendel" />
                }
            </Flex>
        </Box>
    )
}