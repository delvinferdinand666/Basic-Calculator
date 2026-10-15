//1. add button functionality
//event-bubbling (apply event listener to the parent, and the children all got event listener)
const button = document.querySelector(".calc-btn");
const screen = document.querySelector(".screen");

let total = 0;
let previousOperator;
let virtual = 0;

button.addEventListener("click", function(event) {
    //screen.innerText = event.target.innerText;
    handleButtonClick(event.target.innerText);
});

function handleButtonClick(buttonClick) {
    if (isNaN(buttonClick) == true) {
        handleOps(buttonClick);
} else {
    if (virtual == 0) {
        virtual = buttonClick;
    } else {
        virtual = virtual + buttonClick;
    }
}
    screen.innerText = virtual;
}

function handleOps(buttonClick) {
    if (buttonClick == "C") {
        virtual = "0";
        total = 0;
        previousOperator = 0;

    } else if (buttonClick == "<--") {
        if (virtual.length == 1) {
            virtual = "0";
        } else {
            virtual = virtual.substring(0, virtual.length - 1);
        }
    } else if (buttonClick == "=") {
      if (previousOperator == null) {
        return;
      }  else {
        doTheMath(parseInt(virtual));
        previousOperator = null;
        virtual = "" + total;
        total = 0;
      }
    } 
    else {
        handleCalculation(buttonClick)
    }

     screen.innerText = virtual;
}

function handleCalculation(buttonClick) {
    let tempNum = parseInt(virtual);
    if (total ==0) {
        total = tempNum;
        console.log(total);
    } else {
        doTheMath(tempNum);
    }
    previousOperator = buttonClick;
    virtual = 0;
}

function doTheMath(tempNum){
    if (previousOperator == "+") {
        total = total + tempNum;
    } else if (previousOperator == "-") {
        total = total - tempNum;
    } else if (previousOperator == "/") {
        total = total / tempNum;
    } else {
        total = total * tempNum;
    }
}