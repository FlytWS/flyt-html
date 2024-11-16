// Aircraft Category Array
 
var craftCategoryArray = [];

craftCategoryArray[undefined] = "--"

craftCategoryArray["A0"] = "--"
craftCategoryArray["A1"] = "Light Airplane"
craftCategoryArray["A2"] = "Small Airplane"
craftCategoryArray["A3"] = "Large Airplane"
craftCategoryArray["A4"] = "High Vortex Large Airplane"
craftCategoryArray["A5"] = "Heavy Airplane"
craftCategoryArray["A6"] = "High Performance Airplane"
craftCategoryArray["A7"] = "Rotorcraft"

craftCategoryArray["B0"] = "--"
craftCategoryArray["B1"] = "Glider / Sailplane"
craftCategoryArray["B2"] = "Lighter-Than-Air (Airship or Balloon)"
craftCategoryArray["B3"] = "Parachutist / Skydiver"
craftCategoryArray["B4"] = "Ultralight / Hang-Glider / Paraglider"
craftCategoryArray["B5"] = "Reserved"
craftCategoryArray["B6"] = "Unmanned Aerial Vehicle"
craftCategoryArray["B7"] = "Space / Trans-Atmospheric Vehicle"

craftCategoryArray["C0"] = "Possible Military"
craftCategoryArray["C1"] = "Surface Vehicle – Emergency Vehicle"
craftCategoryArray["C2"] = "Surface Vehicle – Service Vehicle"
craftCategoryArray["C3"] = "Point Obstacle"
craftCategoryArray["C4"] = "Cluster Obstacle"
craftCategoryArray["C5"] = "Line Obstacle"
craftCategoryArray["C6"] = "Reserved"
craftCategoryArray["C7"] = "Reserved"




// Aircraft Size Array

var craftSizeArray = [];

craftSizeArray[undefined] = "2rem"

craftSizeArray["A0"] = "2rem"
craftSizeArray["A1"] = "1.6rem"
craftSizeArray["A2"] = "2rem"
craftSizeArray["A3"] = "2.4rem"
craftSizeArray["A4"] = "2.4rem"
craftSizeArray["A5"] = "2.8rem"
craftSizeArray["A6"] = "2.4rem"
craftSizeArray["A7"] = "2rem"

craftSizeArray["B0"] = "2rem"
craftSizeArray["B1"] = "1.6rem"
craftSizeArray["B2"] = "1.4rem"
craftSizeArray["B3"] = "1rem"
craftSizeArray["B4"] = "1.4rem"
craftSizeArray["B5"] = "2rem"
craftSizeArray["B6"] = "1rem"
craftSizeArray["B7"] = "4rem"

craftSizeArray["C0"] = "2rem"
craftSizeArray["C1"] = "1rem"
craftSizeArray["C2"] = "1rem"
craftSizeArray["C3"] = "1rem"
craftSizeArray["C4"] = "1rem"
craftSizeArray["C5"] = "1rem"
craftSizeArray["C6"] = "1rem"
craftSizeArray["C7"] = "1rem"




// Variables 

var selectedAircraft = "";
var theMarker = {};
var ADSBDBAircraftAr = [];

var acArray;
let listAcActive;
let listAcInactive;
let listDiMin;
let listDiMax;
let listAlMin;
let listAlMax;
let listRsMin;
let listRsMax;		
let distance;

const zeroPad = (num, places) => String(num).padStart(places, '0')

const consoleArray = [];

let consoleRecording = 0;

let displayModeFlag = 0;

var markerFrom;
var from;

var maxAlt = 40000;


// Document Ready

$(document).ready(function(){
	
	
	$('.altKey').hover(function(){ 
		$('#display-control-altitude-0').hide();
		$('#display-control-altitude-25').hide();
    	$('#display-control-altitude-50').hide();
		$('#display-control-altitude-75').hide();
		$('#display-control-altitude-100').hide();
	}, function(){
		$('#display-control-altitude-0').show();
		$('#display-control-altitude-25').show();
    	$('#display-control-altitude-50').show();
		$('#display-control-altitude-75').show();
		$('#display-control-altitude-100').show();
    });
	$('#display-control-altitude-reference').hover(function(){ 
		$('#display-control-altitude-0').hide();
		$('#display-control-altitude-25').hide();
    	$('#display-control-altitude-50').hide();
		$('#display-control-altitude-75').hide();
		$('#display-control-altitude-100').hide();
	}, function(){
		$('#display-control-altitude-0').show();
		$('#display-control-altitude-25').show();
    	$('#display-control-altitude-50').show();
		$('#display-control-altitude-75').show();
		$('#display-control-altitude-100').show();
    });
	
	
	
});







// Force zIndex of Leaflet

(function(global){
  var MarkerMixin = {
    _updateZIndex: function (offset) {
      this._icon.style.zIndex = this.options.forceZIndex ? (this.options.forceZIndex + (this.options.zIndexOffset || 0)) : (this._zIndex + offset);
    },
    setForceZIndex: function(forceZIndex) {
      this.options.forceZIndex = forceZIndex ? forceZIndex : null;
    }
  };
  if (global) global.include(MarkerMixin);
})(L.Marker);



// Set Up Leaflet

