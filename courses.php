<?php
require "connection.php";

if (isset($_POST['submit_course'])) {

    $c_name = $_POST['c_name'];
    $c_code = $_POST['c_code'];
    $c_required_hours = $_POST['c_required_hours'];

    $stmt = $conn->prepare("INSERT INTO courses (c_name, c_code, c_required_hours) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $c_name, $c_code, $c_required_hours);

    $stmt->close();
}
