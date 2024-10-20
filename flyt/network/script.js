function fn10sec() {
    getflytstats();
}
fn10sec();
setInterval(fn10sec, 10*1000);

function fn60sec() {
    fetchBandwidth();
}
fn60sec();
setInterval(fn10sec, 60*1000);








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
			//console.log(obj);
			
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









function fetchBandwidth() {
	

  	$.ajax({
	url: 'ajax.php',
	type: 'POST',
	cache: false,
	data: { request: 'get-flyt-bandwidth' },
    success: function(result) {

		console.log(result);
		result = JSON.parse(result);
		console.log(result);

		
		// Network
		

		networkEth0Ar = [];
		networkEth1Ar = [];
		networkEnd0Ar = [];
		networkWlan0Ar = [];
		networkWlan1Ar = [];
		


		const takeRight = (arr, n = 1) => n === 0 ? [] : arr.slice(-n);
		


		let downloadMonth = 0;
		let uploadMonth = 0;
		let downloadLastMonth = 0;
		let uploadLastMonth = 0;
		
			
		
		for (intface in result.interfaces) {
			
			const lastFive = takeRight(result.interfaces[intface].traffic.fiveminute, 24);
			
			const lastMonth = takeRight(result.interfaces[intface].traffic.month, 2);


			for (mon in lastMonth) {
				
				if (lastMonth.length == 1) {
					
						downloadMonth += lastMonth[mon].rx;
						uploadMonth += lastMonth[mon].tx;
						
				}
				if (lastMonth.length == 2) {
					
					if (mon == 0) {
						
						downloadLastMonth += lastMonth[mon].rx;
						uploadLastMonth += lastMonth[mon].tx;
					
					}
					if (mon == 1) {
			
						downloadMonth += lastMonth[mon].rx;
						uploadMonth += lastMonth[mon].tx;
						
					}
					
				
				}
				
			}
			


			for (fiveminute in lastFive) {
				
				
				var rx = null;
				if (lastFive[fiveminute].rx > 1000) {
					rx = ((lastFive[fiveminute].rx / 1000)/300).toFixed(2);
				}
				var tx = null;
				if (lastFive[fiveminute].tx > 1000) {
					tx = ((lastFive[fiveminute].tx / 1000)/300).toFixed(2);
				}
				
				
				if (result.interfaces[intface].name == "eth0") {
					networkEth0Ar.push({ "element": lastFive[fiveminute].timestamp, "rxcount": rx, "txcount": tx });
				}
				if (result.interfaces[intface].name == "eth1") {
					networkEth1Ar.push({ "element": lastFive[fiveminute].timestamp, "rxcount": rx, "txcount": tx });
				}
				if (result.interfaces[intface].name == "end0") {
					networkEth0Ar.push({ "element": lastFive[fiveminute].timestamp, "rxcount": rx, "txcount": tx });
				}
				if (result.interfaces[intface].name == "wlan0") {
					networkWlan0Ar.push({ "element": lastFive[fiveminute].timestamp, "rxcount": rx, "txcount": tx });
				}
				if (result.interfaces[intface].name == "wlan1") {
					networkWlan1Ar.push({ "element": lastFive[fiveminute].timestamp, "rxcount": rx, "txcount": tx });
				}
			  
			}
		
		}


		
		//var bandwidthString = "Download Last Month "++"MB &emsp; Upload Last Month "++"MB &emsp;&emsp; "+"Download This Month "++"MB &emsp; Upload This Month "++"MB";
		//document.getElementById("bandwidthMonth").innerHTML = bandwidthString;
		//console.log(bandwidthString);
		
		
		

				
		const xValues = ["Last Month Upload", "Last Month Download", "This Month Upload", "This Month Download"];
		const yValues = [(uploadLastMonth / 1000000).toFixed(), (downloadLastMonth / 1000000).toFixed(), (uploadMonth / 1000000).toFixed(), (downloadMonth / 1000000).toFixed()];
		const zValues = [0, 0, 130.78, 425];


		new Chart("myChart", {
		type: "bar",
		data: {
		labels: xValues,
		datasets: [{
		label: 'Data Use In GB',
		data: yValues,
		borderColor: "#fbfbfb40",
		backgroundColor: "#fbfbfb30",
		borderWidth: 2,
		borderRadius: 8,
		},
		{
		label: 'Predicted Use In GB',
		data: zValues,
		borderColor: "#fbfbfb20",
		backgroundColor: "#fbfbfb10",
		borderWidth: 2,
		borderRadius: 8,
		}]
		},
		options: {

		responsive: true,
		scales: {
		x: {
		stacked: true,
		},
		y: {
		stacked: true,
		}
		},

		plugins: {
		legend: {
		display: false
		}
		}
		}
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
/*
		
		chartNetwork.data.labels = networkEth0Ar.map(row => timeConverterHMS(row.element));
		
		chartNetwork.data.datasets[0].data = networkEth0Ar.map(row => row.rxcount);
		chartNetwork.data.datasets[1].data = networkEth0Ar.map(row => row.txcount);
		chartNetwork.data.datasets[2].data = networkEth1Ar.map(row => row.rxcount);
		chartNetwork.data.datasets[3].data = networkEth1Ar.map(row => row.txcount);
		
		chartNetwork.data.datasets[4].data = networkWlan0Ar.map(row => row.rxcount);
		chartNetwork.data.datasets[5].data = networkWlan0Ar.map(row => row.txcount);
		chartNetwork.data.datasets[6].data = networkWlan1Ar.map(row => row.rxcount);
		chartNetwork.data.datasets[7].data = networkWlan1Ar.map(row => row.txcount);
				
		chartNetwork.update();
		
		
		
		
		
		
*//*
		
		
		
		
		// Bandwidth
		
		
		
				
		bandwidthEth0Ar = [];
		bandwidthEth1Ar = [];
		bandwidthWlan0Ar = [];
		bandwidthWlan1Ar = [];
		
		
		for (intface in result.interfaces) {
			

			for (day in result.interfaces[intface].traffic.day) {
				
				var rx = null;
				if (result.interfaces[intface].traffic.day[day].rx > 1000000) {
					rx = (result.interfaces[intface].traffic.day[day].rx / 1000000).toFixed();
				}
				var tx = null;
				if (result.interfaces[intface].traffic.day[day].tx > 1000000) {
					tx = (result.interfaces[intface].traffic.day[day].tx / 1000000).toFixed();
				}
				
				
				if (result.interfaces[intface].name == "eth0") {
					bandwidthEth0Ar.push({ "element": result.interfaces[intface].traffic.day[day].timestamp, "rxcount": rx, "txcount": tx });
					//console.log(result.interfaces[intface].traffic.day[day]);
				}
				if (result.interfaces[intface].name == "eth1") {
					bandwidthEth1Ar.push({ "element": result.interfaces[intface].traffic.day[day].timestamp, "rxcount": rx, "txcount": tx });
					//console.log(result.interfaces[intface].traffic.day[day]);
				}
				if (result.interfaces[intface].name == "end0") {
					bandwidthEth0Ar.push({ "element": result.interfaces[intface].traffic.day[day].timestamp, "rxcount": rx, "txcount": tx });
					//console.log(result.interfaces[intface].traffic.day[day]);
				}
				if (result.interfaces[intface].name == "wlan0") {
					bandwidthWlan0Ar.push({ "element": result.interfaces[intface].traffic.day[day].timestamp, "rxcount": rx, "txcount": tx });
					//console.log(result.interfaces[intface].traffic.day[day]);
				}
				if (result.interfaces[intface].name == "wlan1") {
					bandwidthWlan1Ar.push({ "element": result.interfaces[intface].traffic.day[day].timestamp, "rxcount": rx, "txcount": tx });
					//console.log(result.interfaces[intface].traffic.day[day]);
				}
			  
			}
		
		}


		
		chartBandwidth.data.labels = bandwidthEth0Ar.map(row => timeConverter(row.element));
		
		chartBandwidth.data.datasets[0].data = bandwidthEth0Ar.map(row => row.rxcount);
		chartBandwidth.data.datasets[1].data = bandwidthEth0Ar.map(row => row.txcount);
		chartBandwidth.data.datasets[2].data = bandwidthEth1Ar.map(row => row.rxcount);
		chartBandwidth.data.datasets[3].data = bandwidthEth1Ar.map(row => row.txcount);
		
		chartBandwidth.data.datasets[4].data = bandwidthWlan0Ar.map(row => row.rxcount);
		chartBandwidth.data.datasets[5].data = bandwidthWlan0Ar.map(row => row.txcount);
		chartBandwidth.data.datasets[6].data = bandwidthWlan1Ar.map(row => row.rxcount);
		chartBandwidth.data.datasets[7].data = bandwidthWlan1Ar.map(row => row.txcount);
				
		chartBandwidth.update();
		
		
		
	*/	
		
		
		

	
		

	},
	error: function(err)
    {

		console.log(err);		

    }
	
  
  
	})
	
}
































