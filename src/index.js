// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = [];
    let str = '';
    let i = 0;
    let j = 0;
    while (i < matrix.length) {
        while (j < matrix[i].length) {
            str = str + matrix[i][j];
            j++;
        }
        i++;

    }


    return str.split('');
}
