document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var apiUrl = 'http://localhost:3333/authenticate'; // Seu endpoint de autenticação

    axios.post(apiUrl, {
        email: email,
        password: password
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Login successful');
            // Armazena o token JWT no localStorage
            localStorage.setItem('jwtToken', response.data.token);
            // Redireciona para outra página após o login bem-sucedido
            window.location.href = 'dashboard.html';
        } else {
            console.error('Login failed');
        }
    })
    .catch(error => {
        console.error('Erro no servidor:', error.response.data.message);
        // Aqui você pode exibir uma mensagem de erro para o usuário, informando que houve um erro no servidor
        var errorMessage = error.response.data.message;
        document.getElementById('error-message').textContent = errorMessage;
    });
});
