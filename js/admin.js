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

/* TEST DATA */

document.getElementById("bookingTable").innerHTML = `
<tr>
<td>RTT001</td>
<td>Rahul Kumar</td>
<td>9876543210</td>
<td>Dzire</td>
<td>One Way</td>
<td>Jamshedpur</td>
<td>Ranchi</td>
<td>10-06-2026</td>
<td>08:00 AM</td>
<td>
<input type="text" value="Ramesh Singh">
</td>
<td>
<input type="text" value="9876543211">
</td>
<td>
<input type="text" value="JH05AB1234">
</td>
<td>
<button onclick="alert('Booking Confirmed')">
Confirm
</button>
</td>
</tr>
`;

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
