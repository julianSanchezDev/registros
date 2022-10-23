<?php

include('config.php');

$Nombre = $_GET['Nombre'];
$consulta = "";

if(empty($Nombre)){
    $consulta = "select * from Clientes";
}else{
    $consulta = "select * from Clientes where Nombre = '$Nombre'";
}

$resultados = $db->query($consulta);
$cols = $resultados->numColumns();

while($row = $resultados->fetchArray(SQLITE3_ASSOC)){
    $jsonArray[] = $row;
}

if(empty($jsonArray)){
    $respuesta = "[]";
}else{
    $respuesta = json_encode( $jsonArray,JSON_PRETTY_PRINT);
}

print $respuesta;

?>


