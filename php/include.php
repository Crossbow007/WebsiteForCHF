<!-- http://localhost/GonzalesArnieCodingAsst/AsstMain.php -->
<?php

function WriteHeaders($Heading = "Welcome", $TitleBar = "MySite")
{
    echo " 
    <!doctype html>
	<html lang = \"en\">
	<head>
		<meta charset = \"UTF-8\">
		<title>$TitleBar</title>\n
        <link rel =\"stylesheet\" type = \"text/css\" href=\"AsstStyle.css\"/>
	</head>
	<body>\n
    <h1>$Heading</h1>
	";
}


function DisplayLabel($prompt)
{
    echo "
    <label>$prompt</label>\n
    ";
}

function DisplayTextBox($Input, $Name, $Size, $Value = 0, $Focus = false)
{
    {
        $AutoFocus = $Focus ? " autofocus" : "";
        echo "<input type=\"$Input\" name=\"$Name\" id=\"$Name\" size=\"$Size\"
                value=\"$Value\"$AutoFocus>";
    }
}

function DisplayImage($FileName, $Alt, $Height, $Width)
{
    echo "
    <img src=\"./img/$FileName\" alt=\"$Alt\" height = \"$Height\" 
                    width = \"$Width\" />
    ";
}

function DisplayButton($ButtonName, $ButtonText, $FileName = "Button", 
                    $ButtonAlt = "Default" )
{
    if ($FileName == "Button")
    {
        echo "<button type = Submit name = \"$ButtonName\">$ButtonText</button>
        ";
    }
    else
    {
        echo "<button type = Submit name = \"$ButtonName\">";
        DisplayImage($FileName, $ButtonAlt, 75, 200);
        echo "</button> ";
    }
}

function DisplayContactInfo()
{
    echo "<footer>";
    echo "
        Questions? Comments? Reach me at:
        <a href=\"mailto:Arnie.Gonzales@student.sl.on.ca\">
                arnie.gonzales@student.sl.on.ca</a>
        ";
    echo "</footer>";
}

function WriteFooters()
{

    echo "</body>\n";
    echo "</html>\n";
    DisplayContactInfo();

}


function CreateConnectionObject()
{
    $fh = fopen('auth.txt','r');
    $Host =  trim(fgets($fh));
    $UserName = trim(fgets($fh));
    $Password = trim(fgets($fh));
    $Database = trim(fgets($fh));
    $Port = trim(fgets($fh)); 
    fclose($fh);
    $mysqlObj = new mysqli($Host, $UserName, $Password, $Database, $Port);
    // if the connection and authentication are successful, 
    // the error number is 0
    // connect_errno is a public attribute of the mysqli class.
    if ($mysqlObj->connect_errno != 0) 
    {
     echo "<p>Connection failed. Unable to open database $Database. Error: "
              . $mysqlObj->connect_error . "</p>";
     // stop executing the php script
     exit;
    }
    return ($mysqlObj);
}

function CloseConnection(&$mysqlObj)
{ 
    $mysqlObj->close();
}
?>
