<?php

header('Content-Type: application/json');

$server = 'localhost:3307/';
$user = 'root';
$password = 'root';
$db_name = 'hotel_transilvania';

//crea oggetto di connessione
$conn = new mysqli($server, $user, $password, $db_name);


if($conn -> connect_errno){
  echo json_encode($conn -> connect_errno);
  return;
}

// query che fa la selezione
$sql = "SELECT id, name, lastname, address
        FROM paganti
        ";

//salvo nella variabile il comando che esegue la query
$results = $conn -> query($sql);
$res = [];


if($results -> num_rows > 0){
  while($row = $results -> fetch_assoc()){
    $res[] = $row;
  }
  echo json_encode($res);
} else {
  echo json_encode('0 risultati');
}

$conn -> close();
