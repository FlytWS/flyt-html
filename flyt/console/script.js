window.addEventListener('load', (event) => {
	
	getWingbitsName();
	fetchStats();
	getMap();
    getLocation();
	getGNSSLocation();
	getNews();
	
	setInterval(fetchStats, 10000);
	setInterval(getLocation, 600000);
	setInterval(getGNSSLocation, 10000);
	setInterval(getNews, 600000);
	
	
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

	cockpitMap.setView([0,0], 1);

};






function notifyConsole(div,message) {
	
var divMessage = `
<header id="`+div+`" class="large-panel-button active" style="height:3rem; width:100%; padding:0; background-color:#00e7ff10;">
<div style=" text-align:center; width:100%; font-size:0.7rem; color:#fbfbfbCC;">`+message+`</div>
</header>
`;

	$('#notification').append(divMessage);
	

}








var s_flag_node = 0;

function fetchStats() {
	
	s_flag_node = 0;
	
	fetchStats1();
	fetchStats2();
	
	if (s_flag_node == 1) {
		$('#state_node').addClass("health-poor");
	} else {
		$('#state_node').removeClass("health-poor");
	}

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
					notifyConsole("n_locationset","Map location is not set. Please set your map location in the settings.");
				}
				
			}
			} catch (err) {
				
				if ($("#n_locationset").length == 0) {
					notifyConsole("n_locationset","Map location is not set. Please set your map location in the settings.");
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
				
				
				if ($("#n_gnssnotdetected").length == 1) {
					$("#n_gnssnotdetected").remove();
				}
				$('#state_gnss').removeClass("health-poor");
				
				var markerFrom = L.circleMarker([resParse.latitude,resParse.longitude], { color: "#fdfd9690", radius: 4 });
				var from = markerFrom.getLatLng();

				markerFrom.bindPopup('GNSS ' + (from).toString());

				markerGroupG.clearLayers();
				markerFrom.addTo(markerGroupG);
				
				
				if (isLocationSet == 0) {
					cockpitMap.setView([resParse.latitude,resParse.longitude], 16);
				}


			} else {
				
				
				markerGroupG.clearLayers();
				
				if ($("#n_gnssnotdetected").length == 0) {
					notifyConsole("n_gnssnotdetected","GNSS location is not available. Please ensure your GNSS receiver is connected with visibility of the sky.");
				}
				
				$('#state_gnss').addClass("health-poor");
				
				
			}
			
			if (resParse.satellites) {
				if (resParse.satellites < 6) {
					if ($("#n_limitedgnss").length == 0) {
						notifyConsole("n_limitedgnss","Limited GNSS satellites in view. Please ensure your GNSS receiver has good visibility of the sky.");
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















function fetchStats2() {


	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-stats-2' },
	success: function(result) {


		console.log(result);
		var obj = JSON.parse(result);


		

		try {

		var s_cpu = (obj.cpu_usage_percent).toFixed();
		if (s_cpu > 90) {
			s_flag_node = 1;
			if ($("#n_cpu").length == 0) {
				notifyConsole("n_cpu","CPU usage high. Please consider rebooting your node if usage remains high for a prolonged period.");
			}
		} else {
			$("#n_cpu").remove();
		}

		} catch (err) {

			console.log(err); 
			
		}


		try {

		var s_ram = (obj.memory_available/1000000).toFixed();
		if (s_ram < 100) {
			s_flag_node = 1;
			if ($("#n_ram").length == 0) {
				notifyConsole("n_ram","RAM usage high. Please consider rebooting your node.");
			}
		} else {
			$("#n_cpu").remove();
		}

		} catch (err) {

			console.log(err); 
			
		}







	},
	error: function(err)
	{

		console.log(err); 

	}



	})

}
























function fetchStats1() {

	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-stats-1' },
	success: function(result) {


		console.log(result);
		var obj = JSON.parse(result);


		try {

			var s_temperature = (obj.temperature_current_cpu_thermal/1).toFixed();
			if (s_temperature > 60) {
			if ($("#n_temperature").length == 0) {
			notifyConsole("n_temperature","Temperature critical. Please ensure your node is ventilated and operating in a temperate environment.");
			}
			$('#state_temperature').addClass("health-poor");
			} else {
			$('#state_temperature').removeClass("health-poor");
			$("#n_temperature").remove();
			}

		} catch (err) {

			console.log(err); 

		}
		
		


		try {

		const keyStoragePartition = Object.keys(obj).filter(key => key.startsWith('storage_partition_device_'));
		console.log(obj[keyStoragePartition]);
		var primaryStore = obj[keyStoragePartition];

		var s_storage = (obj['storage_usage_free_'+primaryStore]/100000000).toFixed();
		if (s_storage < 10) {
			s_flag_node = 1;
			if ($("#n_storage").length == 0) {
				notifyConsole("n_storage","Storage is low. Please raise a support ticket with Flyt for further assistance.");
			}
		} else {
			
			$("#n_storage").remove();
			
		}


		} catch (err) {
		
			console.log(err);

		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		


	},
	error: function(err) {

		console.log(err); 

	}


	})

}