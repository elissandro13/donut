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
var flavor1=0;
var flavor2=0;
var flavor3=0;
var flavor4=0;
var flavor5=0;
var flavor6=0;
var flavor7=0;
var flavor8=0;
var flavor9=0;
const nome =localStorage.getItem('title');

function selectionflavors(){
  const flavors =localStorage.getItem('flavors')
  const splittedString = flavors.split(/,(?! )/)

  return `
  <p>${splittedString[0]}<input type="number" name="flavor1" id="fvr1"></p>
  <p>${splittedString[1]}<input type="number" name="flavor2" id="fvr2"></p>
  <p>${splittedString[2]}<input type="number" name="flavor3" id="fvr3"></p>
  <p>${splittedString[3]}<input type="number" name="flavor4" id="fvr4"></p>
  <p>${splittedString[4]}<input type="number" name="flavor5" id="fvr5"></p>
  <p>${splittedString[5]}<input type="number" name="flavor6" id="fvr6"></p>
  <p>${splittedString[6]}<input type="number" name="flavor7" id="fvr7"></p>
  <p>${splittedString[7]}<input type="number" name="flavor8" id="fvr8"></p>
  <p>${splittedString[8]}<input type="number" name="flavor9" id="fvr9"></p>
  <input type="submit" onclick=submeter()>
  `
}
var qtdsabores=0;
var qtdErrada=0;
var qtdmax=0;
function submeter(){
flavor1=Number(document.getElementById('fvr1').value);
flavor2=Number(document.getElementById('fvr2').value);
flavor3=Number(document.getElementById('fvr3').value);
flavor4=Number(document.getElementById('fvr4').value);
flavor5=Number(document.getElementById('fvr5').value);
flavor6=Number(document.getElementById('fvr6').value);
flavor7=Number(document.getElementById('fvr7').value);
flavor8=Number(document.getElementById('fvr8').value);
flavor9=Number(document.getElementById('fvr9').value);
qtdsabores=flavor1+flavor2+flavor3+flavor4+flavor5+flavor6+flavor7+flavor8+flavor9
qtdmax=Number(nome[0]+nome[1])
qtdErrada=qtdsabores-qtdmax
if(qtdsabores>qtdmax)
  alert("Você escolheu "+qtdErrada+" sabores a mais. Favor refazer o pedido!")
else if(qtdsabores<qtdmax)
alert("Você escolheu "+Math.abs(qtdErrada)+" sabores a menos. Favor refazer o pedido!")
}