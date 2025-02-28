<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="number" name="" id="" placeholder="Insira o primeiro número">
        <input type="number" name="" id="" placeholder="Insira o segundo número">
    </form>
<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        
       $menor =  min($num1, $num2);
       echo "O menor número é: $menor."

    }
?>
</body>
</html>

