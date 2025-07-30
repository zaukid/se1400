const inputVal = document.getElementById("userEmail");
let x = "";

function emailToLogin() {
	x = inputVal.value;
	localStorage.setItem('newEmail', x);
}