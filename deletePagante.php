<?php

$server = 'localhost:3307/';
$user = 'root';
$password = 'root';
$db_name = 'hotel_transilvania';

$id = $_POST['id'];

//crea oggetto di connessione
$conn = new mysqli($server, $user, $password, $db_name);


if($conn -> connect_errno){
  echo json_encode($conn -> connect_errno);
  return;
}

//query che fa l'eliminazione del record
$sql = "DELETE FROM paganti
        WHERE id = " . $id;


$conn -> query($sql);

$conn -> close();
