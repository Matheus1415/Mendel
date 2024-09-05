import { createContext, useReducer } from "react";
import { useCreateResponse } from '../hook/useCreateResponse';

const STAGES = ['start', 'playing', 'end']

export const AtividadesContext = createContext({
    currentQuestionIndex: 0,
    currentQuestion: {},
    stage: STAGES[0],
    questions: [],
    userResponses: [],
});

function AtividadesReducer(state,action){
    switch (action.type){
        case "SET_QUESTIONS":
            if(!action.newQuestions){
                alert("Não há novas questões");
                return
            }

            console.log('novas questoes definidas', action.newQuestions);
            

            return {
                ...state,
                questions: action.newQuestions,
                currentQuestion: action.newQuestions[0]
            }

        case "UPDATE_STAGE_ACTIVITY":
            console.log('atualifou stage');
            
            return {
                ...state,
                stage: STAGES[action.newStage]
            }

        case "SHOW_NEXT_QUESTION":
            action.eventForm.preventDefault();

            
            
            let newResponseForThisQuestion = useCreateResponse(state.currentQuestion.questionType, state.currentQuestion, action.eventForm);

            let userResponsesModified = state.userResponses;
            userResponsesModified[state.currentQuestionIndex] = newResponseForThisQuestion;

            console.log("show_next", userResponsesModified);
            
            if (state.currentQuestionIndex + 1 >= state.questions.length) {
                
                return {
                    ...state,
                    userResponses: userResponsesModified,
                    stage: STAGES[2]
                }
            }

            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                currentQuestion: state.questions[state.currentQuestionIndex + 1],
                userResponses: userResponsesModified
            };

        case "SHOW_PREVIOUS_QUESTION":
        
            if (state.currentQuestionIndex <= 0) {
                alert('Não há questão anterior!')
                return {
                    ...state
                };
            }

            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1,
                currentQuestion: state.questions[state.currentQuestionIndex - 1]
            }

        case "DEBUG":
            console.log(state);
            
            return {
                ...state
            };
        
        default:
            console.warn("Não existe esse tipo de Action.Type ", action.type)
    }
    
}

export function AtividadesContextProvider({children}){

    const [state, dispatch] = useReducer(AtividadesReducer,{
        currentQuestionIndex: 0,
        currentQuestion: {},
        stage: STAGES[0],
        questions: [],
        userResponses: [],
    });
    return(
        <AtividadesContext.Provider value={{state, dispatch}}>
            {children}
        </AtividadesContext.Provider>
    )
}