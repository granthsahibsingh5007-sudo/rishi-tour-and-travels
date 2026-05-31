    const supabaseUrl =
"https://xgiezpajzzzhtgvrcagv.supabase.co";

const supabaseKey =
"sb_publishable_wdEbPt6FxlUNycufcS86kw_bglDaW5B";

const supabase =
window.supabase.createClient(
supabaseUrl,
supabaseKey
);

/* LOGIN */

function login(){

const user =
document.getElementById("username").value;

const pass =
document.getElementById("password").value;

if(user==="Rishi" && pass==="5007"){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

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
"<tr><td colspan='13'>Loading...</td></tr>";

const { data, error } =
await supabase
.from("bookings")
.select("*")
.order("id",{ascending:false});

if(error){

console.log(error);

table.innerHTML =
"<tr><td colspan='13'>Database Error</td></tr>";

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
placeholder="Driver Name">
</td>

<td>
<input
type="text"
id="mobile_${item.id}"
placeholder="Driver Mobile">
</td>

<td>
<input
type="text"
id="cab_${item.id}"
placeholder="Cab Number">
</td>

<td>
<button
class="confirm-btn"
onclick="confirmBooking('${item.id}')">
Confirm
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

alert("Update Failed");

console.log(error);

return;

}

alert("Booking Confirmed Successfully");

loadBookings();

}

window.confirmBooking = confirmBooking;
