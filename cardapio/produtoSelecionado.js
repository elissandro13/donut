const dados = JSON.parse(localStorage.getItem('data'));
document.title = dados.name;

desenhaBanner(dados);
caixaOpcoes(dados);

function numberToReal(value) {
    const numero = parseFloat(value).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

function retornaOpcaoLetters(opcao, preco) {
    document.getElementById("campoOpcoesLetters").innerHTML += `
    <label>${opcao}</label>
    <input type = "radio" name = "radioletter" value = "${preco}" required><h4 class = "precoNoInput">${numberToReal(preco)}</h4><br>
  `
}

function retornaOpcaoFlavors(opcao, preco) {
    document.getElementById("campoOpcoesFlavors").innerHTML += `
    <label>${opcao}</label>
    <input type = "radio" name = "radioflavor" value = "${preco}" required><h4 class = "precoNoInput">${numberToReal(preco)}</h4><br>
  `
}

function desenhaBanner(produto) {
    document.getElementById("banner-produto").innerHTML = `
    <div class = "banner">
        <img class = "product-photo" src = "${produto.img}">
        <h2>${produto.name}</h2>
        <p></p>
        <p><font size = "6">${produto.description}</font></p>
        <p></p>
        <p><font size = "5">A partir de <strong><font size = "8">${numberToReal(produto.price)}</font></strong></p>
        <p>Ou <strong><font size = "5">${numberToReal(produto.pricePixMoney)}</font> no pix!</strong></p>
    </div>
`
}

function caixaOpcoes(produto) {
    const flavors = produto.flavors.split(',');
    const flavorsPrices = produto.flavorsPrices.split(',');

    document.getElementById("opcoes-obrigatorias").innerHTML = `
    <div id = "caixaOpcoes">
    <form name = "montagemDonut" action = "carrinho.php" method="get">
        <fieldset id = "campoOpcoesFlavors">
        <div class="info"><strong class="title">Escolha 1 opção</strong></div>
        </fieldset>
        <fieldset id = "campoOpcoesLetters">
        </fieldset>
        <input type = "submit" value = "Acrescentar ao carrinho">  
    </form>
    </div>
`
    for (var i = 0; i < flavors.length; i++) {
        retornaOpcaoFlavors(flavors[i], flavorsPrices[i]);
    }

    if (produto.letters != "undefined") {
        document.getElementById("campoOpcoesLetters").innerHTML += `<div class="info"><strong class="title">Escolha 1 opção</strong></div>`
        const letters = produto.letters.split(',');
        const lettersPrices = produto.lettersPrices.split(',');
        for (var i = 0; i < letters.length; i++) {
            retornaOpcaoLetters(letters[i], lettersPrices[i]);
        }
    }

}