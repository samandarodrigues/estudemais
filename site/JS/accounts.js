const emailInput = document.getElementById('email');
const togglePasswordVisibility = document.getElementById('toggle-password-visibility');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordBeforeEmailError = document.getElementById('password-before-email-error');
const loginBtn = document.getElementById('login-btn');

// Função para validar o email
function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

    if (emailRegex.test(email)) {
        emailError.classList.add('d-none');
    } else {
        emailError.classList.remove('d-none');
    }
}

// Função para validar a senha
function validatePassword() {
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (passwordRegex.test(password)) {
        passwordError.classList.add('d-none');
    } else {
        passwordError.classList.remove('d-none');
    }
}

// Mostrar a mensagem de erro para senha se email não estiver preenchido
passwordInput.addEventListener('input', () => {
    if (emailInput.value === '') {
        passwordBeforeEmailError.style.display = 'block';
    } else {
        passwordBeforeEmailError.style.display = 'none';
    }
    validatePassword();
    toggleButtonState();
});

// Validar e-mail enquanto digita
emailInput.addEventListener('input', () => {
    validateEmail();
    toggleButtonState();

    // Esconder a mensagem "Preencha o e-mail primeiro" se o e-mail for preenchido
    if (emailInput.value !== '') {
        passwordBeforeEmailError.style.display = 'none';
    }
});

// Habilitar/desabilitar o botão de login
function toggleButtonState() {
    const isEmailValid = emailInput.value !== "" && emailError.classList.contains('d-none');
    const isPasswordValid = passwordInput.value !== "" && passwordError.classList.contains('d-none');

    // O botão será habilitado apenas se ambos email e senha forem válidos
    if (isEmailValid && isPasswordValid) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}

// Toggle de visibilidade da senha
togglePasswordVisibility.addEventListener('click', () => {
    // Alterna entre 'password' e 'text' para mostrar ou ocultar a senha
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Alterna os ícones de visibilidade
    const eyeIcon = togglePasswordVisibility.querySelector('i');
    if (type === 'password') {
        // A senha está oculta, mostramos o ícone de mostrar senha
        eyeIcon.classList.remove('bxs-hide');
        eyeIcon.classList.add('bxs-show');
    } else {
        // A senha está visível, mostramos o ícone de esconder senha
        eyeIcon.classList.remove('bxs-show');
        eyeIcon.classList.add('bxs-hide');
    }
});

    // Função para validar o email
    function validateEmail() {
        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

        if (emailRegex.test(email)) {
            emailError.classList.add('d-none');
            localStorage.setItem('email', email); // Salva no localStorage
        } else {
            emailError.classList.remove('d-none');
        }
    }

    // Evento para salvar email sempre que perder o foco
    emailInput.addEventListener('blur', validateEmail);