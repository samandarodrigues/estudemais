document.addEventListener("DOMContentLoaded", function () {
  const planoMedic = document.getElementById('plano-medicina');
  const planoEnem = document.getElementById('plano-enem');
  const planoVestibular = document.getElementById('plano-vestibular');
  const resumoCompra = document.querySelector('.summary ul');
  const nenhumPlano = document.querySelector('.nenhum-plano');
  const planos = document.querySelectorAll(".plan");

  const beneficios = {
      medicina: [
          "9 meses de acesso",
          "Conteúdo completo",
          "Flashcards",
          "Material didático completo",
          "4 correções de redação por mês",
          "Monitorias interativas",
          "Baterias de exercícios",
          "Simulados periódicos",
          "Banco de provas",
          "Biblioteca virtual",
      ],
      enem: [
          "9 meses de acesso",
          "Conteúdo completo",
          "Flashcards",
          "Material didático completo",
          "2 correções de redação por mês",
          "Monitorias interativas",
          "Baterias de exercícios",
          "Simulados periódicos",
          "Banco de provas",
          "Biblioteca virtual",
      ],
      vestibular: [
          "8 meses de acesso",
          "Conteúdo completo",
          "Flashcards",
          "Material didático completo",
          "3 correções de redação por mês",
          "Monitorias interativas",
          "Baterias de exercícios",
          "Simulados periódicos",
          "Banco de provas",
          "Desafios semanais",
      ],
  };

  function atualizarResumo(plano) {
    resumoCompra.innerHTML = ''; 
    if (plano.beneficios && plano.beneficios.length > 0) {
        plano.beneficios.forEach(beneficio => {
            const li = document.createElement('li');
            li.textContent = beneficio;
            resumoCompra.appendChild(li);
        });
        nenhumPlano.style.display = 'none'; 
    } else {
        nenhumPlano.style.display = 'block'; 
    }
}

  function atualizarDetalhesPagamento(plano) {
      const nomePlano = document.querySelector('.payment-plan-info-name');
      const precoPlano = document.querySelector('.payment-plan-info-price');
      nomePlano.textContent = plano.nome;
      precoPlano.textContent = plano.preco;
  }

  function selecionarPlano(plano) {
      document.querySelectorAll('.plan').forEach((el) => el.classList.remove('selected'));
      plano.classList.add('selected');
      plano.querySelector('input').checked = true;
      const planoSelecionado = plano.id.split('-')[1];  
      atualizarResumo({ nome: plano.querySelector('strong').textContent, beneficios: beneficios[planoSelecionado] });
      atualizarDetalhesPagamento(planos[planoSelecionado]);
      nenhumPlano.style.display = 'none';

      const planoErro = document.querySelector('.plano-erro');
      if (planoErro) {
          planoErro.remove();
      }
  }

  planos.forEach(plano => {
      plano.addEventListener("click", function () {
          planos.forEach(p => p.classList.remove("selected"));
          this.classList.add("selected");

          const nomePlano = this.querySelector("strong").textContent;
          const tipoPlano = this.id.replace("plano-", "").substring(0, 4).toUpperCase();

          let precoPlano = "";
          if (tipoPlano === "MEDI") {
              precoPlano = "9x de R$ 44,95";
          } else if (tipoPlano === "ENEM") {
              precoPlano = "9x de R$ 34,95";
          } else if (tipoPlano === "VEST") {
              precoPlano = "9x de R$ 24,95";
          }

          const planoSelecionado = {
              tipo: tipoPlano, 
              nome: nomePlano, 
              preco: precoPlano 
          };

          localStorage.setItem("planoSelecionado", JSON.stringify(planoSelecionado));
          console.log("Plano salvo corretamente:", planoSelecionado);
      });
  });

  planoMedic.addEventListener('click', function() {
      selecionarPlano(planoMedic);
  });

  planoEnem.addEventListener('click', function() {
      selecionarPlano(planoEnem);
  });

  planoVestibular.addEventListener('click', function() {
      selecionarPlano(planoVestibular);
  });
});

  //NOME E SOBRENOME

  function validarNomeSobrenome(input) {
    input.value = input.value.replace(/[^a-zA-ZáéíóúãõâêîôûàèìòùçÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙÇ ]/g, '');
}

