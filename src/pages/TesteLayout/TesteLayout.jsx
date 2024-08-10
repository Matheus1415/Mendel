import { Button, Heading, Text } from '@chakra-ui/react';
import { LayoutS } from '../../layout/LayoutS';
export const TesteLayout = () =>{
    return(
        <LayoutS
            title='Biografia'
            titleStyle='SecondTitle'
            isRowReverse
            isImage
            isImageSrc="assets/estatuaMendel.png"
        >
           <Text variant="Paragraph" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem corporis ipsa eveniet maxime inventore voluptates deserunt distinctio tempore, veritatis et aspernatur architecto porro. Aspernatur totam corporis eveniet esse in.
           </Text>

           <Heading variant="PrimaryTitle">Ola mundo</Heading>

           <Text variant="Paragraph" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem corporis ipsa eveniet maxime inventore voluptates deserunt distinctio tempore, veritatis et aspernatur architecto porro. Aspernatur totam corporis eveniet esse in.
           </Text>
           <Text variant="Paragraph" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem corporis ipsa eveniet maxime inventore voluptates deserunt distinctio tempore, veritatis et aspernatur architecto porro. Aspernatur totam corporis eveniet esse in.
           </Text>
           <Text variant="Paragraph" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem corporis ipsa eveniet maxime inventore voluptates deserunt distinctio tempore, veritatis et aspernatur architecto porro. Aspernatur totam corporis eveniet esse in.
           </Text>
           <Button variant="readMore">Saiba mais..</Button>
        </LayoutS>
    )
}