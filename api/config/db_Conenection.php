<?php
    
    /*
    Database connerction
    Developer: Ricardo
    */
    
   $data_connection = "
    $servername = "localhost";
    $username   = "postgres";
    $password   = "unicesmag";
    $dbname     = "beta";
    $port       = "5432";
    "
    $conn = pg_connect($data_connection);

    if(!$conn){
        die("Connection failed: ".pg_last_error());
    }

    pg_close($conn);
    
?>