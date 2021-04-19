const requestURL = 'https://raw.githubusercontent.com/elissandro13/donut/main/cardapio/cardapio.Json';
const request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
request.onload = function () {
  const dadosProdutos = request.response;
  console.log(dadosProdutos);
  listarProdutos(dadosProdutos);
}
function numberToReal(value) {
  const numero = value.toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

function showProduct(produto) {
  return `
    <div class = "product" onclick = "cliqueProduto(
      
      '${produto.name}',
      '${produto.description}',
      '${produto.Price}',
      '${produto.PricePixMoney}',
      '${produto.img}',
      '${produto.flavors}',
      '${produto.flavorsPrices}',
      '${produto.letters}',
      '${produto.lettersPrices}')">
      
      <img class = "product-photo" src = "${produto.img}">
      <h2>${produto.name}</h2>
      <br>
      <p><font size = "4.5">${produto.description}</font></p>
      <br>
      <p>A partir de <strong><font size = "5">${numberToReal(produto.Price)}</font></strong></p>
      <p>Ou <strong><font size = "5">${numberToReal(produto.PricePixMoney)}</font> no pix!</strong></p>
    </div>
  `
}

function listarProdutos(jsonObj) {

  const minis = jsonObj.DonutsMinis;
  const tradicionais = jsonObj.DonutsTradicionais;
  const letras = jsonObj.DonutsEmLetras;

  document.getElementById("cardapio").innerHTML = `
<h1 class="title"> Cardápio </h1>
<h1 class="titlecombo"> Donuts Minis (Combos) </h1>
${minis.map(showProduct).join('')}
<h1 class="titlecombo"> Donuts Tradicionais (Combos) </h1>
${tradicionais.map(showProduct).join('')}
<h1 class="titlecombo"> Donuts Em Letras (Combos) </h1>
${letras.map(showProduct).join('')}
`
}

function cliqueProduto(nome, description, price, pricePixMoney, image, flavors, flavorsPrices, letters, lettersPrices) {
  const data = {
    "name": nome,
    "description": description,
    "price": price,
    "pricePixMoney": pricePixMoney,
    "img": image,
    "flavors": flavors,
    "flavorsPrices": flavorsPrices,
    "letters": letters,
    "lettersPrices": lettersPrices
  }
  localStorage.setItem('data', JSON.stringify(data));
  location.href = "./produtoSelecionado.html";
};