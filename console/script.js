$(document).ready(function () {

    $('.slideout-menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var slideoutMenuWidth = $('.slideout-menu').width();
    	
    	// toggle open class
    	slideoutMenu.toggleClass("open");
    	
    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	slideoutMenu.animate({
		    	left: "-100vw"
	    	}, 250);	
    	}
    });
	
	
	$('.slideleft-menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideleftMenu = $('.slideleft-menu');
    	var slideleftMenuWidth = $('.slideleft-menu').width();
    	
    	// toggle open class
    	slideleftMenu.toggleClass("open");
    	
    	// slide menu
    	if (slideleftMenu.hasClass("open")) {
	    	slideleftMenu.animate({
		    	right: "0px"
	    	});	
    	} else {
	    	slideleftMenu.animate({
		    	right: "-100vw"
	    	}, 250);	
    	}
    });
	
	
	
	
	getWingbitsName();
    getLocation();
	getNews();
	
	
});












//let cockpitMap = L.map('cMap', { zoomControl: false,    scrollWheelZoom: false }).setView([51.5072,0.1276], 18);
let cockpitMap = L.map('cMap', { zoomControl: false,    scrollWheelZoom: false });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	className: 'cockpit-tiles'
}).addTo(cockpitMap);

let markers = L.layerGroup().addTo(cockpitMap);
cockpitMap.dragging.disable();






				var markerFrom = L.circleMarker([53.902561,-2.775290], { color: "#6ba7ff", radius: 20 });
				var from = markerFrom.getLatLng();

				cockpitMap.addLayer(markerFrom);

				markerFrom.bindPopup('Radio ' + (from).toString());
				cockpitMap.addLayer(markerFrom);		
								
				
				cockpitMap.setView([53.902561,-2.775290], 14);












function registerLocation() {
	
	window.location.replace('/flyt/location');
	
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
		
		document.getElementById('broadcast-events').innerHTML = htmlNews;
		
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






function getLocation() {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-location' },
		success: function(response) {
			
			try {
			var resParse = JSON.parse(response);
			
			if (resParse.lat) {
				
				var markerFrom = L.circleMarker([resParse.lat,resParse.lon], { color: "#6ba7ff20", fillColor: 'transparent', radius: 160 });
				var from = markerFrom.getLatLng();

				cockpitMap.addLayer(markerFrom);

				var markerFrom = L.circleMarker([resParse.lat,resParse.lon], { color: "#6ba7ff20", fillColor: 'transparent', radius: 320 });
				var from = markerFrom.getLatLng();

				cockpitMap.addLayer(markerFrom);

				var markerFrom = L.circleMarker([resParse.lat,resParse.lon], { color: "#6ba7ff20", fillColor: 'transparent', radius: 640 });
				var from = markerFrom.getLatLng();

				cockpitMap.addLayer(markerFrom);

				var markerFrom = L.circleMarker([resParse.lat,resParse.lon], { color: "#6ba7ff20", fillColor: 'transparent', radius: 1280 });
				var from = markerFrom.getLatLng();

				cockpitMap.addLayer(markerFrom);

				var markerFrom = L.circleMarker([resParse.lat,resParse.lon], { color: "#6ba7ff", radius: 20 });
				var from = markerFrom.getLatLng();

				markerFrom.bindPopup('Radio ' + (from).toString());
				cockpitMap.addLayer(markerFrom);
								
								
				
				cockpitMap.setView([resParse.lat,resParse.lon], 14);
				$('#cMapRegister').fadeOut();
			
			} else {

				$('#cMapRegister').html('Register your Flyt Node location').fadeIn();

			}
			} catch (err) {
				
				$('#cMapRegister').html('Flight Deck Not Found<br><br>Click To Set Antenna Location').fadeIn();

			}				
			
			
		},
		error: function(err) {
			//Unable to save
			console.log(err);
			
				$('#cMapRegister').html('Flight Deck Not Found').fadeIn();			
			
		}
	});
	
};