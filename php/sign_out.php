<?php require('connect.php');

$sql = "SELECT logged_in FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();

    $sql2 = "UPDATE users SET logged_in = 'False'";
}

if ($conn->query($sql2) === TRUE) {
    header('Location: '."../index.html");
} else {
    echo "An unexpected error has occured. Please try again: " . $conn->error;
}
?>