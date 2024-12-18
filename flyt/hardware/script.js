window.addEventListener('load', (event) => {
	
	fetchModel();
	fetchStats1();
	fetchStats2();
	

	setInterval(fetchStats1, 30000);
	setInterval(fetchStats2, 5000);

	
});




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










function fetchModel() {


	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-model' },
	success: function(result) {

		console.log(result);

		if (document.getElementById('model').innerHTML == "") {
			document.getElementById('model').innerHTML = result;
		}


	},
	error: function(err) {
		console.log(err); 
	}


	})
 
}







function fetchStats2() {

	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-stats-2' },
	success: function(result) {


		console.log(result);
		var obj = JSON.parse(result);

		chartCPU.data.datasets[0].data[0] = (obj.cpu_usage_percent).toFixed();
		chartCPU.data.datasets[0].data[1] = (100 - (obj.cpu_usage_percent/1).toFixed());
		chartCPU.update();


		chartRAM.data.datasets[0].data[0] = (obj.memory_used/1000000).toFixed();
		chartRAM.data.datasets[0].data[1] = (obj.memory_available/1000000).toFixed();
		chartRAM.update();



		document.getElementById('uptime').innerHTML = 'Up for ' + secondsToDHM(obj.boot_timestamp);


	},
	error: function(err) {

		console.log(err); 

	}


	})

}







function fetchStats1() {

	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-stats-1' },
	success: function(result) {


		console.log(result);
		var obj = JSON.parse(result);

		if (obj.temperature_current_cpu_thermal > 85) {
		 var max_temperature_current_cpu_thermal = (obj.temperature_current_cpu_thermal).toFixed();
		} else {
		 var max_temperature_current_cpu_thermal = 85;
		}

		chartTemperature.data.datasets[0].data[0] = (obj.temperature_current_cpu_thermal/1).toFixed();
		chartTemperature.data.datasets[0].data[1] = ((max_temperature_current_cpu_thermal/1) - (obj.temperature_current_cpu_thermal/1).toFixed());
		chartTemperature.update();



		const keyStoragePartition = Object.keys(obj).filter(key => key.startsWith('storage_partition_device_'));
		console.log(keyStoragePartition);
		console.log(obj[keyStoragePartition]);
		var primaryStore = obj[keyStoragePartition];

		chartStorage.data.datasets[0].data[0] = (obj['storage_usage_used_'+primaryStore]/1000000000).toFixed(2);
		chartStorage.data.datasets[0].data[1] = (obj['storage_usage_free_'+primaryStore]/1000000000).toFixed(2);
		chartStorage.update();


	},
	error: function(err) {

		console.log(err); 

	}



	})

}