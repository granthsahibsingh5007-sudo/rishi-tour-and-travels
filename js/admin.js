alert("ADMIN JS LOADED");

/* LOGIN */

function login() {

    const user =
    document.getElementById("username").value.trim();

    const pass =
    document.getElementById("password").value.trim();

    if (user === "Rishi" && pass === "5007") {

        alert("LOGIN SUCCESS");

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

    alert("LOGOUT");

    location.reload();
}

window.logout = logout;


/* SUPABASE */

const SUPABASE_URL =
"https://xgiezpajzzzhtgvrcagv.supabase.co";

const SUPABASE_KEY =
"sb_publishable_wdEbPt6FxlUNycufcS86kw_bglDaW5B";

const supabaseClient =
supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


/* LOAD BOOKINGS */

async function loadBookings() {

    const table =
    document.getElementById("bookingTable");

    table.innerHTML =
    "<tr><td colspan='14'>Loading...</td></tr>";

    try {

        const { data, error } =
        await supabaseClient
        .from("bookings")
        .select("*")
        .order("id", { ascending: false });

        if (error) {

            console.error(error);

            table.innerHTML =
            "<tr><td colspan='14'>Database Error</td></tr>";

            return;
        }

        if (!data || data.length === 0) {

            table.innerHTML =
            "<tr><td colspan='14'>No Booking Found</td></tr>";

            return;
        }

        table.innerHTML = "";

        data.forEach(item => {

            table.innerHTML += `
            <tr>
                <td>${item.booking_id || item.id || ""}</td>
                <td>${item.customer_name || item.name || ""}</td>
                <td>${item.customer_phone || item.mobile || ""}</td>
                <td>${item.cab_type || item.vehicle || ""}</td>
                <td>${item.trip_type || ""}</td>
                <td>${item.pickup_location || item.pickup || ""}</td>
                <td>${item.drop_location || item.drop || ""}</td>
                <td>${item.journey_date || item.date || ""}</td>
                <td>${item.journey_time || item.time || ""}</td>
                <td>${item.driver_name || "-"}</td>
                <td>${item.driver_phone || "-"}</td>
                <td>${item.vehicle_number || "-"}</td>
                <td>
<button onclick="manageBooking('${item.booking_id}')">
Manage
</button>
</td>

<td>
<button onclick="sendWhatsApp(
'${item.customer_phone}',
'${item.booking_id}',
'${item.customer_name}',
'${item.driver_name || ""}',
'${item.driver_phone || ""}',
'${item.vehicle_number || ""}',
'${item.fare || ""}'
)">
WhatsApp
</button>
</td>

<td>
<button onclick="generateInvoice(
'${item.booking_id}',
'${item.customer_name}',
'${item.customer_phone}',
'${item.pickup_location}',
'${item.drop_location}',
'${item.driver_name || ""}',
'${item.driver_phone || ""}',
'${item.vehicle_number || ""}',
'${item.fare || ""}'
)">
Invoice
</button>
</td>
        
            </tr>
            `;
        });

    } catch (err) {

        console.error(err);

        table.innerHTML =
        "<tr><td colspan='14'>System Error</td></tr>";
    }
}

async function manageBooking(bookingId) {

    const driverName =
    prompt("Driver Name");

    if (!driverName) return;

    const driverPhone =
    prompt("Driver Mobile");

    if (!driverPhone) return;

    const vehicleNumber =
    prompt("Cab Number");

    if (!vehicleNumber) return;

    const fare =
    prompt("Fare Amount");

    if (!fare) return;

    const { error } =
    await supabaseClient
    .from("bookings")
    .update({
  driver_name: driverName,
  driver_number: driverPhone,
  cab_number: vehicleNumber,
  fare: fare    
       booking_status: "Confirmed"
    })
    .eq("booking_id", bookingId);

    if (error) {

        alert("Update Failed");
        console.log(error);
        return;
    }

    alert("Booking Updated Successfully");

    loadBookings();
}

window.manageBooking = manageBooking;



function sendWhatsApp(
customerPhone,
bookingId,
customerName,
driverName,
driverPhone,
vehicleNumber,
fare
) {

const msg =

`🚖 Rishi Tours & Travels

Booking Confirmed ✅

Booking ID: ${bookingId}

Customer: ${customerName}

Driver: ${driverName}

Driver Mobile: ${driverPhone}

Cab Number: ${vehicleNumber}

Fare: ₹${fare}

Thank You For Choosing
Rishi Tours & Travels`;

window.open(
`https://wa.me/91${customerPhone}?text=${encodeURIComponent(msg)}`
);

}

window.sendWhatsApp = sendWhatsApp;

function generateInvoice(
bookingId,
customerName,
customerPhone,
pickup,
drop,
driverName,
driverPhone,
vehicleNumber,
fare
) {

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.setFontSize(18);
doc.text("Rishi Tours & Travels", 20, 20);

doc.setFontSize(12);

doc.text("Booking Invoice", 20, 35);
doc.text("Booking ID: " + bookingId, 20, 50);
doc.text("Customer: " + customerName, 20, 60);
doc.text("Phone: " + customerPhone, 20, 70);
doc.text("Pickup: " + pickup, 20, 85);
doc.text("Drop: " + drop, 20, 95);
doc.text("Driver: " + driverName, 20, 110);
doc.text("Driver Mobile: " + driverPhone, 20, 120);
doc.text("Cab Number: " + vehicleNumber, 20, 130);
doc.text("Fare: Rs. " + fare, 20, 145);

doc.text("Thank You For Choosing", 20, 170);
doc.text("Rishi Tours & Travels", 20, 180);

doc.save("Invoice-" + bookingId + ".pdf");
}

window.generateInvoice = generateInvoice;

