// Quiz simples sobre tecnologia no agro

function iniciarQuiz() {
    const perguntas = [
        {
            pergunta: "Qual tecnologia ajuda a monitorar plantações do alto?",
            opcoes: ["Satélites e drones", "Régua de madeira", "Pás agrícolas"],
            correta: 0
        },
        {
            pergunta: "O que a agricultura de precisão busca?",
            opcoes: [
                "Usar tecnologia para otimizar recursos",
                "Aumentar desperdício",
                "Evitar uso de máquinas"
            ],
            correta: 0
        },
        {
            pergunta: "Qual é um benefício da tecnologia no campo?",
            opcoes: [
                "Maior poluição",
                "Uso inteligente da água",
                "Redução da produção"
            ],
            correta: 1
        }
    ];

    let index = 0;
    let acertos = 0;

    const quizDiv = document.getElementById("quiz");
    const resultado = document.getElementById("resultado");

    function mostrarPergunta() {
        const p = perguntas[index];

        quizDiv.innerHTML = `
            <p><strong>${p.pergunta}</strong></p>
            ${p.opcoes.map((opcao, i) =>
                `<button onclick="responder(${i})">${opcao}</button>`
            ).join("<br>")}
        `;
    }

    window.responder = function(resposta) {
        if (resposta === perguntas[index].correta) {
            acertos++;
        }

        index++;

        if (index < perguntas.length) {
            mostrarPergunta();
        } else {
            quizDiv.innerHTML = "";
            resultado.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
        }
    }

    mostrarPergunta();
}
