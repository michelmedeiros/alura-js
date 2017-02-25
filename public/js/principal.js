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

    var mensagensErro = validarPesoAltura(peso, altura);

    if (mensagensErro.length === 0) {
        var imc = peso / (altura * altura);
        valorAtualImc.textContent = Math.trunc(imc);
    } else {
        valorAtualImc.textContent = mensagensErro.filter(
            function(val) {
                return val;
            }
        ).join(', ');
        paciente.classList.add('paciente-invalido');
    }
}

function validarPesoAltura(peso, altura) {
    var mensagensErro = [];
    var pesoInvalido = peso <= 0 || peso >= 500;
    var alturaInvalida = altura <= 0 || altura >= 3.00;
    if (pesoInvalido) {
        mensagensErro.push(' Altura inválida: ' + altura);
    }
    if (alturaInvalida) {
        mensagensErro.push(' Peso inválido: ' + peso);
    }
    return mensagensErro;
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
