function mostrar(){

    let arrays =[];

    for(let posicion = 0; posicion <10; posicion++){

        arrays[posicion]=prompt("Ingrese numero");
        arrays[posicion]=parseInt(arrays[posicion]);

    }
    
    for(let i = 0; i<10;i++){
        
        console.log("posicion " +i+" y su valor es " + arrays[i]);
    }
}
/**1) Crea un array de 10 posiciones de números con valores pedidos por teclado.
 *  Muestra por consola el indice y el valor al que corresponde. Haz dos métodos,
 *  uno para rellenar valores y otro para mostrar. */

let media =0;
let contador =0;
let numMaximo=0;
let numMinimo=0;
let acumulador =0;
let array= [];
function comenzar(){
    
    let bandera=true;
    let respuesta = `si`;
    
        while(respuesta == `si`){

            array=document.getElementById("numeroIngresado").value ;
            array=prompt(`Ingrese numero`);
            array=parseInt(array);
            acumulador+=array;    

            if(bandera==true){
                numMaximo =array;
                numMinimo =array;
                bandera=false ;
            }
        
            if(array > numMinimo){
                numMaximo = array;
    
            }
            if(array < numMaximo){
                numMinimo = array;
    
            }   
            contador ++;
            respuesta=prompt(`desea continuar ??`);

        }
    }
    function mostrarRasultado(){
        
        //acumulador = acumulador+array ;
        media = acumulador /contador;
    
        document.getElementById("textMayor").value = numMaximo;
        document.getElementById("textMenor").value = numMinimo;
        document.getElementById("textresultado").value = media;

    }
    
    function enviar(){

        let mostrar = document.getElementById("textnumero").value ;

        
    }
/**Dado un vector de enteros, comprobar el mayor, 
el menor y por último la media de todos.

El botón “Cargar Ejemplo” pondrá un ejemplo de números predefinidos.*/