document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("customerName").value;
const phone = document.getElementById("customerPhone").value;
const cabType = document.getElementById("cabType").value;
const serviceType = document.getElementById("serviceType").value;
const date = document.getElementById("journeyDate").value;
const time = document.getElementById("journeyTime").value;
const pickup = document.getElementById("pickup").value;
const drop = document.getElementById("drop").value;

const msg = `🚖 New Booking Request

Customer Name: ${name}
Mobile: ${phone}

Cab Type: ${cabType}
Service: ${serviceType}

Journey Date: ${date}
Journey Time: ${time}

Pickup: ${pickup}
Drop: ${drop}

Rishi Tours & Travels`;

window.open(
`https://wa.me/918651568297?text=${encodeURIComponent(msg)}`,
"_blank"
);

});
