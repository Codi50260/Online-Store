<?php require('connect.php');

$id = $_POST['id'];

$sql = "SELECT product_name, product_price, image_path FROM products WHERE product_id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();

    $name = $product["product_name"];
    $price = $product["product_price"];
    $image = $product["image_path"];

    $sql2 = "INSERT INTO cart (product_name, product_price, product_quantity, product_image) VALUES ('$name', $price, 1, '$image')";
}

if ($conn->query($sql2) === TRUE) {
    header('Location: '."../cart.html");
} else {
    echo "An unexpected error has occured. Please try again: " . $conn->error;
}
?>