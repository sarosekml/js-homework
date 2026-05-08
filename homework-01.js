/*
Написать код, рассчитывающий дистанцию о объекта: 

addressLat - адрес назначения lat (например: 10)
addressLong - адрес назначения long
positionLat - текущее положение пользователя lat
positionLong - текущее положение пользователя long
В результате на основе этих координат нужно посчитать расстояние от текущего месторасположения до назначения.
*/

//address
let addressLat = 96; // ← Y2
let addressLong = 64; // ← X2

//user position
let positionLat = 8; // ← Y1
let positionLong = 16; // ← X1

//distance
//c = √(a² + b²)
let catA = addressLong - positionLong; //a
let catB = addressLat - positionLat; // b

let distanceToAddress = Math.sqrt(catA ** 2 + catB ** 2); // c

console.log(distanceToAddress); //answer