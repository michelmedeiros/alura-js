var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente) {
    console.log(paciente);
    calcularImcPaciente(paciente);
});

function calcularImcPaciente(paciente) {
    var peso = obterValor(paciente, '.info-peso');
    var altura = obterValor(paciente, '.info-altura');
    var valorAtualImc = obterPropriedadePaciente(paciente, '.info-imc');
    var pesoValido = peso > 0 && peso < 500;
    var alturaValida = altura > 0 && altura < 3.00;
    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        valorAtualImc.textContent = Math.trunc(imc);
        console.log(peso);
        console.log(altura);
        console.log(imc);
    } else {
        var mensagemErro = 'Dado(s) inválido(s): ';
        if (!alturaValida) {
            mensagemErro += ' Altura ' + altura;
        }
        if (!pesoValido) {
            mensagemErro = !alturaValida ? mensagemErro + ', ' : '';
            mensagemErro += ' Peso ' + peso;
        }
        valorAtualImc.textContent = mensagemErro;
        paciente.classList.add('paciente-invalido');
        console.log(mensagemErro);
    }
}

function isPesoValido(peso) {
    return peso > 0 && peso < 500;
}

function isAlturaValida(altura) {
    return altura > 0 && altura < 3.00;
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
