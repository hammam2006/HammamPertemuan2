"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    great() {
        console.log(`Hi,nama saya ${this.name} rumah saya di Kota ${this.address}`);
    }
}
class Employe extends Person {
    constructor(name, address, jobTilttle) {
        super(name, address);
        this.jobTittle = jobTilttle;
    }
    work() {
        console.log(`aku ${this.name} bekerja sabagai ${this.jobTittle}`);
    }
}
let employel = new Employe('Hammam', "ujungrusi", 'kebun');
employel.great();
employel.work();
