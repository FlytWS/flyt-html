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
		$buildAr['two'] = "echo ' ' && echo '                                   __' && echo '                 \=====================================/' && echo '                                   ||' && echo '                                   ||' && echo '                                   ||' && echo '                                   ||' && echo '              ::::::               ||               ::::::' && echo '           :::      :::            ||            :::      :::' && echo '         :::          :::          ||          :::          :::' && echo '=====oo==========================================================oo=====' && echo '       :::     MWWM     :::  )____________(  :::     MWWM     :::' && echo '       :::     MWWM     ::: /__/___||___\__\ :::     MWWM     :::' && echo '         :::   (__)   :::   |              |   :::   (__)   :::' && echo '           :::  ||  :::      \            /      :::  ||  :::' && echo '              ::::::           \________/           ::::::' && echo '                ||                 ||                 ||' && echo '                OO                 OO                 OO' && echo ' '";
		$buildAr['three'] = "echo ' ' && echo '                          q*p' && echo '___________________________T____________________________' && echo '      |                 |/(_)\|                 |' && echo '      |         -------:**^^^**:-------         |' && echo '      |               ((   o   ))               |' && echo '    -----------________\\_____//________-----------' && echo '                       /       \' && echo '                    TT/         \TT' && echo '                    ||-----------||' && echo '                    ||           ||' && echo ' '";
		$buildAr['four'] = "echo ' ' && echo '    __!__' && echo '_____(_)_____' && echo '   !  !  !' && echo ' '";
		$buildAr['five'] = "echo ' ' && echo '   -----|-----' && echo '*>=====[_]L)' && echo '      -'-`-' && echo ' '";
		$buildAr['six'] = "echo ' ' && echo '       __|__' && echo '--@--@--(_)--@--@--' && echo ' '";
		$buildAr['seven'] = "echo ' ' && echo '            __/\__' && echo '           `==/\==`' && echo ' ____________/__\____________' && echo '/____________________________\' && echo '  __||__||__/.--.\__||__||__' && echo ' /__|___|___( >< )___|___|__\' && echo '           _/`--`\_' && echo '          (/------\)' && echo ' '";
		
		$commandAr = array();
		$commandAr['install-tar1090'] = "sudo /etc/flyt/scripts/install-optional-tar1090.sh";
		$commandAr['install-graphs1090'] = "sudo /etc/flyt/scripts/install-optional-graphs1090.sh";
		$commandAr['update-html'] = "sudo python3 /etc/flyt/scripts/flyt-update-html.py";
		$commandAr['update-scripts'] = "sudo python3 /etc/flyt/scripts/flyt-update-scripts.py";
		$commandAr['motd'] = "echo ' ' && echo '  ______ _  __     _________ ' && echo ' |  ____| | \ \   / /__   __|' && echo ' | |__  | |  \ \_/ /   | |   ' && echo ' |  __| | |   \   /    | |   ' && echo ' | |    | |____| |     | |   ' && echo ' |_|    |______|_|     |_|   ' && echo ' '";
		$commandAr['whoami'] = "echo 'jack'";
		$commandAr['man jack'] = "echo '<b>Autobiography of Jack: A Pilot&apos;s Journey</b>' && echo '' && echo '<b>Chapter 1: The Dream Takes Flight</b>' && echo '' && echo 'From the moment I could remember, I was drawn to the sky. My earliest memory is of lying on the grass, staring up at a small plane soaring high above, its engine humming like a distant promise. I was just a kid back then, but I knew-deep in my bones-that I was meant to be up there. The idea of being a pilot took hold of me early, like a seed planted in fertile soil. It wasn&apos;t just a career choice; it was a calling.' && echo '' && echo 'I grew up in a small town where planes were a rarity, but I spent my days flipping through aviation magazines, devouring every article, every photograph, every diagram. I knew the names of all the classic aircraft-Cessnas, Pipers, and of course, the mighty Boeing 747. Every time I saw a plane pass overhead, I felt a pull.' && echo '' && echo 'When I was sixteen, I got my first taste of flying, an introductory lesson with a local flight school. I remember the rush of excitement as the instructor handed me the controls. There I was, soaring above the fields, feeling the weightlessness of the air and the power of the plane beneath me. That day, I made a promise to myself: I was going to be a pilot. And nothing was going to stop me.' && echo '' && echo '<b>Chapter 2: The Long Road</b>' && echo '' && echo 'Becoming a pilot wasn&apos;t easy. It required more than just passion; it demanded dedication, discipline, and a willingness to face challenges head-on. I worked part-time jobs to pay for flying lessons while attending college. I earned my private pilot&apos;s license, then my commercial license, all while juggling schoolwork and the demands of life. There were times when I doubted myself, when I thought about giving up, but the dream never faded. It just pushed me harder.' && echo '' && echo 'I&apos;ll never forget the day I passed my commercial flight exam. It was a moment of triumph, one that solidified my belief in myself. The hours of studying, the practice, the sleepless nights-all of it came down to that single moment when I could finally call myself a professional pilot.' && echo '' && echo 'I spent the next few years flying for small charter companies, logging hours and gaining experience. It wasn&apos;t glamorous work-sometimes it meant flying cargo or making long, tedious cross-country trips-but I loved it. Every takeoff felt like a victory, and every landing felt like the culmination of a dream. The thrill never wore off.' && echo '' && echo '<b>Chapter 3: The Breakthrough</b>' && echo '' && echo 'The turning point in my career came when I was offered a position with a regional airline. I was nervous. It was a bigger step than anything I&apos;d done before, but it was also the opportunity I had been waiting for. The first time I piloted a commercial flight, the weight of responsibility was overwhelming. Hundreds of lives in my hands. But I was ready. I had put in the work, and I knew I could handle it.' && echo '' && echo 'Over the years, I flew countless routes, from city to city, day in and day out. I navigated storms, dealt with mechanical issues, and even made a few emergency landings. Each experience added a new layer of confidence and skill. But it wasn&apos;t just the flying that kept me going-it was the people I met along the way. Passengers who were nervous but reassured by my calm demeanor, fellow pilots who shared stories, and crew members who made every journey feel like a team effort.' && echo '' && echo '<b>Chapter 4: The Challenges</b>' && echo '' && echo 'No career is without its challenges, and mine has certainly had its share. There were days when bad weather grounded flights, when long delays tested my patience, and when difficult passengers made the job more taxing than it should have been. But perhaps the most difficult part of being a pilot was the time away from family. Flying meant missing birthdays, anniversaries, and holidays. It meant being out of touch for days on end, living in a hotel room with nothing but the sound of my own thoughts for company.' && echo '' && echo 'But even during those tough times, I always came back to the same truth: I was doing what I loved. There&apos;s something magical about flying that makes all the sacrifices worthwhile. The peace you feel when you&apos;re above the clouds, the sense of freedom when you&apos;re in control of a powerful machine, and the responsibility to get everyone home safely-those are the things that kept me going.' && echo '' && echo '<b>Chapter 5: Reflections</b>' && echo '' && echo 'Looking back on my career, I realize how much flying has shaped who I am. It&apos;s not just a job; it&apos;s a part of my identity. The discipline, the focus, the resilience-it all bleeds into my personal life. And, in many ways, it&apos;s given me a sense of clarity and purpose that I don&apos;t think I could have found anywhere else.' && echo '' && echo 'I&apos;m not the same person I was when I first climbed into that cockpit. I&apos;ve grown in ways I never imagined-learning how to stay calm under pressure, how to lead a crew, how to trust my instincts. But the core of who I am-the dreamer who looks up at the sky and wonders what it would be like to fly-has never changed.' && echo '' && echo 'Now, after years of flying, I&apos;ve found a balance between my love for aviation and my personal life. I&apos;m no longer chasing the next flight or the next certification. Instead, I focus on the joy of each journey, the thrill of each takeoff, and the satisfaction of knowing that I&apos;ve spent my life doing exactly what I was meant to do.' && echo '' && echo 'Flying isn&apos;t just about the destination; it&apos;s about the journey. And I wouldn&apos;t trade this life for anything else.' && echo '' && echo '<b>Epilogue: The Sky Is Always There</b>' && echo '' && echo 'Now, as I prepare to hang up my uniform and transition to flying for fun rather than work, I still find myself looking up at the sky, the way I did when I was a child. The difference is, now I know what it feels like to be up there. I know the wind in my face, the roar of the engine, and the thrill of soaring through clouds.' && echo '' && echo 'The sky has always been my home, and in the end, that&apos;s where I&apos;ll always belong.'";
		$commandAr['man flyt'] = "echo 'Flyt is a leading hardware and software community, providing nodes for the Wingbits network, allowing you to participate in style.'";
		$commandAr['man wingbits'] = "echo 'Wingbits is an innovative, community-driven network dedicated to enhancing aviation safety and efficiency through advanced flight tracking technology. At its core, Wingbits employs Automatic Dependent Surveillance-Broadcast (ADS-B) technology to aggregate and analyze flight data, contributing significantly to the improvement of air travel experiences globally.'";
		$commandAr['ls'] =  "echo '.\&hairsp;pineapple pizza' && echo '.\&hairsp;flux capacitor' && echo '.\&hairsp;grumpy cat' && echo '.\\success kid'";
		$commandAr['rm'] = "echo 'rm .\&hairsp;the-shadows'";
		$commandAr['rm -r'] = "echo 'rm .\&hairsp;flyt' && echo 'rm .\&hairsp;wingbits' && echo 'kidding... everything is safe.'";
		
		$request = $_POST['data'];
		
		if (array_key_exists($request, $commandAr)) {
			$command = $commandAr[$request];
		} else if ($request == "build") {
			$command = $buildAr[array_rand($buildAr, 1)];
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