document.getElementById("nome").addEventListener("input", function() {
    validarNomeSobrenome(this);
});

document.getElementById("sobrenome").addEventListener("input", function() {
    validarNomeSobrenome(this);
});

function validarEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = input.value;

  if (!emailRegex.test(email)) {
      input.classList.add('error');
      mostrarMensagemErro(input, "Formato de e-mail inválido.");
      return false;
  } else {
      input.classList.remove('error');
      removerMensagemErro(input);
      return true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nomeInput = document.getElementById('nome');
  const sobrenomeInput = document.getElementById('sobrenome');
  const nomeCompletoElemento = document.querySelector('.nome-fulano'); 
  function salvarNomeSobrenome() {
    const nome = nomeInput.value;
    const sobrenome = sobrenomeInput.value;
    const nomeCompleto = nome + ' ' + sobrenome;

    localStorage.setItem('nomeCompleto', nomeCompleto);

    if (nomeCompletoElemento) {
      nomeCompletoElemento.textContent = nomeCompleto; 
    }
  }

  nomeInput.addEventListener('input', salvarNomeSobrenome);
  sobrenomeInput.addEventListener('input', salvarNomeSobrenome);

  const nomeSalvo = localStorage.getItem('nomeCompleto');
  if (nomeSalvo && nomeCompletoElemento) {
    nomeCompletoElemento.textContent = nomeSalvo;
  }
});

function validarNomeSobrenome(input) {
  input.value = input.value.replace(/[^a-zA-ZáéíóúãõâêîôûàèìòùçÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙÇ ]/g, '');
}

function salvarNomeSobrenome() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const nomeCompleto = nome + ' ' + sobrenome;

  localStorage.setItem('nomeCompleto', nomeCompleto);
}

document.getElementById("nome").addEventListener("input", function() {
  validarNomeSobrenome(this);
  salvarNomeSobrenome();
});

document.getElementById("sobrenome").addEventListener("input", function() {
  validarNomeSobrenome(this);
  salvarNomeSobrenome();
});


function salvarNomeSobrenome() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const nomeCompleto = nome + ' ' + sobrenome;


  localStorage.setItem('nomeCompleto', nomeCompleto);
}


document.getElementById("nome").addEventListener("input", salvarNomeSobrenome);
document.getElementById("sobrenome").addEventListener("input", salvarNomeSobrenome);

//EMAIL E CE

function validarConfirmarEmail() {
  const email = document.getElementById('email').value;
  const confirmarEmail = document.getElementById('confirmar-email').value;

  if (email !== confirmarEmail) {
      document.getElementById('confirmar-email').classList.add('error');
      mostrarMensagemErro(document.getElementById('confirmar-email'), "Os e-mails não coincidem.");
      return false;
  } else {
      document.getElementById('confirmar-email').classList.remove('error');
      removerMensagemErro(document.getElementById('confirmar-email'));
      return true;
  }
}

function mostrarMensagemErro(input, mensagem) {
  let errorMessage = input.parentElement.querySelector('.error-message');
 
  if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      input.parentElement.appendChild(errorMessage);
  }

  errorMessage.textContent = mensagem;
}

function removerMensagemErro(input) {
  const errorMessage = input.parentElement.querySelector('.error-message');
  if (errorMessage) {
      errorMessage.remove();
  }
}

document.getElementById('email').addEventListener('input', function() {
  validarEmail(this);
});

document.getElementById('email').addEventListener('blur', function() {
  validarEmail(this);
});

document.getElementById('confirmar-email').addEventListener('input', validarConfirmarEmail);

