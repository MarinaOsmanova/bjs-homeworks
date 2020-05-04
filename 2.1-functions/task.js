"use strict";
//#################### Задача 1 #################################

function getSolutions( a, b, c ) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return { D: D, roots: [] };
    }
    if (D === 0) {
        let x1 = -b / (2 * a);
        return { D: D, roots: [ x1 ] };
    }
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D: D, roots: [ x1, x2 ] }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения (${a})*x^2 + (${b})*x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    switch (result.roots.length) {
        case 0:
            console.log('Уравнение не имеет вещественных корней');
            break;
        case 1:
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
            break;
        case 2:
            console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//####################### Задача 2 #######################

function getAverageMark(marks) {
    let len = marks.length;
    if (len === 0) {
        return 0;
    }
    let marksSum = 0;
    for (let i=0; i<len; i++) {
        marksSum += marks[i];
    }
    return marksSum / len;
}

function getAverageScore(data) {
    let result = {};
    let averageMark = 0;
    for ( let theme in data ) {
        let themeAverage = getAverageMark(data[theme]);
        result[theme] = themeAverage;
        averageMark += themeAverage;
    }
    let themesCount = Object.keys(data).length;
    result['average'] = themesCount > 0 ? averageMark / themesCount : 0;
    return result;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian:[3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));

//####################### Задача 3 #######################
function  getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    }
    else if (secret === 1) {
        return 'Эмильо';
    }
}

function getPersonData(secretData) {
    return {
        'firstName': getDecodedValue(secretData['aaa']),
        'lastName': getDecodedValue(secretData['bbb'])
    };
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));