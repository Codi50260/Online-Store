<?php require('connect.php');

$sql = "DELETE FROM cart";

if ($conn->query($sql) === TRUE) {
    header('Location: '."../thanks.html");
  } else {
    echo "Error deleting record: " . $conn->error;
  }
?>