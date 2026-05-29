<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rishi Tours & Travels</title>

  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <h1>Welcome To Rishi Tours & Travels</h1>
  <p>Luxury Cab Booking Service in Jamshedpur</p>

  <img src="taxi.jpeg" width="300">

  918651568297
  
  <button>Book Now</button>
  document.querySelector("button").addEventListener("click", function () {

    let name = document.querySelector('input[placeholder="Customer Name"]').value;
    let mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
    let pickup = document.querySelector('input[placeholder="Pickup Location"]').value;
    let drop = document.querySelector('input[placeholder="Drop Location"]').value;

    if(name === "" || mobile === "" || pickup === "" || drop === ""){
        alert("Please fill all details");
        return;
    }

    let message =
`🚖 Rishi Tours & Travels Booking

👤 Name: ${name}
📞 Mobile: ${mobile}
📍 Pickup: ${pickup}
📍 Drop: ${drop}`;

    let whatsappNumber = "917991148146";

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});

    <script src="js/booking.js"></script>
</body>
</html>
