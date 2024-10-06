<!DOCTYPE html>
<html>

<head>
	<title>Flyt Radio</title>
	<?php include_once('../includes/head.php'); ?>
	<link rel="stylesheet" href="/flyt/global/style/leaflet.1.9.4.css"/>
	<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
	<header>
		<?php $pageTitle = "Radio"; ?>
		<?php include_once('../includes/main-nav.php'); ?>
	</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
        <header>
		  <div id="page-title-center" style="width:100%;">


<header style="margin-bottom:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

	<header id="network-wifi" class="large-panel-button active" style="height:2rem;">
	<div id="receiver" style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg></div>
	</header>

</header>
		
		  

<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

	<header id="panel-radio" class="large-panel-button" style="height: auto;">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><canvas id="gain" style="padding: 3rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Gain</div></div>
	</header>

	<header id="panel-network" class="large-panel-button" style="height: auto;">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><canvas id="signal" style="padding: 3rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Signal</div></div>
	</header>

	<header id="panel-temperature" class="large-panel-button" style="height: auto;">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><canvas id="noise" style="padding: 3rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Noise</div></div>
	</header>



</header>		  


<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">

	<header id="network-wifi" class="large-panel-button pointer" style="height:3rem; width:100%; padding:0; ">
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">Historic Data</div>
	</header>

</header>

	  

	
	


<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">
<header class="large-panel-button" style="height:auto; width:100%; padding:0; ">
	<canvas id="aircraft" style="padding: 1rem; max-height: 30rem; display: block; box-sizing: border-box;" ></canvas>
</header>
</header>

		
		
<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">
<header class="large-panel-button" style="height:auto; width:100%; padding:0; ">
	<canvas id="messages" style="padding: 1rem; max-height: 30rem; display: block; box-sizing: border-box;"></canvas>
</header>
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





<script src="/flyt/global/script/script.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="http://code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
<script src="/flyt/global/script/bluebird.min.3.3.1.js"></script>
<script src="/flyt/global/script/chart.min.3.9.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.0/moment.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="script.js"></script>