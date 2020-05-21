'use strict';

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

function compareArrays( arr1, arr2 ) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])
}


console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
  const memory = [];
  return function(...params) {
    let findedResult = memory.find(savedResult => compareArrays(savedResult.args, params));
    if (findedResult) {
      return findedResult.result;
    }
    let result = fn(...params);
    memory.push({
      args: params,
      result: result
    });
    if (memory.length > limit) {
      memory.shift();
    }
    return result;
  }
}

function testCase(testFunction, timerName) {
  const iterationCount = 100;
  let paramsSet = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timerName);
  for (let i = 0; i < iterationCount; i++) {
    paramsSet.forEach(params => testFunction(...params));
  }
  console.timeEnd(timerName);
}

testCase(sum, 'myTimer1');
testCase(memorize(sum, 10), 'myTimer2');
/*
Выполнение кода с задержкой:
myTimer1: 250688.39501953125ms
myTimer2: 1504.480224609375ms
Скорость выполнения оптимизированной функции существенно выше, чем у не оптимизированной

без задержки:
myTimer1: 0.984130859375ms
myTimer2: 1.867919921875ms
При удалении задержки (закомментировав строку "sleep(500)"), оптимизированная функция
работала немного дольше, чем исходная, за счёт потерь времени на организацию "памяти"
*/