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
	
	
	
	
});




/*
location + side panel set location
*/




function fn10sec() {
    getflytstats();
}
fn10sec();
setInterval(fn10sec, 10*1000);




function copyStat(get) {
		
		$("#notification-clipboard").attr("style", "display:initial");
		
		var range = document.createRange();
		range.selectNode(get);
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand("copy");
		window.getSelection().removeAllRanges();// to deselect

		$("#notification-clipboard").fadeOut(400);
}
		




var wifi_ip_string = null;
var ethernet_ip_string = null;

function getflytstats() {
	
	$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'get-flyt-stats' },
		success: function(response) {
			
			//console.log(response);
			var obj = JSON.parse(response);
			
			
			// IP address
			

			

			if (obj.network_address_eth0) {
				var updated_ethernet_ip_string = obj.network_address_eth0;
			} else {
				var updated_ethernet_ip_string = null;
			}
			if (obj.network_address_wlan0) {
				var updated_wifi_ip_string = obj.network_address_wlan0;
			} else {
				var updated_wifi_ip_string = null;
			}
			
			if (ethernet_ip_string !== updated_ethernet_ip_string) {
				ethernet_ip_string = updated_ethernet_ip_string;
				$('#ethernet-panel-text').hide().html(ethernet_ip_string).fadeIn();
				$('#panel-ethernet').addClass('active');
			}
			if (wifi_ip_string !== updated_wifi_ip_string) {
				wifi_ip_string = updated_wifi_ip_string;
				$('#wifi-panel-text').hide().html(wifi_ip_string).fadeIn();
				$('#panel-wifi').addClass('active');
			}
			

			
			
			
			
			
		},
		error: function(err) {
			
			console.log(err);
			
		}
	});
	
};

