<?php

$dbh = new PDO('mysql:host=localhost;dbname=alosistamini', 'root', '');
$db = $dbh->prepare('SELECT * FROM kawasan__surat_keterangan_kumuh');
$db->execute();

$sk = $db->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($sk);
