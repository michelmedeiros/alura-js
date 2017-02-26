var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();
    excluirMensagensErro();
    var form = document.querySelector('#formAdiciona');
    var paciente = obtemPacienteFormulario(form);
    var pacienteTR = criarPacienteTR(paciente);
    var erros = validarPaciente(paciente.peso, paciente.altura, paciente.nome, paciente.gordura);
    if (erros.length === 0) {
        adicionarPacienteTabela(pacienteTR);
        form.reset();
    } else {
        criarMensagensDeErro(erros);
        console.log(erros);
    }

});

function criarMensagensDeErro(erros) {
    var mensagemErro = document.querySelector('#mensagem-erro');
    erros.forEach(function(erro) {
        var li = criarElemento('li', 'info-erro', erro);
        li.textContent = erro;
        mensagemErro.appendChild(li);
    });
}


function excluirMensagensErro() {
    var mensagemErro = document.querySelector('#mensagem-erro');
    mensagemErro.innerHTML = "";
}

function criarPacienteTR(paciente) {
    var pacienteTR = document.createElement('tr');
    pacienteTR.classList.add('paciente');
    pacienteTR.appendChild(criarElemento('td', 'info-nome', paciente.nome));
    pacienteTR.appendChild(criarElemento('td', 'info-peso', paciente.peso));
    pacienteTR.appendChild(criarElemento('td', 'info-altura', paciente.altura));
    pacienteTR.appendChild(criarElemento('td', 'info-gordura', paciente.altura));
    pacienteTR.appendChild(criarElemento('td', 'info-imc', paciente.imc));

    var pacienteImcTD = pacienteTR.querySelector('.info-imc');
    pacienteImcTD.textContent = calcularImcPaciente(pacienteTR);

    return pacienteTR;
}


function criarElemento(tag, classe, dado) {
    var element = document.createElement(tag);
    element.classList.add(classe);
    element.textContent = dado;
    return element;
}

function obtemPacienteFormulario(form) {
    var paciente = {
        altura: form.altura.value,
        peso: form.peso.value,
        nome: form.nome.value,
        gordura: form.gordura.value,
        imc: calcularImc(peso, altura)
    };
    return paciente;
}

function adicionarPacienteTabela(pacienteTR) {
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTR);
}
