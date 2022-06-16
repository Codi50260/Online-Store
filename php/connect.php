<?php
// Storing our mysqli class parameters in variables
$servername = "sql11.freesqldatabase.com";
$username = "sql11500241";
$password = "3IykRcZZTd";
$dbname = "sql11500241";

// Using the above variables as parameter values
$conn = new mysqli($servername, $username, $password, $dbname); // Create connection

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>