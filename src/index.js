// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = [];
    let str = '';
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i % 2 == 0) {
                    array.push(matrix[i][j]);
                } else if (i % 2 == 1) {
                    array.push(matrix[i][matrix[i].length - j - 1]);
                }
            }
        }
    }
    return array;
}