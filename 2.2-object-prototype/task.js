'use strict';

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (animal === undefined) {
        return null;
    }
    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    }
    let average = 0;
    for (let i = 0; i < marks.length; i++) {
        average += parseInt(marks[i]);
    }
    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = +new Date;
    birthday = +new Date(birthday);
    let diff = now - birthday;
    let mmInYear = (3*365 + 366) * 24 * 60 * 60 * 1000 / 4;
    let age = diff / mmInYear;
    let verdict = age >= 18 ? true : false;
    return verdict
}