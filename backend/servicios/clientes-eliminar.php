<?php

    include('config.php');
    $json = file_get_contents('php://input');

    //Recibo los datos
    $data = json_decode($json,true);
    
    //Extraigo los datos que quiero insertar en la base
    $Id = $data['Id'];

    //Ejecuto mi query
    if($Id != ""){
        $sql = "delete from Clientes where Id = $Id";
        $resultado = $db->query($sql);
    }

?>