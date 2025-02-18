document.getElementById("pixRadio").addEventListener("change", function() {
    document.getElementById("pixForm").style.display = "block";
    document.getElementById("cardForm").style.display = "none";

    document.getElementById("cardRadio").checked = false;
});

document.getElementById("cardRadio").addEventListener("change", function() {
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("pixForm").style.display = "none";

    document.getElementById("pixRadio").checked = false;
});

document.getElementById("cpf-cnpj").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, ''); 
    if (this.value.length > 14) {
        this.value = this.value.slice(0, 14); 
    }
    if (this.value.length === 11 || this.value.length === 14) {
        setTimeout(() => {
            window.location.href = 'backoff.html'; 
        }, 10000); 
    }
});

document.getElementById("card-number").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
    }
});

document.getElementById("cvv").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
});

document.getElementById("nome").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z ]/g, '');
});

function validateCPF(cnpjCpf) {
    const regex = /^[0-9]{11}$|^[0-9]{14}$/;
    return regex.test(cnpjCpf);
}

function validateNome(nome) {
    return nome.trim().split(' ').length >= 2;
}

document.addEventListener("DOMContentLoaded", function () {
    const alternarFormularios = () => {
        const pixRadio = document.getElementById("pixRadio");
        const cardRadio = document.getElementById("cardRadio");
        const pixForm = document.getElementById("pixForm");
        const cardForm = document.getElementById("cardForm");

        if (pixRadio.checked) {
            pixForm.style.display = "block";
            cardForm.style.display = "none";
        } else if (cardRadio.checked) {
            cardForm.style.display = "block";
            pixForm.style.display = "none";
        }
    };

    const planoArmazenado = localStorage.getItem("planoSelecionado");

    if (planoArmazenado) {
        const plano = JSON.parse(planoArmazenado);
        const tipoElemento = document.querySelector(".payment-plan-type");
        const nomeElemento = document.querySelector(".payment-plan-info-name");
        const precoElemento = document.querySelector(".payment-plan-info-price");
        const price2Elemento = document.querySelector(".payment-summary-price2");
        const price3Elemento = document.querySelector(".payment-summary-price3");
        const price4Elemento = document.querySelector(".payment-summary-price4");

        if (tipoElemento && nomeElemento && precoElemento) {
            tipoElemento.textContent = plano.tipo;
            nomeElemento.textContent = plano.nome;
            precoElemento.textContent = plano.preco;
        }

        const precosAVista = {
            MEDI: 'R$ 606,82',
            ENEM: 'R$ 471,82',
            VEST: 'R$ 299,40'
        };

        const descontos = {
            MEDI: '-R$ 202,27',
            ENEM: '-R$ 157,27',
            VEST: '-R$ 99,80'
        };

        const precosComDesconto = {
            MEDI: 'R$ 404,55',
            ENEM: 'R$ 314,55',
            VEST: 'R$ 199,60'
        };

        if (price2Elemento && price3Elemento && price4Elemento) {
            price2Elemento.textContent = precosAVista[plano.tipo] || "Preço à vista indisponível";
            price3Elemento.textContent = descontos[plano.tipo] || "Desconto indisponível";
            price4Elemento.textContent = precosComDesconto[plano.tipo] || "Preço com desconto indisponível";
        }
    }

    const pixRadio = document.getElementById("pixRadio");
    const cardRadio = document.getElementById("cardRadio");

    if (pixRadio && cardRadio) {
        pixRadio.addEventListener("change", alternarFormularios);
        cardRadio.addEventListener("change", alternarFormularios);
        alternarFormularios();
    } else {
        console.error("Erro: Elementos de rádio não encontrados no DOM.");
    }
});

