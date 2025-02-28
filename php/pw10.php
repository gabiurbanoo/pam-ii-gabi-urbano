<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post">
    <input type="email" name="email" placeholder="Insira seu email! Ex: joaolindo@gmail.com" required>
    <input type="submit" value="enviar">
</form>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    # Verifica se contém "@" e "."
    if (strpos($email, "@") === false || strpos($email, ".") === false) {
        echo "Email inválido";
    } else {
        # Separa o email em partes antes e depois do "@"
        $parteEmail = explode("@", $email);
        
        # Verifica se há algo antes do "@"
        if (strlen($parteEmail[0]) < 1) {
            echo "Email inválido";
        }
        # Verifica se há algo depois do "@"
        elseif (strlen($parteEmail[1]) < 1) {
            echo "Email inválido";
        }
        # Verifica se há pelo menos um "." após o "@"
        elseif (strpos($parteEmail[1], ".") === false) {
            echo "Email inválido";
        } else {
            echo "Email válido";
        }
    }
}
?>
</body>
</html>
