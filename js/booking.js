document.getElementById("bookingForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const bookingId =
        "RTT" + Math.floor(1000 + Math.random() * 9000);

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const cabModel = document.getElementById("cabModel").value;
    const tripType = document.getElementById("tripType").value;
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const { error } = await supabaseClient
      .from("bookings")
      .insert([
        {
          booking_id: bookingId,
          customer_name: name,
          customer_phone: phone,
          cab_model: cabModel,
          trip_type: tripType,
          pickup_location: pickup,
          drop_location: drop,
          journey_date: date,
          journey_time: time
        }
      ]);

    if (error) {
        alert("Database Save Failed");
        console.log(error);
        return;
    }

    const whatsappNumber = "918651568297";

    const message =
`🚖 Rishi Tours & Travels

Booking ID: ${bookingId}

👤 Customer Name:
${name}

📞 Mobile:
${phone}

🚘 Cab Model:
${cabModel}

🛣️ Trip Type:
${tripType}

📍 Pickup:
${pickup}

📍 Drop:
${drop}

📅 Date:
${date}

⏰ Time:
${time}`;

    const url =
      https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)};

    alert("Booking Saved Successfully");

    window.open(url, "_blank");

    document.getElementById("bookingForm").reset();
});
