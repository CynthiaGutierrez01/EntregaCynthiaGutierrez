// // Variables
let nombreCliente;
let relleno;
let cobertura;

// Función
function ingresarNombre() {
    nombreCliente = prompt ("Ingrese su nombre").toLowerCase();
}
ingresarNombre();

alert("Bienvenido/a "+ nombreCliente + " a La Alfajorera");

// Do/While - If/else

do {
    cobertura =parseInt(prompt (nombreCliente + " ingrese qué cobertura le gustaría. 1- Chocolate Negro, 2- Chocolate Blanco"));
    if (cobertura === 1) {
        coberturaChocolateNegro();
    } else if (cobertura === 2) {
        coberturaChocolateBlanco();
    }else {
    alert("Ingrese una opcion valida: " + cobertura + " \nNo es una opcion valida");
    }
}while (cobertura !== 1 && cobertura !== 2);

// Funciones
function coberturaChocolateNegro(){
    alert ( nombreCliente + ' elegiste Chocolate Negro para la cobertura');
        relleno =parseInt (prompt ("Presione 1 si desea que el relleno sea de dulce de leche o 2 si prefiere nutella"));
        if(relleno === 1){
            rellenoDdL();
        }else if(relleno === 2){
          rellenoNutella();
        } else {
            alert("Ingrese una opcion valida: " + relleno + " \nNo es una opcion valida");
            coberturaChocolateNegro();
    }}

function coberturaChocolateBlanco(){
    alert ( nombreCliente + ' elegiste Chocolate Blanco para la cobertura');
    relleno = parseInt(prompt ("Presione 1 si desea que el relleno sea de dulce de leche o 2 si prefiere nutella"));
    if(relleno === 1){
        rellenoDdL();
    }else if(relleno === 2){
        rellenoNutella();
    }else {
        alert("Ingrese una opcion valida: " + relleno + " \nNo es una opcion valida");
        coberturaChocolateBlanco();
    }}

function rellenoDdL(){
    alert("Usted eligió el relleno con dulce de leche");
}

function rellenoNutella(){
    alert("Usted eligió el relleno con nutella")
}

// Arrays

class Alfajor {
    constructor (cobertura, relleno, precio){
        this.cobertura = cobertura;
        this.relleno = relleno;
        this.precio = precio;
    }
}


// const Alfajor1 = new Alfajor ("cobertura de Chocolate negro", " relleno de Dulce de Leche", "200")
// const Alfajor2 = new Alfajor ("cobertura de Chocolate negro", " relleno de Nutella", "200")
// const

// const producto = [
//     {nombre: "Alfajor de Chocolate Negro con Relleno de Dulce de Leche", precio : 200},
//     {nombre: "Alfajor de Chocolate Negro con Relleno de Nutella", precio : 200},
//     {nombre: "Alfajor de Chocolate Blanco con Relleno de Dulce de Leche", precio : 200},
//     {nombre: "Alfajor de Chocolate Blanco con Relleno de Nutella", precio : 200},
// ];

let carrito = []

if (Alfajor == "Alfajor de Chocolate Negro con Relleno de Dulce de Leche" ||"Alfajor de Chocolate Negro con Relleno de Nutella" || "Alfajor de Chocolate Blanco con Relleno de Dulce de Leche" || "Alfajor de Chocolate Blanco con Relleno de Nutella" ){
    switch(producto) {
        case relleno === 1:
            precio = 300;
            break;
        case relleno === 2:
            precio = 300;
            break;
        default:
            break;
    }
}