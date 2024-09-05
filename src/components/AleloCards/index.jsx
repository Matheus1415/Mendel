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
}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1.5rem"
            width="70%"
            opacity="0.9"
            mx="auto"
        >
            <Stack spacing={0} textAlign="center">
                <Heading
                    color="Primary"
                    variant="PrimaryTitle"
                    fontSize={headingFontSize}
                    mb="0.25rem"
                >
                    {title}
                </Heading>
                {subTitle && (
                    <Text
                        fontSize={textFontSize}
                        margin="0"
                        color="Primary"
                        textAlign="center"
                    >
                        {subTitle}
                    </Text>
                )}
            </Stack>
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    borderRadius="md"
                />
            )}
            <UnorderedList
                textAlign="left"
                color="Primary"
                fontSize="1.2rem"
                fontWeight="normal"
            >
                {listItems.map((item, index) => (
                    <ListItem
                        key={index}
                        mb="0.5rem"
                    >
                        {item}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};
export default AleloCards;