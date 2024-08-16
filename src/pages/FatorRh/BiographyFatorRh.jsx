import {Heading, Text, Image, Flex, Box} from '@chakra-ui/react';
import { LayoutBaseModify } from '../../layout/LayoutBaseModify';


const BiographyFatorRh = () => {
   

    return(
        <LayoutBaseModify
        isRowReverse={false}
        isImage={true}
        isImageSrc="../public/img/KarlLandsteiner.jpg"
        >
                <Flex direction="row" align="center" justify="space-between" gap={6}>
                    <Box flex="1" mr="5">
                        <Heading variant="PrimaryTitle">Karl Landsteiner </Heading>
                        <Text variant="Paragraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eum delectus fugiat quia porro rerum ut quas dolores esse necessitatibus sunt accusantium quisquam repellendus sit velit assumenda, blanditiis quo ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga totam tenetur dolorem explicabo nemo, iusto earum odit aperiam dolorum aut praesentium accusantium deleniti temporibus eaque quo, similique rerum atque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id ut aspernatur doloremque aperiam iure excepturi quo sit repudiandae commodi pariatur ab, illum est tenetur fugit reiciendis ratione eligendi repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid est, suscipit quod, corporis a praesentium, sed mollitia id corrupti hic quam. Labore nihil accusamus nulla provident atque iusto eius facere? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, minus error. Praesentium tenetur ut, saepe esse eos ipsa labore, ipsum explicabo quae soluta amet cumque aperiam suscipit optio perferendis corporis.
                        </Text>
                    </Box>
                </Flex>
        </LayoutBaseModify>
    )
}

export default BiographyFatorRh;