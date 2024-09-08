import React from "react";
import { Button, Image } from "@chakra-ui/react";

const CustomButton = ({ imageSrc, altText, children, ...props }) => {
    return (
        <Button
            variant="readMore"
            w="100%"
            background="transparent"
            border="1px solid #19BFCD80"
            {...props}
        >
            {imageSrc && <Image src={imageSrc} alt={altText} mr="1rem" />}
            {children}
        </Button>
    );
};

export default CustomButton;
