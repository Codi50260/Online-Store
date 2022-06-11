<?php require('connect.php');

$id = $_POST['id'];

$sql = "SELECT * FROM products WHERE product_id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();

    $name = $product["product_name"];
    $price = $product["product_price"];
    $rating = $product["product_rating"];
    $review = $product["product_total_reviews"];
    $category = $product["category"];
    $image1 = $product["image_path"];
    $image2 = $product["product_img_2"];
    $image3 = $product["product_img_3"];

    $sql2 = "UPDATE individual_product SET product_name = '$name', product_price = $price, product_rating = $rating, product_total_reviews = $review, category = '$category', image_path_1 = '$image1', image_path_2 = '$image2', image_path_3 = '$image3'";
    $conn->query($sql2);
}

header('Location: '."../product_info.html");
?>