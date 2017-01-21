var numBoxes = 6;
var colors = addingRandomColors(numBoxes);
var boxes = document.querySelectorAll(".boxes");
var correctColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var resultMessage = document.querySelector("#messageResult");
var h1Color = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");

//reset 
reset.addEventListener("click", function(){
	resetbtn();	
});

for (var i = 0; i < colors.length; i++) {
	//Assigning colors to the boxes
	boxes[i].style.background = colors[i];
	//Assigning question color to h1
	colorDisplay.textContent = correctColor;
	//Click on the boxes and and set as variable
	boxes[i].addEventListener("click",function(){
		var colorClicked = this.style.background;
		//Comparing clicked box to the correct color
		if (colorClicked === correctColor){
			resultMessage.textContent = "Correct"
			changeColor(colorClicked);
			h1Color.style.background = correctColor;
			reset.textContent = "Play Again?"	
		}else{
			resultMessage.textContent = "Try Again";
			this.style.background = "#232323";

		}
	});
}

//Adding colors to the array
function addingRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(genRandomColor());
	}
	return arr;
}

//Generating random colors
function genRandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
//Picking the color in the array
function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	 return colors[randomColor];
}
//Display the correct color in boxes and header
function changeColor(colors){
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.background = colors;
	}
}

//Setting up reset function
function resetbtn(){
	//Getting colors from the array
	colors = addingRandomColors(numBoxes);
	//Picking the right color
	correctColor = pickColor();
	//Displaying the correct color at header
	colorDisplay.textContent = correctColor;
	//Getting new colors for boxes 
	for (var i = 0; i < colors.length; i++) {
		boxes[i].style.background = colors[i];
	}
	h1Color.style.background = "#4682B4";
	resultMessage.textContent = "";
	reset.textContent = "New Colors";
}

//gameMode easy
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	medium.classList.remove("selected");
	numBoxes = 3;
	colors = addingRandomColors(numBoxes);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	for (var i = 0; i < boxes.length; i++) {
		if (colors[i]){
			boxes[i].style.background = colors[i];
			}else{
			boxes[i].style.display = "none";
			}
		}

});

//gameMode medium
medium.addEventListener("click",function(){
	easy.classList.remove("selected");
	medium.classList.add("selected");
	numBoxes = 6;
	colors = addingRandomColors(numBoxes);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	for (var i = 0; i < boxes.length; i++) {
			boxes[i].style.background = colors[i];
			boxes[i].style.display = "block";
			}
});













