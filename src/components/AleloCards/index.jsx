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
            opacity="0.9"
            width={{ base: "full", sm: "80%", md: "60%", lg: "40%" }} // Responsive width
            mx="auto" // Center the box horizontally
            >
            <Stack spacing={2} textAlign="center">
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
                <Image src={imageSrc} alt={imageAlt} borderRadius="md" /> // Optional: Rounded corners for the image
            )}
            <UnorderedList textAlign="left" color="Primary" fontSize="1.2rem" fontWeight="normal">
                {listItems.map((item, index) => (
                    <ListItem key={index} mb="0.5rem"> {/* Add bottom margin for spacing between list items */}
                        {item}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};
