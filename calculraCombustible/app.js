
function calcularLitros(){
const elemntokm  = document.getElementById("textokm");
const textokm = elemntokm.value;
const cantkm = number(textokm);

const cantLitros = cantkm / 8.8;

const resultado = document.getElementById("textoResultado");
resultado.textContent = "cargar" + cantLitros  + "litros de conbustible"
}