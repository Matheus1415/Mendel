import { 
    Flex, 
    Box,
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
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
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
                        História do projeto
                    </Heading>
                    <Text variant="Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla at! Qui quisquam modi amet perferendis, nostrum aspernatur consequuntur quos omnis natus iusto, sed incidunt est nobis repellendus obcaecati aut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci esse cupiditate sint consequatur quasi quae vel architecto voluptatibus voluptatem. Voluptatum dolorem dolorum alias, minima maxime vero nobis ipsam voluptas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo at, fuga repellendus natus veritatis harum minus nesciunt. Dolores voluptatum assumenda expedita mollitia possimus aliquid earum? Quaerat omnis nam at corrupti.
                    </Text>
                </Flex>
                <Flex maxW="50%">
                    <Image src="../img/equipe-mendel.jpeg" title='Equipe Mendel' borderRadius='5%' onClick={onOpen}/>
                </Flex>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    color="white"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundImage="url(../img/equipe-mendel.jpeg)"
                    minH={500}
                    minW={600}
                    justifyContent="end"
                    borderRadius={10}
                >
                    <ModalHeader color="white" borderColor='black'>Conheça nossa equipe!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody bg="white" maxH={140}  borderRadius="10px" p={5} color="black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem aut est nulla quas quisquam iste amet temporibus. Cupiditate atque, mollitia accusamus suscipit debitis reprehenderit itaque possimus ad hic facere.
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Flex as='section' justify='center' py="10" px="20" gap='10px'>
                <Flex alignItems='center' maxW='50%'>
                    <Image src='../img/imagem2.png'></Image>
                </Flex>
                <Flex direction='column' maxW='50%'>
                    <Heading variant='SecondTitle'>
                        Metodologia
                    </Heading>
                    <Text variant='Paragraph'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam architecto laboriosam iusto. Exercitationem, dolores voluptatum? Voluptate saepe delectus dolor a, libero nemo unde voluptatem, soluta ipsam assumenda alias, beatae sint?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae maxime consectetur, nemo molestias voluptate quia laudantium vel id hic repellendus eum exercitationem illum, ab velit, officiis fugiat libero? Vitae, provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non adipisci nemo rem voluptate veritatis est atque? Quibusdam architecto, aut labore officia rem, reiciendis ut illo voluptates amet, commodi quam quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat rem consequuntur dignissimos quibusdam amet tempore, blanditiis temporibus, architecto delectus id tenetur ut! Similique voluptate, qui laborum deserunt commodi recusandae.
                    </Text>
                </Flex>
            </Flex>
        </>
    );
};