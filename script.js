// ===============================
// SMART BRAIN V4
// SCRIPT.JS
// ===============================

const terminalText = document.getElementById("terminalText");
const nextButton = document.getElementById("nextButton");

const statusValue = document.getElementById("statusValue");
const userValue = document.getElementById("userValue");
const deviceValue = document.getElementById("deviceValue");

let currentScreen = 0;
let isTyping = false;

// ===============================
// 共用工具
// ===============================

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateStatus(status, user, device) {

    statusValue.textContent = status;
    userValue.textContent = user;
    deviceValue.textContent = device;

}

async function typeWriter(text, speed = 25) {

    isTyping = true;

    nextButton.disabled = true;

    terminalText.textContent = "";

    for (let i = 0; i < text.length; i++) {

        terminalText.textContent += text[i];

        terminalText.scrollTop = terminalText.scrollHeight;

        await sleep(speed);

    }

    isTyping = false;

    nextButton.disabled = false;

}

// ===============================
// 畫面控制
// ===============================

const pages = [

    bootScreen,
    authorizedScreen,
    equipmentScreen,
    standingByScreen,
    completeScreen,
    birthdayScreen,
    secretScreen

];

async function showPage(index){

    if(index < 0) return;

    if(index >= pages.length) return;

    currentScreen = index;

    await pages[index]();

}

async function nextPage(){

    if(isTyping) return;

    if(currentScreen >= pages.length-1) return;

    await showPage(currentScreen + 1);

}

nextButton.addEventListener("click", nextPage);

window.addEventListener("load", () => {

    showPage(0);

});
// ===============================
// Boot
// ===============================

async function bootScreen() {

    updateStatus(
        "INITIALIZING",
        "----------",
        "OFFLINE"
    );

    await typeWriter(

`SMART BRAIN SECURITY TERMINAL

> Booting System...

> Checking Security...

> Connecting Database...

> Searching User...

> Loading Driver...


> Authorization Complete.

Press NEXT.`

    );

}


// ===============================
// Authorized User
// ===============================

async function authorizedScreen(){

    updateStatus(
        "AUTHORIZED",
        "SB-555-0930",
        "ONLINE"
    );

    await typeWriter(

`SMART BRAIN SECURITY TERMINAL

ACCESS LEVEL : A

Authorization Success.

USER NAME

戴崧原

JAPANESE

たい すうげん

USER ID

SB-555-0930

STATUS

AUTHORIZED

Press NEXT.`

    );

}


// ===============================
// Equipment Scan
// ===============================

async function equipmentScreen(){

    updateStatus(
        "SCANNING",
        "SB-555-0930",
        "FAIZ SYSTEM"
    );

    await typeWriter(

`Equipment Scan

Scanning Driver...

[ OK ] Faiz Gear ver.2

Scanning Weapon...

[ OK ] Faiz Edge

Scanning Axel...

[ OK ]

Checking Database...

No Error Found.

Equipment Ready.

Press NEXT.`

    );

}// ===============================
// Standing By
// ===============================

async function standingByScreen(){

    updateStatus(
        "READY",
        "SB-555-0930",
        "555 DRIVER"
    );

    nextButton.disabled = true;

    terminalText.textContent = "";

    const lines = [

        "Checking Driver...",
        "",
        "Driver Verified.",
        "",
        "Checking Mission...",
        "",
        "Mission Approved.",
        "",
        "Standing By"

    ];

    for(const line of lines){

        terminalText.textContent += line + "\n";

        terminalText.scrollTop = terminalText.scrollHeight;

        await sleep(650);

    }

    nextButton.disabled = false;

}


// ===============================
// Complete
// ===============================

async function completeScreen(){

    updateStatus(
        "COMPLETE",
        "SB-555-0930",
        "FAIZ READY"
    );

    nextButton.disabled = true;

    terminalText.textContent = "";

    const lines = [

        "Standing By",
        "",
        "Complete.",
        "",
        "555 DRIVER ONLINE",
        "",
        "SMART BRAIN LINK",
        "CONNECTED",
        "",
        "MISSION READY"

    ];

    for(const line of lines){

        terminalText.textContent += line + "\n";

        terminalText.scrollTop = terminalText.scrollHeight;

        await sleep(650);

    }

    nextButton.disabled = false;

}// ===============================
// Happy Birthday
// ===============================

async function birthdayScreen(){

    updateStatus(
        "MISSION",
        "SB-555-0930",
        "ONLINE"
    );

    await typeWriter(

`MISSION FILE

Target

戴崧原

Congratulations.

今天沒有任何敵人。

今天唯一的任務，

就是祝你生日快樂。

謝謝你一直陪著我。

謝謝你總是照顧我。

希望未來每一年，

我們都能一起迎接生日。

Happy Birthday ❤️

Press NEXT.`

    );

}


// ===============================
// Secret File
// ===============================

async function secretScreen(){

    updateStatus(
        "SECRET FILE",
        "SB-555-0930",
        "CLASSIFIED"
    );

    await typeWriter(

`==================================

SMART BRAIN

CONFIDENTIAL FILE

==================================

ACCESS LEVEL : A

FILE OPENED...

Hello 崧原 ❤️

其實...

今天沒有任何任務。

沒有任何 Orphnoch。

沒有任何危險。

今天只是想告訴你：

謝謝你。

謝謝你一直陪著我。

謝謝你的包容。

謝謝你的努力。

希望未來的每一天，

我都能陪著你。

願你的夢想都能實現。

願你的笑容一直都在。

生日快樂 ❤️

FROM

雅筑

==================================

MISSION COMPLETE

THANK YOU

END OF FILE`

    );

    nextButton.textContent = "RESTART";

    nextButton.disabled = false;

    nextButton.onclick = () => {

        location.reload();

    };

}
