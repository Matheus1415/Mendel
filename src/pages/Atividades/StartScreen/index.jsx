import { Checkbox, CheckboxGroup, Flex, Heading } from "@chakra-ui/react";
import { AtividadesContext } from "../../../contexts/AtividadesContextProvider";
import { useContext } from "react";

export function StartScreen(){
    let {state, dispatch} = useContext(AtividadesContext);
    

    return(
        <>
            <Heading variant='PrimaryTitle' textAlign='center'>Selecione as questões que deseja realizar:</Heading>
            <Heading variant='SecondTitle' my='2rem' fontSize='2rem'>Tipo de Questão:</Heading>
            <CheckboxGroup >
                <Flex direction='row' justify='space-evenly'>
                    <Checkbox color='white' size='lg' value='UniqueItem' >Item único</Checkbox>
                    <Checkbox color='white' size='lg' value='MultipleItems' >Multiplos Items</Checkbox>
                    <Checkbox color='white' size='lg' value='' disabled>Digitaveis</Checkbox>
                    <Checkbox color='white' size='lg' value='' disabled>Quadro de Punnett</Checkbox>
                </Flex>
            </CheckboxGroup>
        </>
    )
}