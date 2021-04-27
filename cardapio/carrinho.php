<?php

$numLetters = null;
$price = null;
$priceBRL = null;
$name = null;
$description = null;
$img = null;
$flavorUnico = null;
$flavorArray = null;
$flavorString = "";

$stringPedido = null;

if (isset($_POST['radioletter'])) {
    list($numLetters, $price) = explode(',', $_POST['radioletter']);
    $priceBRL = number_format($price, 2, ",", ".");
}

if (isset($_POST['radioflavor'])) {
    list($flavorUnico, $price) = explode(',', $_POST['radioflavor']);
    $priceBRL = number_format($price, 2, ",", ".");
}

if (isset($_POST['name'])) {
    $name = $_POST['name'];
}

if (isset($_POST['description'])) {
    $description = $_POST['description'];
}

if (isset($_POST['img'])) {
    $img = $_POST['img'];
}

if (isset($_POST['checkboxflavor'])) {
    $flavorArray = $_POST['checkboxflavor'];
}

if (isset($_POST['radioflavor'])) {
    $stringPedido = "Pedido:" . $name . "\n Sabor: " . $flavorUnico . "\n Valor: " . $priceBRL;
}

if (isset($_POST['radioletter'])) {
    for ($i = 0; $i < count($flavorArray); $i++) {
        if ($i == count($flavorArray) - 1) {
            $flavorString .= $flavorArray[$i];
        } else {
            $flavorString .= $flavorArray[$i] . ", ";
        }
    }
    $stringPedido = "Pedido: " . $numLetters . "\nSabor(es): " . $flavorString . "\nValor: " . $priceBRL;

}

$urlEncodedString = urlencode($stringPedido);
$whatsAppStringEncoded = "https://api.whatsapp.com/send?phone=5531989313695&text=$urlEncodedString"

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="carrinho-styles.css">
    <link rel="stylesheet" type="text/css" href="../styleshf.css">
    <title>Isa Donuts</title>
</head>

<body>

    <div id="imagemfundo">

        <nav id="menu">
            <ul>
                <li><img src="../fotos/isa_logo.jpg" alt=""></li>
                <li><a href="../index.html" onclick="localStorage.removeItem('data');">Página Inicial</a></li>
                <li><a href="./cardapio.html" onclick="localStorage.removeItem('data');">Cardápio</a></li>
                <li><a href="#footer">Entrega</a></li>
                <li><a href="#footer">Quem Somos</a></li>
                <li><a href="#footer">Contato</a></li>
            </ul>
        </nav>

        <div id="container">
        <div class="banner">
        <?php

echo '<img class = "product-photo" src = "' . $img . '">';
if (isset($_POST['radioflavor'])) {
    echo '<h2>' . $name . '</h2>';
    echo '<p></p>';
    echo '<p> Sabor: ' . $flavorUnico . '</p>';
}

if (isset($_POST['radioletter'])) {
    echo '<h2>' . $numLetters . '</h2>';
    echo '<p></p>';
    echo '<p>Sabor(es): ' . $flavorString . '</p>';
}
echo '<p>Preço: R$' . $priceBRL . '</p>';

/*<p></p>
/*<p><font size = "6">${produto.description}</font></p>
/*<p></p>
/*<p><font size = "5">A partir de <strong><font size = "8">${numberToReal(produto.price)}</font></strong></p>
/*<p>Ou <strong><font size = "5">${numberToReal(produto.pricePixMoney)}</font> no pix!</strong></p>*/
?>
        </div>
        <?php
echo '<a href="' . $whatsAppStringEncoded . '">
                <button>Realizar pedido pelo WhatsApp</button>
            </a>'
?>
        </div>
    </div>

    <footer id="footer">
        <div class="footer">
            <div class="contact">
                <h4>Contate-nos</h4>
                <h5>

                    <i class="fas fa-map-marker-alt"></i>
                    Avenida Exemplo, 1111 - Na Praça - Minas, MG
                    <h5>
                        <i class="fas fa-phone"></i>
                        +55 (31) 91234-4322
                    </h5>
                    <h5>
                        <i class="far fa-envelope"></i>
                        mail@example.com
                    </h5>
                    <h5>
                        <i class="fas fa-clock"></i>
                        Aberto todos os dias das 15:00 às 21:00

                    </h5>

            </div>
            <div class="categorias">
                <h4>Categorias</h4>
                <ul>
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="./cardapio/cardapio.html">Cardápio</a></li>
                    <li><a href="#footer">Entrega</a></li>
                    <li><a href="#footer">Quem Somos</a></li>
                    <li><a href="#footer">Contato</a></li>
                </ul>
            </div>
            <div class="redes-socias">
                <h4>Nossas Redes</h4>
                <h5>Facebook</h5>
                <h5>Instagran</h5>
            </div>
        </div>
        <span class="direitos">
            <h6>© 2021 Donuts. Todos os Direitos Reservados.</h6>
        </span>
    </footer>
</body>

</html>
