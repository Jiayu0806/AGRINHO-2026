/* AGRINHO 2026 - SCRIPT.JS (VERSÃO FINAL) */
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "0.4s";
    });
  });

  const form = document.querySelector("form");

  if(form){

    form.addEventListener("submit", (e) => {

      e.preventDefault();

      const nome = form.querySelector('input[type="text"]').value;

      if(nome.trim() === ""){
        alert("Por favor, digite seu nome.");
        return;
      }

      alert("Mensagem enviada com sucesso!");

      form.reset();

    });

  }

});
