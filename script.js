/* AGRINHO 2026 - SCRIPT.JS (VERSÃO FINAL) */

/* Destacar menu ao clicar */
let links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // remove destaque de todos
        links.forEach(l => {
            l.style.background = "";
            l.style.color = "white";
        });

        // adiciona destaque no clicado
        link.style.background = "#66bb6a";
        link.style.color = "white";
        link.style.borderRadius = "10px";
        link.style.padding = "5px 10px";
    });
});

/* Efeito de scroll no cabeçalho */
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.opacity = "0.9";
    } else {
        header.style.opacity = "1";
    }
});

/* Interação nas seções */
let sections = document.querySelectorAll("section");

sections.forEach(function(sec) {
    sec.addEventListener("click", function () {
        if (sec.style.background === "rgb(232, 245, 233)") {
            sec.style.background = "white";
        } else {
            sec.style.background = "#e8f5e9";
        }
    });
});
