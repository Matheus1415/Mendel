import React from 'react';
import { Box, Heading, Image, Text, UnorderedList, ListItem, Stack } from '@chakra-ui/react';

export const AleloCards = ({
    title,
    subTitle,
    imageSrc,
    imageAlt,
    listItems,
    headingFontSize,
    textFontSize,
    width
}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="2rem"
            opacity="0.8"
            width={width}
            margin="5rem"
        >
            <Stack spacing={2}>
                <Heading color="Primary" variant="PrimaryTitle" fontSize={headingFontSize}>
                    {title}
                </Heading>
                {subTitle && (
                    <Text 
                        fontSize={textFontSize}
                        color="Primary"
                        textAlign="center"
                    >
                        {subTitle}
                    </Text>
                )}
            </Stack>
            {imageSrc && (
                <Image src={imageSrc} alt={imageAlt} />
            )}
            <UnorderedList textAlign="justify" color="Primary" fontSize="1.5rem" fontWeight="normal">
                {listItems.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};
