// Seleciona o círculo e o container do jogo
const circle = document.getElementById('circle');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');

// Variáveis do jogo
let score = 0;
let gameActive = true;

// Função para mover o círculo a uma posição aleatória
function moveCircle() {
    const maxX = gameContainer.clientWidth - circle.offsetWidth;
    const maxY = gameContainer.clientHeight - circle.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
  }
  
// Função para atualizar a pontuação
function updateScore() {
  if (gameActive) {
    score++;
    scoreDisplay.textContent = `Pontuação: ${score}`;
    moveCircle();
  }
}

// Função para terminar o jogo
function endGame() {
  gameActive = false;
  alert(`Fim de jogo! Pontuação final: ${score}`);
}

// Evento de clique no círculo
circle.addEventListener('click', updateScore);

// Inicia o jogo e define o tempo de término
moveCircle();
setTimeout(endGame, 10000); // Termina o jogo após 10 segundos
