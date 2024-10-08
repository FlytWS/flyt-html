

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


function navigateExternal(url) {
	
	window.open(url, '_blank');
	
}
function navigate(url) {
	
	window.location.replace(url);
	
}
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



function showStats() {
	
	if (document.getElementById("stat_container").style.display === "none") {
		
		document.getElementById("statsChev").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>';
		$('#stat_container').slideDown("fast");
		
	} else {
			
		document.getElementById("statsChev").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>';
		$('#stat_container').slideUp("fast");
	}
	
}