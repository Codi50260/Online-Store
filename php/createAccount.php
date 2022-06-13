<?php require('connect.php');

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['pass'];
$question = $_POST['question'];
$sec_pass = $_POST['sec_pass'];

$sql = "INSERT INTO users (user_name, user_email, user_password, security_question, security_answer) 
VALUES ('$name', '$email', '$password', '$question', '$sec_pass')";

if ($conn->query($sql) === TRUE) {
    header('Location: '."../Account_created.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>