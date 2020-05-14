'use strict';

function parseCount(num) {
    let result = Number.parseInt(num);
    console.log(result);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch(e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = Number.parseInt(a);
        this.b = Number.parseInt(b);
        this.c = Number.parseInt(c);
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return {
            getPerimeter() {
                return 'Ошибка! Неправильный треугольник';
            },
            getArea() {
                return 'Ошибка! Неправильный треугольник';
            }
        }
    }
}