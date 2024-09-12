import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BlogCardSection } from "./BlogCardSection";
import { VideoSection } from "./VideoSection";
import BlogsMendel from "../../data/BlogsMendel.json"
import VideoMendel from "../../data/VideoMendel.json"
import { useNavigate } from "react-router-dom";
import { PreviousNextPageNavigator } from "../../components/PreviousNextPageNavigator";

export function VideosAndBlogs () {
    const navigate = useNavigate()
    const testeCarousel = []
    
    //feito apenas para teste
    for (let i = 0; i < 10; i++) {
        testeCarousel.push({
            title: "genetica blog " + i,
            description: "lorem ioaoaooooaooa oaaooo aoo ooao oaoao ao",
            link: "http://google.com",
        })
    }
 
    return(
        <>
            <Box backgroundRepeat="repeat" backgroundSize="cover" backgroundPosition="center" backgroundImage="url(assets/6_Links.png)">
                <Flex px={32} pt={10} pb={24} direction='column' justifyContent="center" alignItems="center" gap={6} >
                    <Heading variant="PrimaryTitle" mb={8}>
                        COLETÂNEA DE VIDEOAULAS E BLOGS
                    </Heading>

                    <VideoSection objectJson={VideoMendel}></VideoSection>

                    <BlogCardSection objectJson={BlogsMendel}></BlogCardSection>

                    <Flex width="100%" justifyContent="end" gap={4} mt={12}>
                        <PreviousNextPageNavigator
                            nextPageRoute={"/leis-de-mendel"}
                        />
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}