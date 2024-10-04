<?php
    
    /*
    Database connerction
    Developer: Ricardo
    */
    
    $servername = "localhost";
    $username   = "postgres";
    $password   = "1234";
    $dbname     = "Beta";
    $port       = "5432";

    $data_connection="
        host     = $servername
        user = $username
        password = $password
        dbname   = $dbname
        port     = $port
    ";
    
    $conn = pg_connect($data_connection);

    if(!$conn){
        die("Connection failed: ".pg_last_error());
        
    } else {
        echo "connection success";
    }

    pg_close($conn);    
?>