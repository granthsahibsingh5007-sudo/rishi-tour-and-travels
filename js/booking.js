document.getElementById("bookBtn").addEventListener("click", function () {

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let car = document.getElementById("car").value;
let trip = document.getElementById("trip").value;
let pickup = document.getElementById("pickup").value;
let drop = document.getElementById("drop").value;

if(
name === "" ||
mobile === "" ||
pickup === "" ||
drop === ""
){
alert("Please fill all details");
return;
}

let message =
`🚖 Rishi Tours & Travels Booking

👤 Name: ${name}
📞 Mobile: ${mobile}
🚘 Car: ${car}
🛣 Trip: ${trip}
📍 Pickup: ${pickup}
📍 Drop: ${drop}`;

let whatsappNumber = "917991148146";

let url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

});
