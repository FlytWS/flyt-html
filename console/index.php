<!DOCTYPE html>
<html>

<head>
	<title>Flyt Console</title>
	<?php include_once('../includes/head.php'); ?>
	<link rel="stylesheet" href="/flyt/global/style/leaflet.1.9.4.css"/>
	<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
	<header>
		<?php include_once('../includes/main-nav.php'); ?>
	</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
        <header>
		  <div id="page-title-center" style="width:100%;">


<header style="margin-bottom:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

	<header id="network-wifi" class="large-panel-button active" style="height:2rem;">
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">Harlequin - Ferret - Otter</div>
	</header>

</header>
		
		  

<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

	<header id="panel-radio" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Radio</div></div>
	</header>

	<header id="panel-network" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Network</div></div>
	</header>

	<header id="panel-temperature" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg class="health-poor" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Temperature</div></div>
	</header>

	<header id="panel-activity" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Activity</div></div>
	</header>

	<header id="panel-node" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hard-drive"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Node</div></div>
	</header>

	<header id="panel-gnss" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">GNSS</div></div>
	</header>

</header>		  



<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">

	<header id="network-wifi" class="large-panel-button active" style="height:3rem; width:100%; padding:0; background-color:#00e7ff10;">
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">Map location is not set. Please set your map location by clicking here.</div>
	</header>
	<header id="network-wifi" class="large-panel-button active" style="height:3rem; width:100%; padding:0; background-color:#00e7ff10;">
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">No GNSS receiver detected. Please ensure your GNSS receiver is connected.</div>
	</header>
	<header id="network-wifi" class="large-panel-button active" style="height:3rem; width:100%; padding:0; background-color:#00e7ff10;">
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">Temperature critical. Please ensure your node is ventilated and operating in a temperate environment.</div>
	</header>
</header>

	  
		  
<header style="margin-top:1rem; border-radius:0.75rem; flex-direction: column; padding:0rem; overflow:hidden; ">
	<div id="cMap"></div>
</header>

	
	
	
	
	
		
	
	
<header style="margin-top:1rem; border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-between;">

	<header id="network-wifi" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">48 Positions</div></div>
	</header>

	<header id="network-wifi" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">91 Pulses</div></div>
	</header>
	
	<header id="network-wifi" class="large-panel-button">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-divide-circle"><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">27 Feeds</div></div>
	</header>

</header>
	
		
		
		
		
		
		
		
		
		  

	
	
	
<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Broadcast</h1></div>


<div id="broadcast-events" style="display:flex; justify-content: center;">
	<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
</div>  	  
		  
		  
		  
		  
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
<script src="/flyt/global/script/leaflet.min.194.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.0/moment.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="script.js"></script>