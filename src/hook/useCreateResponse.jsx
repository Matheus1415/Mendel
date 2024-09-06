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

            return {
                selectedOptions,
                correctQuestionOptions,
                questionStatment: currentQuestion.question,
                isCorrect: isUserCorrect,
                questionType
            };

        case 'UniqueItem':
            let selectedOptionForUser = currentQuestion.options.find( option => {
                return data.get('options') === option.content;
            } )

            const correctOptionInThisQuestion = currentQuestion.options.find( option => {
                return option.isCorrect;
            } )

            if(selectedOptionForUser.isCorrect === true){
                isUserCorrect = true;
            }else{
                isUserCorrect = false;
            }
            
            return {
                markedItem: data.get('options'),
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

            const userEnteredAllValuesCorrectly = listOfCertainMarkedValues.every( value => value === true )

            return {
                results: resultsForThisQuestion,
                questionStatment: currentQuestion.question,
                userEnteredAllValuesCorrectly,
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
