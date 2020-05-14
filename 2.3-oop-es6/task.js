'use strict';
//#################### Задача 1 ####################
class Weapon {
    constructor(obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.durability = obj.durability;
        this.baseDurability = obj.durability;
        this.range = obj.range;
    };
    
    takeDamage(damage) {
        this.durability = Math.max(this.durability - damage, 0);
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        if (this.durability >= 0.3 * this.baseDurability) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return !(this.durability > 0);
    }
}

/*
const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1
});

sword.takeDamage(5);
console.log(sword.durability); // 5
  
sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
  
arm.takeDamage(20);
console.log(arm.durability); // Infinity
  
const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});
  
bow.takeDamage(20);
console.log(bow.durability); // 180
  
bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false
*/

const arm = new Weapon({name: 'Рука', attack: 1, durability: Infinity, range: 1});
const bow = new Weapon({name: 'Лук', attack: 10, durability: 200, range: 3});
const sword = new Weapon({name: 'Меч', attack: 25, durability: 500, range: 1});
const knife = new Weapon({name: 'Нож', attack: 5, durability: 300, range: 1});
const staff = new Weapon({name: 'Посох', attack: 8, durability: 300, range: 2});

const longBow = new Weapon({name: 'Длинный лук', attack: 15, durability: 200, range: 4});
const axe = new Weapon({name: 'Секира', attack:27, durability: 800, range: 1});
const stormStaff = new Weapon({name: 'Посох Бури', attack: 10, durability: 300, range: 3});

//#################### Задача 2 ####################
class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }    
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }    
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }    
}

class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }    
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }    
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

//#################### Задача 3 ####################
class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {}
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.grades[subject] === undefined) {
            this.grades[subject] = [];
        }
        if (!Number.isInteger(grade) || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку "${grade}" предмету "${subject}". Допускаются только числа от 1 до 5.`);
        } else {   
            this.grades[subject].push(grade);
        }
        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {
        let marks = this.grades[subject];
        if (marks === undefined || marks.length === 0) {
            return 0;
        }
        let markAverage = 0;
        for (let i = 0; i < marks.length; i++) {
            markAverage += marks[i];
        }
        return markAverage / marks.length;
    }

    getTotalAverage() {
        let marksSum = 0;
        let marksCount = 0;
        for (let subject in this.grades) {
            let marks = this.grades[subject];
            for (let i = 0; i < marks.length; i++) {
                marksSum += marks[i];
                marksCount++;
            }
        }
        return marksCount > 0 ? marksSum / marksCount : 0;
    }
}

/*
const log = new StudentLog('Олег Никифоров');
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));
*/

const log = new StudentLog('Олег Никифоров');
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
//console.log(log.getAverageBySubject('geometry')); // 4.5
//console.log(log.getAverageBySubject('algebra')); // 3
//console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75