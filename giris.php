<?php
$email = $_POST['email']??'';
$sifre = $_POST['password']??'';

$dogruEmail = "b241210001@sakarya.edu.tr";
$dogruSifre = "b241210001";

if ($email === $dogruEmail && $sifre === $dogruSifre) {
    echo "<h2 style='text-align:center; margin-top:50px;'>Hoş geldiniz <strong>" .$sifre."</strong><h2>";
} eles {
    header("Location: giris.html");
    exit();
}
?>