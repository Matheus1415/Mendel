import { Badge, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react"

export function ResultsRow({ questionHistory, isPopoverOpenned, onClose, openPopoverFunction }){
    const { question, answeredCorrectly, explanation } = questionHistory;
    const popoverDirection = useBreakpointValue({
        base: "bottom",
        md: "bottom",
        lg: "right-start"
    })
    console.log(isPopoverOpenned);

    return(
        <Flex align='center' justify='space-around' my='1.25rem'>
            <Text>Questão {question}:</Text>
            <> 
                <Popover
                    isOpen={isPopoverOpenned}
                    onClose={onClose}
                    placement={popoverDirection}
                    closeOnEsc
                >
                    <PopoverTrigger>
                        <Badge onClick={openPopoverFunction} bg={answeredCorrectly ? 'teal.500' : 'red.500'} color='white' minW='100px' textAlign='center' cursor='pointer'>{answeredCorrectly ? 'Certo' : 'Errado'}</Badge>
                    </PopoverTrigger>
                    <PopoverContent style={{width: '300px', position: 'relative'}}>
                        <PopoverHeader textDecoration='underline'>Explicação:</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton/>
                        <PopoverBody>{explanation}</PopoverBody>
                    </PopoverContent>
                </Popover>
            </>
        </Flex>
    )
}