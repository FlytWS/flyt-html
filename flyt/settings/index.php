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


<header class="large-panel-button flexcol" onclick="menumanual('sm-node')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssMode">Node</div></div>
</header>


<header class="large-panel-button flexcol" onclick="menumanual('sm-release')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssMode">Release</div></div>
</header>

<header class="large-panel-button flexcol" onclick="menumanual('sm-wingbits')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wingbits"><path     d="M 21.98564,16.464849 22.00826,7.6309315 C 21.995878,7.2507971 21.91137,6.9416564 21.751569,6.6849512 21.330894,6.0109674 20.623563,5.6089747 19.860577,5.6089747 h -0.550601 c -0.909386,0 -1.93427,0.6816303 -2.292124,1.5675341 l -2.650815,5.7971702 0.002,0.01092 -0.600114,1.455054 0.0041,0.0054 -0.817619,2.025292 c -0.162872,0.401969 -0.53515,0.66303 -0.947544,0.66303 h -1.780705 c -0.3165025,0 -0.6103612,-0.15068 -0.8052299,-0.410717 L 3.320068,8.0591458 C 3.2262443,7.8887349 3.1849958,7.4943888 3.328314,7.1972727 3.4293599,6.9864416 3.6015484,6.8815798 3.8696267,6.8673774 h 3.4953494 c 0.3175635,0 0.6134884,0.1518341 0.809391,0.4161896 L 13.061641,13.693546 13.647329,12.414385 9.1342977,6.4577398 C 8.7022769,5.8842529 8.0578521,5.556541 7.363943,5.556541 H 3.8304536 C 3.1045741,5.5871237 2.5354242,5.9585319 2.2250643,6.6019329 1.8961556,7.2857448 1.9270827,8.2109799 2.2993061,8.8030436 l 0.013402,0.021843 6.1379823,8.7115684 c 0.4330548,0.576754 1.0795355,0.906686 1.7754846,0.906686 h 1.780706 c 0.909385,0 1.728027,-0.572379 2.08588,-1.458311 l 0.225788,-0.559256 h -0.001 L 15.208413,14.221122 18.15519,7.6899187 C 18.318038,7.286843 18.896467,6.9176258 19.308953,6.9176258 h 0.550601 c 0.346406,0 0.668148,0.1824261 0.859872,0.4893797 0.01759,0.027307 0.04644,0.09831 0.05258,0.2676223 l -0.02271,8.8339642 c 0.0073,0.234815 -0.04532,0.427098 -0.132996,0.479496 -0.154589,0.09288 -0.330957,0.143141 -0.509278,0.143141 h -2.231256 c -0.317555,0 -0.613517,-0.15189 -0.809429,-0.416208 l -1.303256,-1.752133 -0.541294,1.38944 0.873274,1.174355 c 0.433054,0.582152 1.082681,0.915342 1.781728,0.915342 h 2.231256 c 0.392848,0 0.780484,-0.108148 1.120747,-0.314576 0.506207,-0.304804 0.782624,-0.912178 0.757868,-1.66474 z"     fill="currentColor"     id="path2-0"     style="stroke:none;" /></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssSat">Wingbits</div></div>
</header>

<header class="large-panel-button flexcol" onclick="menumanual('sm-location')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Location</div></div>
</header>

<header class="large-panel-button flexcol" onclick="menumanual('sm-keys')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Keys</div></div>
</header>


<header class="large-panel-button flexcol" onclick="menumanual('sm-regional')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Regional</div></div>
</header>

<header class="large-panel-button flexcol" onclick="menumanual('sm-network')">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Network</div></div>
</header>



</header>











<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;">
<h1>Diagnostics</h1>
</div>



<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">



<header class="large-panel-button flexcol">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-usb"><circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5"/><path d="m21 3-3 1 2 2Z"/><path d="M9.26 7.68 5 12l2 5"/><path d="m10 14 5 2 3.5-3.5"/><path d="m18 12 1-1 1 1-1 1Z"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">USB</div></div>
</header>


<header class="large-panel-button flexcol">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window-mac"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg></div>
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;" id="gnssAlt">Services</div></div>
</header>


<header class="large-panel-button flexcol">
<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg></div>
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





<?php include_once('node.php') ?>
<?php include_once('release.php') ?>
<?php include_once('wingbits.php') ?>
<?php include_once('location.php') ?>
<?php include_once('keys.php') ?>
<?php include_once('regional.php') ?>




<script src="/global/script/jquery.min.3.7.1.js"></script>
<script src="/global/script/jquery-ui.min.1.11.3.js"></script>
<script src="/global/script/leaflet.min.1.9.4.js"></script>
<script src="/global/script/moment.min.2.30.0.js"></script>
<script src="/global/script/script.js"></script>
<script src="script.js"></script>