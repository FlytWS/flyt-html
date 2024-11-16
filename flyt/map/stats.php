<div class="map-bar" id="map-stats">
		<div style="display: flex;    align-items: center;    justify-content: space-between;"><section id="page-title"><header><h1>Stats</h1></header></section><div style="height:2rem; padding:2rem; padding-right:3rem; align-items: center;    display: flex;" class="closeSettings header-action"><svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" onclick="closeSettings('map-stats')"><polyline points="15 18 9 12 15 6"></polyline></svg></div></div>

	
	
		<div class="principle-container" id="messages-hero" style="width:100%; display:flex; justify-content: space-evenly;">





			<div class="common-container w-100" style="padding:1rem; display: grid;  grid-gap: 1rem;  grid-template-columns: repeat(4, 1fr); border-radius:0px; border:0px;	border-top-right-radius:0.8rem;	border-top-left-radius:0.8rem;">
				
				<div class="common-container" style=""><div class="common-container-header">Aircraft</div><div class="common-container-body card-center" style="height:6rem; justify-content: space-evenly; flex-wrap: wrap;"><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Active</span><span id="list-ac-active"></span></div><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Inactive</span><span id="list-ac-inactive"></span></div></div></div>
				<div class="common-container" style=""><div class="common-container-header">Distance</div><div class="common-container-body card-center" style="height:6rem; justify-content: space-evenly; flex-wrap: wrap;"><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Min</span><span id="list-di-min"></span></div><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Max</span><span id="list-di-max"></span></div></div></div>
				<div class="common-container" style=""><div class="common-container-header">Altitude</div><div class="common-container-body card-center" style="height:6rem; justify-content: space-evenly; flex-wrap: wrap;"><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Min</span><span id="list-al-min"></span></div><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Max</span><span id="list-al-max"></span></div></div></div>
				<div class="common-container" style=""><div class="common-container-header">RSSI</div><div class="common-container-body card-center" style="height:6rem; justify-content: space-evenly; flex-wrap: wrap;"><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Min</span><span id="list-rs-min"></span></div><div style="padding:0.5rem;"><span style="font-size:0.9rem; margin-right:0.4rem;">Max</span><span id="list-rs-max"></span></div></div></div>
				


			</div>





	
		</div>
		
		
		
		
		<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: center;">

		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="stats-canvas-aircraft" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Aircraft</div></div>
		</header>

		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="stats-canvas-distance" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Distance</div></div>
		</header>

		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="stats-canvas-altitude" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">Altitude</div></div>
		</header>
		
		<header class="large-panel-button" style="height: auto;">
		<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
		<canvas id="stats-canvas-rssi" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
		</div>
		<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">RSSI</div></div>
		</header>

		</header>
		
		
		
		
		


	
</div>





<script type="text/javascript">

(async function() {
  const data = [
    { element: "Active", count: 0 },
    { element: "Inactive", count: 0 },
  ];

  chartStatsAircraft = new Chart(
    document.getElementById('stats-canvas-aircraft'),
    {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.element),
        datasets: [
          {
            data: data.map(row => row.count),
			backgroundColor: [
                '#6ba7ff',
				'rgb(255, 99, 132)'
			],
			borderWidth: 0
          }
        ]
      }, 
	  options: {
		  
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
            legend: {
                display: false
            }
        }
	  }
    }
  );
})();







(async function() {
  const data = [
    { element: "Min Distance", count: 0 },
    { element: "Max Distance", count: 0 },
  ];

  chartStatsDistance = new Chart(
    document.getElementById('stats-canvas-distance'),
    {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.element),
        datasets: [
          {
            data: data.map(row => row.count),
			backgroundColor: [
                '#6ba7ff',
				'rgb(255, 99, 132)'
			],
			borderWidth: 0
          }
        ]
      }, 
	  options: {
		  
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
            legend: {
                display: false
            }
        }
	  }
    }
  );
})();







(async function() {
  const data = [
    { element: "Min Altitude", count: 0 },
    { element: "Max Altitude", count: 0 },
  ];

  chartStatsAltitude = new Chart(
    document.getElementById('stats-canvas-altitude'),
    {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.element),
        datasets: [
          {
            data: data.map(row => row.count),
			backgroundColor: [
                '#6ba7ff',
				'rgb(255, 99, 132)'
			],
			borderWidth: 0
          }
        ]
      }, 
	  options: {
		  
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
            legend: {
                display: false
            }
        }
	  }
    }
  );
})();






(async function() {
  const data = [
    { element: "Min RSSI", count: 0 },
    { element: "Max RSSI", count: 0 },
  ];

  chartStatsRSSI = new Chart(
    document.getElementById('stats-canvas-rssi'),
    {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.element),
        datasets: [
          {
            data: data.map(row => row.count),
			backgroundColor: [
                '#6ba7ff',
				'rgb(255, 99, 132)'
			],
			borderWidth: 0
          }
        ]
      }, 
	  options: {
		  
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
            legend: {
                display: false
            }
        }
	  }
    }
  );
})();




chartStatsAircraft.data.datasets[0].data[0] = 17;
chartStatsAircraft.data.datasets[0].data[1] = 3;
chartStatsAircraft.update();


chartStatsDistance.data.datasets[0].data[0] = 184;
chartStatsDistance.data.datasets[0].data[1] = 192;
chartStatsDistance.update();



chartStatsAltitude.data.datasets[0].data[0] = 9675;
chartStatsAltitude.data.datasets[0].data[1] = 38000;
chartStatsAltitude.update();


chartStatsRSSI.data.datasets[0].data[0] = 9675;
chartStatsRSSI.data.datasets[0].data[1] = 38000;
chartStatsRSSI.update();


</script>