import { db } from "./firebase-config.js";

import {
addDoc,
collection,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

document
.getElementById("bookingForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const bookingId =
"RTT" + Date.now();

const data = {

bookingId,

customerName:
document.getElementById("customerName").value,

customerPhone:
document.getElementById("customerPhone").value,

cabType:
document.getElementById("cabType").value,

serviceType:
document.getElementById("serviceType").value,

journeyDate:
document.getElementById("journeyDate").value,

journeyTime:
document.getElementById("journeyTime").value,

pickup:
document.getElementById("pickup").value,

drop:
document.getElementById("drop").value,

status:"Pending",

createdAt:serverTimestamp()

};

try{

await addDoc(
collection(db,"bookings"),
data
);

alert(
"Booking Submitted Successfully\nBooking ID: " +
bookingId
);

document
.getElementById("bookingForm")
.reset();

}catch(error){

console.error(error);

alert(
"Error saving booking"
);

}

});
