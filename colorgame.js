var numSquares = 6
var colors = generateRandomColor(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");


//mode buttons event listener
for(var i = 0; i< modeButtons.length ; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        //this 1 statement equals to 4 lines of if else statement code
        //it has 3 parts first is condition the second is else after : operator
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.textContent === "Easy"){
        //     numSquares = 3;
        // }
        // else{
        //     numSquares = 6;
        // }
        reset();
    });

}

function reset(){
    //click button new colors generate
    colors = generateRandomColor(numSquares);
    //pick new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}



// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i =0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i =0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block"; 
//     }
// });

resetBtn.addEventListener("click", function(){
    // //click button new colors generate
    // colors = generateRandomColor(numSquares);
    // //pick new random color
    // pickedColor = pickColor();
    // //change colorDisplay to match picked Color
    // colorDisplay.textContent = pickedColor;
    // //change the colors of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    // messageDisplay.textContent = "";
    // this.textContent = "New Colors";

    reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of square
        var clickedColor = this.style.backgroundColor;
        //grab color of pickedColor
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again";
        }
    }); 
}

//a function to change colors of all squares if guessed correctly
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//This function is to generate random color for us to pick
function pickColor(){
    //to generate random whole number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//This function is to generate random color in rgb mode
function generateRandomColor(num){
    //make an empty array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
} 

//This function is to generate random color values r + g + b
function randomColor(){
    //pick red from 0 to 255
    var r = Math.floor(Math.random() * 256); 
    //pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    //returning the string for each random color
    return "rgb(" + r +", " + g +", " + b +")";
}
