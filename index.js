// Criei a constante do formulário, para ser manipulado durante o programa
const formulario = document.querySelector('#form');

// Função para prevenir a atualização da página
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = document.querySelector('#Peso');
  const inputAltura = document.querySelector('#Altura');

  const peso = parseFloat(inputPeso.value.replace(',', '.'));
  const altura = parseFloat(inputAltura.value.replace(',', '.'));

  if (isNaN(peso) || peso <= 0) {
    setResultado('Peso inválido!', false);
    return;
  }
  if (isNaN(altura) || altura <= 0) {
    setResultado('Altura inválida!', false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc}, (${nivelImc}.)`;
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  if (imc >= 40) return nivel[5];
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

// Função do Resultado
function setResultado(msg, isValid) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
