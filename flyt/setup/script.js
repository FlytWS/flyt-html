$(document).ready(function () {
	
	
	getWingbitsName();
	getMap();
    getLocation();
	getGNSSLocation("initial");
	
	setInterval(getGNSSLocation("update"), 5000);



	$(".large-panel-button").on('click', function(event){
			$(this).addClass("active").siblings().removeClass("active");
			console.log(this.id);
			
			if (this.id == "panel-ethernet") {
				$("#network-title").html("");
				$("#network-stats").html("");
				getflytstats("ethernet");
			}
			if (this.id == "panel-wifi") {
				$("#network-title").html('<div style="display:flex; width: 17rem;   justify-content: space-around;"><div style="cursor:pointer; height:18px; width:18px;"><svg id="wifiManage" onclick="wifiManage()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg><svg id="wifiback" onclick="WiFiBack()" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div><div>WiFi</div><div id="wifirescan" onclick="WiFiRescan()" style="cursor:pointer; height:18px; width:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></div></div>');
				$("#network-stats").html('<div id="lets-go-div" style="text-align:center;"></div>');
				getflytstats("wifi");
				wifiScan();
			}
	});

		
	
	
});




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
	getflytstats("wifi");
	wifiScan();
	
}

























function getflytstats(request) {
	
	
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




function nextPage(current, next) {
 
	$('#p'+current).animate({
	marginLeft: "-200vw"
	}, 1000);
	$('#p'+next).animate({
	marginLeft: "0"
	}, 1000);

 

	if (next == 2) {	 
	 
		var wifi_ip_string = null;
		var ethernet_ip_string = null;

		getflytstats("check-state");

	}
	
	if (next == 4) {	 
	 
		var wifi_ip_string = null;
		var ethernet_ip_string = null;

		getflytstats("check-state");

	}
 
 
}
 
 

function previousPage(current, previous) {

	$('#p'+current).animate({
	marginLeft: "100vw"
	}, 1000);
	$('#p'+previous).animate({
	marginLeft: "0vw"
	}, 1000);
 
 
}







 



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












function skipSetup() {
 
	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'skip-setup' },
	success: function(response) {
		window.location.href = '/';
	}
	});
 
}
function completeSetup() {
 
	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'complete-setup' },
	success: function(response) {
		window.location.href = '/';
	}
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
						cockpitMap.setView([resParse.latitude,resParse.longitude], 16);
				}


			} else {
				
				
				markerGroupG.clearLayers();
								
				
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
