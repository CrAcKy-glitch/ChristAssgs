<?php

$uname='tamirra';
$pwd='09436400';
session_start();
if(isset($_SESSION['uname']))
{
    echo "<h1> WELCOME TO CHRIST (DEEMED TO BE UNIVERSITY) <br>". $_SESSION['uname']."</h1>";
    echo "<a href='courses.php'>Course </a><br>";
    echo "<br><a href='logout.php'>LOGOUT<input type='button' name='logout'></a> ";
}
else{
    if($_POST['uname']==$uname && $_POST['pwd']==$pwd){
        $_SESSION['uname']=$uname;
        echo "<script>location.href='christ.php'</script>";
    }
    else{
        echo "<script> alert('invalid username or password') </script>";
        echo "<script>location.href='cw-1.html'</script>";
    }
}

?>