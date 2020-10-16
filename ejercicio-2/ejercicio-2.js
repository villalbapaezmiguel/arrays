function ejemplo1(){
    
    document.getElementById("PrimerEntero").value="10,20,30,40,50";
    //el documento con el elemtento con su ID y le asignamos un valor nuevo :"10,20,30,40,50".
}
var array=[];
function ejemplo2(){

    for(var posicion = 0; posicion<5;posicion++){

        array.push(parseInt(Math.random() * 100));//el array va agregando y parseando un numero random del 1 al 100
    }
    document.getElementById("SegundoEntero").value=array;//muestra en el input los numeros random
}
var arrayConcatenar=[];
function concatenar(){//en esta funcion vamos a concatenar los numeros.

    //El método split () se usa para dividir una cadena en una matriz de subcadenas y
    // devuelve la nueva matriz.    
    let arrayPrimero=document.getElementById("PrimerEntero").value.split(/,/);
    let arraySegundo=document.getElementById("SegundoEntero").value.split(/,/);
    //saca del documento el elemento con sus ID y le saca su valor 
    //luego divide las cadenas y los agrega en la matriz.
    for(var i = 0;i <array.length;i++ ){

        //el metodo push agrega nuevos elementos al final de una matriz y
        // devuelve la nueva longitud.
        arrayConcatenar.push(arrayPrimero[i]);
        arrayConcatenar.push(arraySegundo[i]);
        //va recorriendo la matriz y lo agrega dentro del arrayConcatenar 
    }

    document.getElementById("resultado").value = arrayConcatenar;//muestra el resultado en el html
}
function reiniciar(){
    location.reload("ejercicio-2.html");//recarga el documento actual.
}




















/**function ejemplo1(){

    document.getElementById("PrimerEntero").value = "10,15,20,30,35";

}
let array=[];
function ejemplo2(){

    for(let i =0;i <5;i++){

        array.push(parseInt(Math.floor(Math.random() * 100)));
    }
    
    document.getElementById("SegundoEntero").value = array ;
}
var array1=[];
function concatenar(){
    
    let matriz1 = document.getElementById("PrimerEntero").value.split(/,/);
    let matriz2 = document.getElementById("SegundoEntero").value.split(/,/);

    for(let posicion = 0 ;posicion <array.length;posicion++){

        array1.push(matriz1[posicion]);
        array1.push(matriz2[posicion]);
    }
    document.getElementById("resultado").value= array1;
}
function reiniciar(){
   location.reload('ejercicio-2.html');
} */