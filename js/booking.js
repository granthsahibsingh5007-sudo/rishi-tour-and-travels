document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("customerName").value;
const mobile = document.getElementById("customerPhone").value;
const vehicle = document.getElementById("cabType").value;
const service = document.getElementById("serviceType").value;
const pickup = document.getElementById("pickup").value;
const drop = document.getElementById("drop").value;
const date = document.getElementById("journeyDate").value;
const time = document.getElementById("journeyTime").value;

if(!name || !mobile || !pickup || !drop){
alert("Please fill all details");
return;
}

const bookingId =
"RTT-" +
new Date().getFullYear() +
"-" +
Math.floor(1000 + Math.random() * 9000);

const message =
`🚖 Rishi Tours & Travels Booking

🆔 Booking ID: ${bookingId}
👤 Name: ${name}
📞 Mobile: ${mobile}
🚘 Vehicle: ${vehicle}
🛣 Service: ${service}
📍 Pickup: ${pickup}
📍 Drop: ${drop}
📅 Date: ${date}
⏰ Time: ${time}`;

const whatsappNumber = "918651568297";

const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

alert(
`Booking Submitted Successfully!

Booking ID: ${bookingId}`
);

});
