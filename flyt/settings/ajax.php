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
		





// Regional


	
	if ($_POST['request'] == "get-regional-settings") {
		
		$file = '/etc/flyt/data/timezone';
		if (file_exists($file)) {
			echo trim(file_get_contents('/etc/flyt/data/timezone'));
		};
		
	}
	
	if ($_POST['request'] == "get-regional-settings-region-full") {
		
		$output=null;
		$retval=null;
		$output = shell_exec('timedatectl list-timezones 2>&1');
		echo $output;

	}
	
	if ($_POST['request'] == "save-regional-settings-region") {
		
		$output=null;
		$retval=null;
		$output = shell_exec('sudo timedatectl set-timezone '.$_POST['data'].' 2>&1');
		exec("echo -n '".$_POST['data']."' | tee /etc/flyt/data/timezone", $output, $retval);
		echo $output;
		
	}
	
	







	
?>