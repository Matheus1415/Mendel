import { areMatricesEquals } from "../config/areMatricesEquals";

export function useCreateResponse(questionType, currentQuestion, submitFormEvent){    
    const data = new FormData(submitFormEvent.target) 
    let isUserCorrect = false;
    
    switch (questionType) {
        case 'MultipleItems':
            
            let selectedOptions = []
    
            for( let key of data.keys() ){
                selectedOptions.push(key)
            }
            
            let correctQuestionOptions = currentQuestion.options.filter( option => {
                return option.isCorrect
            })

            let isAllOptionsSelectedAreCorrect = selectedOptions.every( selectedOption => {
                const anyCorrectOptionCorrespondsToTheSelectedItem = correctQuestionOptions.some( correctOption => correctOption.content === selectedOption )
                return anyCorrectOptionCorrespondsToTheSelectedItem
            } )

            if( (isAllOptionsSelectedAreCorrect) && (selectedOptions.length === correctQuestionOptions.length) ){
                isUserCorrect = true;
            }else{
                isUserCorrect = false;
            }

            if (selectedOptions.length === 0) {
                selectedOptions.push("Nenhuma Opção selecionada")
            }

            return {
                selectedOptions,
                correctQuestionOptions,
                questionStatment: currentQuestion.question,
                isCorrect: isUserCorrect,
                questionType
            };

        case 'UniqueItem':
            const OptionSelectedForUser = data.get('options') ?? 'Nenhuma Opção selecionada';

            
            const correctOptionInThisQuestion = currentQuestion.options.find( option => {
                return option.isCorrect;
            } )
            
            if(OptionSelectedForUser === 'Nenhuma Opção selecionada' ){
                return {
                    markedItem: OptionSelectedForUser,
                    correctItem: correctOptionInThisQuestion,
                    questionStatment: currentQuestion.question,
                    isCorrect: false,
                    questionType
                };
            }

            let selectedOptionForUser = currentQuestion.options.find( option => {
                return OptionSelectedForUser === option.content;
            } )


            if(selectedOptionForUser.isCorrect === true){
                isUserCorrect = true;
            }else{
                isUserCorrect = false;
            }
            
            return {
                markedItem: OptionSelectedForUser,
                correctItem: correctOptionInThisQuestion,
                questionStatment: currentQuestion.question,
                isCorrect: isUserCorrect,
                questionType
            };

        case 'InputQuestion':

            let resultsForThisQuestion = {}
            
            const listOfCertainMarkedValues = [];
        
            for (const [name,value] of data) {

                const currentInputField = currentQuestion.options.find( option => option.InputField === name )

                const userEnteredCorrectValue = value === currentInputField.isCorrectValue;

                resultsForThisQuestion[name] = {
                    userEnteredCorrectValue,
                    enteredValue: value,
                    correctValue: currentInputField.isCorrectValue
                }

                listOfCertainMarkedValues.push(userEnteredCorrectValue)
            }

            const isCorrect = listOfCertainMarkedValues.every( value => value === true )

            return {
                results: resultsForThisQuestion,
                questionStatment: currentQuestion.question,
                isCorrect,
                questionType
            };

        case 'PunnettSquareDraggable':

            const userAnswersForMatriz  = JSON.parse(data.get("answersForMatrix"));
            const templateForCurrentQuestion = currentQuestion.template;

            isUserCorrect = areMatricesEquals(userAnswersForMatriz, templateForCurrentQuestion);

            return {
                templateForCurrentQuestion,
                userAnswersForMatriz,
                questionStatment: currentQuestion.question,
                isCorrect: isUserCorrect,
                questionType
            };
    
        default:
            console.warn("hook nao achou esse type", questionType)
            break;
    }
}
