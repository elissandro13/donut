document.title = JSON.stringify(localStorage.getItem('title'));
escolhido()
function numberToReal(value) {
  const numero = parseFloat(value).toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

function escolhido(){
    const price= localStorage.getItem('price');
    const nome =localStorage.getItem('title');
    const description =localStorage.getItem('description');
    const pricepix =localStorage.getItem('pricePixMoney');
    const image =localStorage.getItem('image');
    const flavors =localStorage.getItem('flavors');
     const output=`
        <h1 class="title">${JSON.stringify(nome)}</h1>
        <div class="productescolhido">
        <img class= "escolhidofoto" src="${image}" title="Imagem do produto" />
        <p><font size="4">${JSON.stringify(description)}</font></p>
        <p>A partir de <strong><font size="5">${numberToReal(price)}</font></strong></p>
        <p>Ou <strong><font size="5">${numberToReal(pricepix)}</font>no pix!</strong></p><br>
        <p>Escolha ${nome[0]+nome[1]} sabores </p>
        <p>${selectionflavors()}</p>
        </div>
        `
        document.getElementById("produtoselecionado").innerHTML = output;
}

function selectionflavors(){
  const flavors =localStorage.getItem('flavors')
  const splittedString = flavors.split(/,(?! )/)
  return `
  <p>${splittedString[0]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[1]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[2]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[3]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[4]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[5]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[6]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[7]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  <p>${splittedString[8]}<button class="btn" type="button"> + <span class="badge"> 0 </span></button></p>
  `
}
  var contador = document.querySelector('.badge');
  document.querySelector('button').addEventListener('click', function(){
    var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;
});