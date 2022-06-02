<?php
 
require "vendor/autoload.php";

$app = new Slim\App();

$app->get("/products",function(){
    require_once 'php/connect.php';// Calling the database connection filerequire_once 'db.php';// Calling the database connection file

    $query = "select * from products";// SQL query
    $result = $conn->query($query);

    while ($row = $result->fetch_assoc()){// Loop through each field in the library table
        $data[] = $row;// Store each field in an array
    }
    
    return json_encode($data);// Translate this array into JSON
});

$app->run();

?>