<!DOCTYPE html>
<html>

<head>
	<title>Flyt Setup</title>
	<?php include_once('../includes/head.php'); ?>
	<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
	<header>
		<?php include_once('../includes/setup-nav.php'); ?>
	</header>
</section>




<div id="p1" class="page" style="margin-left: 0vw;">
	<section id="page-body">
	<header>
	<div class="page-title-center"><img src="\flyt\global\image\rocket.png" style="height:40vh; margin-top:5rem;" /></div>
	</header>
	</section>

	<section id="page-footer">
	<header style="flex-direction: column;">
	<div class="page-title-center" style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">Welcome to your Flyt Console, connecting you to the Wingbits aviation tracking network. We'll now guide you through the quick setup. Buckle up and let's take Flyt.</div>
	<div class="page-title-center pointer" style="font-size:0.8rem;" onclick="nextPage(1,2);">Get Started</div>
	</header>
	</section>
</div>


<div id="p2" class="page" style="margin-left: 100vw;">
	<section id="page-body">
	<header style="flex-direction: column;">
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">Network Setup</div>
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
	Your Flyt Node is pre-configured to use Ethernet, and is the recommended setup for providing the best experience. However, if you would like to use WiFi instead, please select below and enter your WiFi SSID and Passphrase.

	</div>

	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
	<div id="dash-stat" style="margin-top:0rem;		  width: 100%;    position: relative;    display: grid;    grid-gap: 1rem;    grid-template-columns: repeat(2, 1fr);    justify-items: center;    height: auto;    align-content: center;">
			  

	<header id="network-ethernet" class="large-panel-button active">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem; padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:0.5rem; padding-top:0.25rem; padding-bottom:2rem;">Ethernet</div></div>
	</header>			

	<header id="network-wifi" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">WiFi</div></div>
	</header>


	</div>
	</div>



	<div id="network-title"  style="margin-bottom:1rem; margin-top:1rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">Ethernet</div>
	<div id="network-stats"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem; width: 17rem;">
	IP Address : 192.168.1.x<br>Network Connection Is Excellent
	</div>

	</header>
	</section>

	<section id="page-footer">
	<header style="flex-direction: column;">

	<div style="display: flex;    align-items: center;    justify-content: space-between;    width: 100%;"><div class="page-title-center pointer" style="font-size:0.8rem;" onclick="previousPage(2,1);">Back</div><div class="page-title-center pointer"  style="font-size:0.8rem;" onclick="nextPage(2,3);">Continue</div></div>
	</header>
	</section>
</div>













<div id="p3" class="page" style="margin-left: 100vw;">
	<section id="page-body">
	<header style="flex-direction: column;">
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">Node Location</div>
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
	Your Wingbits antenna identification is <span style="color:#fbfbfbCC;">coffee-oscar-teller</span><br>
	<br>Please ensure your GPS reciever is connected and has clear visibility of the sky. An approximate GPS position of your node will be displayed below. Please confirm your nodes exact location by selecting it on the map, to better assist with mapping. Your location may be updated later.
	<br><br>
	<header style="margin-top:1rem; border-radius:0.75rem; flex-direction: column; padding:0rem; overflow:hidden; ">
	<img style="width: 100%; border-radius:1rem; clip-path: polygon(3% 0, 7% 1%, 11% 0%, 16% 2%, 20% 0, 23% 2%, 28% 2%, 32% 1%, 35% 1%, 39% 3%, 41% 1%, 45% 0%, 47% 2%, 50% 2%, 53% 0, 58% 2%, 60% 2%, 63% 1%, 65% 0%, 67% 2%, 69% 2%, 73% 1%, 76% 1%, 79% 0, 82% 1%, 85% 0, 87% 1%, 89% 0, 92% 1%, 96% 0, 98% 3%, 99% 3%, 99% 6%, 100% 11%, 98% 15%, 100% 21%, 99% 28%, 100% 32%, 99% 35%, 99% 40%, 100% 43%, 99% 48%, 100% 53%, 100% 57%, 99% 60%, 100% 64%, 100% 68%, 99% 72%, 100% 75%, 100% 79%, 99% 83%, 100% 86%, 100% 90%, 99% 94%, 99% 98%, 95% 99%, 92% 99%, 89% 100%, 86% 99%, 83% 100%, 77% 99%, 72% 100%, 66% 98%, 62% 100%, 59% 99%, 54% 99%, 49% 100%, 46% 98%, 43% 100%, 40% 98%, 38% 100%, 35% 99%, 31% 100%, 28% 99%, 25% 99%, 22% 100%, 19% 99%, 16% 100%, 13% 99%, 10% 99%, 7% 100%, 4% 99%, 2% 97%, 1% 97%, 0% 94%, 1% 89%, 0% 84%, 1% 81%, 0 76%, 0 71%, 1% 66%, 0% 64%, 0% 61%, 0% 59%, 1% 54%, 0% 49%, 1% 45%, 0% 40%, 1% 37%, 0% 34%, 1% 29%, 0% 23%, 2% 20%, 1% 17%, 1% 13%, 0 10%, 1% 6%, 1% 3%); 
	" src="\flyt\global\image\map.png">
	</header>
	</div>

	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">

	</div>

	</header>
	</section>

	<section id="page-footer">
	<header style="flex-direction: column;">

	<div style="display: flex;    align-items: center;    justify-content: space-between;    width: 100%;"><div class="page-title-center pointer" style="font-size:0.8rem;" onclick="previousPage(3,2);">Back</div><div class="page-title-center pointer" style="font-size:0.8rem;" onclick="nextPage(3,4);">Continue</div></div>
	</header>
	</section>
</div>







<div id="p4" class="page" style="margin-left: 100vw;">

	<section id="page-body">
	<header style="flex-direction: column;">
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;"></div>
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
	Congratulations, your setup is now complete.<br>
	<br>If you are planning to access your Node from WiFi after setup, please use the new URL of http://192.168.1.x
	<br><br>Click finish to continue to your Flyt dash.
	</div>

	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">

	</div>

	</header>
	</section>


	<section id="page-footer">
	<header style="flex-direction: column;">

	<div style="display: flex;    align-items: center;    justify-content: space-between;    width: 100%;"><div class="page-title-center pointer" style="font-size:0.8rem;" onclick="previousPage(4,3);">Back</div><div class="page-title-center pointer" style="font-size:0.8rem;" onclick="completeSetup();">Finish</div></div>
	</header>
	</section>

</div>








<?php include_once('../includes/setup-menu.php'); ?>
</body>
</html>





<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="http://code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
<script src="script.js"></script>