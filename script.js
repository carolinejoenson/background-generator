var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//set input colors to same as in css file on first page load
color1.value = "#ff0000";
color2.value = "#ffff00";


//map letter in hex color to number
function mapLetterToNumber(letter) {
    let answer = "";
    switch (letter){
        case "a":
        answer = "10";
        break;
        case "b":
        answer = "11";
        break;
        case "c":
        answer = "12";
        break;
        case "d":
        answer = "13";
        break;
        case "e":
        answer = "14";
        break;
        case "f":
        answer = "15";
        break;
        default:
        answer = letter;
    }
    return answer;
}


//convert hex color to rgb	
function hexToRgb(hexColorValue){
    let hexColorRed = "";
    let hexColorGreen = "";
    let hexColorBlue = "";
    for (i=1; i<hexColorValue.length; i++){     
        if (i>0 && i<3){
            hexColorRed = ((parseInt(mapLetterToNumber(hexColorValue[1]) * 16)) + (parseInt(mapLetterToNumber(hexColorValue[2]))));
        }
        else if (i>2 && i<5){
            hexColorGreen = ((parseInt(mapLetterToNumber(hexColorValue[3]) * 16)) + parseInt(mapLetterToNumber(hexColorValue[4])));
        }
        else {
            hexColorBlue = ((parseInt(mapLetterToNumber(hexColorValue[5]) * 16)) + parseInt(mapLetterToNumber(hexColorValue[6])));
        }
    }
    return ("rgb(" + hexColorRed + "," + hexColorGreen + "," + hexColorBlue + ")");
}


//display first colors
css.textContent = body.style.background + "linear-gradient(to right, " 
+ hexToRgb(color1.value)
+ ", " 
+ hexToRgb(color2.value)
+ ");";


//change color
function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    //display new color
    css.textContent = body.style.background + ";";
}
//run function when user enters input
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


//add button to generate random numbers for the two input values
var button = document.createElement("button");
button.innerHTML ="Generate random colors";
button.addEventListener("click", function(){
    color1.value = "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0');
    color2.value = "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0');
    setGradient();
});
body.appendChild(button);