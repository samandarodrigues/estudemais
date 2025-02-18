window.onload = function() {
    const proceedButton = document.getElementById('proceed-button');
    proceedButton.style.display = 'none'; // Garante que o botão estará oculto ao carregar a página
};

function toggleInfo(infoId, button) {
    const extraInfo = document.getElementById(infoId);
    const isVisible = extraInfo.style.display === "block";
    extraInfo.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Saiba Mais" : "Ver Menos";
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const proceedButton = document.getElementById('proceed-button');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // Desmarcar todos os checkboxes, exceto o selecionado
        checkboxes.forEach((box) => {
            if (box !== checkbox) {
                box.checked = false;
            }
        });

        // Verifica se algum checkbox está marcado para exibir ou esconder o botão "Prosseguir"
        const anyChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
        proceedButton.style.display = anyChecked ? 'block' : 'none'; // Exibe ou esconde o botão
    });
});

function mostrarMonitora(id) {
    var monitor = document.getElementById(id);
  
    // Alterna entre mostrar e esconder o nome da monitora
    if (monitor.style.display === 'block') {
      monitor.style.display = 'none';
    } else {
      monitor.style.display = 'block';
    }
}  