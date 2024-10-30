window.addEventListener('load', (event) => {
	
	fetchGNSS();
	setInterval(fetchGNSS, 10000);

	getGNSSLocation();
	setInterval(getGNSSLocation, 10000);
	
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






function generateRandomData(numPoints) {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            r: 10
        });
    }
    return data;
}


(async function() {

  chartSatellites = new Chart(
    document.getElementById('satellites'),
    {
      type: 'bubble',
	  data: {
        datasets: [{
            label: 'Satellite',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: generateRandomData(0)
        }]
		},
	  options: {
		  

	
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			tooltip: {
                        enabled: false
                    },
            legend: {
                display: false
            }
        },
		scales: {
      x: {
		  
		display:false,
	  },
	  y: {
		
		display:false,
	  }
		},
	  }
    }
  );
})();





function secondsToDHM(seconds) {

	unixTime = Math.floor(Date.now() / 1000)

	seconds = Number(unixTime - seconds);
	var d = Math.floor(seconds / (3600*24));
	var h = Math.floor(seconds % (3600*24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
	return dDisplay + hDisplay + mDisplay;
	
}








satCount = 0;
var receiverTagMaster = "";

function fetchGNSS() {

	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-gnss' },
	success: function(result) {


		console.log(result);
		var obj = JSON.parse(result);
		console.log(obj); 
		
		var receiverTag = '<span id="driver">'+obj.device.driver+'</span><br><span id="path" style="color:#fbfbfb90;">'+obj.device.path+'</span>';
		if (receiverTagMaster !== receiverTag) {
			document.getElementById('receiver').innerHTML = receiverTag;
			receiverTagMaster = receiverTag;
		}
		
		if (obj.mode == 1) {
			obj.satellites = 0;
		}
		if (satCount !== (obj.satellites / 1)) {
		
			const newData = generateRandomData(obj.satellites / 1);
			chartSatellites.data.datasets[0].data = [];
			chartSatellites.data.datasets[0].data.push(...newData);
			chartSatellites.update();
			
			//document.getElementById('satellitesTitle').innerHTML = obj.satellites + " Satellites";
			
			satCount = (obj.satellites / 1);
		}
		
		
		document.getElementById('gnssLat').innerHTML = obj.latitude + " Latitude";
		document.getElementById('gnssLon').innerHTML = obj.longitude + " Longitude";
		document.getElementById('gnssMode').innerHTML = obj.mode + "D Fix";
		document.getElementById('gnssSat').innerHTML = obj.satellites + " Satellite(s)";
		document.getElementById('gnssAlt').innerHTML = obj.altitude + " Altitude";



	},
	error: function(err) {

		console.log(err); 

	}



	})

}