// Retrieve Zoom
let mapZoomLevel = localStorage.theZoom;
if (isNaN(mapZoomLevel)) {
	console.log("No Zoom Level");
	mapZoomLevel = 12;  //default
} else {
	console.log("Zoom Level Is "+mapZoomLevel);
};

// Retrieve LatLon
var mapCoordinatesLat = localStorage.theCoorLat;
var mapCoordinatesLng = localStorage.theCoorLng;
if (mapCoordinatesLat === undefined) {
	console.log("No Coordinates");
	mapCoordinatesLat = 0;  //default
	mapCoordinatesLng = 0;  //default
} else {
	console.log("Coordinates Are "+mapCoordinatesLat);
};
	
// === Leaflet Map Setup ===

let mapMap = L.map('mMap', {zoomControl: false}).setView([mapCoordinatesLat, mapCoordinatesLng], mapZoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	className: 'map-tiles'
}).addTo(mapMap);

let markers = L.layerGroup().addTo(mapMap);
var markerGroupG = L.layerGroup().addTo(mapMap);

mapMap.on('moveend', function(e) {
   localStorage.theZoom = mapMap.getZoom();
   var mapCenter = mapMap.getCenter();;
   localStorage.theCoorLat = mapCenter.lat
   localStorage.theCoorLng = mapCenter.lng;
});


	






// Set Display Mode - Dark / Light

function setDisplayMode() {
	
	console.log(localStorage.displayModeFlag);
	
	if (localStorage.displayModeFlag == 1) {
		displayModeFlag = 1;
		//$('.map-tiles').css({"filter" : "brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7)"});
		$('.map-tiles').css({"filter" : "invert(1.2) sepia(1) hue-rotate(190deg)  opacity(0.3)"});
		$('.master-page-title header').css({"color": "#fbfbfb"});
		$('.master-page-title header svg').css({"stroke": "#fbfbfb"});

	} else {
		displayModeFlag = 0;
		$('.map-tiles').css({"filter" : "none"});
		$('.master-page-title header').css({"color": "#222431"});
		$('.master-page-title header svg').css({"stroke": "#222431"});
		
	}

}
function displayMode() {

	if (displayModeFlag == 0) {
		
		displayModeFlag = 1;
		localStorage.displayModeFlag = 1;

	} else {
		
		displayModeFlag = 0;
		localStorage.displayModeFlag = 0;
	}	

	setDisplayMode();	
	
}






function clickDisplayMarker(value) {

	displayMarker(acArray[value]);
	
}


