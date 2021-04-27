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
    <input type = "radio" name = "radioletter" value = "${opcao},${preco}" required><h4 class = "precoNoInput">${numberToReal(preco)}</h4><br>
  `
}

function retornaOpcaoFlavors(opcao, preco) {
    document.getElementById("campoOpcoesFlavors").innerHTML += `
    <label>${opcao}</label>
    <input type = "radio" name = "radioflavor" value = "${opcao},${preco}" required><h4 class = "precoNoInput">${numberToReal(preco)}</h4><br>
  `
}

function retornaCheckboxFlavors(opcao) {
    document.getElementById("campoOpcoesFlavors").innerHTML += `
    <label>${opcao}</label>
    <input type = "checkbox" name = "checkboxflavor[]" value = "${opcao}"><br>
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
    <form name = "montagemDonut" id = "formularioMontagem" action = "carrinho.php" method="post">
        <div class="info"><strong class="title">Escolha 1 opção</strong></div>
        <fieldset id = "campoOpcoesLetters">
        </fieldset>
        <fieldset id = "campoOpcoesFlavors">
        </fieldset>
        <input type=hidden name=name value="${produto.name}">
        <input type=hidden name=description value="${produto.description}">
        <input type=hidden name=img value="${produto.img}">
        <input class = "botaoCarrinho" type = "submit" value = "Acrescentar ao carrinho">  
    </form>
    </div>
`

    if (produto.letters != "undefined") {
        document.getElementById("campoOpcoesFlavors").innerHTML += `<div class="info"><strong class="title">Escolha até x opções</strong></div>`
        const letters = produto.letters.split(',');
        const lettersPrices = produto.lettersPrices.split(',');
        for (var i = 0; i < letters.length; i++) {
            retornaOpcaoLetters(letters[i], lettersPrices[i]);
        }
        for (var i = 0; i < flavors.length; i++) {
            retornaCheckboxFlavors(flavors[i], flavorsPrices[i]);
        }

        (function () {
            const form = document.querySelector('#formularioMontagem');
            const checkboxes = form.querySelectorAll('input[type=checkbox]');
            const checkboxLength = checkboxes.length;
            const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

            function init() {
                if (firstCheckbox) {
                    for (let i = 0; i < checkboxLength; i++) {
                        checkboxes[i].addEventListener('change', checkValidity);
                    }

                    checkValidity();
                }
            }

            function isChecked() {
                for (let i = 0; i < checkboxLength; i++) {
                    if (checkboxes[i].checked) return true;
                }

                return false;
            }

            function checkValidity() {
                const errorMessage = !isChecked() ? 'Escolha pelo menos um sabor' : '';
                firstCheckbox.setCustomValidity(errorMessage);
            }

            init();
        })();


    } else {
        for (var i = 0; i < flavors.length; i++) {
            retornaOpcaoFlavors(flavors[i], flavorsPrices[i]);
        }
    }

}