const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = localStorage.getItem("Itens") || [];

console.log(itens)

itens.forEach((elemento) => {
    console.log(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
   
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value)
                    /* busacando valor no objeto */
    nome.value = "";
    quantidade.value = "";
})     




function criaElemento(nome, quantidade) {
 
    const novoItem = document.createElement('li')
    /* <li class="item"><strong>7</strong>Camisas</li> */
    novoItem.classList.add("item")
    // <li class='item'></li> --> foi criado isso nessa função

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade
    /*Aqui foi criado uma tag STRONG e foi adicionado a ela um valor ex: <strong>10</strong> */

    novoItem.appendChild(numeroItem)
    /*Aqui foi posto uma tag dentro da outra, a tag strong dento da li ex: <li><strong></strong></li> */
    novoItem.innerHTML += nome
    
    /*Aqui foi adicionado o nome do item a lista */
    lista.appendChild(novoItem)

    /*aqui foi adicionado a lista ao HTML */

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("Itens", JSON.stringify(itens))
    

}


