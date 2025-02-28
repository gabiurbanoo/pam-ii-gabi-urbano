<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="number" name="num1" id="num1" placeholder="Insira o primeiro número">
        <input type="number" name="num2" id="num2" placeholder="Insira o segundo número">
        <input type="submit" value="enviar">
    </form>

    <?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $sum = $num1 + $num2;
        echo "A soma dos números é $sum.";
    }
    ?>
</body>
</html>
