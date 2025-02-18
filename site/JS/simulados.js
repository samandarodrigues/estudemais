
document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.querySelector(".filter select");
    const questionHeader = document.querySelector(".question-header");
    const questionText = document.querySelector(".question");
    const optionsContainer = document.querySelector(".options");
    const submitButton = document.createElement("button");
    const navigationContainer = document.querySelector(".navigation");
    const resultContainer = document.createElement("div");

    submitButton.textContent = "Submeter Respostas";
    submitButton.style.marginTop = "20px";
    submitButton.style.backgroundColor = "#28a745";
    submitButton.style.color = "white";
    submitButton.style.border = "none";
    submitButton.style.padding = "10px";
    submitButton.style.borderRadius = "4px";
    submitButton.style.cursor = "pointer";
    submitButton.disabled = true;

    resultContainer.className = "result";
    resultContainer.style.display = "none";

    const questionData = {
        "Questão 1": {
            header: "UFSM | M001",
            text: "A composição e o funcionamento do organismo internacional apresentados revelam a seguinte característica das relações internacionais entre os países-membros:",
            options: ["A. Igualdade militar.", "B. Assimetria política.", "C. Consenso multipolar.", "D. Equilíbrio estratégico.", "E. Soberania compartilhada."],
            correct: "C. Consenso multipolar."
        },
        "Questão 2": {
            header: "UFSM | M002",
            text: "Qual é o papel da ONU na mediação de conflitos internacionais?",
            options: ["A. Evitar guerras comerciais.", "B. Promover acordos entre países.", "C. Defender soberanias nacionais.", "D. Combater desigualdades regionais.", "E. Organizar blocos econômicos."],
            correct: "B. Promover acordos entre países."
        },
        "Questão 3": {
            header: "UFSM | M003",
            text: "Analise os fatores econômicos que influenciam as decisões políticas globais.",
            options: ["A. Redução de tarifas.", "B. Formação de alianças.", "C. Estratégias econômicas.", "D. Expansão territorial.", "E. Comércio regional."],
            correct: "C. Estratégias econômicas."
        }
    };

    let answers = {};

    const checkAllAnswered = () => {
        const totalQuestions = Object.keys(questionData).length;
        const answeredCount = Object.keys(answers).length;
        submitButton.disabled = answeredCount !== totalQuestions;
    };

    const loadQuestion = (key) => {
        const question = questionData[key];
        questionHeader.textContent = question.header;
        questionText.textContent = question.text;
        optionsContainer.innerHTML = "";

        question.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-button");

            button.addEventListener("click", () => {
                document.querySelectorAll(".option-button").forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
                answers[key] = option;
                checkAllAnswered();
            });

            optionsContainer.appendChild(button);
        });
    };


    const loadNextQuestion = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionKeys.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    };
    

    submitButton.addEventListener("click", () => {
        let correctCount = 0;
        let totalQuestions = Object.keys(questionData).length;
        let results = "Resultados:\n\n";

        loadNextQuestion();

        Object.keys(questionData).forEach((key) => {
            const correctAnswer = questionData[key].correct;
            const userAnswer = answers[key];

            if (userAnswer) {
                if (userAnswer === correctAnswer) {
                    correctCount++;
                    results += `${key}: Certo\n`;
                } else {
                    results += `${key}: Errado\n`;
                }
            } else {
                results += `${key}: Não respondida\n`;
            }
        });

        results += `\nVocê acertou ${correctCount} de ${totalQuestions} questões.`;
        resultContainer.textContent = results;
        resultContainer.style.color = "#333";
        resultContainer.style.whiteSpace = "pre-wrap";
        resultContainer.style.display = "block";
    });

    selectElement.addEventListener("change", (event) => {
        const selectedQuestion = event.target.value;
        if (selectedQuestion && questionData[selectedQuestion]) {
            loadQuestion(selectedQuestion);
        }
    });

    navigationContainer.appendChild(submitButton);
    navigationContainer.parentNode.appendChild(resultContainer);

    // Carrega a primeira questão por padrão
    loadQuestion("Questão 1");
    selectElement.value = "Questão 1";
});