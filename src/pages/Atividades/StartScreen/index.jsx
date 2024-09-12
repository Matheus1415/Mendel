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
        <Flex direction="row" gap={30}>  
                <Flex 
                    flex='1'  
                    direction='column'
                    border="2px solid #EBEBEB30"
                    bg="#0638443e" 
                    backdropFilter="blur(23px)" 
                    borderRadius="15px" 
                    p="4"
                    maxW={300}
                >
                    <Heading variant='SecondTitle' my='2rem' fontSize='2rem'>Tipo de Questão</Heading>
                    <CheckboxGroup>
                        <Flex direction='column' gap={5}>
                            <Checkbox color='white' size='lg' value='UniqueItem' onChange={e => handleChangeTypeCheckbox(e)}>Item único</Checkbox>
                            <Checkbox color='white' size='lg' value='MultipleItems' onChange={e => handleChangeTypeCheckbox(e)}>Múltiplos itens</Checkbox>
                            <Checkbox color='white' size='lg' value='' disabled>Digitáveis</Checkbox>
                            <Checkbox color='white' size='lg' value='' disabled>Quadro de Punnett</Checkbox>
                            <Button variant='nextPage' maxW={250} onClick={startActivity} >Começar a atividade</Button>
                        </Flex>
                    </CheckboxGroup>
                </Flex>
                <Flex direction='column' h='800px'>
                    <Heading variant='PrimaryTitle' textAlign='center'>Selecione as questões que deseja realizar:</Heading>
                    
                </Flex>
        </Flex>
    )
}