import {Heading, Highlight, Flex, Card, CardBody, CardHeader, Text, Grid, GridItem} from '@chakra-ui/react'
export function Curiosities () {
    return (
        <Flex aling="Center" direction="column">
            <Heading size="4xl" padding="24px 24px" marginLeft="5%">
                <Highlight query='Curiosidades' styles={{color: "#00FF7F"}}>
                    Algumas Curiosidades
                </Highlight>
            </Heading>

            {/*Cards*/}
            <Grid 
                templateColumns="700px 600px" 
                gap="15px" marginLeft="5%"
                >
                    <Card backgroundColor="#e2e2e2" width="700px" height="250px">
                        <CardHeader>
                            <Text> 1Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        </CardHeader>
                        <CardBody>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!</Text>
                        </CardBody>
                    </Card>
                    <Card backgroundColor="#e2e2e2"  width="500px" height="250px">
                        <CardHeader>
                            <Text>2 Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                        </CardHeader>
                        <CardBody>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!</Text>
                        </CardBody>
                    </Card>
                <Card backgroundColor="#e2e2e2" width="500px" height="250px">
                    <CardHeader>
                        <Text> 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </CardHeader>
                    <CardBody>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!</Text>
                    </CardBody>
                </Card>
                <Card backgroundColor="#e2e2e2" width="700px" height="250px">
                    <CardHeader>
                        <Text> 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </CardHeader>
                    <CardBody>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nemo doloremque voluptate ducimus, laudantium porro debitis accusamus praesentium necessitatibus officia sequi fugit incidunt tempore placeat tenetur ullam hic neque!</Text>
                    </CardBody>
                </Card>
            </Grid>
        </Flex>
    )
}