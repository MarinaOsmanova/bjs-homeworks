function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        x[0] = -b / 2 / a;
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length == 0) {
        return 0;
    }
    if (marks.length > 5) {
        console.log('Оценок больше пяти');
        marks.splice(5);
    }
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name, dateOfBirthday){
    // код для задачи №3 писать здесь
    let todayYear = new Date().getFullYear();
    let birthdayYear = dateOfBirthday.getFullYear();
    let age = todayYear - birthdayYear;
    result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : 
`Сожалею, ${name}, но я не могу вам продать алкоголь. 
Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}