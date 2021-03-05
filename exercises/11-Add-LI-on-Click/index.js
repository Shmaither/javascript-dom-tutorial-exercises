let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let elem = document.createElement("li");
	elem.innerHTML = "Forth element";
	document.querySelector("#myList").appendChild(elem);
});
