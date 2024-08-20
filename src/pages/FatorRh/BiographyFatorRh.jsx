import {Heading, Text, Flex, Box, useBreakpointValue, Image} from '@chakra-ui/react';

const BiographyFatorRh = ({
    title,
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
            {isImage && <Image w="lg" borderRadius="2xl" objectFit="cover" src={isImageSrc} alt="Estatua de Mendel" />
                    }
                <Flex
                direction="column" 
                justifyContent="flex-start" 
                h="100%" w="100%" 
                maxW={contentWidth} 
                alignItems={flexAlignContent}
                >
                    <Box>
                        <Heading variant="SecondTitle"> {title} </Heading>
                        <Text variant="Paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
                        </Text>
                        <Text variant="Paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
                        </Text>
                        <Text variant="Paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
                        </Text>
                        <Text variant="Paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
                        </Text>
                    </Box>    
                </Flex>
            </Flex>
        </Box>
             
       
       
    );
}

export default BiographyFatorRh;