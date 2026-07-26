const pages = [

{
title:"SMART BRAIN",
subtitle:"SYSTEM ONLINE",
body:"",
button:"▶ NEXT"
},

{
title:"AUTHORIZED",
subtitle:"USER VERIFIED",
body:`戴崧原

SB-555-0930`,
button:"▶ NEXT"
},

{
title:"FAIZ SYSTEM",
subtitle:"CONNECTED",
body:`✔ FAIZ GEAR

✔ FAIZ EDGE

✔ FAIZ AXEL`,
button:"▶ NEXT"
},

{
title:"STANDING BY",
subtitle:"",
body:"",
button:""
},

{
title:"MISSION",
subtitle:"TARGET",
body:"戴崧原",
button:"▶ NEXT"
},

{
title:"MISSION",
subtitle:"",
body:"HAPPY BIRTHDAY",
button:"▶ NEXT"
},

{
title:"Dear 崧原",
subtitle:"",
body:`生日快樂 ❤️

今天的世界沒有危險

唯一的任務

就是祝你生日快樂❤️

Love

雅筑`,
button:"▶ RESTART"
}

];

const title=document.getElementById("title");
const subtitle=document.getElementById("subtitle");
const body=document.getElementById("body");
const btn=document.getElementById("nextBtn");
const card=document.getElementById("card");

let page=0;

function sleep(ms){

return new Promise(r=>setTimeout(r,ms));

}

async function typeText(el,text){

el.innerHTML="";

for(let i=0;i<text.length;i++){

el.innerHTML+=text[i];

await sleep(25);

}

}

async function render(){

card.classList.remove("fade-in");

card.classList.add("fade-out");

await sleep(350);

const data=pages[page];

title.className="";

subtitle.className="";

body.className="";

title.textContent=data.title;

subtitle.textContent=data.subtitle;

body.innerHTML="";

btn.textContent=data.button;

card.classList.remove("fade-out");

card.classList.add("fade-in");

if(page===3){

btn.style.display="none";

title.classList.add("big");

title.textContent="STANDING BY";

subtitle.textContent="";

body.textContent="";

await sleep(1800);

title.textContent="Complete.";

await sleep(1500);

page++;

render();

return;

}

await typeText(body,data.body);

if(page===6){

btn.style.display="block";

}

else{

btn.style.display="block";

}

}
btn.addEventListener("click", async () => {

    if (page === pages.length - 1) {

        page = 0;

        render();

        return;

    }

    page++;

    render();

});

render();
