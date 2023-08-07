<?php
$dominio = $_SERVER['HTTP_HOST'];

if (strpos($dominio, 'caviglia80') !== false) {
    header('Location: dist/caviglia80.github.io/');
    exit;
} else {
    echo "Dominio desconocido";
    exit;
}

