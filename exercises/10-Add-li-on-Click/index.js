let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	
	let createli = document.createElement("li");
    createli.innerHTML = "Forth element";
    document.getElementById("myList").appendChild(createli);

	
});