function displayMarker(currentValue) {
	
	
	$('#display-control').animate({bottom: '-3.2rem'});
	$('#display-control-altitude-container').animate({bottom: '0rem'});	
	
	
	selectedAircraft = currentValue.hex;
	
	consoleWindowWrite("Displaying aircraft "+selectedAircraft);
	
	


	// Define Properties
	var squawk = null;
	if (currentValue.squawk == null) {
		squawk = "UNK";
	} else {
		squawk = currentValue.squawk;
	}
	var altitude = null;
	if (currentValue.alt_baro == null) {
		altitude = "UNK";
	} else {
		altitude = numberWithCommas((currentValue.alt_baro).toFixed(0));
	}
	var altitudenav = null;
	if (currentValue.nav_altitude_mcp == null) {
		altitudenav = "UNK";
	} else {
		altitudenav = numberWithCommas((currentValue.nav_altitude_mcp).toFixed(0));
	}
	var taspeed = null;
	if (currentValue.tas == null) {
		taspeed = "UNK";
	} else {
		taspeed = numberWithCommas(currentValue.tas);
	}
	var gspeed = null;
	if (currentValue.gs == null) {
		gspeed = "UNK";
	} else {
		gspeed = numberWithCommas(currentValue.gs);
	}
	var iaspeed = null;
	if (currentValue.ias == null) {
		iaspeed = "UNK";
	} else {
		iaspeed = numberWithCommas(currentValue.ias);
	}
	var mach = null;
	if (currentValue.mach == null) {
		mach = "UNK";
	} else {
		mach = currentValue.mach;
	}			
	var rssi = null;
	if (currentValue.rssi == null) {
		rssi = "UNK";
	} else {
		rssi = currentValue.rssi;
	}
	
	var flight = null;
	if (currentValue.flight == null) {
		flight = "UNK";
	} else {
		flight = currentValue.flight;
	}
	
	var theading = null;
	if (currentValue.true_heading == null) {
		theading = "UNK";
	} else {
		theading = currentValue.true_heading;
	}

	var nheading = null;
	if (currentValue.nav_heading == null) {
		nheading = "UNK";
	} else {
		nheading = currentValue.nav_heading;
	}
	
	var lat = null;
	if (currentValue.lat == null) {
		lat = "UNK";
	} else {
		lat = currentValue.lat;
	}
	
	var lon = null;
	if (currentValue.lon == null) {
		lon = "UNK";
	} else {
		lon = currentValue.lon;
	}
			
			
	var windspeed = null;
	if (currentValue.ws == null) {
		windspeed = "UNK";
	} else {
		windspeed = currentValue.ws;
	}
					
	var temperature = null;
	if (currentValue.tat == null) {
		temperature = "UNK";
	} else {
		temperature = currentValue.tat;
	}
	
	
	
	
	
	
	
	
	
	
	// Highlight Craft On Map
	
	$('.mapMarker').css({ 'backdrop-filter' : 'none'});	
	try {
		
		if (displayModeFlag == 1) {
			document.getElementById("mapMarker-"+selectedAircraft).style.backdropFilter = "contrast(0) opacity(0.3) brightness(1.5)";
		} else {
			document.getElementById("mapMarker-"+selectedAircraft).style.backdropFilter = "contrast(0) opacity(0.2)";
		}	
		document.getElementById("mapMarker-"+selectedAircraft).style.borderRadius = "100%";
		
	} catch (err) {
		
		console.log(err);
		
	}
	

	//NULL Records
	
	document.getElementById('dc_aty').innerHTML = "";
	document.getElementById('dc_reg').innerHTML = "";
	document.getElementById('dc_row').innerHTML = "";
	document.getElementById('dc_rco').innerHTML = "";
	document.getElementById('dc_mos').innerHTML = "";

	document.getElementById('panelCraftImage').innerHTML = '<svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
	document.getElementById('display-craft-header-image-credits').innerHTML = '';





	
	// Set ADSB Flyt Node Data
	try {
		
		document.getElementById('dc_aca').innerHTML = currentValue.category + " " + craftCategoryArray[currentValue.category];
		document.getElementById('dc_hex').innerHTML = currentValue.hex;
		
		document.getElementById('dc_bal').innerHTML = altitude + " ft";
		document.getElementById('dc_nal').innerHTML = altitudenav + " ft";
		document.getElementById('dc_gsp').innerHTML = gspeed + " kts";
		document.getElementById('dc_tas').innerHTML = taspeed + " kts";
		document.getElementById('dc_ias').innerHTML = iaspeed + " kts";
		document.getElementById('dc_mac').innerHTML = mach;
		
		document.getElementById('dc_fli').innerHTML = flight;
		document.getElementById('dc_the').innerHTML = theading;
		document.getElementById('dc_nhe').innerHTML = nheading;
		document.getElementById('dc_lat').innerHTML = lat;
		document.getElementById('dc_lon').innerHTML = lon;
		
		document.getElementById('dc_win').innerHTML = windspeed + " kts";
		document.getElementById('dc_tem').innerHTML = temperature + " f";
		
		document.getElementById('dc_sou').innerHTML = currentValue.type;
		document.getElementById('dc_mes').innerHTML = currentValue.messages;
		document.getElementById('dc_rss').innerHTML = rssi;
		document.getElementById('dc_lse').innerHTML = currentValue.seen + " s";
		document.getElementById('dc_squ').innerHTML = squawk;
					
					
					
					
		
	} catch (err) {
		
		console.log(err);
		
	}
	
	
	// Set State Indicator
	
	try {
		
		var curAlt = currentValue.alt_baro;
		var AltPC = curAlt / maxAlt;
		var hueRotate = (100 * AltPC);
		if (hueRotate > 100) {
			hueRotate = 100;
		}
		
		var hueRotateState = (270 * AltPC);
		if (hueRotateState > 270) {
			hueRotateState = 270;
		}
		
		if (currentValue.seen > 5) {
			document.getElementById('display-craft-subsection-title-state').style.filter = 'grayscale(1)';
		} else {
			document.getElementById('display-craft-subsection-title-state').style.filter = 'hue-rotate('+ hueRotateState +'deg)';
		}
	
	} catch (err) {
		
		console.log(err);
		
	}
	
	

	// Display Panel

	openSettings("map-craft");
	
	
	
	
	// Attempt Lookup & Conversion Of Registration 
	
	var regPlan = lookup(selectedAircraft);
	if (regPlan != null) {
		document.getElementById('dc_reg').innerHTML = regPlan;
	}
	
	
	// Fetch Aircraft
	fetchADSBDBAircraftArray(selectedAircraft);
	
	
	// Fetch Image
	fetchImage(selectedAircraft);
	

	// Set Altitude Bar Reference
	
	document.getElementById('display-control-altitude-reference').style.marginLeft = hueRotate+"%";
	document.getElementById('display-control-altitude-reference').setAttribute('data-tooltip', numberWithCommas(curAlt.toFixed(0)) + " ft");
	
	
}




function fetchImage(idRo) {
	
	$.ajax({
	url: "https://api.planespotters.net/pub/photos/hex/"+idRo,
	type: "GET",
	indexValue: idRo,
	success: function(result) {

		try {
			var jsonImage = result.photos[0].thumbnail_large.src;
			$('#panelCraftImage').html('<img class="animated fadeIn" src="'+jsonImage+'" width="100%" height="100%" style="object-fit: cover;" >');
			$('#display-craft-header-image-credits').html(result.photos[0].photographer);
		} catch(err) {
			console.log(err);
		}
		
	}
	});
  
}






function fetchADSBDBAircraftArray(idRo) {
	
	var result = ADSBDBAircraftAr[idRo];
	try {
		document.getElementById('dc_aty').innerHTML = result.response.aircraft.manufacturer + " " + result.response.aircraft.type + " " + result.response.aircraft.icao_type;
		document.getElementById('dc_reg').innerHTML = document.getElementById('dc_reg').innerHTML + " (" + result.response.aircraft.registration + ")";
		document.getElementById('dc_row').innerHTML = result.response.aircraft.registered_owner;
		document.getElementById('dc_rco').innerHTML = result.response.aircraft.registered_owner_country_name;
		document.getElementById('dc_mos').innerHTML = result.response.aircraft.mode_s;
	} catch(err) {
		console.log(err);
	}

}




