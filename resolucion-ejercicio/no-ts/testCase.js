"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
/* Casos de prueba, no editar nada */
function testCase1() {
  let numeros = [
    769082435, 210437958, 673982045, 375809214, 380564127,
  ];
  let resultado = (0, main_1.solucion)(numeros);
  console.log(resultado[0] == 1640793344 && resultado[1] == 2199437821);
}
function testCase2() {
  let numeros = [
    156873294, 719583602, 581240736, 605827319, 895647130,
  ];
  let resultado = (0, main_1.solucion)(numeros);
  console.log(resultado[0] == 2063524951 && resultado[1] == 2802298787);
}
function testCase3() {
  let numeros = [
    426980153, 354802167, 142980735, 968217435, 734892650,
  ];
  let resultado = (0, main_1.solucion)(numeros);
  console.log(resultado[0] == 1659655705 && resultado[1] == 2484892405);
}
testCase1();
testCase2();
testCase3();
