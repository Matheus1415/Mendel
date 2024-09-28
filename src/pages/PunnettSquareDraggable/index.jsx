import { Box, Flex } from "@chakra-ui/react";
import PunnettSquareDraggable from "../../components/Punnett/PunerDraggable";
import data from "../../data/PunnerSquareDraggable.json";
import { useParams } from "react-router-dom";

export const PunnettSquareDraggablePage = () => {
    const { id } = useParams();  

    // Filtra os dados com base no id
    const filteredData = data.find(item => item.id === parseInt(id, 10));

    return (
        <Flex 
            justify='center' 
            align='center'  
            bg="red.500"
            w="100vw"
            maxW="100%"
            minH="1100px"
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
                minH="1100px"
                bg="#02161fc3"
                justify='center' 
                align='flex-start'
                p={10}  
            >    
                <Flex
                    border='4px'
                    borderColor='#ebebeb7e'                 
                    width="90%"
                    minH="400px"
                    bg="#0638443e" 
                    backdropFilter="blur(23px)" 
                    borderRadius="15px" 
                    justify='center' 
                    align='flex-start'   
                    p={10}      
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
