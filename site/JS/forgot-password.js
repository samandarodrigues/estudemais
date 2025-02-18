const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const submitBtn = document.getElementById('submit-btn');

// Função de validação de e-mail
function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

    // Verificar se o e-mail corresponde ao regex
    if (emailRegex.test(email)) {
        console.log("Email válido");
        emailError.classList.add('d-none');  // Ocultar a mensagem de erro
    } else {
        console.log("Email inválido");
        emailError.classList.remove('d-none');  // Exibir a mensagem de erro
    }
}

// Adicionar o evento para validar enquanto o usuário digita
emailInput.addEventListener('input', validateEmail);

// Validação ao clicar no botão de envio
submitBtn.addEventListener('click', function(event) {
    validateEmail();  // Chama a validação ao tentar enviar
    if (emailError.classList.contains('d-none')) {
        // Se o e-mail for válido, o envio pode prosseguir
        alert('Instruções enviadas!');
    } else {
        // Se o e-mail for inválido, impede o envio
        event.preventDefault();
    }
});
