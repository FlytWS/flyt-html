function fn10sec() {
    getflytstats();
}
function fn30sec() {
    fetchBandwidth();
}



window.addEventListener('load', (event) => {
	
	fn10sec();
	setInterval(fn10sec, 10*1000);
	fn30sec();
	setInterval(fn30sec, 30*1000);

});





var dataEth0RXAr = [];
var dataEth0TXAr = [];
var dataEth0RX = [];
var dataEth0TX = [];

var dataEth1RXAr = [];
var dataEth1TXAr = [];
var dataEth1RX = [];
var dataEth1TX = [];

var dataEnd0RXAr = [];
var dataEnd0TXAr = [];
var dataEnd0RX = [];
var dataEnd0TX = [];

var dataWlan0RXAr = [];
var dataWlan0TXAr = [];
var dataWlan0RX = [];
var dataWlan0TX = [];

var dataWlan1RXAr = [];
var dataWlan1TXAr = [];
var dataWlan1RX = [];
var dataWlan1TX = [];




var bandwidthEth0Ar = [];
var bandwidthEth1Ar = [];
var bandwidthWlan0Ar = [];
var bandwidthWlan1Ar = [];







(async function() {


  chartNetwork = new Chart(
    document.getElementById('bandwidthLive'),
    {
      type: 'line',
      data: {
        labels: dataEth0RX.map(row => row.element),
        datasets: [
          {
			label: 'Ethernet 0 Download Kb/s',
            data: dataEth0RX.map(row => row.count),
			backgroundColor: [
                '#6ba7ff'
			],
			borderWidth: 2,
			borderColor: '#6ba7ff',
          },
		  {
			label: 'Ethernet 0 Upload Kb/s',
            data: dataEth0TX.map(row => row.count),
			backgroundColor: [
                '#6ba7ff99'
			],
			borderWidth: 2,
			borderColor: '#6ba7ff99',
          },
		  {
			label: 'Ethernet 1 Download Kb/s',
            data: dataEth1RX.map(row => row.count),
			backgroundColor: [
                '#FF936B'
			],
			borderWidth: 2,
			borderColor: '#FF936B',
          },
		  {
			label: 'Ethernet 1 Upload Kb/s',
            data: dataEth1TX.map(row => row.count),
			backgroundColor: [
                '#FF936B99'
			],
			borderWidth: 2,
			borderColor: '#FF936B99',
          },
		  {
			label: 'WiFi 0 Download Kb/s',
            data: dataWlan0RX.map(row => row.count),
			backgroundColor: [
                '#936BFF'
			],
			borderWidth: 2,
			borderColor: '#936BFF',
          },
		  {
			label: 'WiFi 0 Upload Kb/s',
            data: dataWlan0TX.map(row => row.count),
			backgroundColor: [
                '#936BFF99'
			],
			borderWidth: 2,
			borderColor: '#936BFF99',
          },
		  {
			label: 'WiFi 1 Download Kb/s',
            data: dataWlan1RX.map(row => row.count),
			backgroundColor: [
                '#6BFF93'
			],
			borderWidth: 2,
			borderColor: '#6BFF93',
          },
		  {
			label: 'WiFi 1 Upload Kb/s',
            data: dataWlan1TX.map(row => row.count),
			backgroundColor: [
                '#6BFF9399'
			],
			borderWidth: 2,
			borderColor: '#6BFF9399',
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


  chartBandwidth = new Chart(
    document.getElementById('consumptionLive'),
    {
      type: 'line',
      data: {
        labels: bandwidthEth0Ar.map(row => row.element),
        datasets: [
          {
			label: 'Ethernet 0 Download MB',
            data: bandwidthEth0Ar.map(row => row.rxcount),
			backgroundColor: [
                '#6ba7ff'
			],
			borderWidth: 2,
			borderColor: '#6ba7ff',
          },
		  {
			label: 'Ethernet 0 Upload MB',
            data: bandwidthEth0Ar.map(row => row.txcount),
			backgroundColor: [
                '#6ba7ff99'
			],
			borderWidth: 2,
			borderColor: '#6ba7ff99',
          },
		  {
			label: 'Ethernet 1 Download MB',
            data: bandwidthEth1Ar.map(row => row.rxcount),
			backgroundColor: [
                '#FF936B'
			],
			borderWidth: 2,
			borderColor: '#FF936B',
          },
		  {
			label: 'Ethernet 1 Upload MB',
            data: bandwidthEth1Ar.map(row => row.txcount),
			backgroundColor: [
                '#FF936B99'
			],
			borderWidth: 2,
			borderColor: '#FF936B99',
          },
		  {
			label: 'WiFi 0 Download MB',
            data: bandwidthWlan0Ar.map(row => row.rxcount),
			backgroundColor: [
                '#936BFF'
			],
			borderWidth: 2,
			borderColor: '#936BFF',
          },
		  {
			label: 'WiFi 0 Upload MB',
            data: bandwidthWlan0Ar.map(row => row.txcount),
			backgroundColor: [
                '#936BFF99'
			],
			borderWidth: 2,
			borderColor: '#936BFF99',
          },
		  {
			label: 'WiFi 1 Download MB',
            data: bandwidthWlan1Ar.map(row => row.rxcount),
			backgroundColor: [
                '#6BFF93'
			],
			borderWidth: 2,
			borderColor: '#6BFF93',
          },
		  {
			label: 'WiFi 1 Upload MB',
            data: bandwidthWlan1Ar.map(row => row.txcount),
			backgroundColor: [
                '#6BFF9399'
			],
			borderWidth: 2,
			borderColor: '#6BFF9399',
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
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600*24));
	var h = Math.floor(seconds % (3600*24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);

	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
	return dDisplay + hDisplay + mDisplay;
}
function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	//var hour = a.getHours();
	//var min = a.getMinutes();
	//var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year;
	return time;
}
function timeConverterHMS(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var hour = a.getHours();
	var min = a.getMinutes();
	var time = hour + ' : ' + min;
	return time;
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





function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}



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
			
			const lastFive = takeRight(result.interfaces[intface].traffic.fiveminute, 13);
			
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
		
		
		// Number of days in the month
		var dim = daysInThisMonth()
		// Number of days left in the month
		var drim = daysInThisMonth() - (new Date()).getDate();
		// Number of days past in the month
		var dpim = dim - drim;
		
		var uploadedLastMonthGB = (uploadLastMonth / 1000000000).toFixed(2);
		var downloadedLastMonthGB = (downloadLastMonth / 1000000000).toFixed(2);
		var uploadedThisMonthGB = (uploadMonth / 1000000000).toFixed(2);
		var downloadedThisMonthGB = (downloadMonth / 1000000000).toFixed(2);
		
		var predictedUploadThisMonthGB = (((uploadedThisMonthGB / dpim) * dim) - uploadedThisMonthGB).toFixed(2);
		var predictedDownloadThisMonthGB = (((downloadedThisMonthGB / dpim) * dim) - downloadedThisMonthGB).toFixed(2);
		
		console.log(uploadedLastMonthGB);
		console.log(downloadedLastMonthGB);
		console.log(uploadedThisMonthGB);
		console.log(downloadedThisMonthGB);
		console.log(predictedUploadThisMonthGB);
		console.log(predictedDownloadThisMonthGB);


		const xValues = ["Last Month Upload", "Last Month Download", "This Month Upload", "This Month Download"];
		const yValues = [uploadedLastMonthGB, downloadedLastMonthGB, uploadedThisMonthGB, downloadedThisMonthGB];
		const zValues = [0, 0, predictedUploadThisMonthGB, predictedDownloadThisMonthGB];


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
		label: 'Predicted Additional Use In GB',
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
		
		
		
		
		
		
		
		
		
		
		
		
		// Bandwidth Live

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
		
		
		
		
		

		
		
		// Consumption Live
		
		
				
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
		
		
		
	
		
		
		

	
		

	},
	error: function(err)
    {

		console.log(err);		

    }
	
  
  
	})
	
}













































