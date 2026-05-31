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

function login() {

  const user =
    document.getElementById("username").value;

  const pass =
    document.getElementById("password").value;

  if (user === "Rishi" && pass === "5007") {

    document.getElementById("loginBox").style.display = "none";

    document.getElementById("dashboard").style.display = "block";

    loadBookings();

  } else {

    alert("Wrong Username Or Password");

  }

}

window.login = login;

/* LOGOUT */

function logout() {
  location.reload();
}

window.logout = logout;

/* LOAD BOOKINGS */

async function loadBookings() {

  const table =
    document.getElementById("bookingTable");

  table.innerHTML = "";

  const { data, error } =
    await supabase
      .from("bookings")
      .select("*")
      .order("id", {
        ascending: false
      });

  if (error) {

    console.log(error);

    alert("Booking Load Failed");

    return;

  }

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
onclick="confirmBooking(
'${item.id}',
'${item.booking_id}',
'${item.customer_name}',
'${item.customer_phone}',
'${item.pickup_location}',
'${item.drop_location}',
'${item.journey_date}',
'${item.journey_time}',
'${item.cab_type}'
)">
Confirm
</button>

</td>

</tr>

`;

  });

}

/* CONFIRM BOOKING */

async function confirmBooking(
  id,
  bookingId,
  customerName,
  customerPhone,
  pickup,
  drop,
  date,
  time,
  cabModel
) {

  const driverName =
    document.getElementById(`driver_${id}`).value;

  const driverMobile =
    document.getElementById(`mobile_${id}`).value;

  const cabNumber =
    document.getElementById(`cab_${id}`).value;

  if (
    !driverName ||
    !driverMobile ||
    !cabNumber
  ) {

    alert("Fill Driver Details First");
    return;

  }

  await supabase
    .from("bookings")
    .update({
      booking_status: "Confirmed"
    })
    .eq("id", id);

  const message = `🚖 Rishi Tours & Travels

Booking Confirmed ✅

Booking ID:
${bookingId}

👤 Name:
${customerName}

📞 Mobile:
${customerPhone}

📍 Pickup:
${pickup}

📍 Drop:
${drop}

📅 Date:
${date}

⏰ Time:
${time}

🚘 Cab Model:
${cabModel}

🚖 Cab Number:
${cabNumber}

👨 Driver Name:
${driverName}

📞 Driver Mobile:
${driverMobile}

Thank You For Choosing
Rishi Tours & Travels ❤️

Have A Happy & Safe Journey 🚖✈️`;

  const phone =
    customerPhone.replace(/\D/g, '');

  window.open(
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  alert("Booking Confirmed Successfully");

}

window.confirmBooking = confirmBooking;
