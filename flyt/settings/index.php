<!DOCTYPE html>
<html>

<head>
<title>Flyt Settings</title>
<?php include_once('../includes/head.php'); ?>
<link rel="stylesheet" href="/global/style/leaflet.1.9.4.css"/>
<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
<header>
<?php $pageTitle = "Settings"; ?>
<?php include_once('../includes/main-nav.php'); ?>
</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
<header>
<div id="page-title-center" style="width:100%;">



<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12"></line><line x1="19" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="5"></line><line x1="12" x2="12" y1="19" y2="22"></line><circle cx="12" cy="12" r="7"></circle><circle cx="12" cy="12" r="3"></circle></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssMode">Release</div></div>
</header>

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-satellite"><path d="M13 7 9 3 5 7l4 4"></path><path d="m17 11 4 4-4 4-4-4"></path><path d="m8 12 4 4 6-6-4-4Z"></path><path d="m16 8 3-3"></path><path d="M9 21a6 6 0 0 0-6-6"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssSat">Wingbits</div></div>
</header>

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Location</div></div>
</header>

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Keys</div></div>
</header>


<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Regional</div></div>
</header>

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Network</div></div>
</header>

<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">USB</div></div>
</header>


<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Services</div></div>
</header>


<header class="large-panel-button">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Terminal</div></div>
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
<script src="/global/script/moment.min.2.30.0.js"></script>
<script src="/global/script/script.js"></script>
<script src="script.js"></script>