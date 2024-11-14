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

	getCoreRelease();
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


function getCoreRelease() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-release-core' },
		success: function(response) {
			
			console.log(response);
			var obj = JSON.parse(response);
			
			$('#release-core').html(obj.flyt_core_version);
			
		
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










// Network

window.addEventListener('load', (event) => {

	getnetworkstats("check-state");
	
	
	
	
	$(".large-panel-button-network").on('click', function(event){
		$(this).addClass("active").siblings().removeClass("active");
		console.log(this.id);
		
		if (this.id == "panel-ethernet") {
			$("#network-title").html("");
			$("#network-stats").html("");
			getnetworkstats("ethernet");
		}
		if (this.id == "panel-wifi") {
			$("#network-title").html('<div style="display:flex; width: 17rem;   justify-content: space-around;"><div style="cursor:pointer; height:18px; width:18px;"><svg id="wifiManage" onclick="wifiManage()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg><svg id="wifiback" onclick="WiFiBack()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div><div>WiFi</div><div id="wifirescan" onclick="WiFiRescan()" style="cursor:pointer; height:18px; width:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></div></div>');
			$("#network-stats").html('<div id="lets-go-div" style="text-align:center;"></div>');
			getnetworkstats("wifi");
			wifiScan();
		}
	});

	
	

});





function getnetworkstats(request) {
	
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-stats-1' },
		success: function(response) {
			
			var obj = JSON.parse(response);
			console.log(obj);
			

			if (request == "check-state") {
				console.log("check state");
				$('#panel-ethernet').addClass('removeClass');
				$('#panel-wifi').addClass('removeClass');
				

				if (obj.network_address_eth0) {
					
					console.log("check state eth0");
					
					$('#panel-ethernet').addClass('active');
					$('#network-state').hide().html('You are connected to Ethernet on IP address '+obj.network_address_eth0).fadeIn();

				}
				if (obj.network_address_wlan0) {
					
					console.log("check state wlan0");
					
					$('#panel-wifi').addClass('active');
					$('#network-state').hide().html('You are connected to WiFi on IP address '+obj.network_address_wlan0).fadeIn();
					
				}
				if (obj.network_address_eth0 && obj.network_address_wlan0) {
					
					console.log("check state eth0 && wlan0");
					
					$('#panel-ethernet').addClass('active');
					$('#panel-wifi').addClass('active');
					$('#network-state').hide().html('You are connected to Ethernet on IP address '+obj.network_address_eth0+' and WiFi on IP address '+obj.network_address_wlan0).fadeIn();
					$('#finishIP').html('<br>If you are planning to access your Node from WiFi after setup, please use the new URL of <a style="    text-decoration: none;    color: #fbfbfb80;" href="http://'+obj.network_address_wlan0+'/flyt">http://'+obj.network_address_wlan0+'/flyt</a>');
				}
				
				
			}
			

			if (request == "ethernet") {
				
				if (obj.network_address_eth0) {
					
					$('#network-state').hide().html('You are connected to Ethernet on IP address '+obj.network_address_eth0).fadeIn();
					
				} else {
					
					$('#network-state').hide().html('Unable to connect to Ethernet. Please check your network cable.').fadeIn();
					
				}				
				
			}
			
			
			if (request == "wifi") {
				
				if (obj.network_address_wlan0) {
					
					
					var networkStateText = $('#network-state').text();
					if (networkStateText.includes(obj.network_address_wlan0) == true) {
						if (networkStateText.includes(obj.network_address_eth0) == true) {
							$('#network-state').hide().html('You are connected to WiFi on IP address '+obj.network_address_wlan0).fadeIn();
						}
						// Do Not Re-Write
					} else {
						$('#network-state').hide().html('You are connected to WiFi on IP address '+obj.network_address_wlan0).fadeIn();
					}
					
					
				} else {
					
					$('#network-state').hide().html('').fadeIn();
					
				}
				
			}
			
			


		},
		error: function(err) {
			
			console.log(err);
			
		}
	});
	
};







