$(document).ready(function () {
	
	fetchGNSS();
	
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
		
		var objDevice = JSON.parse(obj.device);
		
		if (document.getElementById('driver').innerHTML == "") {
			document.getElementById('driver').innerHTML = objDevice.driver;
		}
		if (document.getElementById('path').innerHTML == "") {
			document.getElementById('path').innerHTML = objDevice.path;
		}
		
		


	},
	error: function(err) {

		console.log(err); 

	}



	})

}