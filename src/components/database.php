<?php 

header('Access-Control-Allow-Origins: *');

$servername = "localhost";
$username = "root";
$password = "root123";
$database = "movie";

$con = mysqli_connect('$servername','$username','$password','$database');

if($con === false){
    die("ERROR: Could not connect. " 
                . mysqli_connect_error());
}

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$movie = $_POST['movie'];
$theatre = $_POST['theatre'];
$date = $_POST['date'];
$time = $_POST['time'];

$insert = "insert into bookmyshow values ('$firstname','$lastname','$age','$gender','$email','$movie','$theatre','$date','$time')";

if(mysqli_query($con, $insert)){
    echo "<h3>data stored in a database successfully." 
        . "</h3>"; 

    /* echo nl2br("\n$first_name\n $last_name\n "
        . "$gender\n $address\n $email"); */
} else{
    echo "ERROR: Hush! Sorry $insert. " 
        . mysqli_error($con);
}



?>