window.onload = function() {
	console.log("The website was loaded...");

	let button = document.createElement("button");
	button.id = "myButton";
	button.innerHTML = "Add Task";
	document.querySelector("#container").appendChild(button);

	let myButton = document.querySelector("#myButton");
	myButton.addEventListener("click", function() {
		let newTask = document.querySelector("#addToDo").value;
		console.log(newTask);

		let father = document.querySelector("ul");
		let child = document.createElement("li");
		child.innerHTML = '<span><i class="fa fa-trash"></i></span>' + newTask;
		father.appendChild(child);

		call();
	});
};

function call() {
	const lis = document.querySelectorAll("li");
	console.log(lis);

	// for (const li of lis) {
	// 	li.addEventListener("click", function() {
	// 		this.parentNode.removeChild(this);
	// 	});
	// }

	lis.forEach(elem => {
		elem.addEventListener("click", function() {
			elem.parentNode.removeChild(elem);
		});
	});
}
