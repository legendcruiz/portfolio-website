// ===== HERO TYPING =====
const text = "Frontend Engineer • UI Builder • Game Developer";
let i = 0;

function typeEffect(){
const el = document.querySelector(".typing");
if(!el) return;

el.textContent = text.slice(0,i);
i++;

if(i <= text.length){
setTimeout(typeEffect, 50);
}
}
typeEffect();


// ===== SCROLL REVEAL (FAANG STYLE PERF OPTIMIZED) =====
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => {
observer.observe(el);
});


// ===== CV MODAL =====
function openCV(){
document.getElementById("cvModal").style.display = "flex";
}

function closeCV(){
document.getElementById("cvModal").style.display = "none";
}


// ===== CHAT SYSTEM (FAANG CLEAN VERSION) =====
function toggleChat(){
document.getElementById("chatBox").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

const input = document.getElementById("chatInput");

if(input){
input.addEventListener("keypress", (e) => {
if(e.key === "Enter"){
const msg = input.value;
input.value = "";

add("You", msg);
reply(msg);
}
});
}

});

function add(sender,text){
const box = document.getElementById("chatMessages");
box.innerHTML += `<p><b>${sender}:</b> ${text}</p>`;
box.scrollTop = box.scrollHeight;
}


// ===== FAANG-LEVEL AI BRAIN =====
function reply(input){
input = input.toLowerCase();

let res = "";

const map = [
{
k:["skill","stack","tech"],
v:"HTML, CSS, JavaScript, UI Design, Game Development, Responsive Design"
},
{
k:["project"],
v:"Portfolio Website, WhatsApp Clone, Zombie Shooter Game"
},
{
k:["hire","job"],
v:"Use Hire Me button or email: legendcruiz18@gmail.com"
},
{
k:["cv","resume"],
v:"Click View CV or Download CV button"
},
{
k:["hello","hi"],
v:"Hello 👋 I'm Emmanuel's portfolio assistant"
}
];

const found = map.find(item =>
item.k.some(word => input.includes(word))
);

res = found ? found.v : "Ask me about skills, projects, CV or hiring.";

setTimeout(() => add("AI", res), 400);
}