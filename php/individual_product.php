<?php
 
require "../vendor/autoload.php";

$app = new Slim\App();

$app->get("/individual_product",function(){
    require_once 'connect.php';// Calling the database connection filerequire_once 'db.php';// Calling the database connection file

    $query = "select * from individual_product";// SQL query
    $result = $conn->query($query);

    while ($row = $result->fetch_assoc()){// Loop through each field in the library table
        $data[] = $row;// Store each field in an array
    }
    
    return json_encode($data);// Translate this array into JSON
});

$app->run();

?>