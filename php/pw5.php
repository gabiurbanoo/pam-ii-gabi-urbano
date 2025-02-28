<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="number" name="" id="" placeholder="Insira a quantidade de galinhas">
        <input type="number" name="" id="" placeholder="Insira a quantidade de vacas">
        <input type="number" name="" id="" placeholder="Insira a quantidade de porcos">
        <input type="submit" value="enviar">
    </form>
    <?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $galinhas = $_POST["galinha"];
        $vacas = $_POST["vaca"];
        $porcos = $_POST["porco"];

        $vacas = $vacas * 4;
        $porcos = $porcos * 4;
        $galinhas = $galinhas * 2;

       $total =  $vacas + $porcos + $galinhas;
       echo "A quantidade total de pernas é $total.";

    }
?>
</body>
</html>

