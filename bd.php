<?php


// Configurações do banco de dados
$servername = "127.0.0.1"; // ou o endereço do servidor do banco de dados
$username = "root"; // seu usuário do MySQL
$password = ""; // sua senha do MySQL
$dbname = "dbiamagica"; // nome do banco de dados

// Criar uma conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
echo "Conectado com sucesso!";








?>