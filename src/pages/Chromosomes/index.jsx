import { Heading,
        Text,
        Image,
        Flex,
        Box,
        Card,
        CardBody,
        UnorderedList,
        ListItem,
        Stack 
} from '@chakra-ui/react'
import { Quiz } from '../../components/Quiz'
import questionMock from '../../data/question-mock.json'

export function Chromosomes(){
    //onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    function handleMouseEnter(e){
        e.target.setAttribute('src', 'https://i.pinimg.com/originals/96/7d/19/967d19fc5d4caaa1f4aef5ee703ddb90.gif')
    }
    function handleMouseLeave(e){
        e.target.setAttribute('src', 'https://th.bing.com/th/id/OIP.q87ZeFEaViiD8K6MVsx1twAAAA?rs=1&pid=ImgDetMain');
    }
    
    return(
        <Flex direction='column' p={[2,4,8]} maxW='950px' mx='auto' alignItems='flex-start'>
            <Heading mb='1rem' mt='2rem'>Cromossomos</Heading>
            <Text align='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>

            <Heading mb='1rem' mt='2rem'>Celulas haploides e diploides</Heading>
            <Text variant='for-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus autem non tempore amet vero quasi soluta! Dolor sapiente enim, dolore officiis natus alias saepe modi debitis necessitatibus quidem doloremque.</Text>
            <Flex gap='20px' p='0.75rem'>
                <Card boxShadow='lg'>
                    <CardBody>
                        <Image mx='auto' src='https://placehold.co/300x200'></Image>
                        <Stack>
                            <Heading my='0.5rem'>Celulas Haploides</Heading>
                            <UnorderedList textAlign='left' spacing='0.5rem'>
                                <ListItem>Uma célula haploide possui metade do número de cromossomos típicos da espécie. Em humanos, por exemplo, as células haploides têm 23 cromossomos.</ListItem>
                                <ListItem>As células haploides são produzidas durante a gametogênese (formação de gametas) por meio da meiose. Durante a meiose, uma célula diploide (com 46 cromossomos em humanos) sofre duas divisões celulares consecutivas para produzir quatro células haploides.</ListItem>
                                <ListItem>Os gametas são células haploides. Nos seres humanos, espermatozoides nos machos e óvulos nas fêmeas são gametas haploides.</ListItem>
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
                <Card boxShadow='lg'>
                    <CardBody>
                        <Image mx='auto' src='https://placehold.co/300x200'></Image>
                        <Stack>
                            <Heading my='0.5rem'>Celulas Diploides</Heading>
                            <UnorderedList textAlign='left' spacing='0.5rem'>
                                <ListItem>As células diploides contêm o número completo de cromossomos da espécie. Novamente, em humanos, células diploides têm 46 cromossomos, organizados em 23 pares.</ListItem>
                                <ListItem>A maioria das células do corpo humano é diploide (com exceção dos gametas). Durante o desenvolvimento embrionário, após a fertilização (união do óvulo e do espermatozoide), forma-se uma célula diploide, que se divide por mitose para formar todas as células somáticas do organismo</ListItem>
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
            </Flex>

            <Heading mb='1rem' mt='2rem'>Cromossomos</Heading>
            <Text variant='for-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum amet totam ducimus explicabo maxime officia reiciendis, vero aliquam maiores aut, vel doloremque veritatis quibusdam libero id nemo non dicta!</Text>
            <Text textAlign='left' my='0.5rem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id iusto sapiente quasi? Corrupti, sequi ipsum? Est architecto consequuntur tempore accusamus? Iusto sunt odit, ut tempora similique impedit sequi corporis error!</Text>
            <UnorderedList mt='0.5rem' spacing='0.5rem'>
                <ListItem textAlign='left'>DNA: O DNA é uma molécula longa e helicoidal que carrega a informação genética de um organismo. É composto por uma sequência de nucleotídeos (adenina, timina, citosina e guanina) que formam os genes responsáveis por características hereditárias.</ListItem>
                <ListItem textAlign='left'>Cromatina: Durante a maior parte do ciclo celular, o DNA está desenrolado e altamente organizado dentro do núcleo como cromatina. A cromatina é composta por DNA, histonas (proteínas que ajudam na compactação do DNA) e proteínas não histônicas.</ListItem>
                <ListItem textAlign='left'>Cromossomos: Antes da divisão celular, a cromatina se condensa ainda mais para formar cromossomos visíveis ao microscópio óptico. Cada cromossomo é uma estrutura altamente organizada que consiste em duas cromátides irmãs ligadas por um centrômero.</ListItem>
                <ListItem textAlign='left'>DNA: O DNA é uma molécula longa e helicoidal que carrega a informação genética de um organismo. É composto por uma sequência de nucleotídeos (adenina, timina, citosina e guanina) que formam os genes responsáveis por características hereditárias.</ListItem>
            </UnorderedList>

            <Heading size='lg' mb='0.75rem' mt='1.75rem'>Funções dos Cromossomos:</Heading>
            <UnorderedList mt='0.5rem' spacing='0.5rem'>
                <ListItem textAlign='left'>Transmissão de Informação Genética: Os cromossomos são responsáveis por transportar os genes que contêm as informações para a síntese de proteínas e para determinar as características hereditárias de um organismo.</ListItem>
                <ListItem textAlign='left'>Transmissão de Informação Genética: Os cromossomos são responsáveis por transportar os genes que contêm as informações para a síntese de proteínas e para determinar as características hereditárias de um organismo.</ListItem>
                <ListItem textAlign='left'>Transmissão de Informação Genética: Os cromossomos são responsáveis por transportar os genes que contêm as informações para a síntese de proteínas e para determinar as características hereditárias de um organismo.</ListItem>
            </UnorderedList>


            <Heading mb='1rem' mt='2rem'>Cromossomos Homologos</Heading>
            <Text textAlign='left' my='0.5rem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem dolorum perspiciatis nam itaque, at ex. Quod repellendus porro, possimus eius repudiandae, deserunt dicta repellat commodi ea sequi, ullam dignissimos.</Text>
            <Text textAlign='left' my='0.5rem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate nobis alias at. Libero accusantium corporis totam quia voluptates quisquam modi alias distinctio sed enim? Autem quaerat mollitia dolorem repudiandae!</Text>
            <Image src='https://th.bing.com/th/id/OIP.q87ZeFEaViiD8K6MVsx1twAAAA?rs=1&pid=ImgDetMain' alt='Foto do Mendel' mx='auto' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Image>
            {
                //https://th.bing.com/th/id/OIP.q87ZeFEaViiD8K6MVsx1twAAAA?rs=1&pid=ImgDetMain
                //https://i.pinimg.com/originals/96/7d/19/967d19fc5d4caaa1f4aef5ee703ddb90.gif
            }
            <Heading mb='1rem' mt='2rem'>Atividade</Heading>
            <Text variant='for-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum sapiente, eos quam debitis perspiciatis omnis reiciendis provident placeat vitae laboriosam nobis quisquam quas modi deserunt labore cum, similique repellat.</Text>
            
            <Quiz questions={questionMock}/>

        </Flex>
        
    )
};