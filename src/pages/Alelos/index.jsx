import React from "react";
import { Flex, Heading, Text, Image, Card, CardBody, UnorderedList, ListItem } from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";

export const Alelos = () => {
  return (
    <>
      <Flex h='100vh' w='full' direction='column' justify='center' align='center' bg='url(assets/banner.jpg)' bgRepeat='no-repeat' bgSize='cover'>
        <Heading variant='PrimaryTitle' color='Primary' textAlign='center' fontSize={[25, 25, 40]}>
          <Highlight query='Alelos' styles={{ fontSize: '3.5em', color: 'Primary', display: 'block' }}>Alelos</Highlight>
        </Heading>
      </Flex>

      <Flex direction='column' p={[3, 4, 8]} maxW='100%' mx='auto' alignItems='flex-start' bgColor="#0f1417">

        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Genes</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>

        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Alelos</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>
        
        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Alelos Múltiplos</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>

        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Alelo Letal</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>


        <Flex gap='20px' p='0.75rem' direction={['column', 'column', 'row']}>
          <Card boxShadow='lg'>
            <CardBody>
              <Image mx='auto' src='https://placehold.co/300x200' alt='Imagem de células haploides' />
              <Heading my='0.5rem'>Genes Dominantes</Heading>
              <UnorderedList textAlign='left' spacing='0.5rem'>
                <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime tempora iste deleniti! Quod, dolores tempora. Facere temporibus aperiam vel qui, quibusdam, nulla sit in ipsa, ducimus harum iste doloremque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam, blanditiis accusamus molestiae quibusdam inventore amet quia atque velit perspiciatis non ratione dolorum repellat voluptates ipsum officiis labore necessitatibus eius.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime tempora iste deleniti! Quod, dolores tempora. Facere temporibus aperiam vel qui, quibusdam, nulla sit in ipsa, ducimus harum iste doloremque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam, blanditiis accusamus molestiae quibusdam inventore amet quia atque velit perspiciatis non ratione dolorum repellat voluptates ipsum officiis labore necessitatibus eius.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime tempora iste deleniti! Quod, dolores tempora. Facere temporibus aperiam vel qui, quibusdam, nulla sit in ipsa, ducimus harum iste doloremque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam, blanditiis accusamus molestiae quibusdam inventore amet quia atque velit perspiciatis non ratione dolorum repellat voluptates ipsum officiis labore necessitatibus eius.</ListItem> 
              </UnorderedList>
            </CardBody>
          </Card>
          <Card boxShadow='lg'>
            <CardBody>
              <Image mx='auto' src='https://placehold.co/300x200' alt='Imagem de células diploides' />
              <Heading my='0.5rem'>Genes</Heading>
              <UnorderedList textAlign='left' spacing='0.5rem'>
                <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime tempora iste deleniti! Quod, dolores tempora. Facere temporibus aperiam vel qui, quibusdam, nulla sit in ipsa, ducimus harum iste doloremque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam, blanditiis accusamus molestiae quibusdam inventore amet quia atque velit perspiciatis non ratione dolorum repellat voluptates ipsum officiis labore necessitatibus eius.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime tempora iste deleniti! Quod, dolores tempora. Facere temporibus aperiam vel qui, quibusdam, nulla sit in ipsa, ducimus harum iste doloremque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam, blanditiis accusamus molestiae quibusdam inventore amet quia atque velit perspiciatis non ratione dolorum repellat voluptates ipsum officiis labore necessitatibus eius.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime tempora iste deleniti! Quod, dolores tempora. Facere temporibus aperiam vel qui, quibusdam, nulla sit in ipsa, ducimus harum iste doloremque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laboriosam, blanditiis accusamus molestiae quibusdam inventore amet quia atque velit perspiciatis non ratione dolorum repellat voluptates ipsum officiis labore necessitatibus eius.</ListItem> 
              </UnorderedList>
            </CardBody>
          </Card>
        </Flex>
          <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Fenótipo</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>
        
        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Genótipo</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>

        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Alelo Codominante</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>

        <Heading variant='PrimaryTitle' bg='linear-gradient(to right, #19BFCD 0%, #0D6067 100%)' bgClip='text'>Alelo de Dominação Completa</Heading>
        <Text align='left' variant='p' color='Primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora eaque tempore vitae, dicta iusto, minus iste assumenda officia voluptatibus suscipit. Tempore vel, dolores distinctio asperiores molestias nemo iure deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur iusto blanditiis necessitatibus ab aspernatur, obcaecati consequuntur iste dolores excepturi eveniet repellendus maxime nihil eligendi dignissimos possimus. Repellat, soluta ducimus!</Text>

      </Flex>
    </>
  );
};
