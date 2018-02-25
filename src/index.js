module.exports = function solveEquation(equation) {
    var array = equation.split(' ');
    var a = Number(array[0]);
    var b = Number(array[3] + array[4]);
    var c = Number(array[7] + array[8]);
    var d = b * b - 4 * a * c;
    var x1 = Math.round((-b - Math.sqrt(d)) / (2 * a));
    var x2 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    var answer = [x1, x2];
    if (answer[1] < answer[0]) {
        a = answer[0];
        answer[0] = answer [1];
        answer [1] = a;
    }
    return answer;
}
