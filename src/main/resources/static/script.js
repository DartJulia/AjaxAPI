/**
 * 
 */

// id from button on index page
var btn = document.getElementById("btn");
var sciDiv = document.getElementById("science"); // will be used to dump the API data into the page

btn.addEventListener("click",function() {
	var ourRequest = new XMLHttpRequest();
	
	// this will open the connection and allow us to get some data
	// the first parameter is what we want to do
	// the second parameter will be json url

	ourRequest.open("GET","https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");
	
	// need the send() to send the request to the API
	ourRequest.send();
	// using an anonymous function (no name) to assign the value to ourRequest once its loaded
	ourRequest.onload = function() {
	//console.log(ourRequest.responseText);
		// the JSON.parse() let's out app know to render this as JSON and not just text
		// this lets us retrieve the data using the key and value pairs or index if an array
	var ourData = JSON.parse(ourRequest.responseText);
	
	renderHTML(ourData);
	
	};
	
});


// Creating a new method to render the data to my html page
function renderHTML(data) { 
	for(i = 0; i < data.complete.length;i++) {
	var htmlString = "<p> Person: " + data.complete[i].firstName + " " + data.complete[i].lastName + " Invented: "+ data.complete[i].innovation + " Year: " + data.complete[i].year + "</p>";
	sciDiv.insertAdjacentHTML("beforeend",htmlString);
	
	}
}



