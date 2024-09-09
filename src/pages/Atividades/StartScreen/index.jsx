import { Box, Button, Checkbox, CheckboxGroup, filter, Flex, Heading, useCheckbox } from "@chakra-ui/react";
import { AtividadesContext } from "../../../contexts/AtividadesContextProvider";
import { useContext } from "react";
import { useFilterQuestion } from "../../../hook/useFilterQuestions";
import { allQuestion } from "../../../config/allQuestions";

export function StartScreen(){
    let {state, dispatch} = useContext(AtividadesContext);

    let filters = {
        types: []
    }

    function handleChangeTypeCheckbox(e){
        if(e.target.checked){
            if(filters.types.includes(e.target.value)){
                //none
            }else{
                filters.types.push(e.target.value)
            }
        }else if(!e.target.checked){
            if (filters.types.includes(e.target.value)) {
                let index = filters.types.indexOf(e.target.value)
                filters.types.splice(index, 1)
            }
        }
    }

    function startActivity(){
        if (filters.types.length == 0) {
            alert('Escolha algum tipo de questão!')
            return;
        }

        const filteredQuestions = useFilterQuestion(allQuestion, filters);

        dispatch({
            type: "SET_QUESTIONS",
            newQuestions: filteredQuestions
        })
        dispatch({
            type: "UPDATE_STAGE_ACTIVITY",
            newStage: 1
        })
        
    }

    return(
        <>  
            <Flex direction='column' h='800px'>
                <Heading variant='PrimaryTitle' textAlign='center'>Selecione as questões que deseja realizar:</Heading>
                <Box flex='1'>
                    <Heading variant='SecondTitle' my='2rem' fontSize='2rem'>Tipo de Questão:</Heading>
                    <CheckboxGroup >
                        <Flex direction='row' justify='space-evenly'>
                            <Checkbox color='white' size='lg' value='UniqueItem' onChange={e => handleChangeTypeCheckbox(e)}>Item único</Checkbox>
                            <Checkbox color='white' size='lg' value='MultipleItems' onChange={e => handleChangeTypeCheckbox(e)}>Múltiplos itens</Checkbox>
                            <Checkbox color='white' size='lg' value='' disabled>Digitáveis</Checkbox>
                            <Checkbox color='white' size='lg' value='' disabled>Quadro de Punnett</Checkbox>
                        </Flex>
                    </CheckboxGroup>
                </Box>
                <Button variant='readMore' onClick={startActivity} _hover={{transform: 'scale(1)', background: 'linear-gradient(to right, #007A87 0%, #01414C) 100%', fontSize: '20px', transition: 'all 0.2s'}}>Começar a atividade</Button>
            </Flex>
        </>
    )
}