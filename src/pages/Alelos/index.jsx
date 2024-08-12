import { Text, Heading, Card, CardBody, UnorderedList, Stack, ListItem, SimpleGrid } from "@chakra-ui/react";
import { LayoutIntroduction } from "../../layout/LayoutIntroduction";
import { LayoutBaseModify } from "../../layout/LayoutBaseModify";

export const Alelos = () => {
    return(
        <>
        <LayoutIntroduction query="genética">
            Introdução a genética
        </LayoutIntroduction>
        <LayoutBaseModify>
            <Heading variant='PrimaryTitle'>Genes</Heading>
            <Text variant="Paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illum, facere similique enim animi a quas, obcaecati tempore molestias aut omnis reprehenderit! Cumque quae rem non ducimus vitae! Laboriosam, nulla!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sapiente ex recusandae dolorum nihil quos nisi beatae dolor quo architecto a, accusamus ipsum, fuga aspernatur consequuntur rem, incidunt harum repellat!
            </Text>
            <SimpleGrid columns={[1, 2]} spacing={4}>
                <Card boxShadow='lg' bgColor="">
                    <CardBody>
                        <Stack>
                            <Heading variant="SecondTitle" my='0.5rem'>Alelos</Heading>
                            <UnorderedList spacing='0.5rem' color="white">
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem> 
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
                <Card boxShadow='lg' bgColor="">
                    <CardBody>
                        <Stack>
                            <Heading variant="SecondTitle" my='0.5rem'>Alelos Multiplos</Heading>
                            <UnorderedList spacing='0.5rem' color="white">
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <Heading variant='PrimaryTitle'>Alelo Letal</Heading>
            <Text variant="Paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commodi id assumenda labore. Blanditiis voluptatum error repellendus provident modi.
            </Text>
            <SimpleGrid columns={[1, 2]} spacing={4}>
                <Card boxShadow='lg' bgColor="">
                    <CardBody>
                        <Stack>
                            <Heading variant="SecondTitle" my='0.5rem'>Genes dominante</Heading>
                            <UnorderedList spacing='0.5rem' color="white">
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
                <Card boxShadow='lg' bgColor="">
                    <CardBody>
                        <Stack>
                            <Heading variant="SecondTitle" my='0.5rem'>Genes recessivo</Heading>
                            <UnorderedList spacing='0.5rem' color="white">
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                <ListItem variant="Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam amet quis hic nemo delectus, et exercitationem, sapiente, aliquam labore suscipit laboriosam. Deleniti quisquam voluptatum voluptatem, neque ab incidunt hic?</ListItem>
                                
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <Heading variant='PrimaryTitle'>Fenótipo e Genótipo</Heading>
            <Text variant="Paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commod
            </Text>
            <Heading variant='PrimaryTitle'>Alelo Codominante</Heading>
            <Text variant="Paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commod
            </Text>
            <Heading variant='PrimaryTitle'>Alelo de dominação completa</Heading>
            <Text variant="Paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, expedita. Quia, ut, quo quisquam nisi, quidem illum voluptatum deleniti repudiandae, veniam, voluptas commodi laboriosam! Magnam, autem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur deserunt? Error necessitatibus deserunt quis corporis, veritatis consequuntur consequatur fuga commod
            </Text>
        </LayoutBaseModify>
        </>
    );
}
