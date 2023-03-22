const prompt = require("prompt-sync")();

let isRunning = false;

/* Start code? */
for (i = 0; i < 3; i++) {
  const start = prompt("Você quer saber em que ano você nasceu? ", "n");
  switch (start.toLowerCase()) {
    case "n":
      console.log("Finalizando...");
      i=3; /* Finish loop */
      break;
    case "s":
      console.log("Começando...");
      i=3; /* Finish loop */
      isRunning = true;
      break;
    default:
      console.log("Opção inválida!");
  }
}

/* Code logic */
if (isRunning) {
  const idade = prompt("Digite sua idade: ");
  const ano = prompt("Digite o ano em que estamos: ");
  console.log(`Você nasceu em: ${ano-idade-1} - ${ano-idade}`); /* Range of years */
}