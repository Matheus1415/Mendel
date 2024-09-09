import { Heading } from "@chakra-ui/react";
import { useContext, useEffect } from 'react';
import {AtividadesContext} from '../../../contexts/AtividadesContextProvider'
import {ViewQuestion} from '../../../components/ViewQuestion'
import { allQuestion } from '../../../config/allQuestions.js'
import { ResultsScene } from "../ResultsScene";
import { StartScreen } from "../StartScreen/index.jsx";

// meu onde acontece tudo

export function AtividadesConteiner(){
    let {state, dispatch} = useContext(AtividadesContext);
    console.log('no conteiner',state);
        

    // useEffect( ()=>{
    //     dispatch({
    //         type: "SET_QUESTIONS",
    //         newQuestions: allQuestion
    //     })
    //     dispatch({
    //         type: "UPDATE_STAGE_ACTIVITY",
    //         newStage: 1
    //     })

    // } , [] )
    
    function handleSubmit(e){
        e.preventDefault();

    }

    function handleDebugSet(){
        dispatch({
            type: "SET_QUESTIONS",
            newQuestions: questionMock
        })
    }
    function handleDebugShowN(event){
        dispatch({
            type: "SHOW_NEXT_QUESTION",
            eventForm: event
        })
    }
    function handleDebugShowP(){
        dispatch({
            type: "SHOW_PREVIOUS_QUESTION"
        })
    }
    function handleDebugSubmit(){
        dispatch({
            type: "SUBMIT_QUESTIONS"
        })
    }
    function handleDebugErro(){
        dispatch({
            type: "ERRORS"
        })
    }
    function handleDebugLogger(){
        dispatch({
            type: "DEBUG"
        })
    }

    return(
        <>
            {
                (
                    function (){
                        switch (state.stage){
                            case 'start':
                                return(
                                    <StartScreen
                                        
                                    />)

                            case 'playing':
                                return(
                                    <ViewQuestion
                                        currentQuestionData={state.currentQuestion}
                                        currentQuestionIndex={state.currentQuestionIndex}
                                        nextButtonCallback={handleDebugShowN}
                                        previousButtonCallback={handleDebugShowP}
                                        questionsAmount={state.questions.length}
                                    />
                                )

                            case 'end':
                                return(
                                    <ResultsScene
                                        resultState={state}
                                    />
                                )
                        }
                    }
                )()
            }
        </>
    )
}
