//These variable save the different elements of the calculator
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");
// This function adds the numbers together
button.addEventListener("click", doMath);

function doMath() {
    //This subtracts the numbers
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This function subracts the two numbers
    if(dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This function multiplies the numbers together
    if(dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This function divides the numbers together
    if(dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This function finds the power of the number you choose
    if(dropdown.value == "^"){
        answer = Math.pow(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = answer;
    }
    if(dropdown.value == "sqrt"){
        answer = Math.sqrt(parseInt(input1.value));
        display.innerHTML = answer;
    }
    
    
}




