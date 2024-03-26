<?php
require  "connection.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["id"])) {
        $rowId = $_POST["id"];
        echo $rowId;
        $query = "DELETE FROM faculty WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $rowId);

        if ($stmt->execute()) {
            echo "Row deleted successfully.";
        } else {
            echo "Error deleting row.";
        }
        $stmt->close();
        $conn->close();
    } else {
        echo "Invalid request.";
    }
} else {
    echo "Invalid request method.";
}
