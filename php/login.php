<?php
session_start();


require_once("php/include.php");
$valid_username = "user";
$valid_password = "pass";
$error_message = "";
$mysqlObj = CreateConnectionObject();
$TableName = "contact";


function performLogin($username, $password) {
    global $valid_username, $valid_password;
    
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        return true;
    } else {
        return false;
    }
}

function performLogout() {
    session_destroy();
    unset($_SESSION['loggedin']);
    header('Location: php/login.php');
    exit;
}

function ShowDataForm($mysqlObj, $TableName)
{
    $query = "SELECT name, email, message FROM $TableName";
    $result = $mysqlObj->query($query);

    if ($result) {
        echo "<table>";
        echo "<tr>";
        echo "<th colspan=\"3\">User Report</th>";
        echo "</tr>";
        echo "<tr>";
        echo "<th> Name </th>";
        echo "<th> Email Address </th>";
        echo "<th> Message </th>";
        echo "</tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>" . $row['message'] . "</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "Error: " . $mysqlObj->error;
    }
}


// Check if the form was submitted for login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $login_successful = performLogin($username, $password);
    if (!$login_successful) {
        $error_message = "Incorrect username or password.";
    }
}

// Check if user is logging out
if (isset($_GET['logout'])) {
    performLogout();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/style.css">
<title>Login Page</title>
</head>
<body>

<header>
        <div class="navGroup">
            <div id="logo-left">
                <img src="./imgs/logo.png" height="90" width="80" alt="brand" />
                <span id="company-name">C Health Food Technology Inc.</span>
            </div>
            <!-- Burger menu icon -->
            <div id="burger-menu">
                <div class="burger-bar"></div>
                <div class="burger-bar"></div>
                <div class="burger-bar"></div>
            </div>
            <!-- Navigation links -->
            <nav>
                <ul id="nav-list">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/product.html">Products</a></li>
                    <li><a href="/recipe.html">Recipe</a></li>
                    <li><a href="/contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
</header>

<?php if (!empty($error_message)): ?>
<p style="color:red;"><?php echo $error_message; ?></p>
<?php endif; ?>

<?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin']): ?>
<div class="database-view">
  <h2>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
  <p>This is the protected content only visible to logged-in users.</p>
  <?php ShowDataForm($mysqlObj, $TableName); ?>
  <p><a href="?logout">Logout</a></p> <!-- Logout option always available -->
</div>
<?php else: ?>
<div class="container">
  <h2>Login</h2>
  <form method="post">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" value="Login">
  </form>
</div>
<?php endif; ?>


</body>
</html>
