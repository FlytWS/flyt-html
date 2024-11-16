<!DOCTYPE html>
<html style="overflow: hidden;">

<head>
<title>Flyt Map</title>
<?php include_once('../includes/head.php'); ?>
<link rel="stylesheet" href="/global/style/leaflet.1.9.4.css"/>
<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section class="master-page-title" id="page-title" style="position:absolute; z-index: 15; width: 100vw;">
<header>
<?php $pageTitle = "Map"; ?>
<?php include_once('../includes/main-nav.php'); ?>
</header>
</section>

	
	
	
	
	

	
	<section id="page-body" style="margin-bottom:4rem;">
	

			<div class="principle-container w-100">
				
				<div id="zoomIn" onclick="zoom('in')" style="cursor: pointer; position: absolute;    right: 1rem;    top: 6rem;    z-index: 18;    padding: 0.4rem;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg></div>
				<div id="zoomOut" onclick="zoom('out')" style="cursor: pointer; position: absolute;    right: 1rem;    top: 8.8rem;    z-index: 18;    padding: 0.4rem;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg></div>
				<div class="common-card"><div id="mMap"></div></div>
				
			</div>


		
	</section>

	
	


<?php include_once('../includes/footer.php') ?>
<?php include_once('../includes/main-menu.php'); ?>

  </body>
</html>













<div class="map-bar" id="map-craft">
	
	
	
	    <section id="page-hero" class="flex justify-space-between">
		<div class="display-craft-header-action-topfade"></div>
			<div class="header-action display-craft-header-action">
				<svg class="standard-icon" onclick="mapCraftClose();" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
			</div>
			<div class="common-container w-100 nopad" style="border-radius:0px; border:0px;	border-top-right-radius:0.8rem;	border-top-left-radius:0.8rem;"><div class="common-container-body card-center nopad" id="panelCraftImage"></div></div>
			<div id="display-craft-header-image-credits"></div>
		
		</section>
		
		<section id="display-craft-information">
		<section>
		<div class="display-craft-section">
		<span class="display-craft-subsection-title">Aircraft Information</span><span id="display-craft-subsection-title-state"><svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span>
		</div>
		</section>
		
		<section>
		<div class="display-craft-subsection">
		
		<div class="display-craft-subsection-row flex-wa" style="grid-template-columns: repeat(1, minmax(0, 1fr));">
		<div class="display-craft-subsection-full w-100">
		<span class="display-craft-subsection-title">Aircraft Type</span><br><span class="dc_value" id="dc_aty"></span>
		</div>
		</div>

		<div class="display-craft-subsection-row flex-wa" style="grid-template-columns: repeat(1, minmax(0, 1fr));">
		<div class="display-craft-subsection-full w-100">
		<span class="display-craft-subsection-title">Aircraft Category</span><br><span class="dc_value" id="dc_aca"></span>
		</div>
		</div>
		
				
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Hex</span><br><span class="dc_value" id="dc_hex"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Registration</span><br><span class="dc_value" id="dc_reg"></span>
		</div>
		</div>
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Registered Owner</span><br><span class="dc_value" id="dc_row"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Registered Country</span><br><span class="dc_value" id="dc_rco"></span>
		</div>
		</div>		

		
		</div>
		</section>
		


		<section>
		<div class="display-craft-section">
		<span class="display-craft-subsection-title">Flight & Navigation</span>
		</div>
		</section>
		
		<section>
		
		<div class="display-craft-subsection">

		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Flight</span><br><span class="dc_value" id="dc_fli"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title"></span><br><span class="dc_value" id="dc_xyz"></span>
		</div>
		</div>
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">True Heading</span><br><span class="dc_value" id="dc_the"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Nav Heading</span><br><span class="dc_value" id="dc_nhe"></span>
		</div>
		</div>
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Latitude</span><br><span class="dc_value" id="dc_lat"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Longitude</span><br><span class="dc_value" id="dc_lon"></span>
		</div>
		</div>
		
		
		</div>
		</section>
		
		
		
		<section>
		<div class="display-craft-section">
		<span class="display-craft-subsection-title">Speed & Altitude</span>
		</div>
		</section>
		
		<section>
		
		<div class="display-craft-subsection">
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Barometric Alt.</span><br><span class="dc_value" id="dc_bal"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Nav Alt.</span><br><span class="dc_value" id="dc_nal"></span>
		</div>
		</div>
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Ground Speed</span><br><span class="dc_value" id="dc_gsp"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">True Air Speed</span><br><span class="dc_value" id="dc_tas"></span>
		</div>
		</div>
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Indic. Air Speed</span><br><span class="dc_value" id="dc_ias"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Mach</span><br><span class="dc_value" id="dc_mac"></span>
		</div>
		</div>

		
		</div>
		</section>





		<section>
		<div class="display-craft-section">
		<span class="display-craft-subsection-title">Environment</span>
		</div>
		</section>
		
		<section>
		
		<div class="display-craft-subsection">
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Wind</span><br><span class="dc_value" id="dc_win"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Temperature</span><br><span class="dc_value" id="dc_tem"></span>
		</div>
		</div>
		

		
		
		</div>
		</section>



		<section>
		<div class="display-craft-section">
		<span class="display-craft-subsection-title">Radio</span>
		</div>
		</section>
		
		<section>
		
		<div class="display-craft-subsection">
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Source</span><br><span class="dc_value" id="dc_sou"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Messages</span><br><span class="dc_value" id="dc_mes"></span>
		</div>
		</div>
		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">RSSI</span><br><span class="dc_value" id="dc_rss"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Last Seen</span><br><span class="dc_value" id="dc_lse"></span>
		</div>
		</div>		

		
		<div class="display-craft-subsection-row flex-wa">
		<div class="display-craft-subsection-left w-50">
		<span class="display-craft-subsection-title">Squawk</span><br><span class="dc_value" id="dc_squ"></span>
		</div>
		<div class="display-craft-subsection-right w-50">
		<span class="display-craft-subsection-title">Mode-S</span><br><span class="dc_value" id="dc_mos"></span>
		</div>
		</div>
		
		
		</div>
		</section>

		<section style="margin-bottom: 3rem;"></section>




