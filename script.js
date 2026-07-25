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
// ==============================
// Authorized User
// ==============================

nextButton.addEventListener("click", showAuthorizedUser);

function showAuthorizedUser(){

    nextButton.style.display = "none";

    statusText.textContent = "AUTHORIZED";

    databaseText.textContent = "ACCESS GRANTED";

    userText.textContent = "SB-555-0930";

    driverText.textContent = "FAIZ DRIVER";

    terminal.textContent = "";

    output = "";

    lineIndex = 0;

    charIndex = 0;

    const profile = [

        "SMART BRAIN DATABASE",
        "",
        "USER AUTHORIZED",
        "",
        "NAME : 戴崧原",
        "NAME(JP) : たい すうげん",
        "USER ID : SB-555-0930",
        "",
        "RANK : LEVEL A",
        "BELT : FAIZ GEAR",
        "STATUS : ACTIVE",
        "",
        "ACCESS PERMITTED."

    ];

    typeProfile(profile);

}
function typeProfile(lines){

    let l = 0;

    let c = 0;

    let text = "";

    function typing(){

        if(l >= lines.length){

            terminal.textContent = text;

            nextButton.innerText = "NEXT";

            nextButton.style.display = "block";

            return;

        }

        if(c < lines[l].length){

            text += lines[l][c];

            terminal.textContent = text + "█";

            c++;

            setTimeout(typing,30);

        }else{

            text += "\n";

            l++;

            c = 0;

            setTimeout(typing,180);

        }

    }

    typing();

}
