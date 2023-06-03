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

let memoria1 = 0;
let memoria2 = 0;
let operador = "";
let resultado = 0;

function resolver() {

    if(operador === "+"){
        resultado += parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador === "-"){
        resultado -= parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador === "/"){
        resultado = parseFloat(memoria[0]) / parseFloat(memoria[1]);
        display.value = resultado;
        memoria = [];
    }
    else if(operador === "x"){
        resultado = parseFloat(memoria[0]) * parseFloat(memoria[1]);
        display.value = resultado;
        memoria = [];
    }
}

uno.addEventListener("click", () => {
    display.value += uno.value;
})
dos.addEventListener("click", () => {
    display.value += dos.value;
})
tres.addEventListener("click", () => {
    display.value += tres.value;
})
cuatro.addEventListener("click", () => {
    display.value += cuatro.value;
})
cinco.addEventListener("click", () => {
    display.value += cinco.value;
})
seis.addEventListener("click", () => {
    display.value += seis.value;
})
siete.addEventListener("click", () => {
    display.value += siete.value;
})
ocho.addEventListener("click", () => {
    display.value += ocho.value;
})
nueve.addEventListener("click", () => {
    display.value += nueve.value;
})
cero.addEventListener("click", () => {
    display.value += cero.value;
})
borrar.addEventListener("click", () => {
    display.value = "";
    displaySecundario.value = "";
    resultado = 0;
})
punto.addEventListener("click", () => {
    display.value += punto.value;
})
sumar.addEventListener("click", () => {
    operador = "+";
    resultado = parseFloat(display.value);
    displaySecundario.value += display.value + " + ";
    display.value = "";
})
restar.addEventListener("click", () => {
    operador = "-";
    resultado = parseFloat(display.value);
    displaySecundario.value += display.value + " - ";
    display.value = "";
})
dividir.addEventListener("click", () => {})
multiplicar.addEventListener("click", () => {})
igual.addEventListener("click", () => {
    displaySecundario.value += display.value + " = ";
    resolver();
})