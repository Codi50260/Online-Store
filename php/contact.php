<?php require('connect.php');

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO responses (users_name, users_email, subject, message) 
VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    header('Location: '."../contact.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>