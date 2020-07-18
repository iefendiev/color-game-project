var numberOfSquares = 6;

var colors = generateColor(numberOfSquares);
var h1 = document.querySelector("h1")
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var theColor = document.getElementById("aim")
theColor.textContent = pickedColor
var message = document.querySelector("#msg")
var button = document.querySelector("button")
var easy = document.getElementById("easy")
var hard = document.getElementById("hard")
var triple = document.getElementById("triple");

begin=true
hard.classList.add("selected")

easy.addEventListener("click",function(){
    numberOfSquares=3;

    easy.classList.add("selected")
    hard.classList.remove("selected")

    colors = generateColor(numberOfSquares);
    pickedColor = pickColor();
    theColor.textContent = pickedColor

    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
             squares[i].style.backgroundColor = colors[i];
      }

        else{
             squares[i].style.display = "none";
      }

    }
})

hard.addEventListener("click",function(){
    numberOfSquares=6;

    hard.classList.add("selected")
    easy.classList.remove("selected")
    colors = generateColor(numberOfSquares);

    pickedColor = pickColor();
    theColor.textContent = pickedColor

    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
      
        squares[i].style.display = "block";
      
    }

})

button.addEventListener("click",function(){
    message.textContent = ""
    begin=true
    colors=generateColor(numberOfSquares);
    pickedColor = pickColor();
    theColor.textContent = pickedColor
    button.textContent="New Colors?"
    for(var i =0; i<colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";

})

if (begin){
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;

            if(clickedColor===pickedColor){
                message.textContent = "Correct"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                button.textContent="Play again?"
            }

            else{
                this.style.backgroundColor = "#232323";
                this.classList.add("noShadow");
                message.textContent = "Try again"
            }
        })
    }
}



function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;

        squares[i].classList.remove("noShadow")

        squares[i].classList.add("square")
    }
}

function pickColor(){
    var i = Math.floor(Math.random()*colors.length)
    return colors[i]
}

function generateColor(num){
    var liste=[];
    for(var i=0; i<num; i++){
        
        liste.push(randomColor())
    }
    return liste;
}

function randomColor(){

    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)

//rgb(r, g, b)

    return "rgb(" + r + "," + " "+ g +", "+ b+")";
}