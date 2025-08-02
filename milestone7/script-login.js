function showLogin() {
	document.getElementById("login-account").style.display = "block";
	document.getElementById("create-account").style.display = "none";
}


function validateForm() {
	if (document.forms[0].myEmail.value == "") {
		alert("Please enter an e-mail address.");
		return false;
	} // end if
		return true;
} // end function validateForm
