// script.js

function alternarTema() {
    // Seleciona o elemento <body>
    const body = Document.body;
    
    // Verifica a classe atual e alterna entre "claro" e "escuro"
    if (body.classList.contains('claro')) {
        body.classList.remove('claro');
        body.classList.add('escuro');
    } else {
        body.classList.remove('escuro');
        body.classList.add('claro');
    }
}
