function login(){

const user =
document.getElementById("username").value;

const pass =
document.getElementById("password").value;

if(user==="Rishi" && pass==="5007"){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

loadBookings();

}
else{
alert("Wrong Login");
}

}

function logout(){
location.reload();
}

function loadBookings(){

const bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

const table =
document.getElementById("bookingTable");

table.innerHTML="";

bookings.forEach(item=>{

table.innerHTML += `
<tr>
<td>${item.bookingId}</td>
<td>${item.name}</td>
<td>${item.mobile}</td>
<td>${item.vehicle}</td>
<td>${item.service}</td>
<td>${item.pickup}</td>
<td>${item.drop}</td>
<td>${item.date}</td>
<td>${item.time}</td>
</tr>
`;

});

}
