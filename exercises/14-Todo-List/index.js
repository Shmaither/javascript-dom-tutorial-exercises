let container = document.querySelector("#container");

window.onload = function() {
	console.log("The website was loaded...");
	container.innerHTML += `<button>Add Task</button>` + `<button>Delete Task</button>`;

	//let select = document.querySelector("#mySelect");
	//countries.forEach(elem => {
	//	select.innerHTML += `<option value="${elem}">${elem}</option>`;
	//});
};
