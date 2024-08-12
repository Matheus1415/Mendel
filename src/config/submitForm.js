export function submitForm(e, cb){
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    switch (questions[currentQuestion - 1].questionType) {
        case 'UniqueItem':    
            let selectedOptionForUser = questions[currentQuestion - 1].options.find( option => {
                return data.get('options') === option.content
            } )

            if(selectedOptionForUser.isCorrect === true){
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    AnsweredCorrectly: true
                }] )
            }else{
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    answeredCorrectly: false
                }] )
            }
            cb()
            break;

        case 'MultipleItems':
            let selectedOptions = []

            for( let key of data.keys() ){
                selectedOptions.push(key)
            }

            let correctQuestionOptions = questions[currentQuestion - 1].options.filter( option => {
                return option.isCorrect
            })

            let isAllOptionsSelectedAreCorrect = selectedOptions.every( selectedOption => {
                const anyCorrectOptionCorrespondsToTheSelectedItem = correctQuestionOptions.some( correctOption => correctOption.content === selectedOption )
                return anyCorrectOptionCorrespondsToTheSelectedItem
            } )

            if( (isAllOptionsSelectedAreCorrect) && (selectedOptions.length === correctQuestionOptions.length) ){
                setWinningHistory([...winningHistory, {
                    Question: currentQuestion,
                    answeredCorrectly: true
                }])
            }else{
                setWinningHistory([...winningHistory, {
                    Question: currentQuestion,
                    answeredCorrectly: false
                }])
            }
            showNextQuestion()
            break;

        case 'InputQuestion':
            //lista booleanificada de valores que o usuario digitou correto
            const listOfCertainMarkedValues = [];

            for (const [name,value] of data) {
                const currentInputField = questions[currentQuestion - 1].options.find( option => option.InputField === name )

                const userEnteredCorrectValue = value === currentInputField.isCorrectValue

                listOfCertainMarkedValues.push(userEnteredCorrectValue)
            }

            const userEnteredAllValuesCorrectly = listOfCertainMarkedValues.every( value => value === true )
            if(userEnteredAllValuesCorrectly){
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    AnsweredCorrectly: true
                }] )
            }else{
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    AnsweredCorrectly: false
                }] )
            }
            showNextQuestion()
            break;
    
        default:
        break;
        
    }

}