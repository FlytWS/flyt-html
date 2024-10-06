<?php

$filenameComplete = '../flyt-data/setupcomplete';
$filenameSkipped = '../flyt-data/setupskipped';

if (isset($_GET['clearcache'])) {
	header('Clear-Site-Data: "*"');
}

if (file_exists($filenameComplete) || file_exists($filenameSkipped)) {
    header("Location: /flyt/cockpit");
	die();
} else {
    header("Location: /flyt/setup");
	die();
}

?>