document.getElementById('confirmar-email').addEventListener('blur', function() {
  validarConfirmarEmail();
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const isEmailValido = validarEmail(document.getElementById('email'));
  const isConfirmarEmailValido = validarConfirmarEmail();

  if (isEmailValido && isConfirmarEmailValido) {
      this.submit();
  }
});

function validarConfirmarEmail() {
  const email = document.getElementById('email').value;
  const confirmarEmail = document.getElementById('confirmar-email').value;

  if (email !== confirmarEmail) {
      document.getElementById('confirmar-email').classList.add('error');
      mostrarMensagemErro(document.getElementById('confirmar-email'), "Os e-mails não coincidem.");
      return false;
  } else {
      document.getElementById('confirmar-email').classList.remove('error');
      removerMensagemErro(document.getElementById('confirmar-email'));
      return true;
  }
}

function mostrarMensagemErro(input, mensagem) {
  let errorMessage = input.parentElement.querySelector('.error-message');
 
  if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      input.parentElement.appendChild(errorMessage);
  }

  errorMessage.textContent = mensagem;
}

function removerMensagemErro(input) {
  const errorMessage = input.parentElement.querySelector('.error-message');
  if (errorMessage) {
      errorMessage.remove();
  }
}

document.getElementById('email').addEventListener('input', function() {
  validarEmail(this);
  validarConfirmarEmail(); 
});

document.getElementById('email').addEventListener('blur', function() {
  validarEmail(this);
  validarConfirmarEmail(); 
});

document.getElementById('confirmar-email').addEventListener('input', validarConfirmarEmail);

document.getElementById('confirmar-email').addEventListener('blur', function() {
  validarConfirmarEmail();
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const isEmailValido = validarEmail(document.getElementById('email'));
  const isConfirmarEmailValido = validarConfirmarEmail();

  if (isEmailValido && isConfirmarEmailValido) {
      this.submit();
  }
});

document.getElementById('email').addEventListener('input', function() {
  localStorage.setItem('email', this.value);
});

window.addEventListener('load', function() {
  const emailSalvo = localStorage.getItem('email');
  if (emailSalvo) {
    document.getElementById('email').value = emailSalvo;
  }
});

document.getElementById('email').addEventListener('input', function() {
  localStorage.setItem('email', this.value);
});

document.getElementById('email').addEventListener('input', function() {
  validarConfirmarEmail();  
});

document.getElementById('confirmar-email').addEventListener('input', function() {
  validarConfirmarEmail();  
});

function validarConfirmarEmail() {
  const email = document.getElementById('email').value;
  const confirmarEmail = document.getElementById('confirmar-email').value;

  if (email !== confirmarEmail) {
      document.getElementById('confirmar-email').classList.add('error');
      mostrarMensagemErro(document.getElementById('confirmar-email'), "Os e-mails não coincidem.");
  } else {
      document.getElementById('confirmar-email').classList.remove('error');
      removerMensagemErro(document.getElementById('confirmar-email'));
  }
}

function mostrarMensagemErro(input, mensagem) {
  let errorMessage = input.parentElement.querySelector('.error-message');
  
  if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      input.parentElement.appendChild(errorMessage);
  }

  errorMessage.textContent = mensagem;
}

function removerMensagemErro(input) {
  const errorMessage = input.parentElement.querySelector('.error-message');
  if (errorMessage) {
      errorMessage.remove();
  }
}

//CEP