var xhr_wifiScan = null
function wifiScan() {
	
	document.getElementById('lets-go-div').innerHTML = '<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>';
	var activeSSIDAr = null;
	
	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'active-wifi' },
	success: function(response) {

		console.log(response);
		var resParse = JSON.parse(response);
		activeSSIDAr = resParse;
		console.log(resParse);

	}
	});
	
	
	
	xhr_wifiScan = $.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'scan-wifi' },
	success: function(response) {

		console.log(response);
		var resParse = JSON.parse(response);
		console.log(resParse);


		var ssidContent = "";
		jQuery.each(resParse, function (index, value) {
	
			if (activeSSIDAr.includes(value) == true) {
				ssidContent += "<div class='lets-go-div-ssid' onclick='setWiFi(\""+value+"\");'>"+value+" (Active)</div>";
			} else {
				ssidContent += "<div class='lets-go-div-ssid' onclick='setWiFi(\""+value+"\");'>"+value+"</div>";
			}
		});
		document.getElementById('lets-go-div').innerHTML = ssidContent;


	},
	error: function(err) {
		
		wifiScan();
		
	}
	});
 
}




var wifimanagerotate = 0;
function wifiManage() {
	
	xhr_wifiScan.abort();
	
	document.getElementById('lets-go-div').innerHTML = '<svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>';

	wifimanagerotate += 360;
	$('#wifiManage').stop().animate(
	  {rotation: wifimanagerotate},
	  {
		duration: 500,
		step: function(now, fx) {
		  $(this).css({"transform": "rotate("+now+"deg)"});
		}
	  }
	);	
	
	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'manage-wifi' },
	success: function(response) {

	
		console.log(response);
		var resParse = JSON.parse(response);
		console.log(resParse);


		var ssidContent = "";
		jQuery.each(resParse, function (index, value) {
			ssidContent += "<div class='lets-go-div-ssid' id='ssid_"+index+"'>"+value+" <span onclick='deleteWiFi(\""+index+"\",\""+value+"\");'>[delete]</span></div>";

		});
		document.getElementById('lets-go-div').innerHTML = ssidContent;


	}
	});
 
}






function deleteWiFi(getIndex, getSSID) {

	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'delete-wifi', ssid: getSSID },
	success: function(response) {

		console.log(response);
		var resParse = JSON.parse(response);
		console.log(resParse);
		$('#network-state').html(resParse);
		$('#ssid_'+getIndex).remove();

	}
	});
 
}




function setWiFi(ssid) {
	console.log(ssid);
	if (ssid.includes('Hidden Network') == true) {
		ssid = "";
	}
	$("#wifiManage").css('display', 'none');
	$("#wifiback").css('display', 'block');	
	$("#wifirescan").css('visibility', 'hidden');
		
	$("#network-stats").html('<div><div id="wifiSSID" class="lets-go" style=""><input id="wifiSSIDInput" type="text" placeholder="WiFi SSID" style="text-align:center;" value="'+ssid+'"></div><div id="wifiPassphrase" class="lets-go" style=""><input id="wifiPassphraseInput" placeholder="WiFi Passphrase" style="text-align:center;"></div></div>');
	$("#network-stats").append('<header id="network-wifi-connect" onclick="WiFiConnectBtn()"><div style=" text-align:center; width:100%; color:#fbfbfbCC;"><div style="line-height: 1rem;">Connect</div></div></header><header id="network-wifi-connect-wait" style="display:none;"><svg class="load" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></div>');
}

function WiFiConnectBtn() {
	if ($('#wifiSSIDInput').val().length < 1) {
		$( "#wifiSSID" ).effect( "shake" );
		return;
	}
	if ($('#wifiPassphraseInput').val().length < 8) {
		$( "#wifiPassphrase" ).effect( "shake" );
		return;
	}
	
	var inputSSID = $('#wifiSSIDInput').val();
	var inputPassphrase = $('#wifiPassphraseInput').val();
	
	$('#network-state').html('');
	$('#network-wifi-connect').hide();
	$('#network-wifi-connect-wait').fadeIn();
	
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'connect-wifi', ssid: inputSSID, passphrase: inputPassphrase },
		success: function(response) {
			
			console.log(response);
			//var obj = JSON.parse(response);

			if (response.includes('successfully activated') == true) {
				response = "Successfully connected to "+inputSSID;
				$('#network-state').hide().html(response).fadeIn();			
				$('#network-wifi-connect-wait').hide();
			} else {
				
				if (response.includes('Secrets were required, but not provided') == true) {
					response = "Unable to connect to WiFi, likely incorrect passphrase";
				}
				
				$('#network-state').hide().html(response).fadeIn();			
				$('#network-wifi-connect-wait').hide();
				$('#network-wifi-connect').fadeIn();
			}
			
			
			
		},
		error: function(err) {
			
			$('#network-state').hide().html("There has been an error. Please try again.").fadeIn();			
			$('#network-wifi-connect-wait').hide();
			$('#network-wifi-connect').fadeIn();
			
			
		}
		
	});
	
			
}

