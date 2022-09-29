function insereItem(event) {
    const input = document.getElementById("meu-input");
    const elementDad = document.getElementById("lista");

    const newElement = document.createElement("li");

    const conteudo = document.createTextNode(input.value);

    newElement.appendChild(conteudo);

    elementDad.insertAdjacentElement("beforeend", newElement);

    input.value = "";

};

//resolução do Leo Carrati
// function insereItem(event) {
//     document.getElementById('lista').appendChild(document.createElement('li')).innerHTML = document.getElementById("meu-input").value
//     document.getElementById("meu-input").value = ''
// }