document.addEventListener('DOMContentLoaded', () => {
  const cepInput = document.getElementById('cep');
  const errorMessageCep = document.createElement('p');
  errorMessageCep.classList.add('error-message-cep');
  cepInput.parentNode.appendChild(errorMessageCep);

  const cityElement = document.getElementById('city');
  const stateElement = document.getElementById('state');

  const formatCep = (value) => {
      value = value.replace(/\D/g, '');  
      if (value.length > 5) {
          value = value.slice(0, 5) + '-' + value.slice(5, 8);  
      }
      return value;
  };

  const validateCep = async (cep) => {
      const cleanedCep = cep.replace('-', '');  
      if (cleanedCep.length === 8) {
          const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
          const data = await response.json();
          return data.erro ? false : data;  
      }
      return false;
  };

  cepInput.addEventListener('input', (e) => {
      let value = e.target.value;
      value = formatCep(value);
      cepInput.value = value;  
  });

  cepInput.addEventListener('blur', async () => {
      const cepValue = cepInput.value;
      if (cepValue.replace('-', '').length < 8) {
          errorMessageCep.textContent = 'CEP incompleto. Deve ter 8 números.';
          cepInput.classList.add('error');
          cityElement.textContent = '';
          stateElement.textContent = '';
      } else {
          const validData = await validateCep(cepValue);
          if (!validData) {
              errorMessageCep.textContent = 'CEP inválido. Não existe no Brasil.';
              cepInput.classList.add('error');
              cityElement.textContent = '';
              stateElement.textContent = '';
          } else {
              errorMessageCep.textContent = '';  
              cepInput.classList.remove('error');
              cityElement.textContent = `Cidade: ${validData.localidade}`;
              stateElement.textContent = `Estado: ${validData.uf} (${validData.estado})`;

              localStorage.setItem('cidade', validData.localidade);
              localStorage.setItem('estado', validData.estado);
              localStorage.setItem('estadoSigla', validData.uf); 
          }
      }
  });
});

//telefone

document.addEventListener('DOMContentLoaded', function () {
  const telefoneInput = document.getElementById('telefone');
  const telefoneError = document.getElementById('telefone-error'); 

  telefoneInput.addEventListener('input', function () {
    let telefone = telefoneInput.value.replace(/\D/g, '');

    if (telefone.length > 11) {
      telefone = telefone.slice(0, 11);
    }

    if (telefone.length > 6) {
      telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 3)} ${telefone.slice(3, 7)}-${telefone.slice(7, 11)}`;
    } else if (telefone.length > 2) {
      telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 3)} ${telefone.slice(3)}`;
    } else if (telefone.length > 0) {
      telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
    }

    telefoneInput.value = telefone;

    if (telefone.replace(/\D/g, '').length < 11) {
      telefoneError.textContent = 'Telefone inválido. O número deve ter 11 dígitos.';
      telefoneInput.classList.add('error');
    } else {
      telefoneError.textContent = '';
      telefoneInput.classList.remove('error');
    }
  });

  telefoneInput.addEventListener('blur', function () {
    let telefone = telefoneInput.value.replace(/\D/g, '');

    if (telefone.length < 11) {
      telefoneError.textContent = 'Telefone inválido. O número deve ter 11 dígitos.';
      telefoneInput.classList.add('error');
    } else {
      telefoneError.textContent = '';
      telefoneInput.classList.remove('error');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefone-error'); 
  
    telefoneInput.addEventListener('input', function () {
      let telefone = telefoneInput.value.replace(/\D/g, '');
  
      if (telefone.length > 11) {
        telefone = telefone.slice(0, 11);
      }
  
      if (telefone.length > 6) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 3)} ${telefone.slice(3, 7)}-${telefone.slice(7, 11)}`;
      } else if (telefone.length > 2) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 3)} ${telefone.slice(3)}`;
      } else if (telefone.length > 0) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
      }
  
      telefoneInput.value = telefone;
  
      if (telefone.replace(/\D/g, '').length < 11) {
        telefoneError.textContent = 'Telefone inválido. O número deve ter 11 dígitos.';
        telefoneInput.classList.add('error');
      } else {
        telefoneError.textContent = '';
        telefoneInput.classList.remove('error');
      }
    });
  
    telefoneInput.addEventListener('blur', function () {
      let telefone = telefoneInput.value.replace(/\D/g, '');
  
      if (telefone.length < 11) {
        telefoneError.textContent = 'Telefone inválido. O número deve ter 11 dígitos.';
        telefoneInput.classList.add('error');
      } else {
        telefoneError.textContent = '';
        telefoneInput.classList.remove('error');
      }
    });
  });

