window.addEventListener('load', (event) => {
	
	
});




function menumanual(key) {
	
		console.log(key);
		
		var slideoutManual = $('#'+key);
    	var slideoutManualWidth = $('#'+key).width();
    	
    	// toggle open class
    	slideoutManual.toggleClass("open");
    	
    	// slide menu
    	if (slideoutManual.hasClass("open")) {
	    	slideoutManual.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	slideoutManual.animate({
		    	left: "-100vw"
	    	}, 250);	
    	}

	
}









// Release

window.addEventListener('load', (event) => {

	getWebRelease();
	getScriptRelease();

});




function getWebRelease() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-release-web' },
		success: function(response) {
			
			console.log(response);
			$('#release-web').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};



function getScriptRelease() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-release-script' },
		success: function(response) {
			
			console.log(response);
			$('#release-script').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};









// Wingbits

window.addEventListener('load', (event) => {

	getWingbitsIdentifier();
	getWingbitsRelease();

});




function getWingbitsIdentifier() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-wingbits-identifier' },
		success: function(response) {
			
			console.log(response);
			$('#wingbits-identifier').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};



function getWingbitsRelease() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-wingbits-release' },
		success: function(response) {
			
			console.log(response);
			$('#wingbits-release').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};






// Keys

window.addEventListener('load', (event) => {

	getSerialNumber();
	getPublicKey();
	getAccessKey();

});




function getSerialNumber() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-serial-number' },
		success: function(response) {
			
			console.log(response);
			$('#key-serial').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};



function getPublicKey() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-key-public' },
		success: function(response) {
			
			console.log(response);
			$('#key-public').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};




function getAccessKey() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-key-access' },
		success: function(response) {
			
			var obj = JSON.parse(response);
			console.log(obj);
			$('#key-access').html(obj.accesskey);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};











// Node

window.addEventListener('load', (event) => {

	getModel();
	getNode();

});




function getModel() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-model' },
		success: function(response) {
			
			console.log(response);
			$('#node-model').html(response);
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};


function getNode() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-stats-0' },
		success: function(response) {
			
			console.log(response);

			var obj = JSON.parse(response);
			
			coreAr = [];
			coreAr['1'] = "Solo-Core";
			coreAr['2'] = "Dual-Core";
			coreAr['4'] = "Quad-Core";
			coreAr['6'] = "Hexa-Core"
			coreAr['8'] = "Octa-Core"
			coreAr['10'] = "Deca-Core"
			
			
			$('#node-manufacturer').html("Flyt");
			$('#node-system').html(obj.platform_system);
			$('#node-architecture').html(obj.platform_machine);
			$('#node-cpu').html(coreAr[obj.cpu_cores] + " " + obj.cpu_frequency_max + "Mhz");
			$('#node-ram').html((obj.memory_total / 1000000).toFixed(0) + "MB");
			$('#node-ram').html();
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};





// Location

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


















// USB



window.addEventListener('load', (event) => {
	
	getUSBJSON();
	getUSBDump();
	

});




function getUSBJSON() {
	

  	$.ajax({
    url: "ajax.php",
    type: "POST",
	cache: false,
	dataType: "text",
	data: { request: 'get-usb' },
    success: function(result, textStatus, jqXHR) {
		
		var resParse = JSON.parse(result);
		console.log(resParse);
		
		var usbString = "";
		
		for (const usb of resParse) {
			
			usbString += usb.tag;
			usbString += "<br />";
			usbString += usb.device;
			usbString += "<br />";
			usbString += "<br />";

		}
		
		
		document.getElementById('usb-parsed').innerHTML = usbString;
		


	},
	error: function(err)
    {

		console.log(err);

    }
  
  
	})
	


	
}



function getUSBDump() {
	
	const usbheader = ["Bus=", "Lev=", "Prnt=", "Port=", "Cnt=", "Dev#=", "Spd=", "MxCh=", "Ver=", "Cls=", "Sub=", "Prot=", "MxPS=", "#Cfgs=", "Vendor=", "ProdID=", "Rev=", "Manufacturer=", "Product=", "SerialNumber=", "#Ifs=", "Cfg#=", "Atr=", "MxPwr=", "If#=", "Alt=", "#EPs=", "Driver=", "Ad=", "Ivl="];

	
 	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-usb-dump' },
	success: function(result) {

		
		console.log(result);
		let usbstring = result;
		
		usbheader.forEach(element => {

		if (element == "Bus=") {
			usbstring = usbstring.replaceAll("T:  Bus=", "<br>&emsp;<br>T:  Bus=");
		} else {
			usbstring = usbstring.replaceAll(element, "&emsp;"+element);
		}
		});
		
		console.log(usbstring);
		
		document.getElementById('usb-dump').innerHTML = usbstring.substring(14);

	},
	error: function(err)
    {

		console.log(err);

    }
  
  
	})
	
	
}





