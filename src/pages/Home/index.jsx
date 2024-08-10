import { Flex } from "@chakra-ui/react";
import { Welcome } from "./welcome";
import { DiveUiverse } from "./diveUiverse";
import { Learn } from "./learn";
import { Carousel } from "./carousel";
import { Action } from "./acation";
import { Form } from "./form";

export const Home = () => {
    return (
        <>
            <Flex w="100%" bg="#02161F">    
                <Flex direction="column" w="100%">
                    <Welcome/>
                    <DiveUiverse/>                   
                    <Learn/>
                    <Carousel/>
                    <Action/>
                    <Form/>                
                </Flex>
            </Flex>
        </>
    );
};

export default Home;
