import { Badge, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react"

export function ResultsRow({ questionHistory, isPopoverOpenned, onClose, openPopoverFunction }){
    const { question, answeredCorrectly, explanation } = questionHistory;
    const popoverDirection = useBreakpointValue({
        base: "bottom",
        md: "bottom",
        lg: "right-start"
    })
    return(
        <Flex align='center' justify='space-around' my='1.25rem'>
            <Text>Questão {question}:</Text>
            <> 
                <Popover
                    isOpen={isPopoverOpenned}
                    onClose={onClose}
                    placement={popoverDirection}
                    closeOnEsc
                    strategy="absolute"
                    
                >
                    <PopoverTrigger>
                        <Badge onClick={openPopoverFunction} bg={answeredCorrectly ? 'teal.500' : 'red.500'} color='white' minW='100px' borderRadius="2px" textAlign='center' cursor='pointer'>{answeredCorrectly ? 'Certo' : 'Errado'}</Badge>
                    </PopoverTrigger>
                    <PopoverContent style={{width: '300px'}}>
                        <PopoverHeader textDecoration='underline' fontWeight="medium">Explicação:</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton/>
                        <PopoverBody textDecoration={Boolean(explanation)} textColor={explanation || "red.600"}>{explanation ? explanation : "Explicação não definida!" }</PopoverBody>
                    </PopoverContent>
                </Popover>
            </>
        </Flex>
    )
}
