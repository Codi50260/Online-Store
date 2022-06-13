<?php require('connect.php');

$email = $_POST['email'];
$question = $_POST['question'];
$sec_pass = $_POST['sec_pass'];
$new_pass = $_POST['new_pass'];

$sql = "SELECT user_password FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();

    $sql2 = "UPDATE users SET user_password = '$new_pass' WHERE user_email = '$email' AND security_question = '$question' AND security_answer = '$sec_pass'";
}

if ($conn->query($sql2) === TRUE) {
    header('Location: '."../Password_reset.html");
} else {
    echo "An unexpected error has occured. Please try again: " . $conn->error;
}
?>