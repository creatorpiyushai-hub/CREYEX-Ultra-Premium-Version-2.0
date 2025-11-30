// CREYEX Ultra-Premium — Clean & Final Version
// HERO auto-hide + canned replies + typing animation

const replies = [
  { keys:["hi","hello","hey"], msg:"Hello — I’m <b>CREYEX</b>, your AI Co-Founder. Tell me your skills, budget and location." },
  { keys:["skill","i know"], msg:"Ideas:<br/>1) Editing Agency<br/>2) Cloud Kitchen<br/>3) Branding Studio<br/><br/>Type a number." },
  { keys:["1"], msg:"Plan: Editing Agency — ₹800–1500/video. Break-even ~4 months." },
  { keys:["finance"], msg:"12-mo Estimate: ₹22k/mo → ₹1.2L profit (approx)." },
  { keys:["legal"], msg:"Register as Udyam MSME. Docs: Aadhaar, PAN, Bank proof." }
];

const chat = document.getElementById("chatArea");
const input = document.getElementById("messageInput");
const btn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");
const hero = document.getElementById("hero");

let heroGone = false;

function now(){
  return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}

function hideHero(){
  if(heroGone) return;
  heroGone = true;
  hero.style.opacity = "0";
  hero.style.height = "0px";
  hero.style.margin = "0px";
  hero.style.padding = "0px";
  setTimeout(()=> hero.remove(), 260);
}

function botReply(text){
  const box = document.createElement("div");
  box.className = "message assistant";
  box.innerHTML = `<div class="msg-avatar">CR</div>
                   <div class="content">${text} <small style="opacity:.6">(${now()})</small></div>`;
  chat.appendChild(box);
  chat.scrollTop = chat.scrollHeight;
}

function userReply(text){
  const box = document.createElement("div");
  box.className = "message user";
  box.innerHTML = `<div class="content">${text} (${now()})</div>`;
  chat.appendChild(box);
}

function findReply(msg){
  const t = msg.toLowerCase();
  for(const r of replies){
    for(const k of r.keys){
      if(t.includes(k)) return r.msg;
    }
  }
  return "I didn’t catch that. Try: skills, finance, legal.";
}

function send(){
  const text = input.value.trim();
  if(!text) return;

  hideHero();
  userReply(text);
  chat.scrollTop = chat.scrollHeight;
  input.value = "";

  const reply = findReply(text);

  typing.style.display = "flex";
  setTimeout(()=>{
    typing.style.display = "none";
    botReply(reply);
  }, 650);
}

btn.addEventListener("click", send);
input.addEventListener("keydown", e=>{
  if(e.key==="Enter"){ send(); }
});
