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

function inicio(){
    do {
        cobertura =prompt (nombreCliente + " ingrese qué cobertura le gustaría. Para Chocolate Negro, escriba negro; para Chocolate Blanco, escriba blanco");
        if (cobertura == "negro") {
            coberturaChocolateNegro();
        } else if (cobertura == "blanco") {
            coberturaChocolateBlanco();
        }else {
        alert("Ingrese una opcion valida: " + cobertura + " No es una opcion valida");
        }
    }while (cobertura !== "negro" && cobertura !== "blanco");
}
inicio ();

// Funciones
function coberturaChocolateNegro(){
    alert ( nombreCliente + ' elegiste Chocolate Negro para la cobertura');
        relleno =prompt ("Ahora toca elegir el relleno! Escriba dulce de leche o nutella");
        if(relleno == "dulce de leche"){
            rellenoDdL();
        }else if(relleno == "nutella"){
            rellenoNutella();
        } else {
            alert("Ingrese una opcion valida: " + relleno + " No es una opcion valida");
            coberturaChocolateNegro();
    }}

function coberturaChocolateBlanco(){
    alert ( nombreCliente + ' elegiste Chocolate Blanco para la cobertura');
    relleno = prompt ("Ahora toca elegir el relleno! Escriba dulce de leche o nutella");
    if(relleno  == "dulce de leche"){
        rellenoDdL();
    }else if(relleno == "nutella"){
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

let carrito = []

class Alfajor {
    constructor (cobertura, relleno, precio){
        this.cobertura = cobertura;
        this.relleno = relleno;
        this.precio = precio;
    }
}


const Alfajor1 = new Alfajor (cobertura, relleno, 200);
console.log(Alfajor1);
carrito.push(Alfajor1);
console.log(carrito);


let precio = 200
let cantidad = prompt("Por favor ingrese la cantidad de Alfajores que desea comprar")

carrito.push({Alfajor1, cantidad, precio});
console.log(carrito);

function final(){
    preguntaFinal = prompt( nombreCliente + " desea comprar más alfajores?");
    if(preguntaFinal !=="no"){
        inicio();
    }else if(preguntaFinal ==="no")
        alert("Muchisimas gracias por habernos elegido!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.Alfajor}, cantidad: ${carritoFinal.cantidad}`)
    })
}
final();

// inal = prompt("desea seguir comprando?")

// while (final !== "no"){
//     inicio();
//     break;
// }

// while(final === "no"){
//     alert("Muchisimas gracias por habernos elegido!")
//     carrito.forEach((carritoFinal) => {
//         console.log(`producto: ${carritoFinal.Alfajor}, cantidad: ${carritoFinal.cantidad}`)
//     })
// break;

// }


const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`el total a pagar por su compra es: ${total}`)


// const Alfajor2 = new Alfajor ("cobertura de Chocolate negro", " relleno de Nutella", "200")
// const

// const producto = [
//     {nombre: "Alfajor de Chocolate Negro con Relleno de Dulce de Leche", precio : 200},
//     {nombre: "Alfajor de Chocolate Negro con Relleno de Nutella", precio : 200},
//     {nombre: "Alfajor de Chocolate Blanco con Relleno de Dulce de Leche", precio : 200},
//     {nombre: "Alfajor de Chocolate Blanco con Relleno de Nutella", precio : 200},
// ];

// let compra = prompt ("Qué cantidad de" + Alfajor1 + " querés comprar?")

//     switch(compra) {
//         case relleno === 1:
//             precio = 300;
//             break;
//         case relleno === 2:
//             precio = 300;
//             break;
//         default:
//             break;
//     }

