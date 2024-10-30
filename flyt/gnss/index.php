<!DOCTYPE html>
<html>

<head>
<title>Flyt GNSS</title>
<?php include_once('../includes/head.php'); ?>
<link rel="stylesheet" href="/flyt/global/style/leaflet.1.9.4.css"/>
<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
<header>
<?php $pageTitle = "GNSS"; ?>
<?php include_once('../includes/main-nav.php'); ?>
</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
<header>
<div id="page-title-center" style="width:100%;">


<header style="margin-bottom:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

<header class="large-panel-button active" style="height:3rem;">
<div id="receiver" style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><span id="driver"></span><br><span id="path" style="color:#fbfbfb90;"></span></div>
</header>

</header>



<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

<header class="large-panel-button" style="height: auto; width: calc(100% - 2rem);">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80; min-height:20rem; width:100%;">
<canvas id="satellites" style="padding: 1rem; display: block; box-sizing: border-box;" ></canvas>
</div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="satellitesTitle">Satellites</div></div>
</header>


</header>		  










<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate"><line x1="2" x2="5" y1="12" y2="12"></line><line x1="19" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="5"></line><line x1="12" x2="12" y1="19" y2="22"></line><circle cx="12" cy="12" r="7"></circle></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">48 Positions</div></div>
</header>

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">91 Pulses</div></div>
</header>



</header>




















</div>
</header>
</section>






<?php include_once('../includes/footer.php') ?>
<?php include_once('../includes/main-menu.php'); ?>
</body>
</html>





<script src="/flyt/global/script/jquery.min.3.7.1.js"></script>
<script src="/flyt/global/script/jquery-ui.min.1.11.3.js"></script>
<script src="/flyt/global/script/bluebird.min.3.3.1.js"></script>
<script src="/flyt/global/script/chart.min.3.9.1.js"></script>
<script src="/flyt/global/script/moment.min.2.30.0.js"></script>
<script src="/flyt/global/script/script.js"></script>
<script src="script.js"></script>