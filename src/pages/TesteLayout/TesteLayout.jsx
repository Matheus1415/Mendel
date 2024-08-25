import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';
import { LayoutIntroduction } from '../../layout/LayoutIntroduction';
import { CiTextAlignCenter } from 'react-icons/ci';
export const TesteLayout = () =>{
    return(
        <>
            <LayoutIntroduction query="FUNDAMENTOS"> INTRODUÇÃO SOBREFUNDAMENTOS </LayoutIntroduction>
            <LayoutBaseModify
                title='Ola mundo'
                isImage
                isImageSrc="/Gregor_Mendel.jpg"
            >

                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Text variant="Paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti? Eius in quod nostrum quibusdam illo rerum sapiente dicta quisquam eligendi, iure quasi ducimus quia non, fugiat assumenda accusantium aliquid.</Text>
                <Button variant="readMore">Ola mundo</Button>
            </LayoutBaseModify>
        </>
    )
}