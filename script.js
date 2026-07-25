const terminalText = document.getElementById("terminalText");
const nextButton = document.getElementById("nextButton");

const statusValue = document.getElementById("statusValue");
const userValue = document.getElementById("userValue");
const deviceValue = document.getElementById("deviceValue");

let currentScreen = 0;
let typing = false;

const screens = [
    bootScreen,
    authorizedScreen,
    equipmentScreen,
    standingByScreen,
    completeScreen,
    birthdayScreen,
    secretScreen
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text, speed = 28) {

    typing = true;
    nextButton.disabled = true;

    terminalText.textContent = "";

    for (const char of text) {

        terminalText.textContent += char;

        terminalText.scrollTop = terminalText.scrollHeight;

        await sleep(speed);

    }

    typing = false;
    nextButton.disabled = false;

}

function setStatus(status, user, device) {

    statusValue.textContent = status;
    userValue.textContent = user;
    deviceValue.textContent = device;

}

async function nextScreen() {

    if (typing) return;

    currentScreen++;

    if (currentScreen >= screens.length) {

        currentScreen = screens.length - 1;
        return;

    }

    await screens[currentScreen]();

}

nextButton.addEventListener("click", nextScreen);

window.onload = async () => {

    await screens[0]();

};

async function bootScreen() {

    setStatus(
        "INITIALIZING",
        "----------",
        "OFFLINE"
    );

    await typeText(

`SMART BRAIN SECURITY SYSTEM

Initializing...

Loading Core...
Loading Memory...
Loading Security...
Loading Driver Database...

SYSTEM READY.

Press NEXT.`

    );

}

async function authorizedScreen() {

    setStatus(
        "AUTHORIZED",
        "SB-555-0930",
        "CONNECTING"
    );

    await typeText(

`SMART BRAIN SECURITY SYSTEM

Authorization Complete

Welcome

USER NAME
戴崧原

JAPANESE NAME
たい すうげん

USER ID
SB-555-0930

SECURITY LEVEL
A

ACCESS GRANTED.

Press NEXT.`

    );

}

async function equipmentScreen() {

    setStatus(
        "SCANNING",
        "SB-555-0930",
        "FAIZ GEAR"
    );

    await typeText(

`Equipment Scan

Scanning Driver...

[ OK ] Faiz Gear ver.2

Scanning Weapon...

[ OK ] Faiz Edge

Scanning Axel Memory...

[ OK ]

SYSTEM RESULT

2 Equipment Verified

No Error Found.

Press NEXT.`

    );

}

async function standingByScreen() {

    setStatus(
        "READY",
        "SB-555-0930",
        "555 DRIVER"
    );

    nextButton.disabled = true;

    terminalText.textContent = "";

    const messages = [

        "Loading Faiz Driver...",
        "",
        "Checking Mission...",
        "",
        "Mission Approved.",
        "",
        "STANDING BY"

    ];

    for (const msg of messages) {

        terminalText.textContent += msg + "\n";

        await sleep(700);

    }

    nextButton.disabled = false;

}

async function completeScreen() {

    setStatus(
        "COMPLETE",
        "SB-555-0930",
        "FAIZ READY"
    );

    nextButton.disabled = true;

    terminalText.textContent = "";

    const messages = [

        "STANDING BY",
        "",
        "Complete.",
        "",
        "555 DRIVER ONLINE",
        "",
        "SMART BRAIN LINK ESTABLISHED",
        "",
        "MISSION READY"

    ];

    for (const msg of messages) {

        terminalText.textContent += msg + "\n";

        await sleep(650);

    }

    nextButton.disabled = false;

}

async function birthdayScreen() {

    setStatus(
        "MISSION",
        "SB-555-0930",
        "ONLINE"
    );

    await typeText(

`Mission File Opened

Target

戴崧原

Mission Date

Happy Birthday

Congratulations.

You have successfully completed another year.

May every dream come true.

May every challenge become your strength.

Thank you for always being by my side.

Today...

This system belongs only to you.

Happy Birthday ❤️

Press NEXT.`

    );

}

async function secretScreen() {

    setStatus(
        "SECRET FILE",
        "SB-555-0930",
        "CLASSIFIED"
    );

    nextButton.disabled = true;

    await typeText(

`========================================

SMART BRAIN
CONFIDENTIAL FILE

========================================

ACCESS LEVEL : A

OPENING SECRET FILE...

...

...

Hello 崧原 ❤️

其實今天不是什麼任務。

也沒有任何需要打倒的敵人。

今天唯一的任務，就是希望你開開心心。

謝謝你一直陪著我。

謝謝你包容我的任性。

謝謝你努力工作。

謝謝你讓我每天都覺得很幸福。

希望以後每一年，

我都還能陪你一起過生日。

最後...

生日快樂 ❤️

FROM

雅筑

========================================

MISSION COMPLETE

THANK YOU FOR PLAYING

SMART BRAIN SYSTEM

END OF FILE`

    );

    nextButton.textContent = "RESTART";

    nextButton.disabled = false;

    nextButton.onclick = async () => {

        currentScreen = 0;

        nextButton.textContent = "NEXT";

        nextButton.onclick = nextScreen;

        await screens[0]();

    };

}
