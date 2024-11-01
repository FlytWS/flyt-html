<div class="slideout-manual" id="sm-location">
        <header>
		  <div id="page-title-left"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-of-contents"><path d="M16 12H3"/><path d="M16 18H3"/><path d="M16 6H3"/><path d="M21 12h.01"/><path d="M21 18h.01"/><path d="M21 6h.01"/></svg></div>         
		  <div id="page-title-center"><h1>Location</h1></div>
		  <div id="page-title-right" onclick="menumanual('location')" class="slideout-manual-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        </header>
		<div class="menuBoundry">
		<section id="menu-body">
				

			<header style="flex-direction: column;">
			<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">
			<br>Please ensure your GPS reciever is connected and has clear visibility of the sky. An approximate GPS position of your node will be displayed below. Please confirm your nodes exact location by selecting it on the map, to better assist with mapping.
			<br><br>
			<header style="margin-top:1rem; border-radius:0.75rem; flex-direction: column; padding:0rem; overflow:hidden; ">
			<div id="cMap"></div>
			</header>
			</div>

			<div class="page-title-center"  style="margin-bottom:2rem; color:#fbfbfb80; text-align:center; font-size:0.75rem;">

			</div>

			</header>

	
		</section>
			
		</div>
</div>





<script>

window.addEventListener('load', (event) => {

	getMap();
	getLocation();
	getGNSSLocation("initial");

	setInterval(getGNSSLocation("update"), 10000);

});



let cockpitMap = L.map('cMap', { zoomControl: true,    scrollWheelZoom: true });

var markerGroupL = L.layerGroup().addTo(cockpitMap);
var markerGroupG = L.layerGroup().addTo(cockpitMap);

function getMap() {
	
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		className: 'cockpit-tiles'
	}).addTo(cockpitMap);

	let markers = L.layerGroup().addTo(cockpitMap);
	//cockpitMap.dragging.disable();

	cockpitMap.setView([0,0], 1);

};


var theMarker = {};

cockpitMap.on('click',function(e){
		
    lat = e.latlng.lat;
    lon = e.latlng.lng;

	if (theMarker != undefined) {
		  cockpitMap.removeLayer(theMarker);
	};

    theMarker = L.marker([lat,lon]).addTo(cockpitMap); 
	console.log(lat+" - "+lon);
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'set-location', latitude: lat, longitude: lon },
		success: function(response) {
			console.log(response);
		}
	});
	
	
});




var isLocationSet = 0;


function getLocation() {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-location' },
		success: function(response) {
			
			console.log(response);
			
			try {
			var resParse = JSON.parse(response);
			
			if (resParse.latitude) {
				
				isLocationSet = 1;
				
				if ($("#n_locationset").length == 1) {
					$("#n_locationset").remove();
				}

				var markerFrom = L.circleMarker([resParse.latitude,resParse.longitude], { color: "#6ba7ff", radius: 10 });
				var from = markerFrom.getLatLng();

				markerFrom.bindPopup('Radio ' + (from).toString());
				
				markerGroupL.clearLayers();
				markerFrom.addTo(markerGroupL);
				

				cockpitMap.setView([resParse.latitude,resParse.longitude], 16);				
				
			
			} else {
				
				if ($("#n_locationset").length == 0) {
					//notifyConsole("n_locationset","Map location is not set. Please set your map location in the settings.");
				}
				
			}
			} catch (err) {
				
				if ($("#n_locationset").length == 0) {
					//notifyConsole("n_locationset","Map location is not set. Please set your map location in the settings.");
				}
				console.log(err);
			}				
			
			
		},
		error: function(err) {
			//Unable to save
			console.log(err);
			
		}
	});
	
};






function getGNSSLocation(tag) {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-gnss' },
		success: function(response) {
			
			console.log(response);
			
			try {
			var resParse = JSON.parse(response);
			
			if (resParse.latitude) {
				
				
				if ($("#n_gnssnotdetected").length == 1) {
					$("#n_gnssnotdetected").remove();
				}
				$('#state_gnss').removeClass("health-poor");
				
				var markerFrom = L.circleMarker([resParse.latitude,resParse.longitude], { color: "#fdfd9690", radius: 4 });
				var from = markerFrom.getLatLng();

				//markerFrom.bindPopup('GNSS ' + (from).toString());

				markerGroupG.clearLayers();
				markerFrom.addTo(markerGroupG);
				
				
				if (isLocationSet == 0) {
					if (tag == "initial") {
						cockpitMap.setView([resParse.latitude,resParse.longitude], 16);
					}
				}


			} else {
				
				
				markerGroupG.clearLayers();
				
				if ($("#n_gnssnotdetected").length == 0) {
					//notifyConsole("n_gnssnotdetected","GNSS location is not available. Please ensure your GNSS receiver is connected with visibility of the sky.");
				}
				
				$('#state_gnss').addClass("health-poor");
				
				
			}
			
			if (resParse.satellites) {
				if (resParse.satellites < 6) {
					if ($("#n_limitedgnss").length == 0) {
						//notifyConsole("n_limitedgnss","Limited GNSS satellites in view. Please ensure your GNSS receiver has good visibility of the sky.");
					}
				} else {
					$("#n_limitedgnss").remove();
				}
			}
			
			} catch (err) {				
				console.log(err);
			}				
			
			
		},
		error: function(err) {
			//Unable to save
			console.log(err);
				
			
		}
	});
	
};



</script>