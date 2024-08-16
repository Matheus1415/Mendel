import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { FormProvider } from "../../contexts/formContext";
import FormHomeComponent from "../../components/FormHome";

export const Form = () => {
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const HContato = useBreakpointValue({ base: "auto", md: "900px" });
    const HContatoContainer = useBreakpointValue({ base: "auto", md: "600px" });
    const WContato = useBreakpointValue({ base: "100%", md: "50%" });
    const displayImageSection = useBreakpointValue({ base: "none", md: "flex" });

    return (
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
                <Box w="100%" maxW={WContato}>
                    <FormProvider>
                        <FormHomeComponent /> 
                    </FormProvider>
                </Box>
                <Flex 
                    display={displayImageSection}
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
                    <Text>
                        Entre em contato conosco para obter mais informações sobre nossos serviços e soluções. Estamos aqui para ajudar com qualquer dúvida que você possa ter e oferecer suporte personalizado para atender às suas necessidades. Nossa equipe está comprometida em fornecer a melhor experiência possível e garantir que você tenha tudo o que precisa para alcançar seus objetivos.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