function fetchADSBDBAircraft(idRo) {
		
	$.ajax({
    url: "https://api.adsbdb.com/v0/aircraft/"+idRo,
    type: "GET",
	indexValue: idRo,
    error: function(err)
    {
		
		ADSBDBAircraftAr[idRo] = "Not Found";

    },
    success: function(result)
    {

		if (result) {
			ADSBDBAircraftAr[idRo] = result;
		} else {
			ADSBDBAircraftAr[idRo] = "Not Found";
		};
		
	}
	});


  
}





function mapCraftClose() {
	

	
	document.getElementById('display-control-altitude-reference').style.marginLeft = "0%";
	document.getElementById('display-control-altitude-reference').setAttribute('data-tooltip', "");
	
	selectedAircraft = "";
	
	$("#map-craft").animate({left: '-100vw'});
	
	if ($('#map-list-container').css('left') === '0px') {
		$('#map-list').animate({marginLeft: '0rem'});
	};
	
	
	$('#display-control-altitude-container').animate({bottom: '-3.2rem'});
	$('#display-control').animate({bottom: '0rem'});
	


}





function openSettings(divid) {
	
	console.log(divid);


	
	if (divid == "map-craft") {
		
		if ($('#map-list-container').css('left') === '0px') {
			$("#map-list").animate({marginLeft: '22rem'});
		};
	
	}
	
	if (divid == "map-stats") {
		
		if ($('#map-list-container').css('left') === '0px') {
			$("#map-list-container").animate({left: '-100vw'});
		};
		if ($('#map-craft').css('left') === '0px') {
			$("#map-craft").animate({left: '-100vw'});
		};
		if ($('#map-console').css('left') === '0px') {
			$("#map-console").animate({left: '-100vw'});
		};
	
	}
	
	if (divid == "map-console") {
		
		if ($('#map-list-container').css('left') === '0px') {
			$("#map-list-container").animate({left: '-100vw'});
		};
		if ($('#map-craft').css('left') === '0px') {
			$("#map-craft").animate({left: '-100vw'});
		};
		if ($('#map-stats').css('left') === '0px') {
			$("#map-stats").animate({left: '-100vw'});
		};
	
	}
	
	if (divid == "map-list-container") {
		
		if ($('#map-console').css('left') === '0px') {
			$("#map-console").animate({left: '-100vw'});
		};
		if ($('#map-stats').css('left') === '0px') {
			$("#map-stats").animate({left: '-100vw'});
		};
		
		if ($('#map-craft').offset().left == "0") {
			$('#map-list').animate({marginLeft: '22rem'});
		} else {
			$('#map-list').animate({marginLeft: '0rem'});
		}
	
	}
	
	
	if (divid !== 'map-craft' && $("#"+divid).css('left') === '0px') {
		// close if open
		$("#"+divid).animate({left: '-100vw'});
	} else {
		//open
		$("#"+divid).animate({left: '0'});		
	}


	
	
}
function closeSettings(divid) {
	
	console.log(divid);
		
	$("#"+divid).animate({left: '-100vw'});
	
}






function consoleWindow() {
	
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();

	let consoleArrayLength = consoleArray.length;
	
	let consoleTimeout = 1000;
	if (isFinite(1000 / consoleArray.length)) {
		consoleTimeout = 1000 / consoleArray.length;
		$("#console-window").prepend("<pre>"+zeroPad(hour, 2)+":"+zeroPad(minutes, 2)+":"+zeroPad(seconds, 2)+" - "+consoleArray[0]+"</pre>");
		consoleArray.shift();
	};
	
	setTimeout(function() {
		consoleWindow();
	}, consoleTimeout);

}

function consoleWindowWrite(message) {
	
	if (consoleRecording == 1) {
		consoleArray.push(message);
	};
	
}

function startConsoleRecording() {
	
	consoleRecording = 1;
	consoleWindow();
	document.getElementById('startConsoleRecording').remove();
	
}



function getDistance(to) {    
    //console.log("Radio To Plane - " + ((from.distanceTo(to))/1000).toFixed(0) + ' km');
	return ((from.distanceTo(to))/1000).toFixed(0);
}





function setLocation() {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-location' },
		success: function(response) {
			
			console.log(response);
			
			try {
				
				var resParse = JSON.parse(response);
				console.log(resParse);
				
				if (resParse.location.latitude) {
					


					markerFrom = L.circleMarker([resParse.location.latitude,resParse.location.longitude], { color: "#6ba7ff", radius: 12 });
					from = markerFrom.getLatLng();

					markerFrom.bindPopup(resParse.name + '<br>' + (from).toString());
					mapMap.addLayer(markerFrom);
				
				}
				
			} catch (err) {
				
				console.log(err);

			}
			
			
		},
		error: function(err) {

			console.log(err);
			
		}
	});
	
};



function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


function setAltitudeKey() {
	
	for (var i=0; i < 271; i++){
		
		var maxAltDiv = maxAlt / 270
		var curAltRef = i;


		var altitude = maxAltDiv * i;
		
		document.getElementById('display-control-altitude').innerHTML += '<div class="altKey" id="altKey' + i + '" data-tooltip="' + numberWithCommas(altitude.toFixed(0)) + ' ft" style="background-color:#6ba7ff; filter: hue-rotate(' + i + 'deg); flex-grow: 1;"></div>';
	}
	
}




