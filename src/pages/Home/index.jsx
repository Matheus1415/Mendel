import { Flex, Box, Text, useBreakpointValue, Button, Image } from "@chakra-ui/react";
import { MenuMendel } from "../../components/Menu";
import VLibras from "@djpfs/react-vlibras";
import { Welcome } from "./welcome";
import { DiveUiverse } from "./diveUiverse";
import { Learn } from "./learn";
import { Carousel } from "./carousel";
import { Action } from "./acation";
import { Form } from "./form";
import { Footer } from "./footer";

export const Home = () => {
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });


    return (
        <>
            <Flex w="100%" bg="#02161F">    
                <VLibras />
                <Flex direction="column" w="100%">
                    <MenuMendel />
                    <Welcome/>
                    <DiveUiverse/>                   
                    <Learn/>
                    <Carousel/>
                    <Action/>
                    <Form/>
                    <Footer/>                 
                </Flex>
            </Flex>
        </>
    );
};

export default Home;
