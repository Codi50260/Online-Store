<?php require('connect.php');

$email = $_POST['email'];
$password = $_POST['pass'];

$sql = "SELECT logged_in FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();

    $sql2 = "UPDATE users SET logged_in = 'True' WHERE user_email = '$email' AND user_password = '$password'";
}

if ($conn->query($sql2) === TRUE) {
    header('Location: '."../home.html");
} else {
    echo "An unexpected error has occured. Please try again: " . $conn->error;
}
?>