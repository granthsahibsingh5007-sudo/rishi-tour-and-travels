const supabaseUrl =
"https://xgiezpajzzzhtgvrcagv.supabase.co";

const supabaseKey =
"YOUR_PUBLISHABLE_KEY";

const supabase =
window.supabase.createClient(
supabaseUrl,
supabaseKey
);

/* LOGIN */

function login(){

const user =
document.getElementById("username").value.trim();

const pass =
document.getElementById("password").value.trim();

if(user === "Rishi" && pass === "5007"){

document.getElementById("loginBox").style.display = "none";

document.getElementById("dashboard").style.display = "block";

loadBookings();

}else{

alert("Wrong Username Or Password");

}

}

window.login = login;

/* LOGOUT */

function logout(){

location.reload();

}

window.logout = logout;

/* LOAD BOOKINGS */

async function loadBookings(){

const table =
document.getElementById("bookingTable");

table.innerHTML =
"<tr><td colspan='14'>Loading...</td></tr>";

const { data, error } =
await supabase
.from("bookings")
.select("*")
.order("id",{ascending:false});

if(error){

console.log(error);

table.innerHTML =
"<tr><td colspan='14'>Database Error</td></tr>";

return;

}

table.innerHTML = "";

data.forEach(item => {

table.innerHTML += `

<tr>

<td>${item.booking_id || ""}</td>
<td>${item.customer_name || ""}</td>
<td>${item.customer_phone || ""}</td>
<td>${item.cab_type || ""}</td>
<td>${item.trip_type || ""}</td>
<td>${item.pickup_location || ""}</td>
<td>${item.drop_location || ""}</td>
<td>${item.journey_date || ""}</td>
<td>${item.journey_time || ""}</td>

<td>
<input
type="text"
id="driver_${item.id}"
value="${item.driver_name || ""}"
placeholder="Driver Name">
</td>

<td>
<input
type="text"
id="mobile_${item.id}"
value="${item.driver_mobile || ""}"
placeholder="Driver Mobile">
</td>

<td>
<input
type="text"
id="cab_${item.id}"
value="${item.cab_number || ""}"
placeholder="Cab Number">
</td>

<td>
<button
class="confirm-btn"
onclick="confirmBooking('${item.id}')">
Confirm
</button>
</td>

<td>
<button
class="whatsapp-btn"
onclick="sendWhatsApp('${item.id}')">
WhatsApp
</button>
</td>

</tr>

`;

});

}

/* CONFIRM BOOKING */

async function confirmBooking(id){

const driverName =
document.getElementById(`driver_${id}`).value;

const driverMobile =
document.getElementById(`mobile_${id}`).value;

const cabNumber =
document.getElementById(`cab_${id}`).value;

if(
!driverName ||
!driverMobile ||
!cabNumber
){

alert("Fill Driver Details First");

return;

}

const { error } =
await supabase
.from("bookings")
.update({

driver_name: driverName,
driver_mobile: driverMobile,
cab_number: cabNumber,
booking_status: "Confirmed"

})
.eq("id",id);

if(error){

console.log(error);

alert("Update Failed");

return;

}

alert("Booking Confirmed Successfully");

loadBookings();

}

window.confirmBooking = confirmBooking;

/* WHATSAPP */

async function sendWhatsApp(id){

const { data, error } =
await supabase
.from("bookings")
.select("*")
.eq("id", id)
.single();

if(error){

alert("Booking Not Found");

return;

}

const phone =
(data.customer_phone || "")
.toString()
.replace(/\D/g,'');

const message =
`🚖 Rishi Tours & Travels

Booking Confirmed

Booking ID: ${data.booking_id || ""}

Driver Name: ${data.driver_name || ""}

Driver Mobile: ${data.driver_mobile || ""}

Cab Number: ${data.cab_number || ""}

Thank You For Choosing Rishi Tours & Travels`;

window.open(
`https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
"_blank"
);

}

window.sendWhatsApp = sendWhatsApp;
