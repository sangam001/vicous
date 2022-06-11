<?php
$host="localhost";
$username="id18712024_adminlogin";
$password="j6@z>4<t^!(^l5{R";
$dbname="id18712024_login";

$conn=mysqli_connect($host,$username,$password,$dbname);
if(mysqli_connect_error())
echo "cannot connect".mysqli_connect_error();
?>