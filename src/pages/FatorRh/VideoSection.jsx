import { Flex, Button, Box, useBreakpointValue } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from 'react';
import { VideoCard } from './VideoCard';

export function VideoSection({ objectJson }) {
    const [index, setIndex] = useState(0);
    const boxW = useBreakpointValue({base: '100%', sm: '100%', m: '724px', lg:'1140px'})

    const endOfTheArray = (objectJson.length * 369) - 1107;

    function showCards() {
        return objectJson.map((value) => (
            <VideoCard 
                key={value.title} 
                title={value.title} 
                description={value.description} 
                link={value.link} 
                indexTransition={index}
                img={value.image}
            />
        ));
    }

    function moveToLeft() {
        setIndex((prevIndex) => prevIndex < 0 ? endOfTheArray : prevIndex - 369);
    }

    function moveToRight() {
        setIndex((prevIndex) => prevIndex >= endOfTheArray ? 0 : prevIndex + 369);
    }

    return (
        <Flex 
            direction={["column", "row"]} 
            justifyContent='center' 
            alignItems='center' 
            gap='20px'
            p={["10px", "20px"]}
        >
            <Button 
                onClick={moveToLeft} 
                bg='transparent' 
                _hover={{}} 
                _active={{}} 
                display={["none", "block"]} 
            >          
                <HiChevronLeft 
                    size={["24px", "37px"]}
                    color="#19BFCD80"
                />
            </Button>
            <Box 
                display={['column', 'flex']}
                gridTemplateColumns="repeat(2, 342px)"
                flexDirection={["column", "row"]}
                w={boxW} 
                overflow='hidden'
                gap="27px" 
                p={["5px", "0"]} 
            >
                {showCards()}
            </Box>
            <Button 
                onClick={moveToRight} 
                bg='transparent' 
                _hover={{}} 
                _active={{}} 
                display={["none", "block"]} 
            >   
                <HiChevronRight 
                    size={["24px", "37px"]} 
                    color="#19BFCD80"
                />
            </Button>
        </Flex>
    );
}
