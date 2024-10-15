"use strict";
let x = null;
console.log("nilai_x", x);
var person = { nama: "arlot", umur: 10 };
console.log("nama hero saya", person);
// array
var numbers = [1, 2, 3, 4, 5];
console.log("nomor urut", numbers);
//tuple
var user = ["gajah", 100];
console.log("saya", user);
//any
var random = 25;
console.log("nilai  belum diubah", random);
random = "mau diubah";
console.log("nilai setelah diubah", random);
//union
var id;
id = 123;
console.log(id);
//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let angkat = 1;
while (angkat <= 5) {
    console.log(angkat);
    angkat++;
}
//do while loop
var number = 10;
do {
    console.log(number);
    number++;
} while (number <= 20);
var hero = "popo";
switch (hero) {
    case "Nana":
        console.log("Hero kesukaan");
        break;
    case "Hylos":
        console.log("hewan nana");
        break;
    default:
        console.log("suami nana");
}
var nilai = 95;
if (nilai >= 90) {
    console.log("nilai", nilai, "mendaptkan nilai A");
    { }
}
else if (nilai <= 89) {
    console.log("nilai B");
}
else if (nilai < 74) {
    console.log("nilai c");
}
else {
    console.log("nilai D");
}
