//Botão esconde senha
function escondeSenha(event) {
    event.preventDefault()    
    const inputPass = document.getElementById("password");

    //mudando o type text pelo password
    inputPass.setAttribute("type", "password");
    
    //desafio Fê
    // if (onclick || onclick) {
    //     inputPass.setAttribute("type", "password");
    // } else {
    //     inputPass.setAttribute("type", "text");
    // }
};

//Mudando class CSS
//Chamando class
const formulario = document.querySelector(".light");
formulario.classList.remove("light");
formulario.classList.add("dark")
