import { Box, Heading, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react"
export function TableSection(){
    return(
        <Box>
            <Heading color='white' fontSize={40} textAlign='center' fontWeight={275} bgGradient='linear(to-r, #0D606780, #19BFCD80)' bgClip='text' marginBottom='40px' marginTop='70px'>DIFERENÇA DE RH POSITIVO E NEGATIVO</Heading>
            <Box margin='20px' marginBottom='50px'>
                    <Text margin='0 auto' fontWeight='275' color='#FFFFFF' textAlign='justify' fontSize={17} maxW={1110} marginBottom='20px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <Text margin='0 auto' color='#FFFFFF' fontWeight='275' textAlign='justify' fontSize={17} maxW={1110} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing. </Text>
            </Box>
            <TableContainer maxW={1110}margin='0 auto' border="1px solid #fff" borderRadius="15px">
                <Table>
                    <Thead>
                        <Tr>
                            <Td color="#e2e2e2">genótipo</Td>
                            <Td color="#e2e2e2">fenótipo</Td>
                            <Td color="#e2e2e2">hemácias</Td>
                            <Td color="#e2e2e2">plasma</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td color="#e2e2e2">RR</Td>
                            <Td color="#e2e2e2">Rh positivo</Td>
                            <Td color="#e2e2e2">Com antígeno Rh</Td>
                            <Td color="#e2e2e2">-</Td>
                        </Tr>
                        <Tr>
                            <Td color="#e2e2e2">Rr</Td>
                            <Td color="#e2e2e2">Rh positivo</Td>
                            <Td color="#e2e2e2">Com antígeno Rh</Td>
                            <Td color="#e2e2e2">-</Td>
                        </Tr>
                        <Tr>
                            <Td color="#e2e2e2">r</Td>
                            <Td color="#e2e2e2">Rh negativo</Td>
                            <Td color="#e2e2e2">Sem antígeno Rh</Td>
                            <Td color="#e2e2e2">Anticorpos anti-Rh, caso receba hemácias de sangue Rh*</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}