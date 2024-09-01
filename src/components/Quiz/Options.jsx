import { Radio, RadioGroup, Checkbox, CheckboxGroup, FormControl, FormLabel, Input } from "@chakra-ui/react"

export function Options({questionType, questionOptions}){
    function renderOptionsFromQuestionType(type, options) {
        
        switch (type) {
            case "UniqueItem":
                const radiosJsx = options.map( (option, index) => {
                        return(
                            <Radio w='full' key={index} value={option.content} name='options'>{option.content}</Radio>
                        )
                } )
                //key para o radio group 
                // required
                return (
                    <RadioGroup name='options' display='flex' flexDirection='column' gap='24px' alignItems='flex-start' w='full'>
                        {radiosJsx} 
                    </RadioGroup>
                )

            case "MultipleItems":
                // chackra injeta value nos checkboxes por default
                const checkboxesJsx = options.map( (option, index) => {
                    return <Checkbox w='full' key={index} name={option.content} >{option.content}</Checkbox>
                } )

                return (
                    <CheckboxGroup p='0.25rem' spacing='2px' w='full' alignItems='center'>
                        {checkboxesJsx}
                    </CheckboxGroup>
                )

                case "InputQuestion":
                    
                    return options.map( (option, index) => {
                        return(
                            <FormControl key={index} isRequired display='flex' alignItems='center' justifyContent='space-between'>
                                <FormLabel m='0' p='0.75rem' pl={0} w='fit-content'>{option.InputField}:</FormLabel>
                                <Input type='text' required name={option.InputField} flexGrow='1' maxLength={option.isCorrectValue.length} border="1px #007A8780 solid" bgColor="#01414C85" _hover={{borderColor:'#01414C'}}/>
                            </FormControl>
                        )
                    } )
        
            default:
                return console.warn('Nâo foi possivel renderizar as Opções')
        }
    }

    return renderOptionsFromQuestionType(questionType, questionOptions)
}