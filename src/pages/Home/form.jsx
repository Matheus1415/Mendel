import { Flex, Box, Text, useBreakpointValue, Button} from "@chakra-ui/react";
import FormHome from "../../components/FormHome";
import { FormProvider } from "../../contexts/formContext";
import FormHomeComponent from "../../components/FormHome";

export const Form = () => {
    const flexDirection = useBreakpointValue({ sm: "column", md: "row" });
    const HContato = useBreakpointValue({ sm: "100%", mb: "900px" });
    const HContatoContainer = useBreakpointValue({ sm: "900px", mb: "600px" });
    const WContato = useBreakpointValue({ sm: "100%", mb: "50%" });


    return(
        <Flex
            bgImage="url('/pgHome/Background_s/6_Contato.png')" 
            w="100%" 
            bgPosition="left center"
            bgRepeat="no-repeat"
            bgSize="cover"
            p={10}
            h={HContato}
            maxH={1000}
            align="center"
            justify="center"
        >
            <Flex
                bg="#00000034"
                p={10}
                width="100%"
                maxW={2000}
                h={HContatoContainer}
                borderRadius={20}
                gap={10}
                direction={flexDirection}
                maxH={700}
            >
                <Box w="100%" maxW={WContato} >
                    <FormProvider>
                        <FormHomeComponent /> 
                    </FormProvider>
                </Box>
                <Flex 
                    bgImage="url('/pgHome/6_Contato.png')" 
                    w="100%" 
                    maxW={WContato}
                    bgPosition="left center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    p={10}
                    color="white"
                    fontSize={18}
                    align="flex-end"
                    borderRadius={10}
                    maxH={520}
                >
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus ex asperiores alias officia excepturi distinctio adipisci quis repellat. Explicabo voluptatibus rerum et a. Nemo neque voluptas similique beatae dolore?</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}