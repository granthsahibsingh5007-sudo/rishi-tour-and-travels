document.getElementById("bookBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const vehicle = document.getElementById("vehicle").value;
    const service = document.getElementById("service").value;
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (
        !name ||
        !mobile ||
        !pickup ||
        !drop ||
        !date ||
        !time
    ) {
        alert("Please fill all details");
        return;
    }

    const bookingId =
        "RTT-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(1000 + Math.random() * 9000);

    const message =
`🚖 Rishi Tours & Travels Booking

🆔 Booking ID: ${bookingId}
👤 Name: ${name}
📞 Mobile: ${mobile}
🚘 Vehicle: ${vehicle}
🛣 Service: ${service}
📍 Pickup: ${pickup}
📍 Drop: ${drop}
📅 Date: ${date}
⏰ Time: ${time}`;

    const whatsappNumber = "918651568297";

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    alert(
        "Booking Submitted Successfully!\n\nBooking ID: " +
        bookingId
    );

    window.open(url, "_blank");
});
