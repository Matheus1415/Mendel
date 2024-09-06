import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BlogCardSection } from "./BlogCardSection";
import { VideoSection } from "./VideoSection";

export function VideosAndBlogs() {
    const testeCarousel = [];
    
    // Feito apenas para teste
    for (let i = 0; i < 10; i++) {
        testeCarousel.push({
            title: "genetica blog " + i,
            description: "lorem ioaoaooooaooa oaaooo aoo ooao oaoao ao",
            link: "http://google.com",
        });
    }

    return (
        <Box
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage="url(assets/6_Links.png)"
            p={["20px", "32px"]} 
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap={6}
                pt={["10px", "24px"]}
                pb={["20px", "24px"]}
                maxW="1200px" 
                mx="auto" 
            >
                <Heading 
                    variant="PrimaryTitle"
                    mb={["6", "8"]}
                    fontSize={["24px", "40px"]} 
                    textAlign="center"
                >
                    COLETÂNEA DE VIDEOAULAS E BLOGS
                </Heading>

                <VideoSection objectJson={testeCarousel} />

                <BlogCardSection objectJson={testeCarousel} />

                <Flex 
                    width="100%"
                    justifyContent="center" 
                    gap={4}
                    mt={["8", "12"]}
                    direction={["column", "row"]} 
                >
                    <Button variant="nextPage" width={["100%", "auto"]}>
                        Ir para a atividade
                    </Button>
                    <Button variant="nextPage" width={["100%", "auto"]}>
                        Ir para a próxima página
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
