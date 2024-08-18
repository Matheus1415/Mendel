import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Welcome } from "./welcome";
import { DiveUiverse } from "./diveUiverse";
import { Learn } from "./learn";
import { Carousel } from "./carousel";
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


