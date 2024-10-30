<!DOCTYPE html>
<html>

<head>
<title>Flyt Hardware</title>
<?php include_once('../includes/head.php'); ?>
<link rel="stylesheet" href="/global/style/leaflet.1.9.4.css"/>
<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
<header>
<?php $pageTitle = "Hardware"; ?>
<?php include_once('../includes/main-nav.php'); ?>
</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
<header>
<div id="page-title-center" style="width:100%;">


<header style="margin-bottom:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

<header id="network-wifi" class="large-panel-button active" style="height:3rem;">
<div id="receiver" style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><span id="model"></span><br><span id="uptime" style="color:#fbfbfb90;"></span></div>
</header>

</header>



<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

<header class="large-panel-button" style="height: auto;">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
<canvas id="cpu" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas>
</div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">CPU</div></div>
</header>

<header class="large-panel-button" style="height: auto;">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
<canvas id="ram" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas>
</div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">RAM</div></div>
</header>

<header class="large-panel-button" style="height: auto;">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
<canvas id="storage" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas>
</div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Storage</div></div>
</header>

<header class="large-panel-button" style="height: auto;">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
<canvas id="temperature" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="180" height="180"></canvas>
</div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Temperature</div></div>
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