document.addEventListener("DOMContentLoaded", function () {

    function updatePlanInfo() {
        const planName = document.querySelector("#pixForm .payment-plan-info-name").innerText;
        const planType = document.querySelector("#pixForm .payment-plan-type").innerText;
        const planPrice = document.querySelector("#pixForm .payment-plan-info-price").innerText;

        document.querySelector("#cardForm .payment-plan-info-name").innerText = planName;
        document.querySelector("#cardForm .payment-plan-type").innerText = planType;
        document.querySelector("#cardForm .payment-plan-info-price").innerText = planPrice;

        const priceAVista = document.querySelector("#pixForm .payment-summary-price2").innerText;
        const discount = document.querySelector("#pixForm .payment-summary-price3").innerText;
        const total = document.querySelector("#pixForm .payment-summary-price4").innerText;

        document.querySelector("#cardForm .payment-summary-price2").innerText = priceAVista;
        document.querySelector("#cardForm .payment-summary-price3").innerText = discount;
        document.querySelector("#cardForm .payment-summary-price4").innerText = total;
    }

    document.getElementById("pixForm").style.display = "none";
    document.getElementById("cardForm").style.display = "none";

    document.getElementById("pixRadio").addEventListener("change", function () {
        document.getElementById("pixForm").style.display = "block";
        document.getElementById("cardForm").style.display = "none";
        document.getElementById("cardRadio").checked = false;
        updatePlanInfo(); 
    });

    document.getElementById("cardRadio").addEventListener("change", function () {
        document.getElementById("cardForm").style.display = "block";
        document.getElementById("pixForm").style.display = "none";
        document.getElementById("pixRadio").checked = false;
        updatePlanInfo(); 
    });

    const pixRadio = document.getElementById("pixRadio");
    const cardRadio = document.getElementById("cardRadio");

    if (!pixRadio.checked && !cardRadio.checked) {
        document.getElementById("pixForm").style.display = "none";
        document.getElementById("cardForm").style.display = "none";
    }

    const planoArmazenado = localStorage.getItem("planoSelecionado");

    if (planoArmazenado) {
        const plano = JSON.parse(planoArmazenado);
        const tipoElemento = document.querySelector(".payment-plan-type");
        const nomeElemento = document.querySelector(".payment-plan-info-name");
        const precoElemento = document.querySelector(".payment-plan-info-price");
        const price2Elemento = document.querySelector(".payment-summary-price2");
        const price3Elemento = document.querySelector(".payment-summary-price3");
        const price4Elemento = document.querySelector(".payment-summary-price4");

        if (tipoElemento && nomeElemento && precoElemento) {
            tipoElemento.textContent = plano.tipo;
            nomeElemento.textContent = plano.nome;
            precoElemento.textContent = plano.preco;
        }

        const precosAVista = {
            MEDI: 'R$ 606,82',
            ENEM: 'R$ 471,82',
            VEST: 'R$ 299,40'
        };

        const descontos = {
            MEDI: '-R$ 202,27',
            ENEM: '-R$ 157,27',
            VEST: '-R$ 99,80'
        };

        const precosComDesconto = {
            MEDI: 'R$ 404,55',
            ENEM: 'R$ 314,55',
            VEST: 'R$ 199,60'
        };

        if (price2Elemento && price3Elemento && price4Elemento) {
            price2Elemento.textContent = precosAVista[plano.tipo] || "Preço à vista indisponível";
            price3Elemento.textContent = descontos[plano.tipo] || "Desconto indisponível";
            price4Elemento.textContent = precosComDesconto[plano.tipo] || "Preço com desconto indisponível";
        }

        updatePlanInfo();
    }
});

document.getElementById("pixRadio").addEventListener("change", function() {
    document.getElementById("pixForm").style.display = "block";
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("cardRadio").checked = false;
});

document.getElementById("cardRadio").addEventListener("change", function() {
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("pixForm").style.display = "none";
    document.getElementById("pixRadio").checked = false;
});

function showError(input, message) {
    let error = input.parentNode.querySelector(".error-message");
    if (!error) {
        error = document.createElement("p");
        error.classList.add("error-message");
        input.parentNode.appendChild(error);
    }
    error.textContent = message;
}

function removeError(input) {
    let error = input.parentNode.querySelector(".error-message");
    if (error) {
        error.remove();
    }
}

document.querySelectorAll(".payment-form-label").forEach(label => {
    label.style.transform = "translateY(-10px)";
});

function validateCPF_CNPJ(value) {
    return /^[0-9]{11,14}$/.test(value);
}

function validateNome(value) {
    return value.trim().split(" ").length > 1;
}

function validateCardNumber(value) {
    return /^[0-9]{14,16}$/.test(value);
}

function validateCVV(value) {
    return /^[0-9]{3}$/.test(value);
}

function validateExpiryDate(value) {
    const currentDate = new Date("2025-02-20");
    const [year, month] = value.split("-").map(Number);
    const expiryDate = new Date(year, month);
    return expiryDate > currentDate;
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        removeError(this);
    });
});

document.getElementById("cpf-cnpj2").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "").slice(0, 14);
});

document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();

    const cpfCnpj = document.getElementById("cpf-cnpj2");
    const nome = document.getElementById("nome");
    const cardNumber = document.getElementById("card-number");
    const cvv = document.getElementById("cvv");
    const expiryDate = document.getElementById("expiry-date");

    let valid = true;

    if (!validateCPF_CNPJ(cpfCnpj.value)) {
        showError(cpfCnpj, "CPF/CNPJ inválido.");
        valid = false;
    } else {
        removeError(cpfCnpj);
    }

    if (!validateNome(nome.value)) {
        showError(nome, "O nome deve ter pelo menos duas palavras.");
        valid = false;
    } else {
        removeError(nome);
    }

    if (!validateCardNumber(cardNumber.value)) {
        showError(cardNumber, "Número do cartão inválido.");
        valid = false;
    } else {
        removeError(cardNumber);
    }

    if (!validateCVV(cvv.value)) {
        showError(cvv, "CVV inválido.");
        valid = false;
    } else {
        removeError(cvv);
    }

    if (!validateExpiryDate(expiryDate.value)) {
        showError(expiryDate, "A data de expiração deve ser após 20/02/2025.");
        valid = false;
    } else {
        removeError(expiryDate);
    }

    if (valid) {
        window.location.href = "backoff.html";
    }
});
