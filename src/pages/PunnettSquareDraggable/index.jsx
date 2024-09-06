import { Box, Flex } from "@chakra-ui/react";
import PunnettSquareDraggable from "../../components/Punnett/PunerDraggable";
import data from "../../data/PunnerSquareDraggable.json";
import { useParams } from "react-router-dom";

export const PunnettSquareDraggablePage = () => {
    const { id } = useParams();  // Obtém o id da URL

    // Filtra os dados com base no id
    const filteredData = data.find(item => item.id === parseInt(id, 10));

    return (
        <Flex 
            justify='center' 
            align='center' 
            bg="red.500"
            w="100vw"
            maxW="100%"
            minH="1200px"
            backgroundRepeat="no-repeat" 
            backgroundSize="cover" 
            backgroundPosition="center" 
            backgroundImage="/activity_background.png"
        >
            <Flex
                position="absolute"
                width="100%"
                top={0}
                left={0}
                minH="1200px"
                bg="#02161fc3"
                justify='center' 
                align='center'     
            >    
                <Flex
                    border='4px'
                    borderColor='#ebebeb7e'                 
                    width="90%"
                    minH="800px"
                    bg="#0638443e" 
                    backdropFilter="blur(23px)" 
                    borderRadius="15px" 
                    p="4"
                    justify='center' 
                    align='center'         
                >
                    {filteredData ? (
                        <PunnettSquareDraggable data={filteredData} />
                    ) : (
                        <Box>No data found for the given ID.</Box>
                    )}
                </Flex>
           </Flex>
        </Flex>
    );
};
