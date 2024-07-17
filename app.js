
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;





function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(`${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else
    // El usuario no acertó
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El número secreto es mayor');
    }  
    intentos++;
    limpiarCaja(); 
    return;   
}


//Borra el numero que ingresa el usuario.
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
    
}


// Genera un numero ramdon entre 1 y 10.
function generarNumeroSecreto() {
    //creamos una variable para almacenar los numeros que salieron en una lista para que no se vuelvan a repetir
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista se llama nuevamente a la funcion para que genere otro numero
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //push agrega el numero al final de la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }        
    }
}
    


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;   
    console.log(numeroSecreto);
}



function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo    
    // Generar el numero aleatorio    
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
