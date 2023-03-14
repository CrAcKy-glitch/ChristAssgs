<?php
session_start();
if(isset($_SESSION['uname'])){
    echo "<h2> WELCOME &nbsp;".$_SESSION['uname']."&nbsp to BCA </h2>";
    echo "<br><a href='christ.php'><input type='button'></a>";
}

?>