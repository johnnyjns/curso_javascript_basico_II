var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var pesoEhValido = true;
var alturaEhValida = true;


if (peso <= 0 || peso >= 1000) {
  pesoEhValido = false;
  console.log("Peso inválido!");
  tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
  console.log("Altura inválida!");
  tdImc.textContent = "Altura inválida";
}

if (pesoEhValido && alturaEhValida) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
  console.log(imc);
} else {
  console.log("Não foi calculado o imc!");
}

console.log(paciente);
console.log(tdPeso);
console.log(tdImc);
console.log(peso);
console.log(altura);
