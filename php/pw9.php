<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $hoje = date("d/m");

    if ($hoje == "25/12") {
        echo "$hoje // hoje é natal";
    }
    else {
        echo "$hoje // hoje não é natal";
    }
?>
</body>
</html>

