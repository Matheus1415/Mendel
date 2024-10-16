import { Radio, RadioGroup, Checkbox, CheckboxGroup, FormControl, FormLabel, Input } from "@chakra-ui/react"

export function Options({questionType, questionOptions}){

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
      ];


    function renderOptionsFromQuestionType(type, options) {
        
        switch (type) {
            case "UniqueItem":
                const radiosJsx = options.map( (option, index) => {
                        return(
                            <Radio w='full' key={index} value={option.content} name='options'> {alphabet[index]}) {option.content}</Radio>
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
                                <FormLabel m='0' p='0.75rem' w='fit-content'>{option.InputField}:</FormLabel>
                                <Input type='text' required name={option.InputField} flexGrow='1' maxLength={option.isCorrectValue.length}/>
                            </FormControl>
                        )
                    } )
        
            default:
                return console.warn('Nâo foi possivel renderizar as Opções')
        }
    }

    return renderOptionsFromQuestionType(questionType, questionOptions)
}