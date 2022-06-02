<?php
require('connect.php');
$response = [];

if ($conn){
    $sql = "select * from products";
    $result = mysqli_query($conn, $sql);
    if ($result){
        header("Content-Type: JSON");
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)){
            $response[$i]['id'] = $row['product_id'];
            $response[$i]['name'] = $row['product_name'];
            $response[$i]['price'] = $row['product_price'];
            $response[$i]['rating'] = $row['product_rating'];
            $response[$i]['image'] = $row['image_path'];
            $i++;
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
else {
    echo "Database connection failed";
}
?>