const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})                  /* busacando valor no objeto */

function criaElemento(nome, quantidade) {
 
    /* <li class="item"><strong>7</strong>Camisas</li> */
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
    // <li class='item'></li> --> foi criado isso nessa função

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade
    /*Aqui foi criado uma tag STRONG e foi adicionado a ela um valor ex: <strong>10</strong> */
    console.log(numeroItem)

    novoItem.appendChild(numeroItem)
    /*Aqui foi posto uma tag dentro da outra, a tag strong dento da li ex: <li><strong></strong></li> */
    novoItem.innerHTML += nome
    
    /*Aqui foi adicionado o nome do item a lista */
    lista.appendChild(novoItem)

    /*aqui foi adicionado a lista ao HTML */

}


