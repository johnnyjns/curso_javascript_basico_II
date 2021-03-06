// principal.js
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  console.log(pacientes[i]);
  var paciente = pacientes[i];
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
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
    console.log(imc);
  } else {
    console.log("Não foi calculado o imc!");
  }
}
