window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	let select = document.querySelector("#mySelect");
	countries.forEach(elem => {
		select.innerHTML += `<option value="${elem}">${elem}</option>`;
	});
};

let button = document.querySelector("#superbutton");
button.addEventListener("click", function() {
	let selectRetrieve = document.querySelector("#mySelect").value;
	alert(selectRetrieve);
});
