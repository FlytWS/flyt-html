$(document).ready(function () {
	
	fetchGNSS();
	
});



(async function() {
  const data = [
    { element: "Satellite", count: 0 }
  ];

  chartSatellites = new Chart(
    document.getElementById('satellites'),
    {
      type: 'bubble',
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
		
		
		if (document.getElementById('driver').innerHTML == "") {
			document.getElementById('driver').innerHTML = obj.device.driver;
		}
		if (document.getElementById('path').innerHTML == "") {
			document.getElementById('path').innerHTML = obj.device.path;
		}
		
		
		
		console.log(obj.satellites / 1);

		
		messages = [
			{ element: "Satellite", count: (obj.satellites / 1) }
		];
		
		chartSatellites.data.labels = messages.map(row => row.element);
		chartSatellites.data.datasets[0].data = messages.map(row => row.count);		
	
		chartSatellites.update();
		
		
		
		


	},
	error: function(err) {

		console.log(err); 

	}



	})

}