
const display = document.getElementById("display");


function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value; 
    } else {
        display.innerText += value; 
    }
}


function deleteLast() {
    const currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1); 
    } else {
        display.innerText = "0"; 
    }
}


function clearDisplay() {
    display.innerText = "0";
}


function calculateResult() {
    try {
        const result = eval(display.innerText); 
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error"; 
    }
}
