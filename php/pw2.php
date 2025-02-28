<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="number" name="" id="" placeholder="Insira a base em cm do triângulo">
        <input type="number" name="" id="" placeholder="Insira a altura em cm do triângulo">
        <input type="submit" value="enviar">
    </form>
    <?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $base = $_POST["base"];
        $altura = $_POST["altura"];
        
       $area =  ($base * $altura)/2;
       echo "A área do triangulo é $areacm.";

    }
?>
</body>
</html>
