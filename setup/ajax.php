<?php

	if ($_POST['request'] == "skip-setup") {

		exec("echo -n '0' | tee '/var/www/html/flyt-data/setupskipped'", $output, $retval);
		
	}
	if ($_POST['request'] == "complete-setup") {

		exec("echo -n '0' | tee '/var/www/html/flyt-data/setupcomplete'", $output, $retval);
		
	}
	if ($_POST['request'] == "scan-wifi") {
		
		$output=null;
		$retval=null;
		//exec('nmcli --mode tabular --terse --fields SSID,CHAN,RATE,SIGNAL,SECURITY,IN-USE device wifi', $output, $retval);
		exec('nmcli -f SSID dev wifi | sort | uniq | grep -v SSID | grep -v -- --', $output, $retval);
		echo json_encode($output);		

	}
	if ($_POST['request'] == "connect-wifi") {

		$ssid = $_POST['ssid'];
		$passphrase = $_POST['passphrase'];
		$output = shell_exec('nmcli dev wifi connect "'.$ssid.'" password "'.$passphrase.'"  2>&1');
		echo json_encode($output);
		
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
