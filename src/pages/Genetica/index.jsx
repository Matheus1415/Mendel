import { Box, Heading, Text } from "@chakra-ui/react"
import { LayoutIntroduction } from "../../layout/LayoutIntroduction"
import { LayoutBaseModify } from "../../layout/LayoutBaseModify"

export const Genetica = () => {
    return (
        <>
            <LayoutIntroduction
                query="GENÉTICA"
            >
                INTRODUÇÃO SOBRE GENÉTICA
            </LayoutIntroduction>
            <LayoutBaseModify
                isRowReverse
                backgroundImage="public/assets/bg_genetica.jpg"
            >
                <Box
                    as="section"
                    maxWidth={{base:'55rem', lg:'35rem'}}
                    marginTop='6rem'
                    p={{base:"1rem"}}
                >
                    <Heading
                        variant="PrimaryTitle"
                        textAlign="end"
                        marginBottom="4rem"
                    >
                        O QUE É GENÉTICA
                    </Heading>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.
                    </Text>
                </Box>
                <Box
                    as="section"
                    maxWidth={{base:'55rem', lg:'35rem'}}
                    marginTop='5rem'
                    p={{base:"1rem"}}
                >
                    <Heading
                        variant="PrimaryTitle"
                        textAlign="end"
                        marginBottom="4rem"
                    >
                        HISTÓRIA
                    </Heading>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                    <Text
                        variant="Paragraph"
                        marginTop="4rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Box>
                <Box
                    as="section"
                    maxWidth={{base:'55rem', lg:'35rem'}}
                    marginTop='6rem'
                    p={{base:"1rem"}}
                >
                    <Heading
                        variant="PrimaryTitle"
                        textAlign="end"
                        marginBottom="4rem"
                    >
                        IMPORTÂNCIA
                    </Heading>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.
                    </Text>
                </Box>
                <Box
                    as="section"
                    maxWidth={{base:'55rem', lg:'35rem'}}
                    marginTop='6rem'
                    p={{base:"1rem"}}
                >
                    <Heading
                        variant="PrimaryTitle"
                        textAlign="end"
                        marginBottom="4rem"
                    >
                        IMPORTÂNCIA
                    </Heading>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.
                    </Text>
                </Box>
                <Box
                    as="section"
                    maxWidth={{base:'55rem', lg:'35rem'}}
                    marginTop='6rem'
                    p={{base:"1rem"}}
                >
                    <Heading
                        variant="PrimaryTitle"
                        textAlign="end"
                        marginBottom="4rem"
                    >
                        IMPORTÂNCIA
                    </Heading>
                    <Text
                        variant="Paragraph"
                        marginTop="2rem"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.
                    </Text>
                </Box>
            </LayoutBaseModify>
            {/* <Flex
                bgImage="url(assets/bg_genetica.png)"
                // bgRepeat='no-repeat'
                // bgPosition="center" 
                bgSize="cover"
                justifyContent="end"
            >
                <Box
                    width="50%"
                >
                </Box>
            </Flex> */}
        </>
    )
}