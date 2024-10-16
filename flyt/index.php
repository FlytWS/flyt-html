<?php

$filenameComplete = '../data/setupcomplete';
$filenameSkipped = '../data/setupskipped';

if (isset($_GET['clearcache'])) {
	header('Clear-Site-Data: "*"');
}

if (file_exists($filenameComplete) || file_exists($filenameSkipped)) {
    header("Location: /flyt/console");
	die();
} else {
    header("Location: /flyt/setup");
	die();
}

?>