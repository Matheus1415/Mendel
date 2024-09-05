export function areMatricesEquals (matrix1, matrix2){
    if(matrix1.length !== matrix2.length){
        return false;
    }

    for (let index = 0; index < matrix1.length; index++) {
        if (matrix1[index].length !== matrix2[index].length) {
            return false;
        }
    }

    for (let indexRow = 0; indexRow < matrix1.length; indexRow++) {
        for(let indexColumn = 0; indexColumn < matrix2.length; indexColumn++){
            if (matrix1[indexRow][indexColumn] !== matrix2[indexRow][indexColumn]) {
                return false;
            }
        }   
    }

    return true;

}