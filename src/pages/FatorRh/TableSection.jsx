import { Box, Heading, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react"
export function TableSection(){

    const styleOfTitleTable = {
        color: "#e2e2e2",
        borderRight: "1px solid #fff",
        width: 279,
        textAlign: "center",
        fontSize: 22
    }

    const styleOfTd = {
        color: "#e2e2e2",
        borderRight: "1px solid #fff",
        width: 279,
        textAlign: "center",
        fontSize: 17
    }

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
                        <Tr >
                            <Td style={styleOfTitleTable} >genótipo</Td>
                            <Td style={styleOfTitleTable}>fenótipo</Td>
                            <Td style={styleOfTitleTable}>hemácias</Td>
                            <Td style={styleOfTitleTable}>plasma</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td style={styleOfTd}>RR</Td>
                            <Td style={styleOfTd}>Rh positivo</Td>
                            <Td style={styleOfTd}>Com antígeno Rh</Td>
                            <Td style={styleOfTd}>-</Td>
                        </Tr>
                        <Tr>
                            <Td style={styleOfTd}>Rr</Td>
                            <Td style={styleOfTd}>Rh positivo</Td>
                            <Td style={styleOfTd}>Com antígeno Rh</Td>
                            <Td style={styleOfTd}>-</Td>
                        </Tr>
                        <Tr>
                            <Td style={styleOfTd}>rr</Td>
                            <Td style={styleOfTd}>Rh negativo</Td>
                            <Td style={styleOfTd}>Sem antígeno Rh</Td>
                            <Td style={styleOfTd}></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}