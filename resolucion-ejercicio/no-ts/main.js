"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solucion = void 0;
//resultado esperado testCase1: [1640793344, 2199437821]
//resultado esperado testCase2: [2063524951, 2802298787]
//resultado esperado testCase3: [1659655705 , 2484892405]
function solucion(numeros) {
    const sortedArray = numeros.sort((a, b) => {
        if(a<b) {
          return -1
        }
        if(a>b){
          return 1
        }
        return 0
      })
  
      const min = sortedArray.slice()
      min.shift()
      const minSum = min.reduce((n, sum) => sum += n)
  
      const max = sortedArray.slice()
      max.pop()
      const maxSum = max.reduce((n, sum) => sum += n)
      console.log(maxSum, minSum );

      return [maxSum, minSum]
}
exports.solucion = solucion;
