<?php
clearstatcache();


	if ($_POST['request'] == "get-flyt-stats-1") {
		
		$file = '/etc/flyt/data/flyt-stats-1.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

	if ($_POST['request'] == "get-wingbits-name") {
		
		$file = '/etc/flyt/wingbits';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

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
	
	
	

	if ($_POST['request'] == "scan-wifi") {
		
		
		$host = "localhost";
		$port = 65432;

		$f = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
		socket_set_option($f, SOL_SOCKET, SO_SNDTIMEO, array('sec' => 1, 'usec' => 500000));
		$s = socket_connect($f, $host, $port);

		$msg = "flyt-wifi-scan";
		$len = strlen($msg);

		socket_sendto($f, $msg, $len, 0, $host, $port);

		socket_close($f);
		
		
		$lines=array();
		exec('DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket python3 /etc/flyt/scripts/flyt-wifi-scan.py');
		$file = '/etc/flyt/data/flyt-wifi-scan.json';
		if (file_exists($file)) {
			
			$reject = array("SSID","--");
			 $fileopen = file( $file , FILE_SKIP_EMPTY_LINES);
			 foreach ( $fileopen as $line ) {
				
				$line=str_replace("\n","",$line);
				$line=str_replace("\r","",$line);
				$line=rtrim($line," ");
				
				if (strlen($line) > 0) {
					if(!in_array($line,$reject)){  
						$lines[]=$line;
					}
				}
				
			 }
			 

			$uniqueLines = array_unique($lines);
			array_push($uniqueLines,"Hidden Network");
			echo json_encode($uniqueLines);
		};
		

	}
	
	if ($_POST['request'] == "connect-wifi") {

		$ssid = $_POST['ssid'];
		$passphrase = $_POST['passphrase'];
		$output = shell_exec('DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket nmcli dev wifi connect "'.$ssid.'" password "'.$passphrase.'"  2>&1');
		//shell_exec('python3 /etc/flyt/scripts/flyt-stats-1.py');
		
		$output = str_replace("\u001b[2K","",$output);
		$output = str_replace("\n","",$output);
		$output = str_replace("\r","",$output);
		echo json_encode($output);
		
	}
		
		

	
	if ($_POST['request'] == "manage-wifi") {
		
		$host = "localhost";
		$port = 65432;

		$f = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
		socket_set_option($f, SOL_SOCKET, SO_SNDTIMEO, array('sec' => 1, 'usec' => 500000));
		$s = socket_connect($f, $host, $port);

		$msg = "flyt-wifi-manage";
		$len = strlen($msg);

		socket_sendto($f, $msg, $len, 0, $host, $port);

		socket_close($f);
		
		
		$lines=array();
		exec('DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket python3 /etc/flyt/scripts/flyt-wifi-manage.py');
		$file = '/etc/flyt/data/flyt-wifi-manage.json';
		if (file_exists($file)) {
			
			$reject = array("Wired connection 1","supervisor0","lo");
			 $fileopen = file( $file , FILE_SKIP_EMPTY_LINES);
			 foreach ( $fileopen as $line ) {
				
				$line=str_replace("\n","",$line);
				$line=str_replace("\r","",$line);
				$line=rtrim($line," ");
				
				if (strlen($line) > 0) {
					if(!in_array($line,$reject)){  
						$lines[]=$line;
					}
				}
				
			 }
			 

			$uniqueLines = array_unique($lines);
			echo json_encode($uniqueLines);
		};
		

	}
		
		
		
	if ($_POST['request'] == "active-wifi") {
		

		$host = "localhost";
		$port = 65432;

		$f = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
		socket_set_option($f, SOL_SOCKET, SO_SNDTIMEO, array('sec' => 1, 'usec' => 500000));
		$s = socket_connect($f, $host, $port);

		$msg = "flyt-wifi-active";
		$len = strlen($msg);

		socket_sendto($f, $msg, $len, 0, $host, $port);

		socket_close($f);

		
		
		$lines=array();
		exec('DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket python3 /etc/flyt/scripts/flyt-wifi-active.py');
		$file = '/etc/flyt/data/flyt-wifi-active.json';
		if (file_exists($file)) {
			
			$reject = array("Wired connection 1","supervisor0","lo");
			 $fileopen = file( $file , FILE_SKIP_EMPTY_LINES);
			 foreach ( $fileopen as $line ) {
				
				$line=str_replace("\n","",$line);
				$line=str_replace("\r","",$line);
				$line=rtrim($line," ");
				
				if (strlen($line) > 0) {
					if(!in_array($line,$reject)){  
						$lines[]=$line;
					}
				}
				
			 }
			 

			$uniqueLines = array_unique($lines);
			echo json_encode($uniqueLines);
		};
		

	}
	
	
	
	
	
	
	if ($_POST['request'] == "delete-wifi") {

		$ssid = $_POST['ssid'];
		$output = shell_exec('DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket nmcli connection delete "'.$ssid.'"  2>&1');
		//shell_exec('python3 /etc/flyt/scripts/flyt-stats-1.py');
		
		$filename = "/etc/flyt/data/flyt-watchdog-network";
		$file = fopen($filename, "w+") or die("Unable to open file!");
		$text = "";
		fwrite($file, $text);
		fclose($file);

		$output = str_replace("\u001b[2K","",$output);
		$output = str_replace("\n","",$output);
		$output = str_replace("\r","",$output);
		echo json_encode($output);
		
	}
	
	
	



	if ($_POST['request'] == "skip-setup") {

		$filename = "/var/www/html/data/setupskipped";
		$file = fopen($filename, "w+") or die("Unable to open file!");
		$text = "";
		fwrite($file, $text);
		fclose($file);
		
	}
	if ($_POST['request'] == "complete-setup") {

		$filename = "/var/www/html/data/setupcomplete";
		$file = fopen($filename, "w+") or die("Unable to open file!");
		$text = "";
		fwrite($file, $text);
		fclose($file);
		
	}





















	if ($_POST['request'] == "insert-vector") {
		
		$hardwaresn = trim(file_get_contents('/etc/flyt/data/serial'));
		$accesskey = trim(file_get_contents('/etc/flyt/data/accesskey'));

		$waID = $_POST['wid'];
		
		$output=null;
		$retval=null;
		
		exec('bash /etc/flyt/scripts/set-vector.sh "'.$waID.'" "'.$hardwaresn.'" "'.$accesskey.'"', $output, $retval);
		echo json_encode($output);
		
	}
	if ($_POST['request'] == "check-internet") {
		
		function checkWebSite($url){
			// Check if the URL provided is valid
			if(!filter_var($url, FILTER_VALIDATE_URL)){
			  return false;
			}
			// Initialize cURL
			$ch = curl_init($url);
			
			// Set options
			curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,10);
			curl_setopt($ch,CURLOPT_HEADER,true);
			curl_setopt($ch,CURLOPT_NOBODY,true);
			curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			// Get the answer
			$response = curl_exec($ch);
			
			// Close the cURL session
			curl_close($ch);
			return $response ? true : false;
	  };
  

		$connectionArray = [];
		$connectionArray['flyt'] = 0;
		$connectionArray['wingbits'] = 0;
		

				
		$url = 'http://flyt.ws';
		if(checkWebSite($url)){
			$connectionArray['flyt'] = 1;
		};
		
		$url = 'http://wingbits.com';
		if(checkWebSite($url)){
			$connectionArray['wingbits'] = 1;
		};


		
		echo json_encode($connectionArray);
		
	}	
	if ($_POST['request'] == "check-cloud") {
		
		$serial = "";
		$file = '/etc/flyt/data/serial';
		if (file_exists($file)) {
			$serial = file_get_contents('/etc/flyt/data/serial');
		}
		
		//$output = shell_exec('sudo cat /etc/flyt/data/serial 2>&1');
		//echo $output;

		try {
			
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_URL, 'https://tower.flyt.ws/registration-check.php?serial='.$serial);
			$result = curl_exec($ch);
			curl_close($ch);
			
			echo ($result);
			//$obj = json_decode($result);
			//echo $obj->registration_status;

		
		} catch(Exception $ex) {
			echo json_encode('{"registered":"error: '.$ex.'"}');
		}
		
	}	

?>
