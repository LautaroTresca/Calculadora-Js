const display = document.getElementById("display");
const displaySecundario = document.getElementById("displaySecundario");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");
const borrar = document.getElementById("borrar");
const dividir = document.getElementById("dividir");
const multiplicar = document.getElementById("multiplicar");
const restar = document.getElementById("restar");
const sumar = document.getElementById("sumar");
const punto = document.getElementById("punto");
const igual = document.getElementById("igual");

let operador = "";
let memoria = 0;
let resultado = 0;


function resolver() {
    if(operador === "+"){
        resultado = memoria + parseFloat(display.value);
    }
    else if(operador === "-"){
        resultado = memoria - parseFloat(display.value);
    }
    else if(operador === "x"){
        resultado = memoria * parseFloat(display.value);
    }
    else if(operador === "÷"){
        resultado = memoria / parseFloat(display.value);
    }
    
    display.value = `${resultado} = ` ;
    displaySecundario.value = parseFloat(display.value);
    memoria = 0;
}

function verificarDisplay() {
    if(display.value === ""){
        display.value = 0;
    }
}

function reiniciarDisplay() {
    if(display.value === resultado + " = "){
        display.value = "";
    }
}

function reiniciarDisplaySecundario(){
    if(displaySecundario.value == resultado){
        displaySecundario.value = "";
    }
}


sumar.addEventListener("click", () => {
    if(display.value !== ""){
        operador = "+";
        memoria += parseFloat(display.value);
        displaySecundario.value += operador;
        display.value = "";   
    }
});



restar.addEventListener("click", () => {
    if(display.value !== ""){
        operador = "-";
        memoria = parseFloat(display.value);
        displaySecundario.value += operador;
        display.value = "";
    }
});



multiplicar.addEventListener("click", () => {
    if(display.value !== ""){
        operador = "x";
        memoria = parseFloat(display.value);
        displaySecundario.value += operador;
        display.value = "";
    }
});



dividir.addEventListener("click", () => {
    if(display.value !== ""){
        operador = "÷";
        memoria = parseFloat(display.value);
        displaySecundario.value += operador;
        display.value = "";
    }
});



uno.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += uno.value;
    displaySecundario.value += uno.value;
});



dos.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += dos.value;
    displaySecundario.value += dos.value;
});



tres.addEventListener("click", () => {
    reiniciarDisplay();
    reiniciarDisplaySecundario();
    display.value += tres.value;
    displaySecundario.value += tres.value;
});



cuatro.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += cuatro.value;
    displaySecundario.value += cuatro.value;
});



cinco.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += cinco.value;
    displaySecundario.value += cinco.value;
});



seis.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += seis.value;
    displaySecundario.value += seis.value;
});



siete.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += siete.value;
    displaySecundario.value += siete.value;
});



ocho.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += ocho.value;
    displaySecundario.value += ocho.value;
});



nueve.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += nueve.value;
    displaySecundario.value += nueve.value;
});



cero.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += cero.value;
    displaySecundario.value += cero.value;
});



borrar.addEventListener("click", () => {
    display.value = "";
    displaySecundario.value = "";
    resultado = 0;
    memoria = 0;
});



punto.addEventListener("click", () => {
    reiniciarDisplay();
    display.value += punto.value;
});



igual.addEventListener("click", () => {
    if(display.value === ""){
        memoria += 0;
    }
    verificarDisplay();
    resolver();
});