function Opciones(){
	var option;
	option=prompt('Introduce un número entre el 1 y el 5');
	if(option==""){alert('No has introducido un número');}
	option=Number(option);
	switch(option){
		case 0: alert('No has introducido un número válido'); break;
		case 1: Numeros(); break;
		case 2: Napoleon(); break;
		case 3: PromedioFinal(); break;
        case 4: Frutas(); break;
        case 5: ContadorNombre(); break;
		default: location.reload();
	}
};

Opciones();

//1-Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números desde el 0 hasta el número que ingresó el usuario.

function Numeros(){
var numeros = prompt("Ingrese un número del 1 al 100");
for (var i = 1; i <= numeros; i++) {
console.log(i);
}
};

//2 -“¿De qué color es el caballo blanco de Napoleón?

function Napoleon(){
while (caballo_napoleon != "blanco"){
var caballo_napoleon = prompt("¿De qué color es el caballo blanco de Napoleón?").toLowerCase();
console.log(caballo_napoleon);
}
};

//3 -Promedio de notas

function PromedioFinal(){
var n1 = prompt("Ingrese su promedio de Matemáticas");
var n2 = prompt("Ingrese su promedio de Física");
var n3 = prompt("Ingrese su promedio de Ciencias");
var p = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
totalpromedio = Math.round(p);
alert("Su promedio es: "+totalpromedio)
};

//4- Frutas
function Frutas(){

 var f1 = prompt("Ingrese el nombre una fruta");
 var f2 = prompt("Ingrese el nombre de una segunda fruta");
 var f3 = prompt("Ingrese el nombre de una última fruta");

 var frutas = [f1, f2, f3]

 for (let nombre_frutas of frutas) {
     if (nombre_frutas.toLowerCase() === "manzana") {
         continue;
     }
     console.log(nombre_frutas);
    };
};

//5- Cantidad de vocales y consonantes

function ContadorNombre(){

var nombrepersona = prompt("Ingrese su primer nombre");
nombrepersona = nombrepersona.toLowerCase();

    let vocales = [];
    let consonantes = [];
    let letras = [];
    
    for (letra of nombrepersona) {
            if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
                vocales.push(letras);
            } else {
                consonantes.push(letra);
            }
        }
    alert("Tu nombre tiene " + vocales.length + " vocales " + "y " + consonantes.length + " consonantes");
    console.log("Tu nombre tiene " + vocales.length + " vocales " + "y " + consonantes.length + " consonantes");

};