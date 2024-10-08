
	
	

$(document).ready(function () {



	$(".large-panel-button").on('click', function(event){
			$(this).addClass("active").siblings().removeClass("active");
			console.log(this.id);
			
			if (this.id == "network-ethernet") {
				$("#network-title").html("Ethernet");
				$("#network-stats").html("IP Address : 192.168.1.x<br>Network Connection Is Excellent");
			}
			if (this.id == "network-wifi") {
				$("#network-title").html('<div style="display:flex; width: 17rem;   justify-content: space-around;"><div id="wifiback" onclick="WiFiBack()" style="cursor:pointer; height:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div><div>WiFi</div><div id="wifirescan" onclick="WiFiBack()" style="cursor:pointer; height:18px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></div></div>');
				$("#network-stats").html("IP Address : 192.168.1.x<br>Network Connection Is Good");
				$("#network-stats").html('<div id="lets-go-div" style="text-align:center;"><div class="lets-go-div-ssid" onclick="setWiFi(&quot;278BB0&quot;);">278BB0</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;EE WiFi&quot;);">EE WiFi</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;ESP_48BD6B&quot;);">ESP_48BD6B</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;GLM&quot;);">GLM</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;GLMG&quot;);">GLMG</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;SKY7JUZM&quot;);">SKY7JUZM</div><div class="lets-go-div-ssid" onclick="setWiFi(&quot;VM1459509&quot;);">Hidden Network</div></div>');
			}
	});

	
	

	
	

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




function setWiFi(ssid) {
	$("#wifiback").css('visibility', 'visible');
	$("#wifirescan").css('visibility', 'hidden');
	$("#network-stats").html('<div><div id="wifiSSID" class="lets-go" style=""><input id="wifiSSIDInput" type="text" placeholder="WiFi SSID" style="text-align:center;" value='+ssid+'></div><div id="wifiPassphrase" class="lets-go" style=""><input id="wifiPassphraseInput" placeholder="WiFi Passphrase" style="text-align:center;"></div></div>');
	$("#network-stats").append('<header id="network-wifi-connect" onclick="WiFiConnectBtn()"><div style=" text-align:center; width:100%; color:#fbfbfbCC;"><div style="line-height: 1rem;">Connect</div></div></header>');
}

function WiFiConnectBtn() {
	if ($('#wifiSSIDInput').val().length < 1) {
		$( "#wifiSSID" ).effect( "shake" );
	}
	if ($('#wifiPassphraseInput').val().length < 8) {
		$( "#wifiPassphrase" ).effect( "shake" );
	}
}

function WiFiBack() {
	$('#network-wifi').click();
	//$('#wifirescan').css({"transform": "rotate("+now+"deg)"});
	
	$('#wifirescan').stop().animate(
	  {rotation: 360},
	  {
		duration: 500,
		step: function(now, fx) {
		  $(this).css({"transform": "rotate("+now+"deg)"});
		}
	  }
	);

}

function nextPage(current, next) {
 
 $('#p'+current).animate({
 marginLeft: "-200vw"
 }, 1000);
 $('#p'+next).animate({
 marginLeft: "0"
 }, 1000);
 
 
 for (let i = 1; i < next+1; i++) {
 console.log('Add l'+i);
 //$("#l"+i).css("border", "2px solid #6BA7FF");
 $("#l"+i).addClass('slider-changed');
 }
 
 
 if (next == 1) {
 $('#skip-setup').show();
 } else {
 $('#skip-setup').hide();
 }
 
 if (next == 4) {
 console.log("Pre-Checks NP");
 document.getElementById('precheck_status_network').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 document.getElementById('precheck_status_wingbits').innerHTML = '';
 document.getElementById('precheck_status_internet').innerHTML = '';
 document.getElementById('precheck_status_cloud').innerHTML = '';
 document.getElementById('precheck_status_network_description').innerHTML = 'Setting up the network parameters and getting your Flyt Node connected';
 document.getElementById('precheck_status_wingbits_description').innerHTML = 'Registering your Wingbits Antenna ID with your Flyt Node';
 document.getElementById('precheck_status_internet_description').innerHTML = 'Let\'s check you have access to the Flyt and Wingbit\'s cloud services';
 document.getElementById('precheck_status_cloud_description').innerHTML = 'Registering your Node to the Flyt Cloud';
 setTimeout(preChecks,2000);
 } 
 
 
}
 
 

function previousPage(current, previous) {
 
 $('#p'+current).animate({
 marginLeft: "100vw"
 }, 1000);
 $('#p'+previous).animate({
 marginLeft: "0vw"
 }, 1000);
 

 $("#l"+current).removeClass('slider-changed'); 
 
 if (previous == 1) {
 $('#skip-setup').show();
 } else {
 $('#skip-setup').hide();
 }
 
 if (previous == 4) {
 console.log("Pre-Checks PP");
 document.getElementById('precheck_status_network').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 document.getElementById('precheck_status_wingbits').innerHTML = '';
 document.getElementById('precheck_status_internet').innerHTML = '';
 document.getElementById('precheck_status_cloud').innerHTML = '';
 document.getElementById('precheck_status_network_description').innerHTML = 'Setting up the network parameters and getting your Flyt Node connected';
 document.getElementById('precheck_status_wingbits_description').innerHTML = 'Registering your Wingbits Antenna ID with your Flyt Node';
 document.getElementById('precheck_status_internet_description').innerHTML = 'Let\'s check you have access to the Flyt and Wingbit\'s cloud services';
 document.getElementById('precheck_status_cloud_description').innerHTML = 'Registering your Node to the Flyt Cloud';
 setTimeout(preChecks,2000);
 } 
 
}



async function preChecks() {
 
 var processError = 0;
 
 console.log("Starting Pre-Checks");
 console.log("Network Selected As "+networkFlag);
 
 
 // Network Configuration
 
 if (networkFlag == "ethernet") {
 
 // green tick
 document.getElementById('precheck_status_network').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ba7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
 document.getElementById('precheck_status_network_description').innerHTML = "Your Flyt Node is configured to use ethernet and the connection is active.";
 
 }
 if (networkFlag == "wifi") {
 
 console.log("Connecting to WiFi")
 
 var wifiSSID = document.getElementById('wifiSSIDInput').value;
 var wifiPassphrase = document.getElementById('wifiPassphraseInput').value;
 
 
 await $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'connect-wifi', ssid: wifiSSID, passphrase: wifiPassphrase },
 success: function(response) {

 var resParse = JSON.parse(response);
 console.log(resParse);
 
 if (resParse[0] == "E") {
 console.log("Error");
 document.getElementById('precheck_status_network').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_network_description').innerHTML = resParse;
 processError = 1;
 } else if (resParse[0] == "'") {
 console.log("Error");
 document.getElementById('precheck_status_network').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_network_description').innerHTML = "The connection command is not recognised on this hardware";
 processError = 1;
 } else if (resParse == "") {
 console.log("Error");
 document.getElementById('precheck_status_network').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_network_description').innerHTML = "An unknown error has occurred";
 processError = 1;
 } else {
 console.log("Success");
 document.getElementById('precheck_status_network').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ba7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
 document.getElementById('precheck_status_network_description').innerHTML = "Your Flyt Node is successfully connected to WiFi SSID "+wifiSSID;
 }
 
 console.log("Connecting attempt complete")
 
 }
 });
 
 
 
 }
 
 
 
 // Wingbits Antenna ID
 
 document.getElementById('precheck_status_wingbits').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 
 var wingbitsAntennaInput = document.getElementById('wingbitsAntennaInput').value;
 console.log(wingbitsAntennaInput);
 
 if (wingbitsAntennaInput.length > 8 && wingbitsAntennaInput.length < 30) {
 
 await $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'insert-vector', wid: wingbitsAntennaInput },
 success: function(response) {

 var resParse = JSON.parse(response);
 console.log(resParse);
 
 console.log(resParse[0] + " vs " + wingbitsAntennaInput);
 
 if (resParse == wingbitsAntennaInput) {
 console.log("Success");
 document.getElementById('precheck_status_wingbits').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ba7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
 document.getElementById('precheck_status_wingbits_description').innerHTML = "Your Wingbits Antenna ID has been successfully imported";
 } else {
 console.log("Error");
 document.getElementById('precheck_status_wingbits').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_wingbits_description').innerHTML = "We weren't able to import your Wingbits Antenna ID at this time";
 processError = 1;
 }
 
 console.log("Connecting attempt complete")
 
 }
 });
 
 } else {
 
 document.getElementById('precheck_status_wingbits').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_wingbits_description').innerHTML = "Looks like your Wingbits Antenna ID isn't quite right. Please check the guide";
 processError = 1; 
 
 }
 
 


 // Internet Connection
 
 document.getElementById('precheck_status_internet').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 

 await $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'check-internet' },
 success: function(response) {

 var resParse = JSON.parse(response);
 console.log(resParse);
 var flytSuccess = 0;
 var wingbitsSuccess = 0;
 var internetError = "";
 
 if (resParse['flyt'] == 1) {
 
 flytSuccess = 1;
 internetError = "Your Node is unable to connect to the Flyt Cloud at this time";
 }
 
 if (resParse['wingbits'] == 1) {
 
 wingbitsSuccess = 1;
 internetError = "Your Node is unable to connect to the Wingbits cloud services at this time";
 }
 
 if (flytSuccess == 1 && wingbitsSuccess == 1) {
 
 console.log("Success");
 document.getElementById('precheck_status_internet').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ba7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
 document.getElementById('precheck_status_internet_description').innerHTML = 'Your Node is able to see both Flyt Cloud and Wingbits cloud services';
 
 
 } else if (flytSuccess == 0 && wingbitsSuccess == 0) {
 
 console.log(internetError);
 console.log("Error");
 document.getElementById('precheck_status_internet').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_internet_description').innerHTML = 'Your Node is unable to connect to either the Flyt Cloud or Wingbits cloud services at this time';
 processError = 1;
 
 } else {
 
 console.log(internetError);
 console.log("Error");
 document.getElementById('precheck_status_internet').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_internet_description').innerHTML = internetError;
 processError = 1;
 }
 
 
 console.log("Connecting attempt complete")
 
 }
 });








 // Flyt Registration
 
 document.getElementById('precheck_status_cloud').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 
 
 await $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'check-cloud' },
 success: function(response) {

 console.log("Cloud : "+response);
 //var resParse = JSON.parse(response);
 //console.log(resParse);
 
 
 if (response == "success") {

 document.getElementById('precheck_status_cloud').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ba7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
 document.getElementById('precheck_status_cloud_description').innerHTML = "Your Node is successfully registered with Flyt Cloud";
 
 } else {
 
 document.getElementById('precheck_status_cloud').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_cloud_description').innerHTML = "Your Node registration to Flyt Cloud cannot be found at this time";
 processError = 1;
 }
 
 
 }
 });
 
 
 
 
 if (processError == 1) {
 
 document.getElementById('precheck_status_notice').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF936B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
 document.getElementById('precheck_status_notice_title').innerHTML = "Notice";
 document.getElementById('precheck_status_notice_description').innerHTML = 'It looks like there may be some issues with the pre-checks. You can head back, check your configuration and try again, or continue and set up any remaining items later';
 
 } else {
 
 document.getElementById('precheck_status_notice').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ba7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
 document.getElementById('precheck_status_notice_title').innerHTML = "Excellent!";
 document.getElementById('precheck_status_notice_description').innerHTML = 'Your all set to go';
 
 }
 
 
 
 
}



