$(document).ready(function () {
	
	
	getWingbitsName();
	getMap();
    getLocation();
	getGNSSLocation("initial");
	
	setInterval(getGNSSLocation("update"), 10000);



	$(".large-panel-button").on('click', function(event){
			$(this).addClass("active").siblings().removeClass("active");
			console.log(this.id);
			
			if (this.id == "panel-ethernet") {
				$("#network-title").html("");
				$("#network-stats").html("");
				getflytstats("ethernet");
			}
			if (this.id == "panel-wifi") {
				$("#network-title").html('<div style="display:flex; width: 17rem;   justify-content: space-around;"><div id="wifiback" onclick="WiFiBack()" style="cursor:pointer; height:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div><div>WiFi</div><div id="wifirescan" onclick="WiFiBack()" style="cursor:pointer; height:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></div></div>');
				$("#network-stats").html('<div id="lets-go-div" style="text-align:center;"><div class="lets-go-div-ssid" onclick="setWiFi(&quot;278BB0&quot;);">278BB0</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;EE WiFi&quot;);">EE WiFi</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;ESP_48BD6B&quot;);">ESP_48BD6B</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;GLM&quot;);">GLM</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;GLMG&quot;);">GLMG</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;SKY7JUZM&quot;);">SKY7JUZM</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;VM1459509&quot;);">Hidden Network</div></div>');
				getflytstats("wifi");
			}
	});

		
	
	
});




function setWiFi(ssid) {
	$("#wifiback").css('visibility', 'visible');
	$("#wifirescan").css('visibility', 'hidden');
	$("#network-stats").html('<div><div id="wifiSSID" class="lets-go" style=""><input id="wifiSSIDInput" type="text" placeholder="WiFi SSID" style="text-align:center;" value='+ssid+'></div><div id="wifiPassphrase" class="lets-go" style=""><input id="wifiPassphraseInput" placeholder="WiFi Passphrase" style="text-align:center;"></div></div>');
	$("#network-stats").append('<header id="network-wifi-connect" onclick="WiFiConnectBtn()"><div style=" text-align:center; width:100%; color:#fbfbfbCC;"><div style="line-height: 1rem;">Connect</div></div></header>');
}

function WiFiConnectBtn() {
	if ($('#wifiSSIDInput').val().length < 1) {
		$( "#wifiSSID" ).effect( "shake" );
	}
	if ($('#wifiPassphraseInput').val().length < 8) {
		$( "#wifiPassphrase" ).effect( "shake" );
	}
}

function WiFiBack() {
	$('#network-wifi').click();
	//$('#wifirescan').css({"transform": "rotate("+now+"deg)"});
	
	$('#wifirescan').stop().animate(
	  {rotation: 360},
	  {
		duration: 500,
		step: function(now, fx) {
		  $(this).css({"transform": "rotate("+now+"deg)"});
		}
	  }
	);

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
					
					$('#network-state').hide().html('You are connected to WiFi on IP address '+obj.network_address_wlan0).fadeIn();
					
				} else {
					
					$('#network-state').hide().html('Connect to your WiFi').fadeIn();
					
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
 console.log("Pre-Checks NP");
 document.getElementById('precheck_status_network').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 document.getElementById('precheck_status_wingbits').innerHTML = '';
 document.getElementById('precheck_status_internet').innerHTML = '';
 document.getElementById('precheck_status_cloud').innerHTML = '';
 document.getElementById('precheck_status_network_description').innerHTML = 'Setting up the network parameters and getting your Flyt Node connected';
 document.getElementById('precheck_status_wingbits_description').innerHTML = 'Registering your Wingbits Antenna ID with your Flyt Node';
 document.getElementById('precheck_status_internet_description').innerHTML = 'Let\'s check you have access to the Flyt and Wingbit\'s cloud services';
 document.getElementById('precheck_status_cloud_description').innerHTML = 'Registering your Node to the Flyt Cloud';
 setTimeout(preChecks,2000);
 } 
 
 
}
 
 

function previousPage(current, previous) {
 
 $('#p'+current).animate({
 marginLeft: "100vw"
 }, 1000);
 $('#p'+previous).animate({
 marginLeft: "0vw"
 }, 1000);
 

 $("#l"+current).removeClass('slider-changed'); 
 
 if (previous == 1) {
 $('#skip-setup').show();
 } else {
 $('#skip-setup').hide();
 }
 
 if (previous == 4) {
 console.log("Pre-Checks PP");
 document.getElementById('precheck_status_network').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 document.getElementById('precheck_status_wingbits').innerHTML = '';
 document.getElementById('precheck_status_internet').innerHTML = '';
 document.getElementById('precheck_status_cloud').innerHTML = '';
 document.getElementById('precheck_status_network_description').innerHTML = 'Setting up the network parameters and getting your Flyt Node connected';
 document.getElementById('precheck_status_wingbits_description').innerHTML = 'Registering your Wingbits Antenna ID with your Flyt Node';
 document.getElementById('precheck_status_internet_description').innerHTML = 'Let\'s check you have access to the Flyt and Wingbit\'s cloud services';
 document.getElementById('precheck_status_cloud_description').innerHTML = 'Registering your Node to the Flyt Cloud';
 setTimeout(preChecks,2000);
 } 
 
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
	
	
});












function skipSetup() {
 
	$.ajax({
	type: 'POST',
	cache: false,
	data: { request: 'skip-setup' },
	success: function(response) {
		window.location.href = '/flyt';
	}
	});
 
}
function completeSetup() {
 
	$.ajax({
	type: 'POST',
	cache: false,
	data: { request: 'complete-setup' },
	success: function(response) {
		window.location.href = '/flyt';
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
				
				var markerFrom = L.circleMarker([resParse.latitude,resParse.longitude], { color: "#fdfd96", radius: 6 });
				var from = markerFrom.getLatLng();

				markerFrom.bindPopup('GNSS ' + (from).toString());

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









function wifiScan() {

	$.ajax({
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

		if (value.length > 0) {
			console.log(value);
			//ssidContent += "<div class='lets-go-div-ssid' onclick='setWiFi(\""+value+"\");'>"+value+"</div>";
		}

		});
		//document.getElementById('lets-go-div').innerHTML = ssidContent;


	}
	});
 
}