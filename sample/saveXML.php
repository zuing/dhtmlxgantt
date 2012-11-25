<?php

$file = $_POST['filename'];
$data = $_POST['data'];

$f = fopen($file, 'w');
fwrite($f, $data);
fclose($f);

?>