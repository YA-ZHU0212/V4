// ==============================
// SMART BRAIN TERMINAL V4
// ==============================

const terminal = document.getElementById("terminalText");

const nextButton = document.getElementById("nextButton");

const statusText = document.getElementById("statusText");
const databaseText = document.getElementById("databaseText");
const userText = document.getElementById("userText");
const driverText = document.getElementById("driverText");

const bootLines = [

    "SMART BRAIN SECURITY TERMINAL",
    "",
    "> Booting System...",
    "> Checking Security...",
    "> Connecting Database...",
    "> Searching User...",
    "> Loading Driver...",
    "",
    "> Authorization Complete."

];

let lineIndex = 0;

let charIndex = 0;

let output = "";

function typeLine(){

    if(lineIndex >= bootLines.length){

        finishBoot();

        return;

    }

    const line = bootLines[lineIndex];

    if(charIndex < line.length){

        output += line.charAt(charIndex);

        terminal.textContent = output + "█";

        charIndex++;

        setTimeout(typeLine,35);

    }else{

        output += "\n";

        terminal.textContent = output + "█";

        lineIndex++;

        charIndex = 0;

        setTimeout(typeLine,220);

    }

}
function finishBoot(){

    terminal.textContent = output;

    statusText.textContent = "ONLINE";

    databaseText.textContent = "CONNECTED";

    userText.textContent = "FOUND";

    driverText.textContent = "READY";

    nextButton.style.display = "block";

}
window.onload = () => {

    setTimeout(typeLine,600);

};
