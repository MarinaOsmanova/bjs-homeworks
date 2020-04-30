"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let parsedPercent = parseInt(percent);
    if (!(parsedPercent >= 0)) {
        console.log(`Параметр percent содержит неправильное значение ${percent}`);
        return false;
    }
    let parsedContribution = parseInt(contribution);
    if (!(parsedContribution >= 0)) {
        console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
        return false;

    }
    let parsedAmount = parseInt(amount);
    if (!(parsedAmount >= 0)) {
        console.log(`Параметр amount содержит неправильное значение ${amount}`);
        return false;
    }
    let months = Math.floor((date - new Date())/1000/3600/24/30);
    if (months < 1) {
        console.log('Укажите корректную конечную дату');
        return false;
    }
    let totalAmount = calculateTotalAmount(parsedPercent, parsedContribution, parsedAmount, months);
    console.log(totalAmount);
    return totalAmount;
}

function calculateTotalAmount(percent, contribution, amount, months) {
    let S = amount - contribution;
    let p = percent / 1200;
    let totalAmount = months * S * (p + p / (Math.pow((1 + p), months) - 1));
    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (typeof name === "undefined" || name === null || name ===  "") {
        name = 'Аноним';
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}