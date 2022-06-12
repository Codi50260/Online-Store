<?php require('connect.php');

$name = $_POST['name-'];

$sql = "SELECT product_quantity FROM cart WHERE product_name = '$name'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();

    $quantity = $product["product_quantity"];

    if ($quantity != 1){
        $quantity = $product["product_quantity"] - 1;
    }

    $sql2 = "UPDATE cart SET product_quantity = $quantity WHERE product_name = '$name'";
}

if ($conn->query($sql2) === TRUE) {
    header('Location: '."../cart.html");
} else {
    echo "An unexpected error has occured. Please try again: " . $conn->error;
}
?>