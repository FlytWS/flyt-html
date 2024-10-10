$(document).ready(function () {
	
	getWingbitsName();
	fetchStats0();
	getMap();
    getLocation();
	getGNSSLocation();
	getNews();
	
	setInterval(fetchStats0, 10000);
	setInterval(getLocation, 10000);
	setInterval(getGNSSLocation, 10000);
	setInterval(getNews, 60000);
	
	
});



let cockpitMap = L.map('cMap', { zoomControl: false,    scrollWheelZoom: false });

var markerGroupL = L.layerGroup().addTo(cockpitMap);
var markerGroupG = L.layerGroup().addTo(cockpitMap);


function getMap() {

	
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		className: 'cockpit-tiles'
	}).addTo(cockpitMap);

	let markers = L.layerGroup().addTo(cockpitMap);
	cockpitMap.dragging.disable();

	//var markerFrom = L.circleMarker([53.902561,-2.775290], { color: "#6ba7ff", radius: 20 });
	//var from = markerFrom.getLatLng();

	//cockpitMap.addLayer(markerFrom);

	//markerFrom.bindPopup('Radio ' + (from).toString());
	//cockpitMap.addLayer(markerFrom);					

	cockpitMap.setView([0,0], 1);


};







function notifyConsole(message) {
	
var divMessage = `
<header id="network-wifi" class="large-panel-button active" style="height:3rem; width:100%; padding:0; background-color:#00e7ff10;">
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">`+message+`</div>
</header>
`;

	$('#notification').append(divMessage);
	
	
}





function getNews() {

	
	
	var htmlNews = "";
	
	$.getJSON('https://flyt.ws/wp-json/wp/v2/posts?categories=60&per_page=3', function(data) {

		for (const key in data){
			
			//console.log(data[key]);			
			var title = data[key].title.rendered;
			var body = data[key].content.rendered;
			var cleanBody = $(body).text();
			var date = data[key].date;
			var url = data[key].guid.rendered;
			
			var dateParsed = new Date(date);
			var dateMoment = moment(dateParsed).format("dddd Do MMMM YYYY");

			
			htmlNews += '<header style=" width:100%;  background-color:#ffffff10; border-radius:0.75rem; flex-direction: column; padding:0;"><div style="font-size:1rem; padding:1.5rem; padding-top:2rem; padding-bottom:0; color:#fbfbfb80; width:100%; display:flex; justify-content: space-between;"><div style="padding-left:2rem; width:1rem; height:1rem;"></div><div>'+title+'</div><div style="padding-right:2rem; width:1rem; height:1rem;"><svg class="pointer" onclick="navigateExternal(\''+url+'\')" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></div></div><div style=" text-align:center; width:100%; font-size:0.7rem;"><div style="padding:1rem; padding-bottom:0; padding-top:0.25rem; color:#fbfbfbCC;">'+dateMoment+'</div></div><div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfb80;"><div style="padding:1rem; padding-top:0.25rem; padding-bottom:2rem;">'+cleanBody+'</div></div></header>';


		}
		
		//document.getElementById('broadcast-events').innerHTML = htmlNews;
		$('#broadcast-events').hide().html(htmlNews).fadeIn();
		
	});


}



function getWingbitsName() {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-wingbits-name' },
		success: function(response) {
			
			if (response.length > 0) {
				$('#wingbits-name').html('Registered Name : '+response).fadeIn();
			} else {
				$('#wingbits-name').html('Registered Name : Not Yet Registered').fadeIn();
			}
			
		},
		error: function(err) {
			//Unable to save
			console.log(err);

			$('#wingbits-name').html('Registered Name : Name Not Found').fadeIn();
			
		}
	});
	
};





var isLocationSet = 0;


function getLocation() {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-location' },
		success: function(response) {
			
			try {
			var resParse = JSON.parse(response);
			
			if (resParse.latitude) {
				
				isLocationSet = 1;

				var markerFrom = L.circleMarker([resParse.latitude,resParse.longitude], { color: "#6ba7ff", radius: 10 });
				var from = markerFrom.getLatLng();

				markerFrom.bindPopup('Radio ' + (from).toString());
				//cockpitMap.addLayer(markerFrom);
				
				markerGroupL.clearLayers();
				markerFrom.addTo(markerGroupL);
				

				cockpitMap.setView([resParse.latitude,resParse.longitude], 16);				
				
			
			} else {
				
				if ($("#n_locationset").length == 0) {
					notifyConsole("<div id='n_locationset'></div>Map location is not set. Please set your map location in the settings.");
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






function getGNSSLocation() {
	
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
				

				var markerFrom = L.circleMarker([resParse.latitude,resParse.longitude], { color: "#fdfd96", radius: 6 });
				var from = markerFrom.getLatLng();

				markerFrom.bindPopup('GNSS ' + (from).toString());
				//cockpitMap.addLayer(markerFrom);
				
				markerGroupG.clearLayers();
				markerFrom.addTo(markerGroupG);
				
				
				if (isLocationSet == 0) {
					cockpitMap.setView([resParse.latitude,resParse.longitude], 16);
				}


			} else {
				
				if ($("#n_gnssnotdetected").length == 0) {
					notifyConsole("<div id='n_gnssnotdetected'></div>GNSS location is not available. Please ensure your GNSS receiver is connected with visibility of the sky.");
				}
			}
			
			if (resParse.satellites) {
				if (resParse.satellites < 6 && $("#n_limitedgnss").length == 0) {
					notifyConsole("<div id='n_limitedgnss'></div>Limited GNSS satellites in view. Please ensure your GNSS receiver has good visibility of the sky.");
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















function fetchStats0() {
 //console.log("Fetching");
 

 $.ajax({
url: 'ajax.php',
type: 'POST',
cache: false,
data: { request: 'get-flyt-stats-0' },
 success: function(result) {


 console.log(result);
 var obj = JSON.parse(result);




try {
	
	var s_cpu = (obj.cpu_usage_percent).toFixed();
	if (s_cpu > 3 && $("#n_cpu").length == 0) {
		notifyConsole("<div id='n_cpu'></div>CPU usage high.");
	}
	
} catch (err) {
	
	
}


try {
	
	var s_ram = (obj.memory_available/1000000).toFixed();
	if (s_ram < 1000 && $("#n_ram").length == 0) {
		notifyConsole("<div id='n_ram'></div>RAM usage high.");
	}
	
} catch (err) {
	
	
}



try {

 const keyStoragePartition = Object.keys(obj).filter(key => key.startsWith('storage_partition_device_'));
 console.log(obj[keyStoragePartition]);
	
	var s_storage = (obj['storage_usage_free_/dev/sdd']/1000000).toFixed();
	if (s_storage < 1000 && $("#n_storage").length == 0) {
		notifyConsole("<div id='n_storage'></div>Storage low.");
	}
	

} catch (err) {
	
	
}




try {
	
	var s_temperature = (obj.temperature_current_cpu_thermal).toFixed();
	if (s_temperature > 20 && $("#n_temperature").length == 0) {
		notifyConsole("<div id='n_temperature'></div>Node temperature high.");
	}
	
} catch (err) {
	
	
}



 


 },
 error: function(err)
 {

 console.log(err); 

 }
 
 
 
 })
 
}