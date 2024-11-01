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
