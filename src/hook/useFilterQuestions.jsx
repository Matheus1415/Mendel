export function useFilterQuestion(questions, filters) {
    /*{
        types: [''],
        difficults: [''],

    }*/
    let filteredQuestions = questions.filter( question => {
        if (filters.types.includes(question.questionType)) {
            return true;
        }
    } )

    return(filteredQuestions)

}