<?php
clearstatcache();
	



// Node



	if ($_POST['request'] == "get-flyt-stats-0") {
		
		$file = '/etc/flyt/data/flyt-stats-0.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	if ($_POST['request'] == "get-flyt-stats-1") {
		
		$file = '/etc/flyt/data/flyt-stats-1.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	if ($_POST['request'] == "get-flyt-stats-2") {
		
		$file = '/etc/flyt/data/flyt-stats-2.json';
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

	if ($_POST['request'] == "get-flyt-release-core") {
		
		$file = '/etc/flyt/data/flyt-system-variables.json';
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
		#shell_exec("bash /etc/flyt/scripts/readsb-set-location.sh ".$latitude." ".$longitude." 2>&1");
		shell_exec('sudo /etc/flyt/scripts/readsb-set-location.sh "'.$latitude.'" "'.$longitude.'"');

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
	
	








// Terminal


	if ($_POST['request'] == "terminal-command") {
		
		$buildAr = array();
		$buildAr['one'] = "echo ' ' && echo '                                               _' && echo '                 ___                          (_)' && echo '               _/XXX\' && echo '_             /XXXXXX\_                                    __' && echo 'X\__    __   /X XXXX XX\                          _       /XX\__      ___' && echo '    \__/  \_/__       \ \                       _/X\__   /XX XXX\____/XXX\' && echo '  \  ___   \/  \_      \ \               __   _/      \_/  _/  -   __  -  \' && echo ' ___/   \__/   \ \__     \\__           /  \_//  _ _ \  \     __  /  \____/' && echo '/  __    \  /     \ \_   _//_\___    __/    //           \___/  \/     __/' && echo '__/_______\________\__\_/________\__/_/____/_____________/_______\____/____' && echo '                                  ___' && echo '                                 /L|0\' && echo '                                /  |  \' && echo '                               /       \' && echo '                              /    |    \' && echo '                             /           \' && echo '                            /  __  | __   \' && echo '                           /  __/    \__   \' && echo '                          /  /__   |  __\   \' && echo '                         /___________________\' && echo '                         /          |         \' && echo '                              /   _|_   \' && echo '                      /      ____/___\____     \' && echo '                      ___________[o0o]___________' && echo '                               O   O    O' && echo ' '";

		
		$commandAr = array();
		$commandAr['install-tar1090'] = "sudo /etc/flyt/scripts/install-optional-tar1090.sh";
		$commandAr['install-graphs1090'] = "sudo /etc/flyt/scripts/install-optional-graphs1090.sh";
		$commandAr['motd'] = "echo ' ' && echo '  ______ _  __     _________ ' && echo ' |  ____| | \ \   / /__   __|' && echo ' | |__  | |  \ \_/ /   | |   ' && echo ' |  __| | |   \   /    | |   ' && echo ' | |    | |____| |     | |   ' && echo ' |_|    |______|_|     |_|   ' && echo ' '";
		
		$request = $_POST['data'];
		
		if (array_key_exists($request, $commandAr)) {
			$command = $commandAr[$request];
		} else if ($request == "build") {
			$command = array_rand($buildAr, 1);
		} else {
			$command = 'echo "Terminal Command Not Found"';
		}
		

		$output=null;
		$retval=null;
		exec($command, $output, $retval);
		echo json_encode($output);
		
	}








// Services

	if ($_POST['request'] == "get-flyt-services") {
		
		$file = '/etc/flyt/data/flyt-services.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};

	}



	
?>