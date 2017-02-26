var titulo = obterPropriedade('.titulo');
titulo.textContent = 'Aparecida Nutricionista';
titulo.addEventListener("click", function() {
    console.log('Ola clique');
});

var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente) {
    console.log(paciente);
    calcularImcPaciente(paciente);
});

function calcularImcPaciente(paciente) {
    var peso = obterValor(paciente, '.info-peso');
    var altura = obterValor(paciente, '.info-altura');
    var nome = obterValor(paciente, '.info-nome');
    var gordura = obterValor(paciente, '.info-gordura');
    var valorAtualImc = obterPropriedadePaciente(paciente, '.info-imc');
    var mensagensErro = validarPaciente(peso, altura, nome, gordura);
    if (mensagensErro.length === 0) {
        var imc = calcularImc(peso, altura);
        valorAtualImc.textContent = imc;
    } else {

        var erros = mensagensErro.filter(
            function(erro) {
                return erro;
            }
        ).join(', ');
        valorAtualImc.textContent = erros;
        paciente.classList.add('paciente-invalido');
    }
    return valorAtualImc.textContent;
}

function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPaciente(peso, altura, nome, gordura) {
    var mensagensErro = [];
    var pesoInvalido = peso <= 0 || peso >= 500;
    var alturaInvalida = altura <= 0 || altura >= 3.00;
    if (pesoInvalido) {
        mensagensErro.push('Peso inválido: ' + altura);
    }
    if (alturaInvalida) {
        mensagensErro.push('Altura inválida:  ' + peso);
    }

    if (!nome) {
        mensagensErro.push('O nome deve ser informado');
    }

    if (!gordura) {
        mensagensErro.push('A gordura corporal deve ser informada');
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
