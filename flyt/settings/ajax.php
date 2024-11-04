<?php
clearstatcache();
	



// Node



	if ($_POST['request'] == "get-flyt-stats-0") {
		
		$file = '/etc/flyt/data/flyt-stats-0.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

	if ($_POST['request'] == "get-flyt-model") {
		
		$file = '/etc/flyt/model';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	
	
	
// Release



	if ($_POST['request'] == "get-flyt-release-web") {
		
		$file = '/var/www/html/_release';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}


	if ($_POST['request'] == "get-flyt-release-script") {
		
		$file = '/etc/flyt/scripts/_release';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}


	
	
	
	
// Wingbits



	if ($_POST['request'] == "get-wingbits-identifier") {
		
		$file = '/etc/flyt/wingbits';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}


	if ($_POST['request'] == "get-wingbits-release") {
		

		
	}


	
	
	
	
	
		
	
	

// Location


	if ($_POST['request'] == "get-location") {
		
		$file = '/etc/flyt/data/flyt-location.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	
	if ($_POST['request'] == "get-gnss") {
		
		$file = '/etc/flyt/data/flyt-gnss.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	if ($_POST['request'] == "set-location") {
		
		$latitude = $_POST['latitude'];
		$longitude = $_POST['longitude'];
		
		
		$filename = "/etc/flyt/data/flyt-location.json";
		$file = fopen($filename, "w+") or die("Unable to open file!");
		$text = '{"latitude":"'.$latitude.'","longitude":"'.$longitude.'"}';
		fwrite($file, $text);
		fclose($file);


		//exec("echo '{".$latitude.",".$longitude."}' | tee /etc/flyt/data/location.json", $output, $retval);
		#exec("bash /etc/flyt/scripts/set-readsb-location.sh ".$obj->{'lat'}." ".$obj->{'lon'}."", $output, $retval);

		$file = '/etc/flyt/data/flyt-location.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		}
		
	}
		







	
// Keys



	if ($_POST['request'] == "get-flyt-serial-number") {
		
		$file = '/etc/flyt/serial';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};		
		
	}


	if ($_POST['request'] == "get-flyt-key-public") {
		
		$file = '/etc/flyt/publickey';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}


	if ($_POST['request'] == "get-flyt-key-access") {
		
		$file = '/etc/flyt/accesskey.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
				
	}
	
	






// USB


	if ($_POST['request'] == "get-usb-dump") {
		
		$file = '/etc/flyt/data/flyt-usb-dump';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
				
	}
	
	
		if ($_POST['request'] == "get-usb") {
		
		$file = '/etc/flyt/data/flyt-usb-parse.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		} else {
			echo "No File";
		};
		
	}

	
?>