let perguntas = [
  { pergunta: 'O que é energia solar?', opcoes: ['Energia proveniente de combustíveis fósseis', 'Energia obtida a partir da luz do sol', 'Energia gerada por ventos'], resposta: 1 },
  { pergunta: 'Qual é a principal vantagem da energia eólica?', opcoes: ['Alta poluição gerada', 'Baixa emissão de gases poluentes', 'Dependência de combustíveis fósseis'], resposta: 1 },
  { pergunta: 'Como é gerada a energia hidroelétrica?', opcoes: ['A partir da energia cinética da água em movimento', 'Por meio da queima de carvão', 'Utilizando a energia térmica do sol'], resposta: 0 },
  { pergunta: 'Qual é o principal impacto ambiental da energia hidroelétrica?', opcoes: ['Emissões de gases poluentes', 'Destruição de habitats aquáticos', 'Alterações nos ecossistemas dos rios'], resposta: 2 },
  { pergunta: 'Qual é uma desvantagem da energia solar fotovoltaica?', opcoes: ['Baixa eficiência na conversão de energia', 'Dependência das condições climáticas', 'Alto impacto ambiental'], resposta: 1 },
  { pergunta: 'Qual é uma fonte de energia renovável derivada da biomassa?', opcoes: ['Gás natural', 'Biodiesel', 'Carvão mineral'], resposta: 1 },
  { pergunta: 'O que é um biocombustível?', opcoes: ['Combustível não renovável', 'Combustível derivado de fontes orgânicas', 'Combustível gerado por processos nucleares'], resposta: 1 },
  { pergunta: 'Qual é uma desvantagem da energia eólica?', opcoes: ['Baixa disponibilidade em regiões ventosas', 'Alto custo de instalação', 'Impacto visual e sonoro'], resposta: 2 },
  { pergunta: 'O que é uma fonte de energia não renovável?', opcoes: ['Vento', 'Sol', 'Carvão mineral'], resposta: 2 },
  { pergunta: 'Qual é uma das formas mais comuns de armazenamento de energia elétrica?', opcoes: ['Baterias', 'Reservatórios de água', 'Tanques de combustível'], resposta: 0 },
  { pergunta: 'Qual é a unidade de medida da potência de uma fonte de energia?', opcoes: ['Watt', 'Volt', 'Ampere'], resposta: 0 },
  { pergunta: 'O que é eficiência energética?', opcoes: ['A quantidade de energia gerada por uma fonte renovável', 'A capacidade de uma fonte de energia de produzir eletricidade', 'O uso eficaz da energia para realizar uma tarefa'], resposta: 2 }
];

let currentQuestion = 0; // Índice da pergunta atual
let score = 0; // Pontuação inicial

// Função para começar o quiz ao pressionar o botão "Começar"
function comecarQuiz() {
  document.querySelector('.btn-comecar').style.display = 'none';
  document.getElementById('quiz').style.display = 'block'; 
  embaralharPerguntas(); 
  carregarProximaPergunta(); 
}

function embaralharPerguntas() {
  perguntas.sort(() => Math.random() - 0.5);
}

// Função para carregar a próxima pergunta
function carregarProximaPergunta() {
  if (currentQuestion < perguntas.length) {
    let perguntaAtual = perguntas[currentQuestion];
    document.getElementById('pergunta').textContent = `Pergunta ${currentQuestion + 1}: ${perguntaAtual.pergunta}`;
    let opcoesHTML = '';
    perguntaAtual.opcoes.forEach((opcao, index) => {
      opcoesHTML += `<li><button onclick="responder(${index})">${opcao}</button></li>`;
    });
    document.getElementById('opcoes').innerHTML = opcoesHTML;
    document.getElementById('feedback').textContent = ''; 
    // Atualiza a barra de progresso
    let progresso = ((currentQuestion + 1) / perguntas.length) * 100;
    document.querySelector('.progress-bar-inner').style.width = `${progresso}%`;
  } else {
    mostrarResultado();
  }
}

// Função para responder às perguntas e mostrar feedback
function responder(opcaoSelecionada) {
  let perguntaAtual = perguntas[currentQuestion];
  if (opcaoSelecionada === perguntaAtual.resposta) {
    score++; // Incrementa a pontuação se a resposta estiver correta
    document.getElementById('feedback').textContent = 'Resposta correta!';
    document.getElementById('feedback').className = 'feedback-correto';
  } else {
    document.getElementById('feedback').textContent = 'Resposta incorreta!';
    document.getElementById('feedback').className = 'feedback-incorreto';
  }
  currentQuestion++;
  setTimeout(carregarProximaPergunta, 1000); // Carrega a próxima pergunta após 1 segundo
}

// Função para mostrar o resultado final
function mostrarResultado() {
  document.getElementById('quiz').style.display = 'none';
  let resultadoFinal = document.getElementById('resultado-final');
  resultadoFinal.textContent = `Você acertou ${score} de ${perguntas.length} perguntas.`;
  if (score === perguntas.length) {
    resultadoFinal.innerHTML += "<br>Parabéns! Você é um especialista em Energias Renováveis!";
  } else {
    resultadoFinal.innerHTML += "<br>Continue aprendendo sobre Energias Renováveis para melhorar sua pontuação.";
  }
}

// Função para compartilhar o resultado no Facebook
function compartilharResultado() {
  let pontuacaoTexto = `Acertei ${score} de ${perguntas.length} perguntas no Quiz sobre Energias Renováveis! 🌿`;
  let url = `https://www.seusite.com/quiz-energias-renovaveis`;
  let hashtags = 'energiasrenovaveis,quiz';
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(pontuacaoTexto)}&hashtags=${encodeURIComponent(hashtags)}`, '_blank');
}

// Função para compartilhar o resultado no Twitter
function compartilharTwitter() {
  let pontuacaoTexto = `Acertei ${score} de ${perguntas.length} perguntas no Quiz sobre Energias Renováveis! 🌿`;
  let hashtags = 'energiasrenovaveis,quiz';
  let url = `https://www.seusite.com/quiz-energias-renovaveis`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(pontuacaoTexto)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`, '_blank');
}

// Carrega a primeira pergunta ao carregar a página
window.onload = carregarProximaPergunta;