function showStats() {
	
	if (document.getElementById("stat_container").style.display === "none") {
		
		document.getElementById("statsChev").innerHTML = '<svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>';
		$('#stat_container').slideDown("fast");
		
	} else {
			
		document.getElementById("statsChev").innerHTML = '<svg class="standard-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>';
		$('#stat_container').slideUp("fast");
	}
	
}









































function fetchReADSBCraft() {


    let request = jQuery.ajax({ url: '/data/aircraft.json', cache: false, dataType: 'json' });
    request.done(function(data) {		
		

		var resParse = data;

		acArray = resParse.aircraft;
		//console.log(acArray);

		markers.clearLayers();		
		
		$( "#display-craft-table-body" ).html('');
		
		
		document.getElementById('display-control-menu-item-list-quantity').innerHTML = "("+acArray.length+")";
		
		listAcActive = 0;
		listAcInactive = 0;
		listDiMin = 999999;
		listDiMax = 0;
		listAlMin = 999999;
		listAlMax = 0;
		listRsMin = -999999;
		listRsMax = 999999;				
		
		
		




		const newArray = acArray.map((currentValue, index, array)=>{

			
			
			// Define Properties
			var squawk = null;
			if (currentValue.squawk == null) {
				squawk = "UNK";
			} else {
				squawk = currentValue.squawk;
			}
			var altitude = null;
			if (currentValue.alt_baro == null) {
				altitude = "UNK";
			} else {
				altitude = numberWithCommas((currentValue.alt_baro).toFixed(0));
			}
			var altitudenav = null;
			if (currentValue.nav_altitude_mcp == null) {
				altitudenav = "UNK";
			} else {
				altitudenav = numberWithCommas((currentValue.nav_altitude_mcp).toFixed(0));
			}
			var taspeed = null;
			if (currentValue.tas == null) {
				taspeed = "UNK";
			} else {
				taspeed = numberWithCommas(currentValue.tas);
			}
			var gspeed = null;
			if (currentValue.gs == null) {
				gspeed = "UNK";
			} else {
				gspeed = numberWithCommas(currentValue.gs);
			}
			var iaspeed = null;
			if (currentValue.ias == null) {
				iaspeed = "UNK";
			} else {
				iaspeed = numberWithCommas(currentValue.ias);
			}
			var mach = null;
			if (currentValue.mach == null) {
				mach = "UNK";
			} else {
				mach = currentValue.mach;
			}			
			var rssi = null;
			if (currentValue.rssi == null) {
				rssi = "UNK";
			} else {
				rssi = currentValue.rssi;
			}
			
			var flight = null;
			if (currentValue.flight == null) {
				flight = "UNK";
			} else {
				flight = currentValue.flight;
			}
			
			var theading = null;
			if (currentValue.true_heading == null) {
				theading = "UNK";
			} else {
				theading = currentValue.true_heading;
			}

			var nheading = null;
			if (currentValue.nav_heading == null) {
				nheading = "UNK";
			} else {
				nheading = currentValue.nav_heading;
			}
			
			var lat = null;
			if (currentValue.lat == null) {
				lat = "UNK";
			} else {
				lat = currentValue.lat;
			}
			
			var lon = null;
			if (currentValue.lon == null) {
				lon = "UNK";
			} else {
				lon = currentValue.lon;
			}
					
					
			var windspeed = null;
			if (currentValue.ws == null) {
				windspeed = "UNK";
			} else {
				windspeed = currentValue.ws;
			}
							
			var temperature = null;
			if (currentValue.tat == null) {
				temperature = "UNK";
			} else {
				temperature = currentValue.tat;
			}
					
					
					
					
			
			

			
			
			// Set Hue On 270
			
			try {

				var curAlt = currentValue.alt_baro;
				var AltPC = curAlt / maxAlt;
				var hueRotate = (270 * AltPC);
				if (hueRotate > 270) {
					hueRotate = 270;
				}
				
			} catch(err) {
				
				hueRotate = 0;
				console.log(err);
				
			}
				
			
			
			

			
			// Act On Selected Aircraft
			if (currentValue.hex == selectedAircraft) {

				// Set Parameters In Map-Craft 
				try {
					
					document.getElementById('dc_bal').innerHTML = altitude + " ft";
					document.getElementById('dc_nal').innerHTML = altitudenav + " ft";
					document.getElementById('dc_gsp').innerHTML = gspeed + " kts";
					document.getElementById('dc_tas').innerHTML = taspeed + " kts";
					document.getElementById('dc_ias').innerHTML = iaspeed + " kts";
					document.getElementById('dc_mac').innerHTML = mach;
					
					document.getElementById('dc_fli').innerHTML = flight;
					document.getElementById('dc_the').innerHTML = theading;
					document.getElementById('dc_nhe').innerHTML = nheading;
					document.getElementById('dc_lat').innerHTML = lat;
					document.getElementById('dc_lon').innerHTML = lon;
					
					document.getElementById('dc_win').innerHTML = windspeed + " kts";
					document.getElementById('dc_tem').innerHTML = temperature + " f";
					
					document.getElementById('dc_sou').innerHTML = currentValue.type;
					document.getElementById('dc_mes').innerHTML = currentValue.messages;
					document.getElementById('dc_rss').innerHTML = rssi;
					document.getElementById('dc_lse').innerHTML = currentValue.seen + " s";
					document.getElementById('dc_squ').innerHTML = squawk;
					
				} catch(err) {
				
					console.log(err);
					
				}
				
				
					
				// Hue On 100 & Set Altitude Reference
				
				try {

					var hueRotateSlider = (100 * AltPC);
					if (hueRotateSlider > 100) {
						hueRotateSlider = 100;
					}
					
					document.getElementById('display-control-altitude-reference').style.marginLeft = hueRotateSlider+"%";
					document.getElementById('display-control-altitude-reference').setAttribute('data-tooltip', numberWithCommas(curAlt.toFixed(0)) + " ft");
					
				} catch(err) {
					
					console.log(err);
					
				}	

				
				
				// Set State In Map-Craft
				
				try {
					
					if (currentValue.seen > 5) {
						document.getElementById('display-craft-subsection-title-state').style.filter = 'grayscale(1)';
					} else {
						document.getElementById('display-craft-subsection-title-state').style.filter = 'hue-rotate('+ hueRotate +'deg)';
					}
									
				} catch(err) {
					
					console.log(err);
					
				}

				
				
			}
				
				
				
				
				
				
				
				
				
			// Start Work On Map
			
			
			// Set Marker filter
			
			var filter = 'filter: hue-rotate('+ hueRotate +'deg) drop-shadow(0 0 6px rgb(0 0 0 / 0.3));';
			
			try {
				
				if (currentValue.seen > 5) {
					
					var filter = 'filter: grayscale(1) drop-shadow(0 0 6px rgb(0 0 0 / 0.3));';
					
				}
				
			} catch (err) {
				
				console.log(err);
				
			}
				
				
			

		
			// Add Markers To Map
			
			
			try {
				
				if (currentValue.lat) {
					theMarker = L.marker([currentValue.lat, currentValue.lon], {
					icon: new L.DivIcon({
					className: 'infoPanel',
					html: '<img id="mapMarker-'+currentValue.hex+'" class="mapMarker" style="'+filter+' transform: rotate(' + currentValue.track + 'deg); width:'+ craftSizeArray[currentValue.category] +';" src="/global/image/' + currentValue.category + '.svg"/>' 
					}),
					forceZIndex:currentValue.alt_baro
					}).on('click', function(e) { displayMarker(currentValue); });

					markers.addLayer(theMarker).addTo(mapMap);
				}
			
			} catch (err) {
				
				console.log(err);
				
			}
			
			
			// Highlight Selected AirCraft After Repaint
			
			try {
				
				if (currentValue.hex == selectedAircraft) {

					if (displayModeFlag == 1) {
						
						document.getElementById("mapMarker-"+selectedAircraft).style.backdropFilter = "contrast(0) opacity(0.3) brightness(1.5)";
						document.getElementById("mapMarker-"+selectedAircraft).style.borderRadius = "100%";
					
					} else {
						
						document.getElementById("mapMarker-"+selectedAircraft).style.backdropFilter = "contrast(0) opacity(0.2)";
						document.getElementById("mapMarker-"+selectedAircraft).style.borderRadius = "100%";
					
					};

				};


			} catch (err) {
				
				console.log(err);
				
			}
			
			
			

			// Registration Lookup
			
			try {
			
				var regPlan = lookup(currentValue.hex);
				if (regPlan != null) {
					var registration = regPlan
				} else {
					var registration = "";
				}
			
			} catch(err) {
				
				console.log(err);
				
			}
			
				
				
			// Calculate Distance From Radio
			
			try {
				
				if (currentValue.lat) {
					var latlng = new L.latLng(currentValue.lat,currentValue.lon);
					distance = parseInt(getDistance(latlng));
				} else {
					distance = "UNK";
				}
				
			} catch (err) {
				
				distance = "";
				console.log(err);
				
			}
			
			
			

			
			
			
			
			// Append Map-List with current aircraft
			
			try {
				
				$( "#display-craft-table-body" ).append( '<tr onclick="clickDisplayMarker(\''+index+'\')"><td class="tg-0lax"><span class="display-list-state" id="display-list-state-'+currentValue.hex+'">O</span></td>	<td class="tg-0lax"><span class="display-list-country" id="display-list-country-'+currentValue.hex+'"></span></td>	<td class="tg-0lax" style="cursor:pointer;">'+currentValue.hex+'</td>	<td class="tg-0lax"><span class="display-list-registration" id="display-list-registration-'+currentValue.hex+'">'+registration+'</span></td>	<td class="tg-0lax display-list-type"><span id="display-list-type-'+currentValue.hex+'"></span></td>	<td class="tg-0lax">'+squawk+'</td>	<td class="tg-0lax">'+altitude+' ft</td>	<td class="tg-0lax">'+taspeed +' kts</td>	<td class="tg-0lax">'+distance+' km</td>	<td class="tg-0lax">'+rssi+'</td></tr>' );
	
			} catch (err) {
				
				console.log(err);
				
			}



			// Fetching Additional Aircraft Information From ADSB
			
			try {

				if (ADSBDBAircraftAr[currentValue.hex]) {
					
					//console.log("Fetching From ADSBDBAircraftAr");
					
				} else {
					
					//console.log("Fetching From ADSBDB API");
					fetchADSBDBAircraft(currentValue.hex);
					
				}
				
			} catch (err) {
				
				console.log(err);
				
			}
				
				
				

			
			
			
			
			// Try to set variable with ADSBDBAircraftAr record
			try {
				
				var resultFetchAR = ADSBDBAircraftAr[currentValue.hex];
				
			} catch (err) {
				
				console.log(err);
				
			}
				
				
			
			
			// If ADSBDBAircraftAr Record Is Found, Populate Map-List With Additional Information
			if(resultFetchAR !== undefined) {
				// Country
				try {
					
					document.getElementById('display-list-country-'+currentValue.hex).innerHTML = "<img title='" + resultFetchAR.response.aircraft.registered_owner_country_iso_name + "' src='/global/image/flags/4x3/"+(resultFetchAR.response.aircraft.registered_owner_country_iso_name).toLowerCase()+".png' style='width:1rem;' />";

				} catch (err) {
					
					console.log("Unable To Find List Div Country");
					console.log(err);
				
				}
				// Manufacturer
				try {
					
					document.getElementById('display-list-type-'+currentValue.hex).innerHTML = resultFetchAR.response.aircraft.manufacturer + " " + resultFetchAR.response.aircraft.type + " " + resultFetchAR.response.aircraft.icao_type;

				} catch (err) {
					
					console.log("Unable To Find List Div Manufacturer");
					console.log(err);
				
				}
				// Registration
				try {
					
					document.getElementById('display-list-registration-'+currentValue.hex).innerHTML = document.getElementById('display-list-registration-'+currentValue.hex).innerHTML + " (" + resultFetchAR.response.aircraft.registration + ")";
					
				} catch (err) {
					
					console.log("Unable To Find List Div Registration");
					console.log(err);
				
				}
			}
			
			
			
				

			// Set Map-List Aircraft State
			try {
					
				if (currentValue.seen > 5) {
					document.getElementById('display-list-state-'+currentValue.hex).style.filter = 'grayscale(1)';
					listAcInactive++;
				} else {
					document.getElementById('display-list-state-'+currentValue.hex).style.filter = 'hue-rotate('+ hueRotate +'deg)';
					listAcActive++;
				}
			
			} catch (err) {
				
				console.log(err);
				
			}
				

			

			// Stats
			
			// Closest Aircraft
			
			try {
				
				if (distance < listDiMin) {
					listDiMin = distance;
				};
				
			} catch(err) {
				
				console.log(err);
				
			}	
			
			
			// Furthest Aircraft
			
			try {
				
				if (distance > listDiMax) {
					listDiMax = distance;
				};
				
			} catch(err) {
				
				console.log(err);
				
			}
			
			
			// Minimum Altitude
			
			try {
				
				if (parseInt(currentValue.alt_baro) < listAlMin) {
					listAlMin = parseInt(currentValue.alt_baro);
				};
				
			} catch(err) {
				
				console.log(err);
				
			}
			
			
			
			
			// Maximum Altitude
			
			try {
				
				if (parseInt(currentValue.alt_baro) > listAlMax) {
					listAlMax = parseInt(currentValue.alt_baro);
				};
				
			} catch(err) {
				
				console.log(err);
				
			}	
			
			
			// Minimum RSSI
			
			try {
							
				if (parseInt(currentValue.rssi) > listRsMin) {
					listRsMin = parseInt(currentValue.rssi);
				};
				
			} catch(err) {
				
				console.log(err);
				
			}
			
			
			// Maximum RSSI
			
			try {
				
				if (parseInt(currentValue.rssi) < listRsMax) {
					listRsMax = parseInt(currentValue.rssi);
				};

			} catch(err) {
				
				console.log(err);
				
			}
			
			
			
			
			
			
			
			


			
			
		})
		

		
		
	});

	
	
  return Promise.delay(100)
  .then(function() {
		
		//console.log("Fetched");

			
		try {
			
			document.getElementById('list-ac-active').innerHTML = listAcActive;
			document.getElementById('list-ac-inactive').innerHTML = listAcInactive;
			
			consoleWindowWrite("Witnessed " + listAcActive + " active aircraft");
			consoleWindowWrite("Lost " + listAcInactive + " aircraft");

			chartStatsAircraft.data.datasets[0].data[0] = listAcInactive;
			chartStatsAircraft.data.datasets[0].data[1] = listAcActive;			
			chartStatsAircraft.update();

			
		} catch(err) {
			
			console.log(err);
			
		}
		

		
		
		
		
		
		
		try {
			
			document.getElementById('list-di-min').innerHTML = listDiMin + "<span style='font-size:1rem; margin-left:0.4rem;'>km</span>";
			document.getElementById('list-di-max').innerHTML = numberWithCommas(listDiMax) + "<span style='font-size:1rem; margin-left:0.4rem;'>km</span>";
			
			consoleWindowWrite(numberWithCommas(listDiMin) + "km to the nearest aircraft");
			consoleWindowWrite(numberWithCommas(listDiMax) + "km to the farthest aircraft");
			
			chartStatsDistance.data.datasets[0].data[0] = listDiMin;
			chartStatsDistance.data.datasets[0].data[1] = listDiMax;
			chartStatsDistance.update();

		
		
		} catch(err) {
			
			console.log(err);
			
		}
		

		
		try {
			
			document.getElementById('list-al-min').innerHTML = numberWithCommas(listAlMin) + "<span style='font-size:1rem; margin-left:0.4rem;'>ft</span>";
			document.getElementById('list-al-max').innerHTML = numberWithCommas(listAlMax) + "<span style='font-size:1rem; margin-left:0.4rem;'>ft</span>";
			
			consoleWindowWrite("Lowest aircraft witnessed is at " + numberWithCommas(listAlMin) + "ft");
			consoleWindowWrite("Highest aircraft witnessed is at " + numberWithCommas(listAlMax) + "ft");
			
			
			chartStatsAltitude.data.datasets[0].data[0] = listAlMin;
			chartStatsAltitude.data.datasets[0].data[1] = listAlMax;
			chartStatsAltitude.update();



		
		} catch(err) {
			
			console.log(err);
			
		}
		

		
		try {
			
			document.getElementById('list-rs-min').innerHTML = listRsMin + "<span style='font-size:1rem; margin-left:0.4rem;'>dBm</span>";
			document.getElementById('list-rs-max').innerHTML = listRsMax + "<span style='font-size:1rem; margin-left:0.4rem;'>dBm</span>";
			
			consoleWindowWrite("Lowest RSSI to aircraft is " + listRsMin + "dBm");
			consoleWindowWrite("Highest RSSI to aircraft is " + listRsMax + "dBm");
			
			
			chartStatsRSSI.data.datasets[0].data[0] = listRsMin;
			chartStatsRSSI.data.datasets[0].data[1] = listRsMax;
			chartStatsRSSI.update();



		
		} catch(err) {
			
			console.log(err);
			
		}
		

	
	
  });
}










	
let polygon;

