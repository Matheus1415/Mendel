import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import { ResultsRow } from './ResultsRow'
import { useState } from 'react'

export function ResultsModal({isModalOpenned, closeModalFunction, winningHistory}){
    
    const [popoverIndex, setPopoverIndex] = useState(-1)

    function disablePopover(){
        setPopoverIndex(-1)
    }
    function displayAnyPopover(ind){
        disablePopover();
        setPopoverIndex(ind);
    }

    // escrever sobre o onClose

    return(
        <Modal isOpen={isModalOpenned} closeOnEsc >
            <ModalOverlay bg='rgba(0,0,0, 0.5)' />
            <ModalContent>
                <ModalHeader>
                    Resultados:
                </ModalHeader>
                <ModalCloseButton onClick={closeModalFunction}/>
                <ModalBody>
                    {
                        winningHistory.map( (questionHistory, index) => {
                            return(
                                <ResultsRow
                                    key={index}
                                    questionHistory={questionHistory}
                                    isPopoverOpenned={index === popoverIndex}
                                    onClose={disablePopover}
                                    openPopoverFunction={ ()=>{displayAnyPopover(index)} }
                                />
                            )
                        } )
                    }
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}