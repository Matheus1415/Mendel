import { 
    Flex, 
    Heading, 
    Image, 
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button, } from '@chakra-ui/react';
import React from 'react';

export const Informacao = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Flex
                direction="row"
                align="start"
                justify="center"
                bg="gray.100"
                py="10"
                px="20"
                gap={20}
                rounded="lg"
                shadow="md"
                minH={400}
                bgColor="red"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundImage="url('/assets/bgFundamentos/bgGenoPheno.jpg')"
            >
                <Flex direction="column" maxW="50%">
                    <Heading variant="SecondTitle">
                        História de projeto
                    </Heading>
                    <Text variant="Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla at! Qui quisquam modi amet perferendis, nostrum aspernatur consequuntur quos omnis natus iusto, sed incidunt est nobis repellendus obcaecati aut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci esse cupiditate sint consequatur quasi quae vel architecto voluptatibus voluptatem. Voluptatum dolorem dolorum alias, minima maxime vero nobis ipsam voluptas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo at, fuga repellendus natus veritatis harum minus nesciunt. Dolores voluptatum assumenda expedita mollitia possimus aliquid earum? Quaerat omnis nam at corrupti.
                    </Text>
                </Flex>
                <Flex maxW="50%">
                    <Image src="/img/Imagem1.png"/>
                </Flex>
            </Flex>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        
        </>
    );
};
