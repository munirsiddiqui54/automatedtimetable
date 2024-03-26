<?php
require "connection.php";

if (isset($_POST['submit'])) {

    $first_name = $_POST['f_first_name'];
    $last_name = $_POST['f_last_name'];
    $email = $_POST['f_email'];
    $password = $_POST['f_password'];
    $code = $_POST['f_code'];
    $working_load = $_POST['f_working_load'];

    $stmt = $conn->prepare("INSERT INTO faculty (first_name, last_name, f_email, f_password, f_code, f_working_load) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $first_name, $last_name, $email, $password, $code, $working_load);

    if ($stmt->execute()) {
        echo "New record inserted successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
