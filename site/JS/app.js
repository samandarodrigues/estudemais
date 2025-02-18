const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotatte')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const icon = darkModeToggle.querySelector('i'); 
  
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.replace('bi-moon', 'bi-sun'); 
    
  }


  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      icon.classList.replace('bi-moon', 'bi-sun'); 
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      icon.classList.replace('bi-sun', 'bi-moon'); 
    }
  });
});

      function carregarCidades() {
          const estado = document.getElementById("estado").value;
          const cidadeSelect = document.getElementById("cidade");
  
          cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';
  
          let cidades = [];
  
          if (estado === "acre") {
            cidades = [
                "Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", 
                "Xapuri", "Brasiléia", "Epitaciolândia", "Plácido de Castro", "Mâncio Lima", 
                "Rodrigues Alves", "Porto Walter", "Bujari", "Assis Brasil", "Capixaba", 
                "Santo Antônio do Alto Acre", "Acrelândia", "Senador Guiomard", "Jacobina do Acre", 
                "Senador Pompeu", "Nossa Senhora de Nazaré", "Rio Branco", "Brasília", "Vila Brasiléia"
            ];
        } else if (estado === "alagoas") {
            cidades = [
                "Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "São Miguel dos Campos",
                "Delmiro Gouveia", "Penedo", "Coruripe", "União dos Palmares", "Murici", "Santa Luzia do Norte",
                "Paripueira", "São José da Laje", "Cacimbinhas", "São Luís do Quitunde", "Batalha", "Água Branca", 
                "Joaquim Gomes", "Porto Real do Colégio", "Maragogi", "Atalaia", "Marechal Deodoro", "Chã Preta", 
                "Capela", "Teotônio Vilela", "Campo Alegre", "Coité do Nóia", "Porto de Pedras", "Barra de São Miguel",
                "Viçosa", "Quebrangulo", "Igaci", "Piaçabuçu", "Olho d'Água das Flores", "Minador do Negrão", 
                "Limoeiro de Anadia", "Pão de Açúcar", "Anadia", "Palmeira", "São José da Tapera", "Boca da Mata",
                "Santana do Ipanema", "Junqueiro", "Cajueiro", "Pilar", "Capelinha", "São Sebastião", "Major Isidoro",
                "Tanque d'Arca", "Riacho do Santana", "São Miguel dos Milagres", "Traipu", "Belo Monte", "Igaci"
            ];
        } else if (estado === "amapa") {
            cidades = [
                "Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão", "Porto Grande", "Tartarugalzinho", 
                "Amapá", "Pedra Branca do Amapá", "Calçoene", "Pracuúba", "Chaves", "São Joaquim do Pacuí", 
                "Vitória do Jari", "Cutias", "Itaubal", "Serra do Navio", "Laranjal do Jari", "Santana do Amapá", 
                "Afua", "Araguari", "Guarujá", "Canavieiras", "São Luís", "Ouriço", "Marituba", "Iranduba", 
                "Rorainópolis"
            ];
        } else if (estado === "amazonas") {
            cidades = [
                "Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Tabatinga", "Coari", "Tefé", "Humaitá", 
                "São Gabriel da Cachoeira", "Boa Vista do Ramos", "Autazes", "Careiro", "Maués", "Iranduba", 
                "Novo Airão", "Presidente Figueiredo", "Borba", "Beruri", "Caapiranga", "Envira", "Lábrea", 
                "Santo Antônio do Içá", "São Sebastião do Uatumã", "Iranduba", "Japurá", "Juruá", "Itapiranga", 
                "Barcelos", "Anori", "Santa Isabel do Rio Negro", "Carauari", "Boca do Acre", "Cruz das Almas", 
                "Nhamundá", "Novo Aripuanã", "Urucará", "Silves", "Santo Antônio do Içá", "São Paulo de Olivença", 
                "São Raimundo do Amazonas", "Uarini", "Ipixuna", "Benjamin Constant", "Alvarães", "Tapauá", 
                "Maués", "Borba", "Guarará"
            ];
        } else if (estado === "bahia") {
            cidades = [
                "Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro", "Ilhéus", 
                "Itabuna", "Lauro de Freitas", "Paulo Afonso", "Teixeira de Freitas", "Barreiras", "Alagoinhas", 
                "Eunápolis", "Itapetinga", "Jequié", "Valença", "Jacobina", "Simões Filho", "Brumado", "Iguaí", 
                "Candeias", "Santo Antônio de Jesus", "Porto Seguro", "Muritiba", "Campo Formoso", "Mucuri", 
                "Ribeira do Pombal", "Senhor do Bonfim", "Conceição do Coité", "Morro do Chapéu", "Pocoes", 
                "São Sebastião do Passé", "Cruz das Almas", "Ubaitaba", "Ubá", "Itacaré", "Salvador", "São Desidério",
                "Mata de São João", "Teofilândia", "Correntina", "Ibotirama", "Barra", "Santa Maria da Vitória", 
                "Caetité", "Itororó", "Irece", "Santos do Bonfim", "Campo Alegre", "Eunapolis"
            ];
        } else if (estado === "ceara") {
            cidades = ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Iguatu", "Itapipoca", "Aquiraz"];
        } else if (estado === "distrito-federal") {
            cidades = ["Brasília"];
        } else if (estado === "espirito-santo") {
            cidades = ["Vitória", "Vila Velha", "Serra", "Cariacica", "Viana", "Linhares", "Colatina", "São Mateus", "Cachoeiro de Itapemirim"];
        } else if (estado === "goias") {
            cidades = ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Catalão", "Itumbiara", "Jataí", "Águas Lindas de Goiás"];
        } else if (estado === "maranhao") {
            cidades = ["São Luís", "Imperatriz", "Caxias", "Codó", "Timon", "Bacabal", "Pinheiro", "Santa Inês", "Açailândia", "Chapadinha"];
        } else if (estado === "mato-grosso") {
            cidades = ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Barra do Garças", "Lucas do Rio Verde", "Sorriso"];
        } else if (estado === "mato-grosso-do-sul") {
            cidades = ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Coxim", "Aquidauana", "Naviraí", "Paranaíba"];
        } else if (estado === "minas-gerais") {
            cidades = ["Belo Horizonte", "Uberlândia", "Juiz de Fora", "Betim", "Montes Claros", "Contagem", "Divinópolis", "Poços de Caldas", "Governador Valadares"];
        } else if (estado === "para") {
            cidades = ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Paragominas", "Bragança", "Capanema", "Barcarena", "Redenção"];
        } else if (estado === "paraiba") {
            cidades = ["João Pessoa", "Campina Grande", "Patos", "Cabedelo", "Bayeux", "Sousa", "Cajazeiras", "Pombal", "Itabaiana"];
        } else if (estado === "parana") {
            cidades = ["Curitiba", "Londrina", "Maringá", "Foz do Iguaçu", "Cascavel", "Ponta Grossa", "Colombo", "Araucária", "Paranaguá"];
        } else if (estado === "pernambuco") {
            cidades = ["Recife", "Olinda", "Jaboatão dos Guararapes", "Caruaru", "Petrolina", "Garanhuns", "Cabo de Santo Agostinho", "Igarassu", "São Lourenço da Mata"];
        } if (estado === "piaui") {
          cidades = [
              "Acauã", "Teresina", "Parnaíba", "Picos", "Floriano", "Campo Maior", "Barras", "Altos", "São João do Piauí", 
              "Oeiras", "Pedro II", "Esperantina", "Cocal", "Amarante", "José de Freitas", "União", "Miguel Alves", 
              "Vila Nova do Piauí", "Cocal de Telha", "Paulistana", "Ribeira do Piauí", "Buriti dos Lopes", "Jatobá do Piauí",
              "Batalha", "Morro do Chapéu do Piauí", "São Raimundo Nonato", "Demerval Lobão", "Canto do Buriti", 
              "Pau d'Arco do Piauí", "Francisco Ayres", "Curralinhos", "Inhuma", "Patos do Piauí", "Jaicós", "São José do Piauí", 
              "Várzea Branca", "Sussuapara", "Fronteiras", "Matias Olímpio", "Santa Cruz do Piauí", "Santo Antônio de Lisboa", 
              "Ribeira do Piauí", "Luzilândia", "Alvorada do Gurguéia", "Angical do Piauí", "Curral Novo do Piauí", 
              "Castelo do Piauí", "Madalena", "Dom Expedito Lopes", "São Francisco de Assis do Piauí", "Barrinhas", 
              "Alagoinha do Piauí", "São Miguel do Tapuio", "Boqueirão do Piauí", "Pedro Laurentino", "Santo Antônio dos Milagres", 
              "Serra do Mel", "Vera Mendes", "Oeiras", "Barra do Longá", "Geminiano", "Cocal de Telha", "Vila Nova do Piauí", 
              "Anísio de Abreu", "São Pedro do Piauí", "Lagoa do Sítio", "Prata do Piauí", "Nossa Senhora de Nazaré", 
              "Lagoa do Barro", "São José do Divino", "Barras", "Cabeceiras do Piauí", "Pio IX", "São João da Varjota", 
              "São João do Arraial", "Domingos Mourão", "Morro do Chapéu do Piauí", "Padre Marcos", "São José do Peixe", 
              "Campo Largo do Piauí", "Lagoa de São Francisco", "Olho d'Água do Piauí", "Riacho Frio", "São José do Piauí", 
              "João Costa", "Amarante", "Pimenteiras", "Morro do Chapéu", "Sussuapara", "Capitão de Campos", "Cocal dos Alves", 
              "Santo Antônio do Piauí", "Campo Maior", "Domingos Mourão", "São Lourenço do Piauí", "Ribeiro Gonçalves", 
              "Bela Vista do Piauí", "Barra do Alcântara", "Gonçalves Dias", "José de Freitas"
          ];      
        } else if (estado === "rio-de-janeiro") {
            cidades = ["Rio de Janeiro", "Niterói", "Cabo Frio", "Duque de Caxias", "Nova Iguaçu", "Campos dos Goytacazes", "Petrópolis", "Volta Redonda", "Macaé"];
        } else if (estado === "rio-grande-do-norte") {
            cidades = ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macau", "Ceará-Mirim", "Caicó", "Açu", "Santa Cruz"];
        } else if (estado === "rio-grande-do-sul") {
            cidades = ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Passo Fundo", "Novo Hamburgo", "São Leopoldo", "Canoas", "Gravataí"];
        } else if (estado === "rondonia") {
            cidades = ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Rolim de Moura", "Pimenta Bueno", "Jaru", "Espigão do Oeste"];
        } else if (estado === "roraima") {
            cidades = ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí", "Iracema", "Alto Alegre", "Normandia", "São João da Baliza"];
        } else if (estado === "santa-catarina") {
            cidades = ["Florianópolis", "Joinville", "Blumenau", "São José", "Itajaí", "Chapecó", "Criciúma", "Lages", "Tubarão"];
        } else if (estado === "sao-paulo") {
            cidades = ["São Paulo", "Campinas", "Santos", "São Bernardo do Campo", "São José dos Campos", "Ribeirão Preto", "Sorocaba", "Guarulhos", "Osasco", "Piracicaba"];
        } else if (estado === "sergipe") {
            cidades = ["Aracaju", "Lagarto", "Itabaiana", "Nossa Senhora do Socorro", "Estância", "Propriá", "Barra dos Coqueiros", "Simão Dias"];
        } else if (estado === "tocantins") {
            cidades = ["Palmas", "Araguaína", "Paraíso do Tocantins", "Gurupi", "Dianópolis", "Porto Nacional", "Miracema do Tocantins", "Augustinópolis"];
        }        
  
          // Preenche o select de cidades com as opções
          cidades.forEach(function(cidade) {
              const option = document.createElement("option");
              option.value = cidade.toLowerCase().replace(/\s+/g, '-');
              option.textContent = cidade;
              cidadeSelect.appendChild(option);
          });
      }

      document.addEventListener("DOMContentLoaded", function () {
        const nomeCompletoElemento = document.querySelector('.nome-fulano');
        
        // Verifica se existe um nome completo salvo no localStorage
        const nomeSalvo = localStorage.getItem('nomeCompleto');
        if (nomeSalvo && nomeCompletoElemento) {
            // Se o nome estiver salvo, atualiza o conteúdo do elemento com o "!"
            nomeCompletoElemento.textContent = nomeSalvo;
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
      const planoIndexElemento = document.querySelector('.plano-index');

      // Recupera o plano selecionado do localStorage
      const planoSalvo = JSON.parse(localStorage.getItem('planoSelecionado'));

      if (planoSalvo && planoIndexElemento) {
          // Se houver plano salvo, atualiza a classe com o nome do plano
          planoIndexElemento.textContent = `Plano ${planoSalvo.nome}` + "!";
      } else {
          // Se não houver plano selecionado
          planoIndexElemento.textContent = "Nenhum plano selecionado";
      }
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Recuperando o nome completo salvo no localStorage
    const nomeSalvo = localStorage.getItem('nomeCompleto');
    
    if (nomeSalvo) {
      const partesNome = nomeSalvo.split(' ');  // Dividindo em palavras
    
      // O primeiro item da lista vai ser o nome (primeira palavra)
      const nome = partesNome[0];
    
      // O sobrenome será o restante das palavras (se existirem)
      const sobrenome = partesNome.slice(1).join(' ');  // Junta todos os sobrenomes, se houver mais de um
    

      document.getElementById("first-name").value = nome;
      document.getElementById("last-name").value = sobrenome;
    }
  });
  

  window.addEventListener('load', function() {
    const emailSalvo = localStorage.getItem('email');
    if (emailSalvo) {
        document.getElementById('email-display').value = emailSalvo;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar');
    const userAvatar = document.getElementById('USUARIO');
    const uploadInput = document.getElementById('upload');
    const saveButton = document.querySelector('.save');

    // Carrega a imagem salva no localStorage ao iniciar
    const savedImage = localStorage.getItem('avatarImage');
    if (savedImage) {
        avatar.src = savedImage;
        userAvatar.src = savedImage;
    }

    uploadInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) { 
            const reader = new FileReader();
            reader.onload = function (e) {
                avatar.src = e.target.result;
                userAvatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('O arquivo deve ser JPG ou PNG e ter no máximo 2MB.');
        }
    });

    saveButton.addEventListener('click', function (event) {
        event.preventDefault(); // Previne envio de formulário caso esteja dentro de um
        localStorage.setItem('avatarImage', avatar.src);
        alert('Imagem salva com sucesso!');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar');
    const userAvatar = document.getElementById('USUARIO'); // Avatar do outro HTML
    const uploadInput = document.getElementById('upload');
    const saveButton = document.querySelector('.save');

    // Função para carregar imagem salva no localStorage
    function loadSavedImage() {
        const savedImage = localStorage.getItem('avatarImage');
        if (savedImage) {
            if (avatar) avatar.src = savedImage;
            if (userAvatar) userAvatar.src = savedImage;
        }
    }

    // Carregar a imagem salva ao abrir a página
    loadSavedImage();

    // Atualizar a pré-visualização da imagem ao selecionar um novo arquivo
    uploadInput?.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (avatar) avatar.src = e.target.result;
                if (userAvatar) userAvatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('O arquivo deve ser JPG ou PNG e ter no máximo 2MB.');
        }
    });

    // Salvar a imagem no localStorage para persistência
    saveButton?.addEventListener('click', function (event) {
        event.preventDefault(); // Evita envio do formulário
        if (avatar) {
            localStorage.setItem('avatarImage', avatar.src);
            alert('Imagem salva com sucesso!');
        }
    });
});

