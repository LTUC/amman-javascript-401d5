'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('Walking....',this.name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    speak() {
        console.log('WOOf from class');
    }
}

module.exports = Dog;