</section>
	
	
	
	
</div>









<div class="map-bar-container" id="map-list-container">
<div class="map-bar-flex" id="map-list">
		<div style="display: flex;    align-items: center;    justify-content: space-between; height: 3.2rem;"><section id="page-title"><header><h1>List</h1></header></section><div style="height:2rem; padding:2rem; align-items: center;    display: flex;" class="closeSettings header-action"><svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" onclick="closeSettings('map-list-container')"><polyline points="15 18 9 12 15 6"></polyline></svg></div></div>
		<div class="principle-container">
		<div class="announcement">
		
		<table id="display-craft-table">
		<thead>
		  <tr>
			<th class="tg-0lax">Status</th>
			<th class="tg-0lax">Country</th>
			<th class="tg-0lax">Hex</th>
			<th class="tg-0lax">Registration</th>
			<th class="tg-0lax">Aircraft Type</th>
			<th class="tg-0lax">Squawk</th>
			<th class="tg-0lax">Altitude</th>
			<th class="tg-0lax">Speed</th>
			<th class="tg-0lax">Distance</th>
			<th class="tg-0lax">RSSI</th>    
		  </tr>
		</thead>
		<tbody id="display-craft-table-body">

		</tbody>
		</table>
		
		
		</div>
		</div>
	
</div>
</div>



<div class="map-bar" id="map-console">
		<div style="display: flex;    align-items: center;    justify-content: space-between;"><section id="page-title"><header><h1>Console</h1></header></section><div style="height:2rem; padding:2rem; padding-right:3rem; align-items: center;    display: flex;" class="closeSettings"><svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" onclick="closeSettings('map-console')"><polyline points="15 18 9 12 15 6"></polyline></svg></div></div>
		<div class="principle-container" style="    height: calc(100% - 15rem);">

			<div id="console-window" style="padding:3rem; height: 100%; overflow: scroll;     overflow-x: scroll; padding-bottom:0rem;">
			<div id="startConsoleRecording" onclick="startConsoleRecording();" style="width:100%; height:100%;     display: flex;    justify-content: center;    align-items: center; cursor:pointer; text-align:center;">O<br/><br/>Click To Start Recording</div>
			</div>
		
		
		</div>
	
</div>





<?php include_once('stats.php'); ?>






































<div id="display-control" class="overlayControl display-control">

		<section>
		<div id="display-control-menu">
		<div class="display-control-menu-item" onclick="openSettings('map-list-container')" id="display-control-menu-item-list"><div style="display: flex;  justify-content: center;    align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/></svg><div style="height: 1.5rem;"><span id="display-control-menu-item-list-quantity"></span></div></div></div>
		<div class="display-control-menu-item" onclick="openSettings('map-stats')" id="display-control-menu-item-stats"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg></div>
		<div class="display-control-menu-item" onclick="displayMode()" id="display-control-menu-item-mode"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></div>
		<div class="display-control-menu-item" onclick="openSettings('map-console')" id="display-control-menu-item-console"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg></div>
		<div class="display-control-menu-item" onclick="openSettings('map-settings')" id="display-control-menu-item-settings"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg></div>
		</div>
		</section>

</div>



<div id="display-control-altitude-container" class="overlayControl display-control">

		<section>
		<div id="display-control-altitude"></div>
		<div id="display-control-altitude-reference-pad">
		<div id="display-control-altitude-reference"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg></div>
		</div>
		<div id="display-control-altitude-0">0 ft</div>
		<div id="display-control-altitude-25">10,000 ft</div>
		<div id="display-control-altitude-50">20,000 ft</div>
		<div id="display-control-altitude-75">30,000 ft</div>
		<div id="display-control-altitude-100">40,000 ft +</div>
		</section>
		
</div>














<script src="/global/script/jquery.min.3.7.1.js"></script>
<script src="/global/script/jquery-ui.min.1.11.3.js"></script>
<script src="/global/script/leaflet.min.1.9.4.js"></script>
<script src="/global/script/bluebird.min.3.3.1.js"></script>
<script src="/global/script/chart.min.3.9.1.js"></script>
<script src="/global/script/moment.min.2.30.0.js"></script>
<script src="/global/script/registrations.js"></script>
<script src="/global/script/script.js"></script>
<script src="script.js"></script>