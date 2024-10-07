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
		










var chartCPU;
var chartRAM;
var chartStorage;
var chartTemperature;


(async function() {
 const data = [
 { element: "CPU % Used", count: 0 },
 { element: "CPU % Free", count: 0 },
 ];

 chartCPU = new Chart(
 document.getElementById('cpu'),
 {
 type: 'doughnut',
 data: {
 labels: data.map(row => row.element),
 datasets: [
 {
 data: data.map(row => row.count),
 backgroundColor: [
 '#6ba7ff',
 'rgba(255, 255, 255, 0.05)'
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
 { element: "RAM Used MB", count: 0 },
 { element: "RAM Free MB", count: 0 },
 ];

 chartRAM = new Chart(
 document.getElementById('ram'),
 {
 type: 'doughnut',
 data: {
 labels: data.map(row => row.element),
 datasets: [
 {
 data: data.map(row => row.count),
 backgroundColor: [
 '#6ba7ff',
 'rgba(255, 255, 255, 0.05)'
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
 { element: "Storage Used GB", count: 0 },
 { element: "Storage Free GB", count: 0 },
 ];

 chartStorage = new Chart(
 document.getElementById('storage'),
 {
 type: 'doughnut',
 data: {
 labels: data.map(row => row.element),
 datasets: [
 {
 data: data.map(row => row.count),
 backgroundColor: [
 '#6ba7ff',
 'rgba(255, 255, 255, 0.05)'
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
 { element: "Temperature", count: 0 },
 { element: "Reserved", count: 0 },
 ];

 chartTemperature = new Chart(
 document.getElementById('temperature'),
 {
 type: 'doughnut',
 data: {
 labels: data.map(row => row.element),
 datasets: [
 {
 data: data.map(row => row.count),
 backgroundColor: [
 '#6ba7ff',
 'rgba(255, 255, 255, 0.05)'
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







function fetch() {
 //console.log("Fetching");
 

 $.ajax({
 url: "/flyt-data/flyt-stats.json",
 type: "GET",
 success: function(result) {

 console.log(result);

 chartCPU.data.datasets[0].data[0] = result.cpu_usage_percent;
 chartCPU.data.datasets[0].data[1] = (100 - (result.cpu_usage_percent/1));
 chartCPU.update();
 
 
 chartRAM.data.datasets[0].data[0] = ((result.memory_total/1000) - (result.memory_available/1000)).toFixed(0);
 chartRAM.data.datasets[0].data[1] = (result.memory_available/1000).toFixed(0);
 chartRAM.update();


 chartStorage.data.datasets[0].data[0] = (result['storage_usage_used_/dev/sdd']/1000000).toFixed(0);
 chartStorage.data.datasets[0].data[1] = (result['storage_usage_free_/dev/sdd']/1000000).toFixed(0);
 chartStorage.update();
 
 
 chartTemperature.data.datasets[0].data[0] = result.temperature;
 chartTemperature.data.datasets[0].data[1] = (100 - (result.temperature/1));
 chartTemperature.update();
 
 document.getElementById('uptime').innerHTML = 'Up for ' + secondsToDHM(result.boot_timestamp);
 
 
 
 
 
 
 


 },
 error: function(err)
 {

 console.log(err); 

 }
 
 
 
 })
 
}

fetch();
const intervalFetch = setInterval(function() {
 fetch();
}, 10000);


