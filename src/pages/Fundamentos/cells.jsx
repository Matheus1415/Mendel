import React from 'react';
import { Box, Flex, Heading, Image, Text, UnorderedList, ListItem, Button, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';

export const Cells = () => {
    return (

    <Box as='section' bgImage="/assets/bgFundamentos/bgCells.jpg" bgRepeat='no-repeat' bgPosition="center" bgSize="cover">
    
    <Heading 
      variant="PrimaryTitle"
      textAlign="center"
      mt="6.75rem"
      mb="4rem"
    >
        CATEGORIAS DAS CÉLULAS
    </Heading>
    <Flex justifyContent="space-around"
    direction={{base:"column", lg:"row"}} 
    alignItems={{base:'center'}}
    >
        {/* Box for Diploid Cell */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2.25rem"
          maxWidth="25.5rem"
        >
            <Heading variant="SecondTitle">
                CÉLULA DIPLOIDE
            </Heading>
            <Image src='/assets/diploid-cell.png' alt="Célula Diploide" />
            <UnorderedList textAlign="justify" color="Primary" fontSize="17px" fontWeight="275" p={{base:"1rem"}}>
                <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
            </UnorderedList>
        </Box>

        {/* Box for Haploid Cell */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2.25rem"
          maxWidth="25.5rem"
        >
            <Heading variant="SecondTitle">
                CÉLULA HAPLOIDE
            </Heading>
            <Image src='/assets/haploid-cell.png' alt="Célula Haploide" />
            <UnorderedList textAlign="justify" color='Primary' fontSize="17px" fontWeight="275" p={{base:"1rem"}}>
                <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</ListItem>
                <ListItem>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</ListItem>
                <ListItem>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItem>
            </UnorderedList>
        </Box>
    </Flex>
</Box>

)}