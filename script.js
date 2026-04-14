
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
menu.classList.remove("active");
overlay.classList.remove("active");
});

// CONTACT FORM
const form = document.getElementById("contactForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", async function(e){
e.preventDefault();

const data = new FormData(form);

const res = await fetch(form.action, {
method: "POST",
body: data,
headers: { 'Accept': 'application/json' }
});

if(res.ok){
message.innerText = "Message Sent!";
form.reset();
}
});