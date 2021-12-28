<?php
$mahasiswa = [
    [
        "nama" => "Gema Nadia Ramadhana",
        "nim" => 21120112130040,
        "email" => "gemaadhan@gmail.com"
    ],
    [
        "nama" => "Gema Nadia Ramadhana",
        "nim" => 21120112130040,
        "email" => "gemaadhan@gmail.com"
    ]
];

// menampilkan isi array associative
// var_dump($mahasiswa);

// ubah array associative menjadi json
echo json_encode($mahasiswa);
