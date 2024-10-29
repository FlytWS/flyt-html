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

<header class="large-panel-button" style="height: auto;">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80; min-height:20rem;">
<canvas id="satellites" style="padding: 1rem; display: block; box-sizing: border-box;" ></canvas>
</div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Satellites</div></div>
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