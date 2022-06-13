<?php require('connect.php');

$email = $_POST['email'];
$password = $_POST['pass'];

echo $email;
echo $password;

$sql = "DELETE FROM users WHERE user_email = '$email' AND user_password = '$password'";

if ($conn->query($sql) === TRUE) {
    header('Location: '."../Account_deleted.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>