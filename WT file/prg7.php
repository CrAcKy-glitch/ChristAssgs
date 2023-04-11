<?php
$age=$_POST['age'];
$class=$_POST['class'];
session_start();

if($_POST['name']=="ansh.arora" && $_POST['password']=="thispassword"){
echo "<h1>SUCCESS!!</h1><br>Name:".$_POST['name']."<br>age:".$age;
}
else{
    echo "<h1>Failed</h1>";
}
session_destroy();

?>