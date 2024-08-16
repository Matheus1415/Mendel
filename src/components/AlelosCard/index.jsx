import React from 'react';
import { Box, Heading, Image, Text, UnorderedList, ListItem, Stack } from '@chakra-ui/react'; // Chakra UI

export const AlelosCard = ({ title, subTitle, imageSrc, imageAlt, listItems, headingFontSize, textFontSize, height, width, top, left }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"2rem"}  // Espaçamento entre elementos
       // Esquerda personalizável
            opacity={"0.8"}      // Ajuste de opacidade (0 a 1)
            width={width}
        >
        <Stack gap="0">
            <Heading color="Primary" variant={"PrimaryTitle"} fontSize={headingFontSize}>
                {title}
            </Heading>
            {subTitle && (
                <Text 
                    fontSize="lg" 
                    color="Primary" 
                    textAlign="center" 
                >
                    {subTitle}
                </Text>
            )}
            </Stack>
            <Image src={imageSrc} alt={imageAlt} />
            <UnorderedList textAlign={"justify"} color={"Primary"} fontSize={textFontSize} fontWeight={"normal"}>
                {listItems.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};
