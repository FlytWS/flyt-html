<!DOCTYPE html>
<html>

<head>
	<title>Flyt Setup</title>
	<?php include_once('../includes/head.php'); ?>
	<link rel="stylesheet" href="/flyt/global/style/leaflet.1.9.4.css"/>
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
	<header style="flex-direction: column; margin-top:2rem;">
	<div class="page-title-center" style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">Welcome to your Flyt Console, connecting you to the Wingbits aviation tracking network. We'll now guide you through the quick setup.<br><br>Buckle up and let's take Flyt.</div>
	<div class="page-title-center"><img src="\flyt\global\image\plane.png" style="height:30vh; margin-top:5rem;" /></div>
	</header>
	</section>

	<section id="page-footer">
	<header style="flex-direction: column;">
	
	<div class="page-title-center pointer" style="font-size:0.8rem;" onclick="nextPage(1,2);">Get Started</div>
	</header>
	</section>
</div>


<div id="p2" class="page" style="margin-left: 100vw;">
	<section id="page-body">
	<header style="flex-direction: column;">
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">Network Setup</div>
	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
	Your Flyt Node is pre-configured to use Ethernet, and is the recommended setup for providing the best experience.<br>If you would like to use WiFi instead, please select below and enter your WiFi SSID and Passphrase.
	</div>

	<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
	<div id="dash-stat" style="margin-top:0rem;		  width: 100%;    position: relative;    display: grid;    grid-gap: 1rem;    grid-template-columns: repeat(2, 1fr);    justify-items: center;    height: auto;    align-content: center;">
			  
	
	
	<header id="panel-ethernet" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ethernet-port"><path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"></path><path d="M6 8v1"></path><path d="M10 8v1"></path><path d="M14 8v1"></path><path d="M18 8v1"></path></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem; display: flex;    flex-direction: column;">Ethernet</div></div>
	</header>

	<header id="panel-wifi" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem; display: flex;    flex-direction: column;">WiFi</div></div>
	</header>


	</div>
	</div>

	<div id="network-state" style="margin-bottom:1rem; margin-top:1rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;"></div>
	<div id="network-title" style="margin-bottom:1rem; margin-top:1rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;"></div>
	<div id="network-stats" style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem; width: 17rem;"></div>

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
	<div id="cMap"></div>
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





<script src="/flyt/global/script/jquery.min.3.7.1.js"></script>
<script src="/flyt/global/script/jquery-ui.min.1.11.3.js"></script>
<script src="/flyt/global/script/leaflet.min.1.9.4.js"></script>
<script src="/flyt/global/script/moment.min.2.30.0.js"></script>
<script src="/flyt/global/script/script.js"></script>
<script src="script.js"></script>