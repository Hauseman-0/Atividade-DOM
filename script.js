// === Variáveis do contador ===
const btnIncrement = document.getElementById('btnIncrement');
const btnDecrement = document.getElementById('btnDecrement');
const spanCounter = document.getElementById('counter');
let counter = 0;

// === Botões de controle ===
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const outputDiv = document.getElementById('output');
const shapeTypeSelect = document.getElementById('shapeType');
const addShapeBtn = document.getElementById('addShape');
const resetBtn = document.getElementById('reset');

// === Incrementar contador ===
btnIncrement.addEventListener('click', () => {
  counter++;
  spanCounter.textContent = counter;
});

// === Decrementar contador com limite zero e recarregar ===
btnDecrement.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    spanCounter.textContent = counter;
  } else {
    alert("O contador já está em zero! A página vai reiniciar.");
    location.reload(); // Faz a página recarregar
  }
});

// === Contar caracteres sem espaços em tempo real ===
textInput.addEventListener('input', () => {
  const textWithoutSpaces = textInput.value.replace(/\s/g, '');
  charCount.textContent = `Caracteres (sem espaços): ${textWithoutSpaces.length}`;
});

// === Adicionar parágrafo ao pressionar ENTER ===
textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value.trim() !== '') {
    const p = document.createElement('p');
    p.textContent = textInput.value.trim();
    outputDiv.appendChild(p);
    textInput.value = ''; // Limpa o campo
    charCount.textContent = 'Caracteres (sem espaços): 0'; // Reseta o contador de caracteres
  }
});

// === Adicionar forma geométrica ===
addShapeBtn.addEventListener('click', () => {
  const selectedShape = shapeTypeSelect.value;
  const shapeDiv = document.createElement('div');
  shapeDiv.classList.add('shape', selectedShape); // Adiciona classes para estilo
  outputDiv.appendChild(shapeDiv);
});

// === Reset geral: zera contador, limpa textos e formas ===
resetBtn.addEventListener('click', () => {
  counter = 0;
  spanCounter.textContent = counter;
  outputDiv.innerHTML = ''; // Remove todos os parágrafos e formas
  textInput.value = '';
  charCount.textContent = 'Caracteres (sem espaços): 0';
});
