function fn10sec() {
    getflytstats();
}
fn10sec();
setInterval(fn10sec, 10*1000);




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












const xValues = ["Last Month Upload", "Last Month Download", "This Month Upload", "This Month Download"];
const yValues = [183.47, 5.28, 40.78, 1.18];
const zValues = [0, 0, 130.78, 51.18];


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