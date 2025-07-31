# 🧠 JavaScript DOM Projects – Day 3 Practice

Welcome to **Day 3** of my JavaScript Training Series!  
This repository showcases **DOM Manipulation**, **Event Handling**, and **Live Clock Implementation** using **pure JavaScript**. All examples are beginner-friendly and interview-focused.

> 🚀 Focus: `createElement`, `innerHTML`, `addEventListener`, `setTimeout`, `style.display`

## 📌 Tasks & Solutions in `DAY3.js`

### ✅ Q1. Create a Button → Add `<h1>` tag with "MERN stack" on Click

**Objective:** On button click, replace/add an `<h1>` element that displays `"MERN stack"`.

function ak() {
  let ele = document.getElementsByTagName("h1");
  ele[0].innerHTML = "MERN stack";
}
✅ Q2. Live Digital Clock (HH:MM:SS Format)
Objective: Show live-updating digital clock on the page using JavaScript.
function clock() {
    let date = new Date();
    let h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = h % 12;
    h = h ? h : 12;
    let ampm = h >= 12 ? " PM " : " AM ";
    let time = h + ":" + m + ":" + s + "" + ampm;
    document.getElementById("Myclock").innerHTML = time;
    setTimeout(clock, 1000);
}
clock();
✅ Q3. Replace Page Text with "Welcome to Elevation Academy"
Objective: On button click, change the entire content to a welcome message.
function rep() {
  document.body.innerHTML = "<h1>Welcome to Elevation academy</h1>";
}
✅ Q4. Hide "Hello World" Text on Button Click
Objective: On click, hide the heading element containing "Hello World".

function hid() {
  let hi = document.getElementsByTagName("h2");
  hi[0].style.display = "none";
}
🧾 File Structure

INTERVIEW.QUE.JS.DAY-3/
│
├── index.html       # 🔘 HTML structure with buttons and content
├── DAY3.js          # ✅ JavaScript code for all 4 DOM tasks
└── README.md        # 📘 Project documentation
🎯 Learning Outcomes
Hands-on practice with DOM methods like getElementsByTagName, innerHTML, style.display

Implemented a real-time clock using Date() and setTimeout

Learned how to use events like onclick to update DOM elements dynamically

Improved confidence with interactive JS-based UIs

🙏 Special Thanks
A huge shoutout to #LakhwindarSir for breaking down DOM concepts so clearly.
Your teaching makes coding feel creative, practical, and fun! 🙏❤️

👨‍💻 About Me
Hi! I’m Akash Mishra, a MERN Stack Developer 🚀
Currently polishing my JavaScript skills by building daily interview-based practice projects.

🔗 GitHub Profile
📅 #Day3 of my practical JavaScript DOM series

📌 Tags
#JavaScript #DOMManipulation #EventHandling #DigitalClock #FrontendDevelopment
#MERNStack #AkashMishra #LakhwindarSir #LearningByDoing #100DaysOfCode


