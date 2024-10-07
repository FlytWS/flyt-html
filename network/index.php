<!DOCTYPE html>
<html>

<head>
	<title>Flyt Network</title>
	<?php include_once('../includes/head.php'); ?>
	<link rel="stylesheet" href="/flyt/global/style/leaflet.1.9.4.css"/>
	<link rel="stylesheet" href="style.css"/>
</head>


<body>

<section id="page-title">
	<header>
		<?php $pageTitle = "Network"; ?>
		<?php include_once('../includes/main-nav.php'); ?>
	</header>
</section>






<section id="page-body" style="margin-bottom:4rem;">
        <header>
		  <div id="page-title-center" style="width:100%;">









<header style="border-radius:0.75rem; margin-bottom:1rem; display: flex;       grid-gap: 1rem;    padding: 0;    justify-content: space-between;">



	<header id="panel-ethernet" class="large-panel-button" style="width:50%;">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ethernet-port"><path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"/><path d="M6 8v1"/><path d="M10 8v1"/><path d="M14 8v1"/><path d="M18 8v1"/></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem; display: flex;    flex-direction: column;">Ethernet<span id="ethernet-panel-text">&emsp;</span></div></div>
	</header>
	
	
	<header id="panel-wifi" class="large-panel-button" style="width:50%;">
	<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg></div>
	<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem; display: flex;    flex-direction: column;">WiFi<span id="wifi-panel-text">&emsp;</span></div></div>
	</header>



</header>



  



	  

	
	<div id="page-title" style=" margin-bottom:1rem;    line-height: 1rem;    letter-spacing: 0.4rem;    text-transform: uppercase;    font-weight: 400;	margin-top:4rem;    display: flex; justify-content: center;"><h1>Data Usage</h1></div>


<header style="margin-top:1rem; border-radius:0.75rem; display: flex; flex-direction: column; grid-gap: 1rem;    padding: 0;">
<header class="large-panel-button" style="height:auto; width:100%; padding:0; ">
	<canvas id="myChart" style="padding: 1rem; max-height: 20rem; display: block; box-sizing: border-box;"></canvas>
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



<script>
const xValues = ["Last Month Upload", "Last Month Download", "This Month Upload", "This Month Download"];
const yValues = [183.47, 5.28, 40.78, 1.18];
const zValues = [0, 0, 130.78, 51.18];


new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
	  label: 'Data Use In GB',
      data: yValues,
	  borderColor: "#fbfbfb40",
      backgroundColor: "#fbfbfb30",
	  borderWidth: 2,
      borderRadius: 8,
    },
    {
      label: 'Predicted Use In GB',
      data: zValues,
	  borderColor: "#fbfbfb20",
      backgroundColor: "#fbfbfb10",
	  borderWidth: 2,
      borderRadius: 8,
    }]
  },
  options: {
	  
    responsive: true,
	scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    },

	 plugins: {
	 legend: {
		display: false
	 }
	 }
  }
});
</script>



