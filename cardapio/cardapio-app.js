var requestURL = 'cardapio.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
request.onload = function(){
  var dadosProdutos = request.response;
  console.log(dadosProdutos);
  listarProdutos(dadosProdutos);
}
function numberToReal(numero) {
  var numero = numero.toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

function showProduct(produto){
  return `
    <div class = "product" onclick = "cliqueProduto(
      
      '${produto.name}',
      '${produto.description}',
      '${produto.Price}',
      '${produto.PricePixMoney}',
      '${produto.img}',
      '${produto.flavors}')">
      
      <img class = "product-photo" src = "${produto.img}">
      <h2>${produto.name}</h2>
      <p>${produto.description}</p>
      <p>A partir de <strong><font size = "5">${numberToReal(produto.Price)}</font></strong></p>
      <p>Ou <strong><font size = "5">${numberToReal(produto.PricePixMoney)}</font> no pix!</strong></p>
    </div>
  `
}

function listarProdutos(jsonObj){

var minis = jsonObj.DonutsMinis;
var tradicionais = jsonObj.DonutsTradicionais;
var letras = jsonObj.DonutsEmLetras;

console.log(minis.map(showProduct));

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

function cliqueProduto(nome, description, price, pricePixMoney, image, flavors){
    alert(price,flavors);
};