<?php
// Your code here!
    $tabla = isset($_GET['tabla']) ? $_GET['tabla'] : "";
    $conn = mysqli_connect("http://asignaturachoice.me/phpmyadmin/", "phpmyadmin", "admin", "phpamyadmin");
    $sql_select = "SELECT * FROM user";
    $ret = mysqli_query($conn, $sql_select);
    $row = mysqli_fetch_array($ret);
    printf($row)
    mysqli_close($conn);
    return $row
?>