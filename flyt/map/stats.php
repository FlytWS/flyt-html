<div class="map-bar" id="map-stats">
		<div style="display: flex;    align-items: center;    justify-content: space-between;"><section id="page-title"><header><h1>Stats</h1></header></section><div style="height:2rem; padding:2rem; padding-right:3rem; align-items: center;    display: flex;" class="closeSettings header-action"><svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" onclick="closeSettings('map-stats')"><polyline points="15 18 9 12 15 6"></polyline></svg></div></div>

	

		
		
		
		<header style="border-radius:0.75rem; display: flex;    flex-wrap: wrap;    grid-gap: 1rem;    padding: 0;    justify-content: space-evenly;">

			<header class="large-panel-button" style="height: auto;">
			<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
			<canvas id="stats-canvas-aircraft" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
			</div>
			<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem;">Aircraft</div><div id="stats-canvas-aircraft-inactive"></div><div id="stats-canvas-aircraft-active" style="padding-bottom:2rem;"></div></div>
			</header>

			<header class="large-panel-button" style="height: auto;">
			<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
			<canvas id="stats-canvas-distance" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
			</div>
			<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem;">Distance</div><div id="stats-canvas-distance-min"></div><div id="stats-canvas-distance-max" style="padding-bottom:2rem;"></div></div>
			</header>

			<header class="large-panel-button" style="height: auto;">
			<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
			<canvas id="stats-canvas-altitude" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
			</div>
			<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem;">Altitude</div><div id="stats-canvas-altitude-min"></div><div id="stats-canvas-altitude-max" style="padding-bottom:2rem;"></div></div>
			</header>
			
			<header class="large-panel-button" style="height: auto;">
			<div style="font-size:1.4rem; padding:1.5rem; padding-top:2.5rem;  padding-bottom:0; color:#fbfbfb80;">
			<canvas id="stats-canvas-rssi" style="padding: 1rem; display: block; box-sizing: border-box; height: 240px; width: 240px;" width="240" height="240"></canvas>
			</div>
			<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;"><div style="padding:1rem; padding-top:0.25rem;">RSSI</div><div id="stats-canvas-rssi-min"></div><div id="stats-canvas-rssi-max" style="padding-bottom:2rem;"></div></div>
			</header>

		</header>
		
		
		
		
		


	
</div>