// Escutando o clique no botão de inscrição
document.getElementById('subscribeButton').addEventListener('click', function() {
    // Removendo a classe 'hidden' para mostrar o pop-up
    document.getElementById('emailPopup').classList.remove('hidden');
});

// Função para fechar o pop-up
function closePopup() {
    // Adicionando a classe 'hidden' para esconder o pop-up
    document.getElementById('emailPopup').classList.add('hidden');
}

// Função para inscrever o usuário
function subscribe() {
    // Pegando o valor do input de e-mail
    var email = document.getElementById('emailInput').value;
    // Exibindo uma mensagem de agradecimento
    alert('Obrigado por se inscrever, ' + email + '!');
    // Fechando o pop-up após a inscrição
    closePopup();
}
