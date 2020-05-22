class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(timeStr, actionFn, id) {
        if (!id) {
            throw new Error('Ошибка! Не передан идентификатор звонка.');
        }
        if (this.alarmCollection.some(element => element.id === id)) {
            console.error('Звонок с переданным идентификатором уже существует');
            return;
        }
        this.alarmCollection.push({
            id: id,
            time: timeStr,
            callback: actionFn
        });
    }

    removeClock(id) {
        let beginLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id != id);
        return beginLength != this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().substr(0, 5);
    }

    start() {
        let checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback();
            }
        }
        if (this.timerId) {
            return;
        }
        this.timerId = setInterval(
            () => this.alarmCollection.forEach(alarm => checkClock(alarm)),
            3000
        );
    }

    stop() {
        if (!this.timerId) {
            return;
        }
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(`Будильник "${alarm.id}" установлен на время ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


function testCase() {
    let dateTimeToFormattedTime = (dt) => dt.toTimeString().substr(0, 5);
    let alarmClock = new AlarmClock();

    alarmClock.addClock(
        dateTimeToFormattedTime(new Date()),
        () => console.log('Скоро спать'),
        1
    );

    alarmClock.addClock(
        dateTimeToFormattedTime(new Date(Date.now() + 60000)),
        () => {
            console.log('Пора готовиться ко сну!');
            alarmClock.removeClock(2);
        },
        2
    );

    alarmClock.addClock(
        dateTimeToFormattedTime(new Date(Date.now() + 2 * 60000)),
        () => {
            console.log('Иди спать, завтра рано на работу!');
            alarmClock.clearAlarms();
            alarmClock.printAlarms();
        },
        3
    );

    alarmClock.printAlarms();
    alarmClock.start();
}

testCase();