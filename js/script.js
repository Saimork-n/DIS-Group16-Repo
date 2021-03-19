// Script for side navigation
function w3_open() {
	var x = document.getElementById("mySidebar");
	x.style.width = "300px";
	x.style.paddingTop = "10%";
	x.style.display = "block";
}
// Close side navigation
function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
}
// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
	var x = document.getElementById("navDemo");
	if(x.className.indexOf("show") == -1) {
		x.className += " show";
	} else {
		x.className = x.className.replace(" show", "");
	}
}