<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $matriz = array(1, 2, 3, 4, 5, 6, 8, 9, 10);
    $n = 10;
    $somaTotal = $n * ($n+1) / 2;
    $somaAtual = array_sum($matriz);
    $num = $somaTotal - $somaAtual;
    echo "O número que falta nessa array é: $num."
?>
</body>
</html>
