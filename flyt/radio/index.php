<!DOCTYPE html>
<html>

<head>
<title>Flyt Radio</title>
<?php include_once('../includes/head.php'); ?>
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


	<header style="margin-bottom:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

	<header class="large-panel-button active" style="height:3rem;">
		<div id="receiver" style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg></div>
	</header>

	</header>



	<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="gain" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Gain</div></div>
		</header>

		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="signal" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Signal</div></div>
		</header>

		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="noise" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Noise</div></div>
		</header>

	</header>		  




	<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Aircraft</h1></div>
	
	<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">
	<header class="large-panel-button" style="height:auto; width:100%; padding:0; ">
	<canvas id="aircraft" style="padding: 1rem; max-height: 30rem; display: block; box-sizing: border-box;" ></canvas>
	</header>
	</header>
	
	
	<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Messages</h1></div>
	
	
	<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">
	<header class="large-panel-button" style="height:auto; width:100%; padding:0; ">
	<canvas id="messages" style="padding: 1rem; max-height: 30rem; display: block; box-sizing: border-box;"></canvas>
	</header>
	</header>
	


</div>
</header>







</section>





<?php include_once('../includes/footer.php') ?>
<?php include_once('../includes/main-menu.php'); ?>
</body>
</html>







<script src="/global/script/jquery.min.3.7.1.js"></script>
<script src="/global/script/jquery-ui.min.1.11.3.js"></script>
<script src="/global/script/bluebird.min.3.3.1.js"></script>
<script src="/global/script/chart.min.3.9.1.js"></script>
<script src="/global/script/moment.min.2.30.0.js"></script>
<script src="/global/script/script.js"></script>
<script src="script.js"></script>