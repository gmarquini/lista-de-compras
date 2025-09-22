const addItemForm = document.getElementById("add-item")
const textoInput = document.getElementById("texto-input")
const itensAdicionados = document.getElementById("itens-adicionados")
const campoDeErro = document.querySelector(".campo-de-erro")

addItemForm.addEventListener('submit', (event) => {
  event.preventDefault(); // impede o carregamento da página

  const texto = textoInput.value // pega o que foi escrito do input

  if (!texto) {
    error()
  } else {
    
    const novoElemento = enviaItem(texto) // chama a função e armazena o valor retornado
  
    // Adiciona o novo elemento à lista. O 'innerHTML +=' funciona.
    itensAdicionados.innerHTML += novoElemento
  
    textoInput.value = "" // limpa o input
    campoDeErro.innerHTML = ""
  }
})

function enviaItem(texto) {
  // O HTML do novo item que será retornado
  const novoElemento = `
  <div class="list">
    <label class="list-item">
      <span>${texto}</span>
    </label>
    <span class="trash-icon">
      <img src="assets/icons/trash-icon.svg" alt="Ícone de lixeira">
    </span>
  </div>`;
  
  return novoElemento;
}

function error() {
  const errorText = "Digite algo, por favor."
  campoDeErro.innerHTML = errorText
}

// A função de apagar o item, que será chamada pelo 'addEventListener'
function eraseContent(event) {
    // 1. Encontra o elemento 'trash-icon' clicado
    const itemClicado = event.target.closest('.trash-icon');

    // 2. Se o clique foi no ícone, encontra o elemento pai '.list' para remover
    if (itemClicado) {
        const itemDaLista = itemClicado.closest('.list');
        if (itemDaLista) {
            itemDaLista.remove();
        }
    }
}

// Adiciona o ouvinte de evento ao contêiner pai, não a cada ícone individualmente
itensAdicionados.addEventListener('click', eraseContent);
