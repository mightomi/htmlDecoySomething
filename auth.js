function checkAuth() {
	console.log(document.getElementById("userName").value);

	if(document.getElementById("userName").value == 'admin' && document.getElementById("password").value == 'admin') {

		window.open('form.html');
	}

	else {
		alert("wrong password/ username");
	}
}