//TOGgLE

document.getElementById('show-password').addEventListener('change', function() {
  var senhaInput = document.getElementById('senha');
  var confirmarSenhaInput = document.getElementById('confirmar-senha');
  
  if (this.checked) {
    senhaInput.type = 'text';
    confirmarSenhaInput.type = 'text';
  } else {
    senhaInput.type = 'password';
    confirmarSenhaInput.type = 'password';
  }
});


//senha e cs

window.onload = function() {
  var showPasswordCheckbox = document.getElementById('show-password');
  var senhaInput = document.getElementById('senha');
  var confirmarSenhaInput = document.getElementById('confirmar-senha');

  if (localStorage.getItem('showPassword') === 'true') {
      showPasswordCheckbox.checked = true;
      senhaInput.type = 'text';
      confirmarSenhaInput.type = 'text';
  } else {
      showPasswordCheckbox.checked = false;
      senhaInput.type = 'password';
      confirmarSenhaInput.type = 'password';
  }
};

  const senhaInput = document.getElementById('senha');
  const confirmarSenhaInput = document.getElementById('confirmar-senha');
  const senhaError = document.getElementById('senha-error');
  const confirmarSenhaError = document.getElementById('confirmar-senha-error');
  
  senhaInput.addEventListener('input', function () {
    const senha = senhaInput.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!regex.test(senha)) {
      senhaError.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo.";
      senhaInput.classList.add('error');
    } else {
      senhaError.textContent = "";
      senhaInput.classList.remove('error');
    }
  });

  confirmarSenhaInput.addEventListener('input', function () {
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    if (confirmarSenha !== senha) {
      confirmarSenhaError.textContent = "As senhas não coincidem.";
      confirmarSenhaInput.classList.add('error');
    } else {
      confirmarSenhaError.textContent = "";
      confirmarSenhaInput.classList.remove('error');
    }
  });

  const form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    if (senhaError.textContent || confirmarSenhaError.textContent || telefoneError.textContent) {
      event.preventDefault();
    }
  });
});

window.onload = function() {
  var showPasswordCheckbox = document.getElementById('show-password');
  var senhaInput = document.getElementById('senha');
  var confirmarSenhaInput = document.getElementById('confirmar-senha');

  function verificarSenha() {
    const senha = senhaInput.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const senhaError = document.getElementById('senha-error');

    if (!senha) {
      senhaError.textContent = "A senha não pode estar vazia.";
      senhaInput.classList.add('error');
    } else if (!regex.test(senha)) {
      senhaError.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo.";
      senhaInput.classList.add('error');
    } else {
      senhaError.textContent = "";
      senhaInput.classList.remove('error');
    }
  }

  function verificarConfirmarSenha() {
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    const confirmarSenhaError = document.getElementById('confirmar-senha-error');

    if (confirmarSenha !== senha) {
      confirmarSenhaError.textContent = "As senhas não coincidem.";
      confirmarSenhaInput.classList.add('error');
    } else {
      confirmarSenhaError.textContent = "";
      confirmarSenhaInput.classList.remove('error');
    }
  }

  senhaInput.addEventListener("input", verificarSenha);
  confirmarSenhaInput.addEventListener("input", verificarConfirmarSenha);

  const botaoProximo = document.querySelector(".btn");
  botaoProximo.addEventListener("click", function(e) {
    verificarSenha();
    verificarConfirmarSenha();

    const senhaErrorMessage = document.getElementById("senha-error").textContent;
    const confirmarSenhaErrorMessage = document.getElementById("confirmar-senha-error").textContent;

    if (senhaErrorMessage || confirmarSenhaErrorMessage) {
      e.preventDefault(); 
    }
  });
};

