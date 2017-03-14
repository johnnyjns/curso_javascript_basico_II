var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

tdImc.textContent = imc;

console.log(paciente);
console.log(tdPeso);
console.log(tdImc);
console.log(peso);
console.log(altura);
console.log(imc);
