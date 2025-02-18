const quizQuestions = [
  // **Matemática básica**
  { 
    question: "Qual é a fórmula da área de um triângulo?", 
    options: ["A = base * altura", "A = base * altura / 2", "A = base + altura", "A = 2 * base"], 
    correct: 1,
    subject: "matematica",
    assunto: "Matemática básica",
    difficulty: "facil"
  },
  { 
    question: "35,48 + 273,5 =", 
    options: ["308,98", "309,98", "308,08", "307,98"],
    correct: 1 ,
    subject: "matematica",
    assunto: "Matemática básica",
    difficulty: "facil"
  },
  { 
    question: "896,398 + 23,4 + 234,73 =", 
    options: ["1154,528", "1154,528", "1155,528", "1153,528"], 
    correct: 2 ,
    subject: "matematica",
    assunto: "Matemática básica",
    difficulty: "facil"
  },

  // **Álgebra**
  { 
    question: "Qual é a solução para a equação 2x + 5 = 15?", 
    options: ["x = 5", "x = 3", "x = 7", "x = 10"], 
    correct: 0,
    subject: "matematica",
    assunto: "Álgebra",
    difficulty: "medio"
  },
  { 
    question: "Qual é o valor de x na equação 3x - 4 = 8?", 
    options: ["x = 4", "x = 3", "x = 2", "x = 1"], 
    correct: 0,
    subject: "matematica",
    assunto: "Álgebra",
    difficulty: "medio"
  },
  { 
    question: "Qual é a solução da equação 5x + 10 = 40?", 
    options: ["x = 8", "x = 7", "x = 6", "x = 5"], 
    correct: 0,
    subject: "matematica",
    assunto: "Álgebra",
    difficulty: "medio"
  },

  // **Conjuntos**
  { 
    question: "Qual é a união dos conjuntos A = {1, 2, 3} e B = {3, 4, 5}?", 
    options: ["{1, 2, 3, 4, 5}", "{1, 2, 3}", "{3, 4}", "{4, 5}"], 
    correct: 0,
    subject: "matematica",
    assunto: "Conjuntos",
    difficulty: "medio"
  },
  { 
    question: "Qual é a interseção dos conjuntos A = {2, 3, 4} e B = {3, 5, 6}?", 
    options: ["{2, 3, 4, 5, 6}", "{3}", "{2, 5}", "{4, 5}"], 
    correct: 1,
    subject: "matematica",
    assunto: "Conjuntos",
    difficulty: "medio"
  },

  // **Análise Combinatória**
  { 
    question: "Quantas maneiras diferentes podemos organizar 3 livros em uma estante?", 
    options: ["3", "6", "9", "12"], 
    correct: 1,
    subject: "matematica",
    assunto: "Análise Combinatória",
    difficulty: "medio"
  },
  { 
    question: "Quantas combinações de 2 elementos podem ser feitas a partir de 4 elementos?", 
    options: ["4", "6", "12", "2"], 
    correct: 1,
    subject: "matematica",
    assunto: "Análise Combinatória",
    difficulty: "medio"
  },

  // **Geometria plana**
  { 
    question: "Qual é a área de um quadrado de lado 5?", 
    options: ["25", "10", "15", "20"], 
    correct: 0,
    subject: "matematica",
    assunto: "Geometria plana",
    difficulty: "facil"
  },
  { 
    question: "Qual é a fórmula do círculo?", 
    options: ["A = πr²", "A = 2πr", "A = πr", "A = r²"], 
    correct: 0,
    subject: "matematica",
    assunto: "Geometria plana",
    difficulty: "medio"
  },
  { 
    question: "Qual é a soma dos ângulos internos de um triângulo?", 
    options: ["180°", "360°", "90°", "270°"], 
    correct: 0,
    subject: "matematica",
    assunto: "Geometria plana",
    difficulty: "facil"
  },

  // **Geometria espacial**
  { 
    question: "Qual é a fórmula do volume de um cubo?", 
    options: ["V = a³", "V = a²", "V = 4/3πr³", "V = 2a"], 
    correct: 0,
    subject: "matematica",
    assunto: "Geometria espacial",
    difficulty: "medio"
  },
  { 
    question: "Quantos vértices tem um cubo?", 
    options: ["6", "8", "12", "4"], 
    correct: 1,
    subject: "matematica",
    assunto: "Geometria espacial",
    difficulty: "facil"
  },

  // **Estatística**
  { 
    question: "Qual é a média dos números 4, 8 e 12?", 
    options: ["6", "8", "10", "12"], 
    correct: 0,
    subject: "matematica",
    assunto: "Estatística",
    difficulty: "medio"
  },
  { 
    question: "Qual é a moda dos números 1, 2, 2, 3, 4?", 
    options: ["1", "2", "3", "4"], 
    correct: 1,
    subject: "matematica",
    assunto: "Estatística",
    difficulty: "facil"
  },
  { 
    question: "O que é desvio padrão?", 
    options: ["Média dos números", "Mediana dos números", "Distribuição dos dados em torno da média", "Soma dos quadrados dos valores"], 
    correct: 2,
    subject: "matematica",
    assunto: "Estatística",
    difficulty: "dificil"
  },
  
  // **Diversos**
  { 
    question: "O gráfico de uma função do segundo grau é uma:", 
    options: ["Reta", "Parábola", "Hipérbole", "Circunferência"], 
    correct: 1, 
    subject: "matematica",
    assunto: "Funções",
    difficulty: "medio"
  },
  { 
    question: "Quantos números primos existem entre 1 e 10?", 
    options: ["2", "3", "4", "5"], 
    correct: 1,
    subject: "matematica",
    assunto: "Números",
    difficulty: "facil"
  },

    // **História**
    { 
      question: "Quem foi o primeiro presidente do Brasil?", 
      options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Washington Luís"], 
      correct: 2,
      subject: "humanas",
      assunto: "História",
      difficulty: "medio"
    },
    { 
      question: "Qual foi o principal motivo para o início da Primeira Guerra Mundial?", 
      options: ["Assassinato de Francisco Ferdinando", "Revolução Russa", "Tratado de Versalhes", "A Crise de 1929"], 
      correct: 0,
      subject: "humanas",
      assunto: "História",
      difficulty: "dificil"
    },
    { 
      question: "Quem escreveu a 'Carta de Pero Vaz de Caminha'?", 
      options: ["Dom João VI", "José de Alencar", "Pero Vaz de Caminha", "Machado de Assis"], 
      correct: 2,
      subject: "humanas",
      assunto: "História",
      difficulty: "medio"
    },
    { 
      question: "Qual foi o evento que deu início à Revolução Francesa?", 
      options: ["Queda da Bastilha", "Guerra dos 100 anos", "Golpe de Napoleão", "Revolução Industrial"], 
      correct: 0,
      subject: "humanas",
      assunto: "História",
      difficulty: "medio"
    },
    { 
      question: "Quem foi o responsável pela independência do Brasil?", 
      options: ["Dom Pedro II", "Getúlio Vargas", "Dom João VI", "Dom Pedro I"], 
      correct: 3,
      subject: "humanas",
      assunto: "História",
      difficulty: "facil"
    },
  
    // **Geografia**
    { 
      question: "Qual é o maior continente do mundo em termos de área?", 
      options: ["Ásia", "África", "América do Norte", "Europa"], 
      correct: 0,
      subject: "humanas",
      assunto: "Geografia",
      difficulty: "medio"
    },
    { 
      question: "Em que continente está localizado o Deserto do Saara?", 
      options: ["África", "Ásia", "América do Sul", "Oceania"], 
      correct: 0,
      subject: "humanas",
      assunto: "Geografia",
      difficulty: "facil"
    },
    { 
      question: "Qual é o maior rio do mundo?", 
      options: ["Amazonas", "Nilo", "Yangtsé", "Ganges"], 
      correct: 0,
      subject: "humanas",
      assunto: "Geografia",
      difficulty: "medio"
    },
    { 
      question: "Qual é o país com maior população do mundo?", 
      options: ["China", "Índia", "Estados Unidos", "Rússia"], 
      correct: 0,
      subject: "humanas",
      assunto: "Geografia",
      difficulty: "facil"
    },
    { 
      question: "Qual é o continente onde está localizado o deserto de Gobi?", 
      options: ["Ásia", "África", "América do Norte", "Antártida"], 
      correct: 0,
      subject: "humanas",
      assunto: "Geografia",
      difficulty: "medio"
    },
  
    // **Filosofia**
    { 
      question: "Quem foi o filósofo grego que defendia a teoria das ideias?", 
      options: ["Platão", "Aristóteles", "Sócrates", "Pitágoras"], 
      correct: 0,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
    { 
      question: "Quem foi o autor da obra 'A República'?", 
      options: ["Platão", "Aristóteles", "Sócrates", "René Descartes"], 
      correct: 0,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "facil"
    },
    { 
      question: "Qual é a principal ideia do filósofo René Descartes?", 
      options: ["'Penso, logo existo'", "'O homem é o lobo do homem'", "'Conhece-te a ti mesmo'", "'A liberdade é a essência do ser'"], 
      correct: 0,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
    { 
      question: "Quem é considerado o pai da filosofia ocidental?", 
      options: ["Platão", "Aristóteles", "Sócrates", "Pitagoras"], 
      correct: 2,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
    { 
      question: "Qual filósofo defendia a ideia de que a verdade está além do mundo material?", 
      options: ["Aristóteles", "Platão", "Sócrates", "Pitágoras"], 
      correct: 1,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
  
    { 
      question: "O que é o 'Contrato Social' para Rousseau?", 
      options: ["A relação entre o governante e o governado", "O acordo entre a igreja e o Estado", "A transformação do Estado em uma monarquia", "A ideia de liberdade individual"], 
      correct: 0,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "dificil"
    },
  
    { 
      question: "O que Platão e Aristóteles tinham em comum?", 
      options: ["Ambos defendiam a teoria das ideias", "Ambos acreditavam na alma imortal", "Ambos criticavam a democracia", "Ambos fundaram escolas filosóficas"], 
      correct: 3,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
  
    { 
      question: "O que era a filosofia estoica?", 
      options: ["A crença no prazer como bem supremo", "A defesa do individualismo", "A aceitação do destino e a busca pela virtude", "A busca pelo conhecimento através da razão"], 
      correct: 2,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
  
    { 
      question: "Quem escreveu a obra 'Meditações'?", 
      options: ["Platão", "Cícero", "Sêneca", "Marco Aurélio"], 
      correct: 3,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },
    
    { 
      question: "Quem é o principal representante do empirismo?", 
      options: ["Descartes", "Hume", "Kant", "Nietzsche"], 
      correct: 1,
      subject: "humanas",
      assunto: "Filosofia",
      difficulty: "medio"
    },

      // **Português**
      { 
        question: "Qual é o sujeito da frase: 'A professora explicou a matéria com clareza.'?", 
        options: ["A professora", "A matéria", "Com clareza", "Explicou"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Português",
        difficulty: "facil"
      },
      { 
        question: "Qual é a função do verbo na frase: 'Ele correu para o parque.'?", 
        options: ["Predicado", "Sujeito", "Objeto direto", "Verbo de ligação"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Português",
        difficulty: "facil"
      },
      { 
        question: "O que é uma oração subordinada adjetiva?", 
        options: ["Oração que explica um verbo", "Oração que completa o sentido de um nome", "Oração que faz parte do sujeito", "Oração que não tem sujeito"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Português",
        difficulty: "medio"
      },
      { 
        question: "Em qual das alternativas há um erro de concordância verbal?", 
        options: ["Os meninos estuda na escola", "Ele vai ao mercado", "A professora explicou a matéria", "Os cães latem muito"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Português",
        difficulty: "medio"
      },
      { 
        question: "O que é um advérbio?", 
        options: ["Uma palavra que modifica o substantivo", "Uma palavra que modifica o verbo, o adjetivo ou outro advérbio", "Uma palavra que liga orações", "Uma palavra que substitui o nome"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Português",
        difficulty: "facil"
      },
    
      // **Literatura**
      { 
        question: "Quem é o autor de 'Dom Casmurro'?", 
        options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Jorge Amado"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
      { 
        question: "Qual é o tema principal do livro 'O Primo Basílio' de José de Alencar?", 
        options: ["A natureza humana e a moralidade", "O adultério e suas consequências", "A luta de classes", "A independência do Brasil"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
      { 
        question: "Qual era o nome do autor do livro 'O Cortiço'?", 
        options: ["Aluísio Azevedo", "Graciliano Ramos", "Raul Pompeia", "Machado de Assis"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
      { 
        question: "Quem escreveu a obra 'Grande Sertão: Veredas'?", 
        options: ["Graciliano Ramos", "João Guimarães Rosa", "José de Alencar", "Carlos Drummond de Andrade"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
      { 
        question: "Qual é a principal característica do Modernismo no Brasil?", 
        options: ["A exaltação dos valores tradicionais", "A busca pela simplicidade e forma de expressão individual", "O apego ao romantismo", "A crítica ao passado colonial"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
    
      { 
        question: "O que caracteriza a obra de William Shakespeare?", 
        options: ["O romantismo e os dramas históricos", "A crítica social e o amor impossível", "A representação das ideias filosóficas e políticas", "A construção de personagens trágicos e com dilemas morais"], 
        correct: 3,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "dificil"
      },
      { 
        question: "Qual é o romance mais famoso de Jane Austen?", 
        options: ["Orgulho e Preconceito", "O Morro dos Ventos Uivantes", "Razão e Sensibilidade", "Mataram a Cotovia"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
      { 
        question: "Em qual movimento literário está inserido o romance 'Memórias Póstumas de Brás Cubas'?", 
        options: ["Romantismo", "Modernismo", "Realismo", "Barroco"], 
        correct: 2,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
      { 
        question: "Quem é o autor de 'O Guarani'?", 
        options: ["José de Alencar", "Machado de Assis", "Monteiro Lobato", "Graciliano Ramos"], 
        correct: 0,
        subject: "linguagens",
        assunto: "Literatura",
        difficulty: "medio"
      },
    
      // **Inglês**
      { 
        question: "How do you say 'cachorro' in English?", 
        options: ["Cat", "Dog", "Horse", "Cow"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "Which one is a synonym of 'happy'?", 
        options: ["Sad", "Excited", "Angry", "Unhappy"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "What does 'book' mean in Portuguese?", 
        options: ["Caderno", "Livro", "Caneta", "Mesa"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "How do you say 'obrigado' in English?", 
        options: ["Please", "Thank you", "Sorry", "Goodbye"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "How do you form the plural of 'child' in English?", 
        options: ["Childes", "Childs", "Children", "Childs"], 
        correct: 2,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "medio"
      },
    
      { 
        question: "Which sentence is correct?", 
        options: ["He can sings well", "She can play well", "They can playing well", "We can plays well"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "medio"
      },
      { 
        question: "How do you say 'bom dia' in English?", 
        options: ["Good night", "Good afternoon", "Good morning", "Good evening"], 
        correct: 2,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "What is the past form of 'go'?", 
        options: ["Gone", "Going", "Went", "Gone to"], 
        correct: 2,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "medio"
      },
      { 
        question: "Which one is the correct translation for 'Eu gosto de estudar'?", 
        options: ["I like study", "I like studying", "I likes studying", "I studying like"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "How do you say 'estudante' in English?", 
        options: ["Teacher", "Student", "Principal", "Pupil"], 
        correct: 1,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "facil"
      },
      { 
        question: "What is the plural form of 'mouse'?", 
        options: ["Mouses", "Mices", "Mice", "Mouseses"], 
        correct: 2,
        subject: "linguagens",
        assunto: "Inglês",
        difficulty: "medio"
      },

        // **Física**
        { 
          question: "Qual é a unidade de medida da força no Sistema Internacional?", 
          options: ["Metro", "Joule", "Newton", "Watt"], 
          correct: 2,
          subject: "natureza",
          assunto: "Física",
          difficulty: "facil"
        },
        { 
          question: "Qual é a fórmula da aceleração média?", 
          options: ["a = (vf - vi) / t", "a = m / v", "a = v / t", "a = F / m"], 
          correct: 0,
          subject: "natureza",
          assunto: "Física",
          difficulty: "facil"
        },
        { 
          question: "A Lei de Newton que afirma que 'a cada ação há uma reação' é chamada de?", 
          options: ["Primeira Lei de Newton", "Segunda Lei de Newton", "Terceira Lei de Newton", "Lei da Gravitacional"], 
          correct: 2,
          subject: "natureza",
          assunto: "Física",
          difficulty: "facil"
        },
        { 
          question: "O que é um condutor elétrico?", 
          options: ["Material que permite o fluxo de calor", "Material que impede o fluxo de eletricidade", "Material que permite o fluxo de eletricidade", "Material que impede o fluxo de calor"], 
          correct: 2,
          subject: "natureza",
          assunto: "Física",
          difficulty: "medio"
        },
        { 
          question: "Qual é a principal função de um transformador elétrico?", 
          options: ["Transformar energia cinética em energia potencial", "Transformar energia elétrica em calor", "Transformar energia elétrica de alta tensão para baixa tensão", "Transformar energia mecânica em energia elétrica"], 
          correct: 2,
          subject: "natureza",
          assunto: "Física",
          difficulty: "medio"
        },
      
        // **Química**
        { 
          question: "O que é uma reação exotérmica?", 
          options: ["Uma reação que libera calor", "Uma reação que absorve calor", "Uma reação que não libera nem absorve calor", "Uma reação que transforma luz em calor"], 
          correct: 0,
          subject: "natureza",
          assunto: "Química",
          difficulty: "facil"
        },
        { 
          question: "Qual é a fórmula química da água?", 
          options: ["H2O", "O2H", "H2O2", "OH2"], 
          correct: 0,
          subject: "natureza",
          assunto: "Química",
          difficulty: "facil"
        },
        { 
          question: "O que é pH?", 
          options: ["Uma medida de concentração de íons de sódio", "Uma medida de concentração de íons de hidrogênio", "Uma medida de salinidade", "Uma medida de pressão"], 
          correct: 1,
          subject: "natureza",
          assunto: "Química",
          difficulty: "facil"
        },
        { 
          question: "O que acontece quando o ácido clorídrico (HCl) reage com o hidróxido de sódio (NaOH)?", 
          options: ["Formam-se água e cloreto de sódio", "Formam-se gás oxigênio e água", "Formam-se água e dióxido de carbono", "Formam-se gás cloro e sódio"], 
          correct: 0,
          subject: "natureza",
          assunto: "Química",
          difficulty: "medio"
        },
        { 
          question: "Qual é o elemento químico que representa o símbolo O?", 
          options: ["Oxigênio", "Ouro", "Ósmio", "Odin"], 
          correct: 0,
          subject: "natureza",
          assunto: "Química",
          difficulty: "facil"
        },
      
        { 
          question: "O que é uma substância composta?", 
          options: ["Substância formada por um único elemento químico", "Substância formada por dois ou mais elementos químicos diferentes", "Substância que não reage com outros elementos", "Substância que não se dissolve em água"], 
          correct: 1,
          subject: "natureza",
          assunto: "Química",
          difficulty: "medio"
        },
        { 
          question: "O que é a Lei da Conservação da Massa?", 
          options: ["A massa total é conservada durante qualquer transformação física ou química", "A massa total aumenta durante uma reação", "A massa total diminui durante uma reação", "A massa se transforma em energia durante as reações"], 
          correct: 0,
          subject: "natureza",
          assunto: "Química",
          difficulty: "medio"
        },
        { 
          question: "A substância que contém apenas átomos de carbono e hidrogênio é chamada de?", 
          options: ["Álcoois", "Ácidos", "Hidrocarbonetos", "Glicídios"], 
          correct: 2,
          subject: "natureza",
          assunto: "Química",
          difficulty: "medio"
        },
        { 
          question: "Qual é a reação que ocorre quando um metal reage com o oxigênio?", 
          options: ["Combustão", "Oxidação", "Fermentação", "Precipitação"], 
          correct: 1,
          subject: "natureza",
          assunto: "Química",
          difficulty: "medio"
        },
      
        // **Biologia**
        { 
          question: "Qual é a função dos ribossomos nas células?", 
          options: ["Produção de energia", "Síntese de proteínas", "Reprodução celular", "Transporte de substâncias"], 
          correct: 1,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "facil"
        },
        { 
          question: "O que é fotossíntese?", 
          options: ["Processo de respiração das plantas", "Processo de reprodução das plantas", "Processo pelo qual as plantas produzem seu próprio alimento", "Processo pelo qual as plantas perdem água"], 
          correct: 2,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "facil"
        },
        { 
          question: "O que são mitocôndrias?", 
          options: ["Organelas responsáveis pela síntese de proteínas", "Organelas responsáveis pela produção de energia", "Organelas responsáveis pela divisão celular", "Organelas responsáveis pelo armazenamento de água"], 
          correct: 1,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "facil"
        },
        { 
          question: "Qual é o principal objetivo do sistema circulatório?", 
          options: ["Transportar oxigênio e nutrientes para as células", "Ajudar na digestão dos alimentos", "Controlar os hormônios no organismo", "Proteger o corpo contra infecções"], 
          correct: 0,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "medio"
        },
        { 
          question: "Qual é o órgão responsável pela produção de insulina?", 
          options: ["Fígado", "Rim", "Pâncreas", "Estômago"], 
          correct: 2,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "medio"
        },
      
        { 
          question: "O que é a teoria da evolução das espécies?", 
          options: ["A teoria que explica como os organismos vivos evoluem ao longo do tempo", "A teoria que descreve a formação dos planetas", "A teoria que explica a origem do universo", "A teoria que estuda o comportamento dos animais"], 
          correct: 0,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "medio"
        },
        { 
          question: "Qual é a principal função da clorofila nas plantas?", 
          options: ["Armazenar alimentos", "Realizar a fotossíntese", "Proteger contra pragas", "Absorver água"], 
          correct: 1,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "facil"
        },
        { 
          question: "O que é a homeostase?", 
          options: ["A capacidade de um organismo de manter a estabilidade interna", "O processo de digestão dos alimentos", "A capacidade de um organismo de se reproduzir", "A produção de hormônios pelo corpo"], 
          correct: 0,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "medio"
        },
        { 
          question: "O que é o DNA?", 
          options: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Ácido clorídrico", "Proteína que contém informações genéticas"], 
          correct: 0,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "medio"
        },
        { 
          question: "O que caracteriza uma célula eucariótica?", 
          options: ["Presença de núcleo bem definido", "Ausência de membrana plasmática", "Ausência de material genético", "Presença de parede celular rígida"], 
          correct: 0,
          subject: "natureza",
          assunto: "Biologia",
          difficulty: "medio"
        }
      ];
      

    
  



  

  document.getElementById("disciplina").addEventListener("change", function() {
    const disciplina = this.value;
    const assuntoSelect = document.getElementById("assunto");

    // Limpa as opções existentes de 'Assunto'
    assuntoSelect.innerHTML = '<option value="todos">Todos</option>';

    // Adiciona as opções de acordo com a 'Disciplina' selecionada
      let options = [];
      if (disciplina === "matematica") {
        options = [
          { value: "Álgebra", text: "Álgebra" },  
          { value: "Matemática básica", text: "Matemática básica" },
          { value: "Conjuntos", text: "Conjuntos" },
          { value: "Análise Combinatória", text: "Análise Combinatória" },  // Atualizado para 'Análise Combinatória'
          { value: "Geometria plana", text: "Geometria plana" },
          { value: "Geometria espacial", text: "Geometria espacial" },
          { value: "Estatística", text: "Estatística" }
        ];
      } else if (disciplina === "humanas") {
        options = [
          { value: "História", text: "História" },
          { value: "Geografia", text: "Geografia" },
          { value: "Filosofia", text: "Filosofia" }
        ];
      } else if (disciplina === "linguagens") {
        options = [
          { value: "Português", text: "Português" },
          { value: "Literatura", text: "Literatura" },
          { value: "Inglês", text: "Inglês" }
        ];
      } else if (disciplina === "natureza") {
        options = [
          { value: "Física", text: "Física" },
          { value: "Química", text: "Química" },
          { value: "Biologia", text: "Biologia" }
        ];
      }

    // Preenche o 'Assunto' com as novas opções
    options.forEach(option => {
      const newOption = document.createElement("option");
      newOption.value = option.value;
      newOption.textContent = option.text;
      assuntoSelect.appendChild(newOption);
    });
  });




  function applyFilters() {
    const disciplina = document.getElementById("disciplina").value;
    const assunto = document.getElementById("assunto").value || "todos";
    const dificuldade = document.getElementById("dificuldade").value;
    const texto = document.getElementById("texto").value.toLowerCase();

    const filtersSummary = `
        <h3>Filtros Aplicados:</h3>
        <p>Disciplina: ${disciplina.charAt(0).toUpperCase() + disciplina.slice(1)}</p>
        <p>Assunto: ${assunto.charAt(0).toUpperCase() + assunto.slice(1)}</p>
        <p>Dificuldade: ${dificuldade.charAt(0).toUpperCase() + dificuldade.slice(1)}</p>
        <p>Trecho: ${texto ? texto : "Não especificado"}</p>
    `;

    document.getElementById("filters-summary").innerHTML = filtersSummary;

    // Passando o 'assunto' para a função de exibição
    displayFilteredQuestions(disciplina, assunto, dificuldade, texto);
}

function displayFilteredQuestions(disciplina, assunto, dificuldade, texto) {
  console.log('Aplicando filtros: ', disciplina, assunto, dificuldade, texto); // Debugging

  let filteredQuestions = quizQuestions.filter(q => {
      return (
          (disciplina === "todas" || q.subject === disciplina) &&
          (assunto === "todos" || q.assunto === assunto) &&
          (dificuldade === "todas" || q.difficulty === dificuldade) &&
          (texto === "" || q.question.toLowerCase().includes(texto))
      );
  });

  let quizHTML = "";
  if (filteredQuestions.length > 0) {
      filteredQuestions.forEach((q, questionIndex) => {
          quizHTML += `
              <div class="quiz-question">
                  <h3>${q.question}</h3>
                  <ul id="options-${questionIndex}">
                      ${q.options.map((option, index) => `
                          <li 
                              onclick="checkAnswer(${questionIndex}, ${index}, ${q.correct})"
                              style="cursor: pointer;">
                              ${option}
                          </li>
                      `).join('')}
                  </ul>
              </div>
          `;
      });
  } else {
      quizHTML = `<p class="no-results">Nenhuma questão encontrada com os filtros aplicados.</p>`;
  }

  document.getElementById("quiz-container").innerHTML = quizHTML;
}


  function checkAnswer(questionIndex, selectedIndex, correctIndex) {
    const optionsList = document.getElementById(`options-${questionIndex}`).children;
  
    for (let i = 0; i < optionsList.length; i++) {
      if (i === correctIndex) {
        optionsList[i].style.backgroundColor = "green"; // Resposta correta
        optionsList[i].style.color = "white";
      } else if (i === selectedIndex) {
        optionsList[i].style.backgroundColor = "red"; // Resposta errada
        optionsList[i].style.color = "white";
      } else {
        optionsList[i].style.backgroundColor = ""; // Resetar outras opções
      }
  
      optionsList[i].style.pointerEvents = "none"; // Desativar cliques após seleção
    }
  }
  