// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo"); // Captura o input
    let nome = inputNome.value.trim(); // Remove espaços extras

    // Validação: verifica se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }


    amigos.push(nome); // Adiciona o nome ao array
    inputNome.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Captura a UL da lista
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array de amigos e cria elementos <li> para cada nome
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Escolhe um nome aleatório
    alert("O amigo sorteado foi: " + sorteado);
}
