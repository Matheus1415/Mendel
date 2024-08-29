import { Flex } from "@chakra-ui/react";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
import { Welcome } from "./welcome";
import { DiveUiverse } from "./diveUiverse";
import { Learn } from "./learn";
import { Carousel } from "./carousel";
<<<<<<< HEAD
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
=======
import { Form } from "./form";
import { Action } from "./Action";

const MotionFlex = motion(Flex);

export const Home = () => {
    const animationSettings = {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6 },
    };

    return (
        <Flex direction="column" bg="#02161F">
            <MotionFlex {...animationSettings}>
                <Welcome />
            </MotionFlex>
            <MotionFlex {...animationSettings}>
                <DiveUiverse />
            </MotionFlex>
            <MotionFlex {...animationSettings}>
                <Learn />
            </MotionFlex>
            <MotionFlex {...animationSettings}>
                <Carousel />
            </MotionFlex>
            <MotionFlex {...animationSettings}>
                <Action/>
            </MotionFlex>
            <MotionFlex {...animationSettings}>
                <Form />
            </MotionFlex>
        </Flex>
    );
};


>>>>>>> 18f5178787c898b27ba7bcc263f7d07be3779c16
