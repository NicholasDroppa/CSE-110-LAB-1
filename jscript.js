var form = document.getElementById("subscribe-form");
function alertSubFunc()
{
	var email = document.getElementById("emailField").value;
	alert("Subscriber added: " + email);
}
window.onload = function()
{
	document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}