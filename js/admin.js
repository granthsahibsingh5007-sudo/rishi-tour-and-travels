const supabaseUrl =
"https://xgiezpajzzzhtgvrcagv.supabase.co";

const supabaseKey =
"sb_publishable_wdEbPt6FxlUNycufcS86kw_bglDaW5B";

const supabase =
window.supabase.createClient(
supabaseUrl,
supabaseKey
);

function login(){

const user =
document.getElementById("username").value;

const pass =
document.getElementById("password").value;

if(user === "Rishi" && pass === "5007"){

document.getElementById("loginBox").style.display = "none";

document.getElementById("dashboard").style.display = "block";

loadBookings();

}else{

alert("Wrong Login");

}

}

function logout(){

location.reload();

}

async function loadBookings(){

const table =
document.getElementById("bookingTable");

table.innerHTML =
"<tr><td colspan='9'>Loading...</td></tr>";

const { data, error } =
await supabase
.from("bookings")
.select("*")
.order("id",{ascending:false});

if(error){

console.log(error);

table.innerHTML =
"<tr><td colspan='9'>Database Error</td></tr>";

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
</tr>
`;

});

}
