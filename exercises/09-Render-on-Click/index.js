function myFunction() {

	// Create an "li" node:
	const node = document.createElement("p");
	
	// Create a text node:
	const textnode = document.createTextNode("Hello World");
	node.style.background = "#FFFF00"
	//node.querySelector("p").style.background = "yellow";
	
	// Append the text node to the "li" node:
	node.appendChild(textnode);
	
	// Append the "li" node to the list:
	document.body.appendChild(node);
	}







const button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elementoCreado = document.createElement("div");
    elementoCreado.style.background="yellow";
    elementoCreado.innerHTML = "Hello World";
    document.body.appendChild(elementoCreado);
	
});

/*function myFunction() {

	// Create an "li" node:
	const node = document.createElement("p");
	
	// Create a text node:
	const textnode = document.createTextNode("melon soy un parrafo");
	//node.querySelector("p").style.background = "yellow";
	
	// Append the text node to the "li" node:
	node.appendChild(textnode);
	
	// Append the "li" node to the list:
	document.getElementById("myList").appendChild(node);
	}*/