var wifirescanrotate = 0;
function WiFiRescan() {
	
	wifirescanrotate += 360;
	
	$('#wifirescan').stop().animate(
	  {rotation: wifirescanrotate},
	  {
		duration: 500,
		step: function(now, fx) {
		  $(this).css({"transform": "rotate("+now+"deg)"});
		}
	  }
	);
	
	wifiScan();	

}



function WiFiBack() {
	
	//$("#network-title").html('<div style="display:flex; width: 17rem;   justify-content: space-around;"><div><svg id="wifiback" onclick="WiFiBack()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div><div>WiFi</div><div id="wifirescan" onclick="WiFiRescan()" style="cursor:pointer; height:18px; width:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></div></div>');
	$("#wifiback").css('display', 'none');
	$("#wifiManage").css('display', 'block');
	$("#wifirescan").css('visibility', 'visible');
	$("#network-stats").html('<div id="lets-go-div" style="text-align:center;"></div>');
	getnetworkstats("wifi");
	wifiScan();
	
}












// Node

window.addEventListener('load', (event) => {

	getModel();
	getNode0();
	getNode1();
	getNode2();

});




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


function getNode0() {

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
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};



function getNode1() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-stats-1' },
		success: function(response) {
			
			console.log(response);

			var obj = JSON.parse(response);
			
			
			
			const keyStoragePartition = Object.keys(obj).filter(key => key.startsWith('storage_partition_device_'));
			console.log(keyStoragePartition);
			console.log(obj[keyStoragePartition]);
			var primaryStore = obj[keyStoragePartition];

			$('#node-storage').html((obj['storage_usage_total_'+primaryStore]/1000000000).toFixed(2) + "GB");
			
		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};




function getNode2() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-stats-2' },
		success: function(response) {
			
			console.log(response);

			var obj = JSON.parse(response);

			document.getElementById('node-uptime').innerHTML = secondsToDHM(obj.boot_timestamp);
			
		
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
		
		document.getElementById('usb-dump').innerHTML = usbstring.substring(15);

	},
	error: function(err)
    {

		console.log(err);

    }
  
  
	})
	
	
}


















// Services

window.addEventListener('load', (event) => {

	getServices();

});





function getServices() {

	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-services' },
		success: function(response) {
			
			var obj = JSON.parse(response);
			console.log(obj);
			
			
			
			
			serAr = [];
			serAr['cron'] = "This service assists with job scheduling";
			serAr['gpsd'] = "This service assists with monitoring GPS data services";
			serAr['lm-sensors'] = "This service assists with temperature and hardware monitoring"
			serAr['vnstat'] = "This service assists with network traffic statistics"
			serAr['readsb'] = "This service is critical for parsing ADS-B communications"
			serAr['vector'] = "This service is critical for relaying ADS-B communications into the Wingbits network"
			//serAr['tar1090'] = "An ancillary readsb mapping service not critical for operation"
			//serAr['graphs1090'] = "An ancillary readsb monitor not critical for operation"
			
			
			for (const key in obj){
			  document.getElementById('services-list').innerHTML += `<div style="padding-bottom:1rem;"><div><div style="display: flex;"><div style="font-weight:600;">${key}</div>&emsp;<div id="node-manufacturer">${obj[key]}</div></div></div><div>${serAr[key]}</div></div>`;
			};

		
		},
		error: function(err) {

			console.log(err);
			
		}
	
	});
			

};