function drawOutlineJson() {
	

    let request = jQuery.ajax({ url: '/data/outline.json',
        cache: false,
        dataType: 'json' });
    request.done(function(data) {
		
			//RangeAltitude1  = new Array();
			//RangeAltitude2  = new Array();
			//RangeAltitude3  = new Array();
			//RangeAltitude4  = new Array();
			RangeAltitude9  = new Array();
		
			for (const element of data.actualRange.last24h.points) {
				
				//console.log(element[2]);
				/*
				if (element[2] < 10000) {
					RangeAltitude1.push(element);
				}
				if (element[2] < 20000) {
					RangeAltitude2.push(element);
				}
				if (element[2] < 30000) {
					RangeAltitude3.push(element);
				}
				if (element[2] < 40000) {
					RangeAltitude4.push(element);
				}
				*/
				if (element[2] < 99999) {
					RangeAltitude9.push(element);
				}
				
			};
		


			try {
			
			//mapMap.removeLayer(polygon1);
			//mapMap.removeLayer(polygon2);
			//mapMap.removeLayer(polygon3);
			//mapMap.removeLayer(polygon4);
			mapMap.removeLayer(polygon9);
			
			} catch (err) {
				
			}			
			
			/*
			polygon1 = L.polygon(RangeAltitude1, {interactive: false}).addTo(mapMap);
			polygon1.setStyle({fillColor: '#00000000', color: '#e484f6', weight: 0.5});
			
			polygon2 = L.polygon(RangeAltitude2, {interactive: false}).addTo(mapMap);
			polygon2.setStyle({fillColor: '#00000000', color: '#ff8582', weight: 0.5});
			
			polygon3 = L.polygon(RangeAltitude3, {interactive: false}).addTo(mapMap);
			polygon3.setStyle({fillColor: '#00000000', color: '#a9a934', weight: 0.5});
			
			
			polygon4 = L.polygon(RangeAltitude4, {interactive: false}).addTo(mapMap);
			polygon4.setStyle({fillColor: '#00000000', color: '#42c26b', weight: 0.5});
			*/
			
			polygon9 = L.polygon(RangeAltitude9, {interactive: false}).addTo(mapMap);
			polygon9.setStyle({fillColor: '#00000000', color: '#FFFFFF', weight: 0.5});
		

		
		

    });

    request.fail(function() {
        // no rings available, do nothing
    });
}








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






function zoom(direction) {
	
	if (direction == "in") {
		mapMap.zoomIn();    // Zooms in by one level
	}
	if (direction == "out") {
		mapMap.zoomOut();   // Zooms out by one level
	}
	
}





setDisplayMode();


















// Stats


(async function() {
  const data = [
    { element: "Inactive", count: 0 },
    { element: "Active", count: 0 },
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
        },
		scales: {
		  r: {
			ticks: {
			  display: false // Remove vertical numbers
			},
			grid: {
			  display: true, // Removes the circulair lines
			  backdropColor: 'rgb(251, 251, 251)'
			}
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




























window.addEventListener('load', (event) => {
	
	
	setLocation();
	getGNSSLocation();
	fetchReADSBCraft();
	drawOutlineJson();
	setAltitudeKey();
	
	
	
	const intervalFetch = setInterval(function() {
		consoleWindowWrite("Scanning For Aircraft");
		fetchReADSBCraft();
		drawOutlineJson();
	}, 1000);
});