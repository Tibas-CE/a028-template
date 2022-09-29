//Cria um novo elemento
const novoElemento1 = document.createElement("li");
const novoElemento2 = document.createElement("li");

//Cria um conteúdo
const conteudo1 = document.createTextNode("Item 0");
const conteudo2 = document.createTextNode("Item 5");

//alocando o conteúdo ao elemento criado
novoElemento1.appendChild(conteudo1);
novoElemento2.appendChild(conteudo2);

//Chamando elemento do HTML
const elementoPai = document.getElementById("lista");

//Adiciona no elemento pai o novo elemento criado, mas antes de seu filhos
elementoPai.insertAdjacentElement("afterbegin", novoElemento1);
//Adiciona no elemento pai o novo elemento criado, mas depois de seu filhos
elementoPai.insertAdjacentElement("beforeend", novoElemento2);