import { Flex, Button, Box } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BlogCard } from './BlogCard';
import { useState } from 'react';

export function BlogCardSection({ objectJson }) {
    const [index, setIndex] = useState(0);

    const endOfTheArray = (objectJson.length * 543) - 1080;

    function showCards() {
        return objectJson.map((value) => (
            <BlogCard 
                title={value.title} 
                description={value.description} 
                link={value.link} 
                indexTransition={index}
            />
        ));
    }

    function moveToLeft() {
        setIndex((prevIndex) => prevIndex === 0 ? endOfTheArray : prevIndex - 543);
    }

    function moveToRight() {
        setIndex((prevIndex) => prevIndex >= endOfTheArray ? 0 : prevIndex + 543);
    }

    return (
        <Flex 
            direction={["column", "row"]} // Coluna em telas pequenas, linha em telas maiores
            justifyContent='center' 
            alignItems='center' 
            gap='20px'
            p={["10px", "20px"]} // Padding responsivo
        >
            <Button 
                onClick={moveToLeft} 
                bg='transparent' 
                _hover={{}} 
                _active={{}} 
                display={["none", "block"]} // Botão oculto em telas pequenas
            >          
                <HiChevronLeft 
                    size={["24px", "37px"]} // Tamanho do ícone responsivo
                    color="#19BFCD80"
                />
            </Button>
            <Box 
                display='flex' 
                flexDirection={["column", "row"]}
                w={["100%", "1080px"]} // Largura responsiva
                overflow='hidden' 
                gap='20px'
                p={["5px", "0"]} // Padding responsivo
            >
                {showCards()}
            </Box>
            <Button 
                onClick={moveToRight} 
                bg='transparent' 
                _hover={{}} 
                _active={{}} 
                display={["none", "block"]} // Botão oculto em telas pequenas
            >   
                <HiChevronRight 
                    size={["24px", "37px"]} // Tamanho do ícone responsivo
                    color="#19BFCD80"
                />
            </Button>
        </Flex>
    );
}