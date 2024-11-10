<!DOCTYPE html>
<html>

<head>
	<title>Flyt Report</title>
	<?php include_once('../includes/head.php'); ?>
	<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
	<header>
		<?php $pageTitle = "Report"; ?>
		<?php include_once('../includes/main-nav.php'); ?>
	</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
        <header>
		  <div id="page-title-center" style="width:100%;">


<header style="margin-bottom:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

	<header id="network-wifi" class="large-panel-button active" style="height:2rem;">
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg></div>
	</header>

</header>
		


<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Node</h1></div>

<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">


<?php

$node = array();
$node['cpu'] = "CPU";
$node['ram'] = "RAM";
$node['swap'] = "Swap";
$node['storage'] = "Storage";
$node['temperature'] = "Temperature";
$node['uptime'] = "Uptime";

foreach ($node as $key=>$nodeElement) {


	$heredoc_a = <<<HEREA
	
	<header class="large-panel-button" style="">
	<div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;">
	<div style="padding-left:1rem; width:1rem; height:1rem;"></div>
	<div class="pointer" onclick="menumanual('$key','$nodeElement')" style="white-space: nowrap;    text-overflow: ellipsis;    overflow: hidden; font-size:0.9rem;">$nodeElement</div>
	<div style="padding-right:1rem; width:1rem; height:1rem;">&emsp;</div>
	</div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;">
	<div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
	</div>
	</div>
	</header>
	
	HEREA;
	
	echo $heredoc_a;
	
};

?>

	

</header>



<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Network</h1></div>

<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">
	
	

<?php

$node = array();
$node['ethernet'] = "Ethernet";
$node['wifi'] = "WiFi";
$node['data-useage'] = "Data Useage";

foreach ($node as $key=>$nodeElement) {


	$heredoc_a = <<<HEREA
	
	<header class="large-panel-button">
	<div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;">
	<div style="padding-left:1rem; width:1rem; height:1rem;"></div>
	<div class="pointer" onclick="menumanual('$key','$nodeElement')" style="white-space: nowrap;    text-overflow: ellipsis;    overflow: hidden; font-size:0.9rem;">$nodeElement</div>
	<div style="padding-right:1rem; width:1rem; height:1rem;">&emsp;</div>
	</div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;">
	<div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
	</div>
	</div>
	</header>
	
	HEREA;
	
	echo $heredoc_a;
	
};

?>


	
	
</header>





<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Radio</h1></div>

<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">




<?php

$node = array();
$node['gain'] = "Gain";
$node['signal'] = "Signal";
$node['peak-signal'] = "Peak Signal";
$node['noise'] = "Noise";
$node['snr'] = "SNR";

foreach ($node as $key=>$nodeElement) {


	$heredoc_a = <<<HEREA
	
	<header class="large-panel-button">
	<div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;">
	<div style="padding-left:1rem; width:1rem; height:1rem;"></div>
	<div class="pointer" onclick="menumanual('$key','$nodeElement')" style="white-space: nowrap;    text-overflow: ellipsis;    overflow: hidden; font-size:0.9rem;">$nodeElement</div>
	<div style="padding-right:1rem; width:1rem; height:1rem;">&emsp;</div>
	</div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;">
	<div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
	</div>
	</div>
	</header>
	
	HEREA;
	
	echo $heredoc_a;
	
};

?>

	
</header>








<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;">
<h1>Messages</h1>
</div>

<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">


<?php

$node = array();
$node['messages'] = "Total Messages";
$node['valid-messages'] = "Valid Messages";
$node['accepted-messages'] = "Accepted Messages";
$node['strong-signals'] = "Strong Signals";
$node['strong-signal-pc'] = "Strong Signal Percentage";

foreach ($node as $key=>$nodeElement) {


	$heredoc_a = <<<HEREA
	
	<header class="large-panel-button">
	<div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;">
	<div style="padding-left:1rem; width:1rem; height:1rem;"></div>
	<div class="pointer" onclick="menumanual('$key','$nodeElement')" style="white-space: nowrap;    text-overflow: ellipsis;    overflow: hidden; font-size:0.9rem;">$nodeElement</div>
	<div style="padding-right:1rem; width:1rem; height:1rem;">&emsp;</div>
	</div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;">
	<div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
	</div>
	</div>
	</header>
	
	HEREA;
	
	echo $heredoc_a;
	
};

?>

	
</header>







<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;">
<h1>Services</h1>
</div>

<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">


<?php

$node = array();
$node['readsb'] = "Readsb";
$node['vector'] = "Vector";
$node['nginx'] = "Nginx";


foreach ($node as $key=>$nodeElement) {


	$heredoc_a = <<<HEREA
	
	<header class="large-panel-button">
	<div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;">
	<div style="padding-left:1rem; width:1rem; height:1rem;"></div>
	<div class="pointer" onclick="menumanual('$key','$nodeElement')" style="white-space: nowrap;    text-overflow: ellipsis;    overflow: hidden; font-size:0.9rem;">$nodeElement</div>
	<div style="padding-right:1rem; width:1rem; height:1rem;">&emsp;</div>
	</div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;">
	<div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
	</div>
	</div>
	</header>
	
	HEREA;
	
	echo $heredoc_a;
	
};

?>

	
</header>






<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;">
<h1>Optional Services</h1>
</div>

<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">


<?php

$node = array();
$node['tar1090'] = "Tar1090";
$node['graphs1090'] = "Graphs1090";


foreach ($node as $key=>$nodeElement) {


	$heredoc_a = <<<HEREA
	
	<header class="large-panel-button">
	<div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;">
	<div style="padding-left:1rem; width:1rem; height:1rem;"></div>
	<div class="pointer" onclick="menumanual('$key','$nodeElement')" style="white-space: nowrap;    text-overflow: ellipsis;    overflow: hidden; font-size:0.9rem;">$nodeElement</div>
	<div style="padding-right:1rem; width:1rem; height:1rem;">&emsp;</div>
	</div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;">
	<div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
	</div>
	</div>
	</header>
	
	HEREA;
	
	echo $heredoc_a;
	
};

?>

	
</header>









		  
		  
		  </div>
       </header>
</section>

<section id="page-footer">
        <header style="flex-direction: column;">
			<div id="page-title-center" style="color:#fbfbfb80; text-align:center; font-size:0.75rem;"><small>© Flyt. All rights reserved.</small></div>
       </header>
</section>










<?php include_once('../includes/main-menu.php'); ?>
</body>
</html>





<script src="/global/script/jquery.min.3.7.1.js"></script>
<script src="/global/script/jquery-ui.min.1.11.3.js"></script>
<script src="/global/script/moment.min.2.30.0.js"></script>
<script src="/global/script/script.js"></script>
<script src="script.js"></script>