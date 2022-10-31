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

cobertura = parseInt (prompt (nombreCliente + " ingrese qué cobertura le gustaría. 1- Chocolate Negro, 2- Chocolate Blanco"));

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
            alert("Usted eligió un alfajor con cobertura de Chocolate Negro, relleno con dulce de leche");
        }else if(relleno === 2){
            alert("Usted eligió un alfajor con cobertura de Chocolate Negro, relleno con nutella")
        } else {
            alert("Ingrese una opcion valida: " + relleno + " \nNo es una opcion valida");
            coberturaChocolateNegro();
    }}

function coberturaChocolateBlanco(){
    alert ( nombreCliente + ' elegiste Chocolate Blanco para la cobertura');
    relleno = parseInt(prompt ("Presione 1 si desea que el relleno sea de dulce de leche o 2 si prefiere nutella"));
    if(relleno === 1){
        alert("Usted eligió un alfajor con cobertura de Chocolate Blanco, relleno con dulce de leche");
    }else if(relleno === 2){
        alert("Usted eligió un alfajor con cobertura de Chocolate Blanco, relleno con nutella")
    }else {
        alert("Ingrese una opcion valida: " + relleno + " \nNo es una opcion valida");
        coberturaChocolateBlanco();
    }}