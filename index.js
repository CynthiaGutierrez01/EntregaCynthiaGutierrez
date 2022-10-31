// // Variables
// let nombreCliente;
// let cobertura;
// let relleno;


function ingresarNombre() {
    nombreCliente = prompt ("Ingrese su nombre").toLowerCase();
}
ingresarNombre();

alert("Bienvenido/a "+ nombreCliente + " a La Alfajorera");

let cobertura = prompt (nombreCliente + " ingrese qué cobertura le gustaría. 1- Chocolate Negro, 2- Chocolate Blanco").toLowerCase();

do {
    cobertura =parseInt(prompt (nombreCliente + " ingrese qué cobertura le gustaría. 1- Chocolate Negro, 2- Chocolate Blanco").toLowerCase());
    if (cobertura === 1) {
        alert ( nombreCliente + ' elegiste Chocolate Negro para la cobertura');
        relleno =parseInt (prompt ("Presione 1 si desea que el relleno sea de dulce de leche o 2 si prefiere nutella"));
        if(relleno === 1){
            alert("Usted eligió un alfajor con cobertura de Chocolate Negro, relleno con dulce de leche");
        }else if(relleno === 2){
            alert("Usted eligió un alfajor con cobertura de Chocolate Negro, relleno con nutella")
        } else{
            alert("Ingrese una opcion valida: " + relleno + " \nNo es una opcion valida");
        }
    } else if (cobertura === 2) {
        alert ( nombreCliente + ' elegiste Chocolate Blanco para la cobertura');
        relleno = parseInt(prompt ("Presione 1 si desea que el relleno sea de dulce de leche o 2 si prefiere nutella"));
        if(relleno === 1){
            alert("Usted eligió un alfajor con cobertura de Chocolate Blanco, relleno con dulce de leche");
        }else if(relleno === 2){
            alert("Usted eligió un alfajor con cobertura de Chocolate Blanco, relleno con nutella")
        }else {
            alert("Ingrese una opcion valida: " + relleno + " \nNo es una opcion valida");
        }
    } else {
        alert("Ingrese una opcion valida: " + cobertura + " \nNo es una opcion valida");
    }
} while (cobertura !== 1 && cobertura !== 2);
