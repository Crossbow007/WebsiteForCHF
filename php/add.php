<?php
// Include the file that contains CreateConnectionObject function
require_once("php/include.php");

// Establish a database connection
$mysqlObj = CreateConnectionObject();

// Define the table name
$TableName = "contact"; //

if (isset($_POST["name"], $_POST["email"], $_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $query = "INSERT INTO $TableName (name, email, message) VALUES (?, ?, ?)";
    $stmtObj = $mysqlObj->prepare($query);

    if ($stmtObj) {
        $stmtObj->bind_param("sss", $name, $email, $message);
        if ($stmtObj->execute()) {
            echo "New record added successfully";
        } else {
            echo "Error: " . $stmtObj->error;
        }
        $stmtObj->close();
    } else {
        echo "Failed to prepare the statement";
    }
} else {
    echo "One or more POST parameters are missing";
}

// Close the database connection
CloseConnection($mysqlObj);
?>
