const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Evento previnido.");
  setResultado();
  setPeso();
  setAltura();
  validar();
  imc();
});

function setPeso() {
  const peso = document.querySelector("#peso");
  return Number(peso.value);
}

function setAltura() {
  const altura = document.querySelector("#altura");
  return Number(altura.value);
}

function imc() {
  const peso = setPeso();
  const altura = setAltura();
  console.log(peso);
  console.log(altura);
  const calculoImc = peso / (altura * altura);
  return calculoImc.toFixed(2);
}

function getNivelImc() {
  const resultadoIMC = imc();
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade MARATHON grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (resultadoIMC >= 39.9) return nivel[5];
  if (resultadoIMC >= 34.9) return nivel[4];
  if (resultadoIMC >= 29.9) return nivel[3];
  if (resultadoIMC >= 24.9) return nivel[2];
  if (resultadoIMC >= 1.9) return nivel[1];
  if (resultadoIMC < 18.5) return nivel[0];
}

function validar() {
  if (!setPeso()) {
    alert("Peso Inválido");
    return;
  }
  if (!setAltura()) {
    alert("Altura Inválida");
    return;
  }
}

function criarP() {
  const p = document.createElement("p");
  return p;
}
function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = msg;
  const p = criarP();
  const resultadoIMC = imc();
  const nivelIMC = getNivelImc();
  resultado.innerHTML = `Resultado IMC: ${resultadoIMC}, ${nivelIMC}`;
  resultado.appendChild(p);
}

