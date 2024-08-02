export function submitForm(e, cb){
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    console.log("---Valores do Form Data---");
    for (const [name,value] of data) {
        console.log(name, ":", value)
    }
    console.log( questions[currentQuestion - 1]);
    console.log("---/Valores do Form Data---");


    switch (questions[currentQuestion - 1].questionType) {
        case 'UniqueItem':    
            console.log('submit questão de item unico');
            let selectedOptionForUser = questions[currentQuestion - 1].options.find( option => {
                return data.get('options') === option.content
            } )

            if(selectedOptionForUser.isCorrect === true){
                console.log('unique certo');
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    AnsweredCorrectly: true
                }] )
            }else{
                console.log('unique errado');
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    answeredCorrectly: false
                }] )
            }
            cb()
            break;

        case 'MultipleItems':
                
            console.log('submit questão de item Multiplos');
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
            console.log('submit questão de input');
            //lista booleanificada de valores que o usuario digitou correto
            const listOfCertainMarkedValues = [];

            for (const [name,value] of data) {
                const currentInputField = questions[currentQuestion - 1].options.find( option => option.InputField === name )

                const userEnteredCorrectValue = value === currentInputField.isCorrectValue

                listOfCertainMarkedValues.push(userEnteredCorrectValue)
            }

            const userEnteredAllValuesCorrectly = listOfCertainMarkedValues.every( value => value === true )
            console.log('Usuario digitou todos valores corretamente: ',userEnteredAllValuesCorrectly);

            console.log('lista de valores booleanificados: ',listOfCertainMarkedValues);
            if(userEnteredAllValuesCorrectly){
                console.log('input certo');
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    AnsweredCorrectly: true
                }] )
            }else{
                console.log('input errado');
                setWinningHistory( [...winningHistory, {
                    Question: currentQuestion,
                    AnsweredCorrectly: false
                }] )
            }
            showNextQuestion()
            break;
    
        default:

            console.log('submit invalido');
            break;
        
    }
    

    //e.currentTarget.reset()
    // o formulario se alimpa
}