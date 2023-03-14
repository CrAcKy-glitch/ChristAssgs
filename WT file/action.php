<?php

$conn=mysqli_connect('localhost','root','AnshArora27570_','sample');
if($conn){
$name = $_POST['name'];
// $username = $_POST['user_id'];
$AGE = $_POST['age'];
$university = $_POST['University'];
$Insert = "INSERT INTO sample_db_wt VALUES($name,$AGE,$university)";

if($Insert)
echo "Record inserted successfully";
if(isset($_POST['submit'])){
    echo $name." ".$AGE." ".$university."<br>";
}
$conn->close();
}
else{
    echo "<br> an error occurred </br>";
}
?>