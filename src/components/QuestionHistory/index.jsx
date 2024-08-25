import { Box, Button, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";

export function QuestionHistory({ isImage = true }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            color="white"
            direction="row"
            p={10}
            align="start" 
            justifyContent="center" 
        >
            <Flex mb={4} direction="column" maxW={isImage ? "70%" : "100%"}>
                <Text fontSize={30} mb={10}>16/18</Text>
                <Heading variant="QuestionTile">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus explicabo labore repudiandae nihil?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus explicabo labore repudiandae nihil?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus explicabo labore repudiandae nihil?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus explicabo labore repudiandae nihil?
                </Heading>
                <RadioGroup marginTop={10}>
                    <Stack direction='column'>
                        <Radio value='1' variant="QuestionRadio">First</Radio>
                        <Radio value='2' variant="QuestionRadio">Second</Radio>
                        <Radio value='3' variant="QuestionRadio">Third</Radio>
                    </Stack>
                </RadioGroup>
            </Flex>
            {isImage && (
                <Flex direction="column" w={400} maxW="30%" p={5}>
                    <Box w={100} h={30}></Box>
                    <Image 
                        src="https://via.placeholder.com/400" 
                        alt="Imagem da questão" 
                        boxSize="200px" 
                        mr={4} 
                        cursor="pointer"
                        onClick={onOpen}
                    />
                </Flex>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    backgroundRepeat="repeat" 
                    backgroundSize="cover" 
                    backgroundPosition="center" 
                    backgroundImage="https://via.placeholder.com/800"
                    w="100%"
                    maxW={1200}
                    h={600}
                >
                    <ModalCloseButton />
                </ModalContent>
            </Modal>
        </Flex>
    );
}
