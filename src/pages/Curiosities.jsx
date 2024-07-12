import {Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading, Highlight, Text} from '@chakra-ui/react'
export function Curiosities () {
return (
    
    <Flex aling="Center" direction="column">
        
        {/*Title*/}
        <Heading size="4xl" padding="24px 24px" marginLeft="5%" marginBottom="20px">
            <Highlight query='Curiosidades' styles={{color: "#00FF7F"}}>
                Algumas Curiosidades
            </Highlight>
        </Heading>

{/*Cards*/}

    <Grid templateColumns="repeat(1, 1200px)" gap="15px" marginLeft="5%" marginBottom="30px">

{/*First section of cards*/}

        <GridItem>
        <Flex gap="15px">

            {/*First card*/}
            <Card backgroundColor="#e2e2e2" width="700px" height="250px" cursor="pointer" _hover={{bg:"#cacaca"}}>
                <CardHeader>
                    <Text fontSize="xl"> 
                        1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!
                    </Text>
                </CardBody>
                </Card>

                {/*Second card*/}
                <Card backgroundColor="#e2e2e2"  width="500px" height="250px" cursor="pointer" _hover={{bg:"#cacaca"}}>
                <CardHeader>
                    <Text fontSize="xl">
                        2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicingelitEiusdistinctio nemo doloremque voluptate ducimuslaudantiumporrodebitis accusamuspraesentiumnecessitatibus officia sequifugitincidunttemporeplaceat tenetur ullam hic neque!
                    </Text>
                </CardBody>
                </Card>
        </Flex>
        </GridItem>

{/*Second section of cards*/}

        <GridItem>
        <Flex gap="15px">

            {/*Third card*/}            
            <Card backgroundColor="#e2e2e2" width="500px" height="250px" cursor="pointer" _hover={{bg:"#cacaca"}}>
                <CardHeader>
                    <Text fontSize="xl"> 
                        3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!
                    </Text>
                </CardBody>
            </Card>

            {/*fourth card*/}
            <Card backgroundColor="#e2e2e2" width="700px" height="250px" cursor="pointer" _hover={{bg:"#cacaca"}}>
                <CardHeader>
                    <Text fontSize="xl"> 
                        4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!
                    </Text>
                </CardBody>
            </Card>
        </Flex>
        </GridItem>
    </Grid>
    </Flex>
    )
}