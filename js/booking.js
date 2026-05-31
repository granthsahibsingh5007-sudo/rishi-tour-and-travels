const SUPABASE_URL =
"https://xgiezpajzzzhtgvrcagv.supabase.co";

const SUPABASE_KEY =
"sb_publishable_wdEbPt6FxlUNycufcS86kw_bglDaW5B";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

document.getElementById("bookingForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const bookingId =
"RTT" +
Math.floor(1000 + Math.random() * 9000);

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const cabModel =
document.getElementById("cabModel").value;

const tripType =
document.getElementById("tripType").value;

const pickup =
document.getElementById("pickup").value;

const drop =
document.getElementById("drop").value;

const date =
document.getElementById("date").value;

const time =
document.getElementById("time").value;

/* Save To Supabase */

const { error } =
await supabaseClient
.from("bookings")
.insert([
{
booking_id: bookingId,
customer_name: name,
customer_phone: phone,
cab_type: cabModel,
trip_type: tripType,
pickup_location: pickup,
drop_location: drop,
journey_date: date,
journey_time: time,
booking_status: "Pending"
}
]);

if(error){

console.log(error);

alert(
"Booking Save Failed"
);

return;

}

/* Owner WhatsApp */

const ownerNumber =
"918651568297";

const ownerMessage =
`🚖 NEW BOOKING

Booking ID: ${bookingId}

👤 Name:
${name}

📞 Phone:
${phone}

🚘 Cab:
${cabModel}

🛣️ Trip:
${tripType}

📍 Pickup:
${pickup}

📍 Drop:
${drop}

📅 Date:
${date}

⏰ Time:
${time}`;

const ownerUrl =
`https://wa.me/${ownerNumber}?text=${encodeURIComponent(ownerMessage)}`;

alert(
`Booking Created Successfully

Booking ID:
${bookingId}

Our Team Will Contact You Soon.`
);

window.open(
ownerUrl,
"_blank"
);

document
.getElementById("bookingForm")
.reset();

});
