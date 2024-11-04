/*
location + side panel set location
*/




var manual = [];
manual["cpu"] = "The central processing unit (CPU) is the computer component that's responsible for interpreting and executing most of the commands from the Node's other hardware and software. Persistent high CPU useage may indicate a software fault and a reboot of the Node should be carried out."
manual["ram"] = "Random Access Memory (RAM) is the physical hardware inside a computer that temporarily stores data, serving as the Node's working memory. Persistent high RAM useage may indicate a software fault and a reboot of the Node should be carried out."
manual["storage"] = "The operating system and Node Console are stored on the storage medium allowing data to persist through reboots. High storage useage should be investigated through technical support."
manual["temperature"] = "The internal working temperature of the Node needs to remain stable and within working parameters. Very high temperatures may result in the Node shutting down in order to protect the hardware from permanent damage. Temperatures should not exceed 65deg C for prolonged periods of time. Consider adding an airflow source to ensure adequate cooling if your Node is experiencing excessive temperatures."
manual["uptime"] = "A simple measurement showing how long your Node has been powered up. You should aim to keep your Node powered at all times to maximise Wingbits rewards."

manual["data-useage"] = "The amount of network data consumed by your node, provided as download and upload."
manual["wifi"] = "Determines whether your Node is connected to your network using wireless."
manual["ethernet"] = "Determines whether your Node is connected to your network using ethernet."

manual["gain"] = "Gain is the amplification of all your antenna signals and can be used to compensate for losses and potentially increase coverage. Gain will increase all signals, including unwanted background noise. Too much gain can result in the SDR clipping signals leading to increased noise and fewer recieved messages. Setups in urban locations often benefit from a reduced gain of circa 30dB, while rural locations often benefit from a higher gain of circa 40dB."
manual["signal"] = "Displays the average signal strength of all accepted messages."
manual["noise"] = "Displays the noise level of signals processed by the SDR. A high noise figure likely indicates a need to reduce the gain or place an in-line 1090Mhz filter to remove unwanted signals."
manual["snr"] = "Displays the signal to noise ratio of recieved messages. A low SNR can likely be corrected with appropraite 1090mhz filtering, a reduction of gain or a combination of both. High SNR can likley be corrected by increasing GAIN for optimum results."

manual["readsb"] = "Readsb is responsible for collecting and parsing the raw signals processed by the SDR."
manual["vector"] = "Collection, transformational and sinking of flight tracking data to Flyt and Wingbits."
manual["lighttpd"] = "The web server, serving the Node Console."
manual["tar1090"] = "An optional service available to install through the Settings > Services page. Provides an additional mapping engine provided by the wiedehopf/tar1090 repository."
manual["graphs1090"] = "An optional service available to install through the Settings > Services page. Provides additional graphs provided by the wiedehopf/graphs1090 repository."

manual["strongsignalpc15m"] = "The percentage of accepted messages with strong signals. Aim for 5% for standard setups and 10% if close to an airport/low flying traffic. A high percentage often indicates your gain is too high, which often has the result of clipped, and lost signals. A low percentage often indicates you have headroom to increase your gain and improve your message rate."




function menumanual(key,nodeElement) {
	
		console.log(key);
		console.log(nodeElement);
		
		
		$('#menu-manual-title').text(nodeElement);
		if (manual[key]) {
			$('#menu-manual-text').text(manual[key]);
		} else {
			$('#menu-manual-text').text("Manual not yet available.");
		}
		
		
		var slideoutManual = $('.slideout-manual');
    	var slideoutManualWidth = $('.slideout-manual').width();
    	
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
		

		
		
