var body = document.getElementById("gradient");
var input = document.getElementById("input");
var input1 = document.getElementById("input1");

function setBackgroundColor() {

	console.log("hello" + input.value);
	
	body.style.background = "linear-gradient(to right," 
							+input.value+","
							+ input1.value+")"
}

function setLoad(){
	console.log("loaded");
	//document.write(body.style.background);
}

input.addEventListener("input", setBackgroundColor);
input1.addEventListener("input", setBackgroundColor);
window.addEventListener("load",setLoad);