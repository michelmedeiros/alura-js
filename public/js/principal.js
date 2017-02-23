var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

calcularImcPaciente(obterPropriedade("#primeiroPaciente"));
calcularImcPaciente(obterPropriedade("#segundoPaciente"));
calcularImcPaciente(obterPropriedade("#terceiroPaciente"));
calcularImcPaciente(obterPropriedade("#quartoPaciente"));
calcularImcPaciente(obterPropriedade("#quintoPaciente"))

function calcularImcPaciente(paciente) {
    var peso = obterValor(paciente, ".info-peso");
    var altura = obterValor(paciente, ".info-altura");
    var imc = peso / (altura * altura);
    var valorAtualImc = obterPropriedadePaciente(paciente, ".info-imc");
    valorAtualImc.textContent = Math.trunc(imc);

    console.log(peso);
    console.log(altura);
    console.log(imc);
}


function obterPropriedade(seletor) {
    return document.querySelector(seletor);
}

function obterPropriedadePaciente(paciente, seletor) {
    return paciente.querySelector(seletor);
}

function obterValor(element, seletor) {
    return element.querySelector(seletor).textContent;
}
