alert("ADMIN JS LOADED");

/* LOGIN */

function login() {

alert("LOGIN CLICKED");

const user =
document.getElementById("username").value.trim();

const pass =
document.getElementById("password").value.trim();

if(user === "Rishi" && pass === "5007") {

alert("LOGIN SUCCESS");

document.getElementById("loginBox").style.display = "none";

document.getElementById("dashboard").style.display = "block";

document.getElementById("bookingTable").innerHTML = `
<tr>

loadBookings();

} else {

alert("Wrong Username Or Password");

}

}

window.login = login;

/* LOGOUT */

function logout() {

alert("LOGOUT");

location.reload();

}

window.logout = logout;

const SUPABASE_URL =
"https://xgiezpajzzzhtgvrcagv.supabase.co";

const SUPABASE_KEY =
"sb_publishable_wdEbPt6FxlUNycufcS86kw_bglDaW5B";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

async function loadBookings(){

const table =
document.getElementById("bookingTable");

table.innerHTML =
"<tr><td colspan='14'>Loading...</td></tr>";

const { data, error } =
await supabaseClient
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
<td>${item.driver_name || "-"}</td>
<td>${item.driver_phone || "-"}</td>
<td>${item.vehicle_number || "-"}</td>
<td>Manage</td>
<td>WhatsApp</td>
</tr>
`;

});

}
