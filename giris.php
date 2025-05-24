<?php
$email = $_POST['email']??'';
$sifre = $_POST['password']??'';

$dogruEmail = "b241210563@sakarya.edu.tr";
$dogruSifre = "b241210563";

if ($email === $dogruEmail && $sifre === $dogruSifre) {
    echo "<h2 style='text-align:center; margin-top:50px;'>Hoş geldiniz <strong>" .$sifre."</strong></h2>";
} else {
    header("Location: giris.html?error=1");
    exit();
}
?>