import {Heading, Text, Flex, Box} from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';

const BiographyFatorRh = ({title, isImageSrc, isRowReverse}) => {
   

    return(
        <LayoutBaseModify
        isRowReverse={isRowReverse}
        isImage={true}
        isImageSrc={isImageSrc}
        >
            <Heading variant="SecondTitle"> {title} </Heading>
            <Text variant="Paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
            </Text>
            <Text variant="Paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
            </Text>
            <Text variant="Paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
            </Text>
            <Text variant="Paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum aut hic libero quasi expedita animi temporibus consequuntur! Ducimus libero a provident aperiam, excepturi voluptate, est ad molestias, velit obcaecati facere.
            </Text>
            
             
        </LayoutBaseModify>
       
    );
}

export default BiographyFatorRh;