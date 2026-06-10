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
                <td>Manage</td>
                <td>WhatsApp</td>
            </tr>
            `;
        });

    } catch (err) {

        console.error(err);

        table.innerHTML =
        "<tr><td colspan='14'>System Error</td></tr>";
    }
}
