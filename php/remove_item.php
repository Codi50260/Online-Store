<?php require('connect.php');

$name = $_POST['name'];

$sql = "DELETE FROM cart WHERE product_name = '$name'";

if ($conn->query($sql) === TRUE) {
    header('Location: '."../cart.html");
  } else {
    echo "Error deleting record: " . $conn->error;
  }
?>