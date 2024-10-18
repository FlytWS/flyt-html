(async function() {
  const data = [
    { element: "Gain dB", count: 0 },
    { element: "Reserve", count: 0 },
  ];

  chartGain = new Chart(
    document.getElementById('gain'),
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
    { element: "Signal", count: 0 },
    { element: "", count: 0 },
  ];

  chartSignal = new Chart(
    document.getElementById('signal'),
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
    { element: "Noise", count: 0 },
    { element: "", count: 0 },
  ];

  chartNoise = new Chart(
    document.getElementById('noise'),
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
    { element: "Connected", count: 0 },
    { element: "Disconnected", count: 0 },
  ];

  chartState = new Chart(
    document.getElementById('state'),
    {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.element),
        datasets: [
          {
            data: data.map(row => row.count),
			backgroundColor: [
                '#6ba7ff',
				'#FF936B'
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





var dataadsbicaoAR = [];
var datamodesAR = [];
var dataadsbicao = [];
var datamodes = [];

(async function() {


  chartAircraft = new Chart(
    document.getElementById('aircraft'),
    {
      type: 'line',
      data: {
        labels: dataadsbicao.map(row => row.element),
        datasets: [
          {
			label: 'ADS-B',
            data: dataadsbicao.map(row => row.count),
			backgroundColor: [
                '#6ba7ff'
			],
			borderWidth: 3,
			borderColor: '#6ba7ff',
          },
		  {
			label: 'Mode-S',
            data: datamodes.map(row => row.count),
			backgroundColor: [
                '#936BFF'
			],
			borderWidth: 3,
			borderColor: '#936BFF',
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






var messagesAR = [];
var messagesvalidAR = [];
var messages = [];
var messagesvalid = [];

(async function() {


  chartMessages = new Chart(
    document.getElementById('messages'),
    {
      type: 'bar',
      data: {
        labels: messages.map(row => row.element),
        datasets: [
          {
			label: 'Total Messages',
            data: messages.map(row => row.count),
			backgroundColor: [
                '#6ba7ff'
			],
			borderWidth: 3,
			borderColor: '#6ba7ff',
          },
		  {
			label: 'Valid Messages',
            data: messagesvalid.map(row => row.count),
			backgroundColor: [
                '#936BFF'
			],
			borderWidth: 3,
			borderColor: '#936BFF',
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







var receiverArrayID = [];
receiverArrayID["0bda&2832"] = "Realtek RTL2832U"
receiverArrayID["0bda&2838"] = "Realtek RTL2832U OEM"
receiverArrayID["0413&6680"] = "DigitalNow Quad DVB-T PCI-E card"
receiverArrayID["0413&6f0f"] = "Leadtek WinFast DTV Dongle mini D"
receiverArrayID["0458&707f"] = "Genius TVGo DVB-T03 USB dongle (Ver. B)"
receiverArrayID["0ccd&00a9"] = "Terratec Cinergy T Stick Black (rev 1)"
receiverArrayID["0ccd&00b3"] = "Terratec NOXON DAB/DAB+ USB dongle (rev 1)"
receiverArrayID["0ccd&00b4"] = "Terratec Deutschlandradio DAB Stick"
receiverArrayID["0ccd&00b5"] = "Terratec NOXON DAB Stick - Radio Energy"
receiverArrayID["0ccd&00b7"] = "Terratec Media Broadcast DAB Stick"
receiverArrayID["0ccd&00b8"] = "Terratec BR DAB Stick"
receiverArrayID["0ccd&00b9"] = "Terratec WDR DAB Stick"
receiverArrayID["0ccd&00c0"] = "Terratec MuellerVerlag DAB Stick"
receiverArrayID["0ccd&00c6"] = "Terratec Fraunhofer DAB Stick"
receiverArrayID["0ccd&00d3"] = "Terratec Cinergy T Stick RC (Rev.3)"
receiverArrayID["0ccd&00d7"] = "Terratec T Stick PLUS"
receiverArrayID["0ccd&00e0"] = "Terratec NOXON DAB/DAB+ USB dongle (rev 2)"
receiverArrayID["1554&5020"] = "PixelView PV-DT235U(RN)"
receiverArrayID["15f4&0131"] = "Astrometa DVB-T/DVB-T2"
receiverArrayID["15f4&0133"] = "HanfTek DAB+FM+DVB-T"
receiverArrayID["185b&0620"] = "Compro Videomate U620F"
receiverArrayID["185b&0650"] = "Compro Videomate U650F"
receiverArrayID["185b&0680"] = "Compro Videomate U680F"
receiverArrayID["1b80&d393"] = "GIGABYTE GT-U7300"
receiverArrayID["1b80&d394"] = "DIKOM USB-DVBT HD"
receiverArrayID["1b80&d395"] = "Peak 102569AGPK"
receiverArrayID["1b80&d397"] = "KWorld KW-UB450-T USB DVB-T Pico TV"
receiverArrayID["1b80&d398"] = "Zaapa ZT-MINDVBZP"
receiverArrayID["1b80&d39d"] = "SVEON STV20 DVB-T USB & FM"
receiverArrayID["1b80&d3a4"] = "Twintech UT-40"
receiverArrayID["1b80&d3a8"] = "ASUS U3100MINI_PLUS_V2"
receiverArrayID["1b80&d3af"] = "SVEON STV27 DVB-T USB & FM"
receiverArrayID["1b80&d3b0"] = "SVEON STV21 DVB-T USB & FM"
receiverArrayID["1d19&1101"] = "Dexatek DK DVB-T Dongle (Logilink VG0002A)"
receiverArrayID["1d19&1102"] = "Dexatek DK DVB-T Dongle (MSI DigiVox mini II V3.0)"
receiverArrayID["1d19&1103"] = "Dexatek Technology Ltd. DK 5217 DVB-T Dongle"
receiverArrayID["1d19&1104"] = "MSI DigiVox Micro HD"
receiverArrayID["1f4d&a803"] = "Sweex DVB-T USB"
receiverArrayID["1f4d&b803"] = "GTek T803"
receiverArrayID["1f4d&c803"] = "Lifeview LV5TDeluxe"
receiverArrayID["1f4d&d286"] = "MyGica TD312"
receiverArrayID["1f4d&d803"] = "PROlectrix DV107669"



var receiverArray = [];
receiverArray['RTLSDRBlog Blog V4'] = "RTL-SDR Blog V4"
receiverArray['Realtek RTL2838UHIDIR'] = "RTL-SDR Blog V3"
receiverArray['Nooelec NESDR SMArt v5'] = "Nooelec NESDR SMArt v5"



function string_between_strings(startStr, endStr, str) {
    pos = str.indexOf(startStr) + startStr.length;
    return str.substring(pos, str.indexOf(endStr, pos));
}
var receiverString = '';
function fetchReceiver() {

  	$.ajax({
    url: "ajax.php",
    type: "POST",
	cache: false,
	dataType: "text",
	data: { request: 'get-usb' },
    success: function(result, textStatus, jqXHR) {
		
		console.log(result);
		var resParse = JSON.parse(result);
		console.log(resParse);
		
		
		let text = result;
		text = text.replace(/(?:\r\n|\r|\n)/g, '');
		text = text.replace(/  Bus=/g, "\nBus=");

		var lines = text.split('\n');


		var receiverOnline = 0;
		
		for (const element of lines) {
			
			const vendorID = string_between_strings("Vendor=", "ProdID=", element);
			const productID = string_between_strings("ProdID=", "Rev=", element);
			const revision = string_between_strings("Rev=", "Manufacturer=", element);
			const manufacturer = string_between_strings("Manufacturer=", "Product=", element);
			const product = string_between_strings("Product=", "SerialNumber=", element);
			
			const receiverArrayIDString = vendorID.trimEnd() + "&" + productID.trimEnd();
			const receiverArrayString = manufacturer.trimEnd() + " " + product.trimEnd();
			
			
			//console.log(receiverArrayString);
			
			
			if (receiverArrayIDString in receiverArrayID) {
				var updatedReceiverString = receiverArrayID[receiverArrayIDString];
				receiverOnline = 1;
			};
			if (receiverArrayString in receiverArray) {
				var updatedReceiverString = receiverArray[receiverArrayString];
				receiverOnline = 1;
			};
			
			

			
		}
		
		//document.getElementById('receiver').innerHTML = receiverString;
		
		
		if (receiverOnline == 0) {
			updatedReceiverString = "Receiver : No Receiver Detected";
			//chartState.data.datasets[0].data[0] = 0;
			//chartState.data.datasets[0].data[1] = 1;
			//chartState.update();
		
		} else {
			
			//chartState.data.datasets[0].data[0] = 1;
			//chartState.data.datasets[0].data[1] = 0;
			//chartState.update();			
			
		}
		
		if (receiverString != updatedReceiverString) {
			$('#receiver').hide().html(updatedReceiverString).fadeIn();
		}

		receiverString = updatedReceiverString
		
		
		

	},
	error: function(err)
    {

		console.log(err);

    }
  
  
	})
	
}

fetchReceiver();
const intervalFetchReceiver = setInterval(function() {
	fetchReceiver();
}, 15000);












var statsArrayNow = [];
statsArrayNow["adsb_icao"] = "ADS-B / Mode-S Transponder ICAO"
statsArrayNow["adsb_icao_nt"] = "ADS-B Non-Transponder ICAO"
statsArrayNow["adsr_icao"] = "ADS-B Re-Broadcast"
statsArrayNow["mlat"] = "MLAT"
statsArrayNow["mode_s"] = "Mode-S Transponder"


var statsArrayL1M = [];
statsArrayL1M["noise"] = "Noise"
statsArrayL1M["peak_signal"] = "Peak Signal"
statsArrayL1M["signal"] = "Signal"
statsArrayL1M["max_distance"] = "Max Distance"
statsArrayL1M["messages"] = "Messages"
statsArrayL1M["messages_valid"] = "Valid Messages"
statsArrayL1M["adsb_icao"] = "ADS-B / Mode-S Transponder ICAO"
statsArrayL1M["adsb_icao_nt"] = "ADS-B Non-Transponder ICAO"
statsArrayL1M["adsr_icao"] = "ADS-B Re-Broadcast"
statsArrayL1M["mlat"] = "MLAT"
statsArrayL1M["mode_s"] = "Mode-S Transponder"

var statsArrayL5M = [];
statsArrayL5M["noise"] = "Noise"
statsArrayL5M["peak_signal"] = "Peak Signal"
statsArrayL5M["signal"] = "Signal"
statsArrayL5M["max_distance"] = "Max Distance"
statsArrayL5M["messages"] = "Messages"
statsArrayL5M["messages_valid"] = "Valid Messages"
statsArrayL5M["adsb_icao"] = "ADS-B / Mode-S Transponder ICAO"
statsArrayL5M["adsb_icao_nt"] = "ADS-B Non-Transponder ICAO"
statsArrayL5M["adsr_icao"] = "ADS-B Re-Broadcast"
statsArrayL5M["mlat"] = "MLAT"
statsArrayL5M["mode_s"] = "Mode-S Transponder"



var statsArrayL15M = [];
statsArrayL15M["noise"] = "Noise"
statsArrayL15M["peak_signal"] = "Peak Signal"
statsArrayL15M["signal"] = "Signal"
statsArrayL15M["max_distance"] = "Max Distance"
statsArrayL15M["messages"] = "Messages"
statsArrayL15M["messages_valid"] = "Valid Messages"
statsArrayL15M["adsb_icao"] = "ADS-B / Mode-S Transponder ICAO"
statsArrayL15M["adsb_icao_nt"] = "ADS-B Non-Transponder ICAO"
statsArrayL15M["adsr_icao"] = "ADS-B Re-Broadcast"
statsArrayL15M["mlat"] = "MLAT"
statsArrayL15M["mode_s"] = "Mode-S Transponder"





function fetchStats() {

  	$.ajax({
	url: 'ajax.php',
	cache: false,
    type: "POST",
	data: { request: 'get-stats' },
    success: function(result) {

		//console.log(result);
		var resParse = JSON.parse(result);

		chartGain.data.datasets[0].data[0] = resParse.gain_db;
		chartGain.data.datasets[0].data[1] = (59 - (resParse.gain_db/1));
		chartGain.update();
		
		
		chartSignal.data.datasets[0].data[0] = resParse.last1min.local.signal;
		chartSignal.data.datasets[0].data[1] = -10 - resParse.last1min.local.signal;
		chartSignal.update();
		
		
		var maxNoiseFloor = -40;
		chartNoise.data.datasets[0].data[0] = -40 - resParse.last1min.local.noise;
		if (resParse.last1min.local.noise > maxNoiseFloor) {
			chartNoise.data.datasets[0].data[1] = resParse.last1min.local.noise;
		} else {
			chartNoise.data.datasets[0].data[1] = -40;
		}
		chartNoise.update();
		

		

		
		messagesAR.unshift(resParse.last1min.messages / 60);
		messagesvalidAR.unshift(resParse.last1min.messages_valid / 60);

		
		messages = [
			{ element: "-100s", count: messagesAR[10] },
			{ element: "-90s", count: messagesAR[9] },
			{ element: "-80s", count: messagesAR[8] },
			{ element: "-70s", count: messagesAR[7] },
			{ element: "-60s", count: messagesAR[6] },
			{ element: "-50s", count: messagesAR[5] },
			{ element: "-40s", count: messagesAR[4] },
			{ element: "-30s", count: messagesAR[3] },
			{ element: "-20s", count: messagesAR[2] },
			{ element: "-10s", count: messagesAR[1] },
			{ element: "0s", count: messagesAR[0] },
		];
		messagesvalid = [
			{ element: "-100s", count: messagesvalidAR[10] },
			{ element: "-90s", count: messagesvalidAR[9] },
			{ element: "-80s", count: messagesvalidAR[8] },
			{ element: "-70s", count: messagesvalidAR[7] },
			{ element: "-60s", count: messagesvalidAR[6] },
			{ element: "-50s", count: messagesvalidAR[5] },
			{ element: "-40s", count: messagesvalidAR[4] },
			{ element: "-30s", count: messagesvalidAR[3] },
			{ element: "-20s", count: messagesvalidAR[2] },
			{ element: "-10s", count: messagesvalidAR[1] },
			{ element: "0s", count: messagesvalidAR[0] },
		];
		
		chartMessages.data.labels = messages.map(row => row.element);
		chartMessages.data.datasets[0].data = messages.map(row => row.count);
		chartMessages.data.datasets[1].data = messagesvalid.map(row => row.count);
		
	
		chartMessages.update();
		
		
		
		
		
		
		
		
		
		
		
	var statNowBuilder = "";
	loopThroughObjRecurs(resParse.aircraft_count_by_type, function(k, prop) { 
	
	if (k in statsArrayNow) {
		statNowBuilder += '<div class="stat" id="stat_'+k+'" onclick="copyStat(this)">'+statsArrayNow[k]+' : '+prop+'</div>';
	};
	
	})
	$('#statsNow').html(statNowBuilder);
		

			
	var statLast1MinBuilder = "";
	loopThroughObjRecurs(resParse.last1min, function(k, prop) { 
	
	if (k in statsArrayL1M) {
		statLast1MinBuilder += '<div class="stat" id="stat_'+k+'" onclick="copyStat(this)">'+statsArrayL1M[k]+' : '+prop+'</div>';
	};
	
	})
	$('#statsLast1Min').html(statLast1MinBuilder);
			

	var statLast5MinBuilder = "";
	loopThroughObjRecurs(resParse.last5min, function(k, prop) { 
	
	if (k in statsArrayL5M) {
		statLast5MinBuilder += '<div class="stat" id="stat_'+k+'" onclick="copyStat(this)">'+statsArrayL5M[k]+' : '+prop+'</div>';
	};
	
	})
	$('#statsLast5Min').html(statLast5MinBuilder);		



	var statLast15MinBuilder = "";
	loopThroughObjRecurs(resParse.last15min, function(k, prop) { 
	
	if (k in statsArrayL15M) {
		statLast15MinBuilder += '<div class="stat" id="stat_'+k+'" onclick="copyStat(this)">'+statsArrayL15M[k]+' : '+prop+'</div>';
	};
	
	})
	$('#statsLast15Min').html(statLast15MinBuilder);		

	
		

	},
	error: function(err)
    {

		console.log(err);		

    }
	
  
  
	})
	
}

fetchStats();
const intervalFetchStats = setInterval(function() {
	fetchStats();
}, 10000);



function loopThroughObjRecurs (obj, propExec) {
  for (var k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      loopThroughObjRecurs(obj[k], propExec)
    } else if (obj.hasOwnProperty(k)) {
      propExec(k, obj[k])
    }
  }
}


function fetchStatus() {

  	$.ajax({
	url: 'ajax.php',
	cache: false,
    type: "POST",
	data: { request: 'get-status' },
    success: function(result) {

		//console.log(result);
		var resParse = JSON.parse(result);

		
		dataadsbicaoAR.unshift(resParse.aircraft_count_by_type.adsb_icao);
		datamodesAR.unshift(resParse.aircraft_count_by_type.mode_s);

		
		dataadsbicao = [
			{ element: "-100s", count: dataadsbicaoAR[10] },
			{ element: "-90s", count: dataadsbicaoAR[9] },
			{ element: "-80s", count: dataadsbicaoAR[8] },
			{ element: "-70s", count: dataadsbicaoAR[7] },
			{ element: "-60s", count: dataadsbicaoAR[6] },
			{ element: "-50s", count: dataadsbicaoAR[5] },
			{ element: "-40s", count: dataadsbicaoAR[4] },
			{ element: "-30s", count: dataadsbicaoAR[3] },
			{ element: "-20s", count: dataadsbicaoAR[2] },
			{ element: "-10s", count: dataadsbicaoAR[1] },
			{ element: "0s", count: dataadsbicaoAR[0] },
		];
		datamodes = [
			{ element: "-100s", count: datamodesAR[10] },
			{ element: "-90s", count: datamodesAR[9] },
			{ element: "-80s", count: datamodesAR[8] },
			{ element: "-70s", count: datamodesAR[7] },
			{ element: "-60s", count: datamodesAR[6] },
			{ element: "-50s", count: datamodesAR[5] },
			{ element: "-40s", count: datamodesAR[4] },
			{ element: "-30s", count: datamodesAR[3] },
			{ element: "-20s", count: datamodesAR[2] },
			{ element: "-10s", count: datamodesAR[1] },
			{ element: "0s", count: datamodesAR[0] },
		];
		
		chartAircraft.data.labels = dataadsbicao.map(row => row.element);
		chartAircraft.data.datasets[0].data = dataadsbicao.map(row => row.count);
		chartAircraft.data.datasets[1].data = datamodes.map(row => row.count);
		
	
		chartAircraft.update();
		

	
	
	

	},
	error: function(err)
    {

		console.log(err);		

    }
	
  
  
	})
	
}

fetchStatus();
const intervalFetchStatus = setInterval(function() {
	fetchStatus();
}, 10000);









