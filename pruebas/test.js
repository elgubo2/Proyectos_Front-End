/*
Ejercicios nivelatorios para el coding
bootcamp.
- 1. Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y
haga un loop de 0 a 100 mostrando en la consola cada número del loop.
En caso de que el número de la iteración sumado con el número pasado por parámetro,
sea par, mostrá en la consola “El número x es par”.


function loopDePares(x){

    for(i=0 ;i<101 ;i++){
    if((i+x)%2==0){
    console.log(i +  " mas el numero pasado por parametro da par");
    }
    
    else{
    console.log(i);
    
    }
    }
    
    }
    loopDePares(1);


    2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número
y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
Ahora, modificar el código para que, en caso de que ese número sumado con el número
pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro.


function loopDeImpares(num, palabra) {
    for (i = 0; i < 101; i++) {
        if ((i + num) % 2 == 1) {
            console.log(i + " es " + palabra);
        }
        else {
            console.log(i);
        }
    }
}
loopDeImpares(1, "cualquiercosa");


/*3. Sumatoria
Debés crear una función llamada `sumattion` que reciba un número como parámetro y
que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
Ejemplo:
- sumattion(3) debe retornar 6 por que hace (1 +2 +3)
- sumattion(8) debe retornar 36


function sumattion(num, ) {
    for (i = 0; i < num; i++) {
        var sumados = (num*(num+1))/2;
    }
    console.log(sumados)
}
sumattion(4);

*/

/*- 4. Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas
pasado.
Ejemplo:
- nuevoArreglo(5) debe retornar [1,2,3,4,5]
- nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
*/


function nuevoArreglo(num) {

    for (i = 0; i < num; i++) {
        var arreglo = [];
        arreglo.push(i);
    }
    console.log(arreglo);
}
nuevoArreglo(4);
