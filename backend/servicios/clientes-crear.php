<?php

    include('config.php');
    $json = file_get_contents('php://input');

    
    $data = json_decode($json,true);
    
    $Nombre = $data['Nombre'];
    $Apellido = $data['Apellido'];
    $Telefono = $data['Telefono'];
    $Dni = $data['Dni'];
    $Email = $data['Email'];

   
    if($Nombre != "" || $Apellido != "" || $Telefono != "" || $Dni != "" || $Email != ""){
        $sql = "insert into Clientes values (null,'$Nombre','$Apellido','$Telefono','$Dni','$Email')";
        $resultado = $db->query($sql);
    }


?>