<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formulario-markea";
$port = 3307;

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Insertar datos en la base de datos
$sql = "INSERT INTO clientes (Nombre, Apellido, Email, Mensaje) VALUES ('$nombre', '$apellido', '$email', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "<h1>Nuevo registro creado exitosamente</h1>";

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
