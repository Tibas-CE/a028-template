function checaCaps(event) {
    //exibe o elemento que ativou o evento
    //console.log(event.target);

    //exibe a tecla pressionada
    console.log(event.key);

    const mensagem = document.getElementById("mensagem");
    //verifica se a tecla apertada e Shift
    if(event.key === "Shift"){
        //modifica o elemento p no HTML
        mensagem.innerHTML = "ATENÇÃO: SEGURANDO O SHIFT";
    } else {
        mensagem.innerHTML = "";
    }
};