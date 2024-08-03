import React, { useState } from 'react';
import { Box, Image, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaInstagram, FaGithub } from "react-icons/fa";

const SlideShow = ({ members }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    onOpen();
  };

  return (
    <Flex 
        bgImage="url('/pgHome/Background_s/4_Servicos.png')" 
        w="100%" 
        bgPosition="left center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH={400}
        align="center"
        justifyContent="center"
        p={10} 
    >
        <Swiper spaceBetween={10} slidesPerView={3}>
            {members.map((member, index) => (
            <SwiperSlide key={index}>
                <Box bg="#06384485" p={4} borderRadius="md"  maxW={370}>
                <Flex direction="column" align="center" onClick={() => handleMemberClick(member)} cursor="pointer">
                    <Image src={member.photo} alt={member.name} boxSize="150px" borderRadius={20} />
                    <Text mt={2} color="white" fontSize={20}>{member.name}</Text>
                </Flex>
                </Box>
            </SwiperSlide>
            ))}
      </Swiper>

      {selectedMember && (
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg="#007A87" color="white">
            <ModalHeader>{selectedMember.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedMember.photo} alt={selectedMember.name} boxSize="150px" borderRadius="20" mx="auto" />
              <Text mt={4} align="center">{selectedMember.description}</Text>
              <Flex mt={4} justifyContent="space-around">
                <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={50} />
                </a>
                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={50} />
                </a>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default SlideShow;
