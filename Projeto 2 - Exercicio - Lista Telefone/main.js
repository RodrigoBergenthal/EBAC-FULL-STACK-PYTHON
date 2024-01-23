document.addEventListener('DOMContentLoaded', function() {     // Espera que o DOM seja totalmente carregado

    const form = document.getElementById("form-cadastro");
    const tabelaDeContatos = document.getElementById("tabela-contatos");

    form.addEventListener("submit", function(e) {   // Impede o envio padrão do formulário
        e.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;   // Obtém os valores dos campos de entrada

    var newrow = tabelaDeContatos.insertRow();   // Cria uma nova linha na tabela
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    form.reset()  // Limpa os campos do formulário
    })
}) 
