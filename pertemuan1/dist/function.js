"use strict";
// function Declaration
function sapa(nama, umur) {
    console.log("Halo,aku " + nama + " umurku " + umur);
}
sapa(" hammam ", 19);
//annonymus function
const pcikers = function (name, role) {
    return name + role;
};
let pick = pcikers(" nana ", " mage ");
console.log("saya ingin pergi ke midlane menggunakan " + pick);
//arrow function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