//A

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const inputs = form.querySelectorAll('input[required]');
  const checkbox = document.getElementById('dicas');
  const planos = document.querySelectorAll('.plan input');
  const botaoProximo = document.querySelector('.btn');

  function verificarCampos() {
    let valido = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            valido = false;
            mostrarMensagemErro(input, 'É obrigatório preencher o campo para prosseguir.');
        } else if (input.classList.contains('error')) {
            valido = false;
        } else {
            removerMensagemErro(input);
        }

        input.addEventListener('input', () => removerMensagemErro(input));
    });

    if (!checkbox.checked) {
        valido = false;
        mostrarMensagemErro(checkbox, 'É obrigatório selecionar a caixa para prosseguir.');
    } else {
        removerMensagemErro(checkbox);
    }

    let planoSelecionado = false;
    planos.forEach(plano => {
        if (plano.checked) {
            planoSelecionado = true;
        }
    });

    const planoErro = document.querySelector('.plano-erro');
    if (!planoSelecionado) {
        valido = false;
        if (!planoErro) {
            const mensagemErro = document.createElement('p');
            mensagemErro.classList.add('error-message-final', 'plano-erro');
            mensagemErro.textContent = 'É obrigatório selecionar um dos planos para prosseguir.';
            document.querySelector('.plan-section').appendChild(mensagemErro);
        }
    } else if (planoErro) {
        planoErro.remove();
    }

    planos.forEach(plano => {
        plano.addEventListener('change', () => {
            const erro = document.querySelector('.plano-erro');
            if (erro) erro.remove();
        });
    });

    return valido;
}

  function mostrarMensagemErro(elemento, mensagem, isSummary = false) {
      let errorMessage;

      if (isSummary) {
          errorMessage = document.querySelector('.error-message-final');
          if (!errorMessage) {
              errorMessage = document.createElement('p');
              errorMessage.classList.add('error-message-final');
              elemento.appendChild(errorMessage);
          }
      } else {
          errorMessage = elemento.parentElement.querySelector('.error-message');
          if (!errorMessage) {
              errorMessage = document.createElement('p');
              errorMessage.classList.add('error-message');
              elemento.parentElement.appendChild(errorMessage);
          }
      }

      errorMessage.textContent = mensagem;
  }

  function removerMensagemErro(elemento, isSummary = false) {
      let errorMessage;

      if (isSummary) {
          errorMessage = document.querySelector('.error-message-final');
      } else {
          errorMessage = elemento.parentElement.querySelector('.error-message');
      }

      if (errorMessage) {
          errorMessage.remove();
      }
  }

  botaoProximo.addEventListener('click', function (e) {
      if (!verificarCampos()) {
          e.preventDefault();
      } else {
          const senhaError = document.getElementById('senha-error').textContent;
          const confirmarSenhaError = document.getElementById('confirmar-senha-error').textContent;
          const telefoneError = document.getElementById('telefone-error').textContent;
          if (senhaError || confirmarSenhaError || telefoneError) {
              e.preventDefault();
          } else {
              window.location.href = 'payments.html';
          }
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const telefoneInput = document.getElementById('telefone');
  const telefoneError = document.getElementById('telefone-error');
  const botaoProximo = document.querySelector('.btn'); 

  function validarTelefone() {
    let telefone = telefoneInput.value.replace(/\D/g, ''); 

    if (telefone.length < 11) {
      telefoneError.textContent = 'Telefone inválido. O número deve ter 11 dígitos.';
      telefoneInput.classList.add('error');
    } else {
      telefoneError.textContent = '';
      telefoneInput.classList.remove('error');
    }
  }

  telefoneInput.addEventListener('input', function () {
    validarTelefone();
  });

  telefoneInput.addEventListener('blur', function () {
    validarTelefone();
  });

  botaoProximo.addEventListener('click', function (e) {
    validarTelefone();

    if (telefoneInput.classList.contains('error')) {
      e.preventDefault();
    }
  });
});
