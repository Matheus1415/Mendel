import { Box, Button, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { LayoutS } from "../../layout/LayoutS";

export function TesteLayout(){
    return(
        <LayoutS>
                                <Box>
                        <Heading variant="PrimaryTitle">
                            Importância para biologia
                        </Heading>
                        <Text variant="p" fontSize={16} lineHeight={8} fontWeight={300} color="Primary" textAlign="justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nisi ratione, ea eius, reiciendis voluptatum debitis facere asperiores excepturi fuga qui necessitatibus! Illum sed debitis exercitationem culpa blanditiis fugiat sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </Text>
                    </Box>
                    
                    <Box>
                        <Heading variant="PrimaryTitle">
                            Importância para biologia
                        </Heading>
                        <UnorderedList spacing={4} mb={9}>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">lorem ipsum sin dolor amet Lorem ipsum dolor sit amet consectetur adipisicing elit. In, beatae, harum at voluptate fugiat nemo alias laudantium o reiciendis voluptatum inventore numquam iusto, eum qui possimus qua</ListItem>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">lorem ipsum sin dolor amet Lorem ipsum dolor sit amet consectetur adipisicing elit. In, beatae, harum at voluptate fugiat nemo alias laudantium o reiciendis voluptatum inventore numquam iusto, eum qui possimus qua</ListItem>
                            <ListItem fontSize={16} lineHeight={8} fontWeight="light" textAlign="justify" color="Primary">lorem ipsum sin dolor amet Lorem ipsum dolor sit amet consectetur adipisicing elit. In, beatae, harum at voluptate fugiat nemo alias laudantium o reiciendis voluptatum inventore numquam iusto, eum qui possimus qua</ListItem>
                        </UnorderedList>
                        <Button variant="readMore" _hover={{background:'linear-gradient(to left, #007A87 0%, #01414C) 100%'}} color="Primary" lineHeight={7} fontSize={20} px={9} py={0.5} sx={{ background:'linear-gradient(to right, #007A87 0%, #01414C) 100%'}}>
                            Conheça as leis de mendel
                        </Button>
                    </Box>
        </LayoutS>
    )
}