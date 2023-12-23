function sumar(numero1, numero2){
    resultado = numero1 + numero2;
    return (resultado);
}

function mostrarResultado(){
    let elemnto1 = document.getElementById("primerNumero");
    let elemnto2 = document.getElementById("primerNumero");
    let elementoTexto = document.getElementById("textoResultado");
    let elemntoSuma = sumar(elemnto1.value, elemnto2.value);

    elementoTexto.textContent = elemntoSuma

}