var networkFlag = "ethernet";
var wingbitsAntennaID = null;

function selectNetwork(type) {
 
 if (type == "ethernet") {
 
 networkFlag = "ethernet"
 
 $("#wifi").removeClass('button-selected'); 
 $("#ethernet").addClass('button-selected'); 
 $("#wifi-config").fadeOut(100);
 
 }
 
 
 if (type == "wifi") {
 
 networkFlag = "wifi"
 
 
 
 document.getElementById('lets-go-div').innerHTML = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
 $("#wifiSelection").fadeIn(0);
 $("#wifiSSID").fadeOut(0);
 $("#wifiPassphrase").fadeOut(0);
 
 $("#ethernet").removeClass('button-selected'); 
 $("#wifi").addClass('button-selected');
 $("#wifi-config").fadeIn(500);
 
 
 

 
 $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'scan-wifi' },
 success: function(response) {
 //content.html(response);
 //console.log(response);
 var resParse = JSON.parse(response);
 console.log(resParse);
 
 
 var ssidContent = "";
 jQuery.each(resParse, function (index, value) {
 
 if (value.length > 0) {
 ssidContent += "<div class='lets-go-div-ssid' onclick='setWiFi(\""+value+"\");'>"+value+"</div>";
 }
 
 });
 document.getElementById('lets-go-div').innerHTML = ssidContent;
 
 
 /*
 var whichConnected = null;
 var wirelessArray = [];
 
 jQuery.each(resParse, function (index, value) {
 
 
 console.log(index + " : " + value);
 var valSplit = value.split(":");
 console.log(valSplit);
 var vsSSID = valSplit[0];
 var vsChannel = valSplit[1];
 var vsSpeed = valSplit[2];
 var vsSignal = valSplit[3];
 var vsSecurity = valSplit[4];
 var vsConnected = valSplit[5];
 
 
 if (vsSSID.length > 0) {
 
 var vsChannelGhz = null;
 if (vsChannel > 0 && vsChannel < 15) {
 vsChannelGhz = "2.4 GHz";
 };
 if (vsChannel > 15 && vsChannel < 200) {
 vsChannelGhz = "5 GHz";
 };
 if (vsConnected.length > 0) {
 whichConnected = vsSSID;
 };
 
 var nAIndex = vsSSID;
 var nAValue = vsSecurity;
 wirelessArray[nAIndex] = nAValue;
 
 




 
 };
 
 
 
 
 
 });
 
 
 console.log(wirelessArray);
 */
 
 }
 });


 }
 
 
 
 
}


function skipSetup() {
 
 $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'skip-setup' },
 success: function(response) {
 window.location.href = '/flyt';
 }
 });
 
}
function completeSetup() {
 
 $.ajax({
 type: 'POST',
 cache: false,
 data: { request: 'complete-setup' },
 success: function(response) {
 window.location.href = '/flyt';
 }
 });
 
}
 
 