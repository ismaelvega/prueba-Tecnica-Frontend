# EME Technologies 'resolucion-ejercicio'

**Directrices:**

- Usted debe resolver el ejercicio en el archivo **src/main.ts** para que este pueda ejecutar la resolucion del problema con el comando “npm start”.

- Usted solo debe modificar el archivo **src/main.ts,** en caso de modificar algún otro archivo se anulará la resolucion del ejercicio

- Las configuraciones del linter no deben dar ningún error
- En el archivo usted hallara la funcion "**solucion**", debe solamente completar su ejercicio en esta
- En el archivo **testCase.ts** estaran los casos de prueba, su ejercicio debe dar **true** en estos 3 casos de prueba
- no se permiten variable de tipo **any** asi que debes tipar todas tus variables segun corresponda

**SI NO DOMINAS TYPESCRIPT**

- si no dominas typescript, puedes usar resolver el ejercicio con javascript en el archivo **no-ts/main.js**
- la solucion se resuelve en la funcion **solucion**
- en el archivo **testCase.js** estaran los casos de prueba
- cuando se ejecute el comando **npm run no-ts** deben dar true todos los casos de prueba
- Usted solo debe modificar el archivo **no-ts/main.js** en caso de modificar algún otro archivo se anulará la resolucion del ejercicio

## Explicacion del ejercicio

Dados cinco enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego imprima los respectivos valores mínimo y máximo como una sola línea de dos enteros largos separados por espacios.

### Ejemplo

**_arr=[1,3,5,7,9]_**

La suma mínima es **_1 + 3 + 5 + 7 = 16_** y la suma máxima es **_3 + 5 + 7 + 9 = 24_**. La función devuelve como un array:

```
[16, 24]
```

**Formato de entrada**
Un array con cinco enteros

**Formato de salida**
Un array de 2 numeros enteros **_[ sumaMinima, sumaMaxima ]_**

# NOTA

Avisar al encargado de la prueba en que lenguaje se resolvera la prueba
