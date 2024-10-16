const form = document.getElementById('formulario-agenda');
const contatos = [];
const telefones = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('input-nome-contato');
    const inputTel = document.getElementById('input-numero-contato');

    // Verificando se nome ou telefone já foi adicionado
    if (contatos.includes(inputNome.value) || telefones.includes(inputTel.value)) {
        alert('Nome ou telefone já cadastrado!');
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputTel.value);

        const corpoDaTabela = document.querySelector('tbody');
        const novaLinha = corpoDaTabela.insertRow();

        let cellNome = novaLinha.insertCell(0);
        let cellTelefone = novaLinha.insertCell(1);

        cellNome.textContent = inputNome.value;
        cellTelefone.textContent = inputTel.value;

        // Limpar os campos após adicionar
        inputNome.value = '';
        inputTel.value = '';
    }
}

function atualizarTabela() {
    // Nada precisa ser feito aqui, já que estamos manipulando as linhas diretamente na função adicionarLinha
}
