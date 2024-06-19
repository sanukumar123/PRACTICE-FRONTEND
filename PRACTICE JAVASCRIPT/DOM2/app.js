// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let id2 = div.setAttribute("id", "box2");
// console.log(id2);

// let p = document.querySelector("p");
// console.log(p);
// let pa = p.getAttribute("class");
// console.log(pa);

// let div = document.querySelector("#box");

let newBtn = document.createElement("button");
newBtn.innerText = "Inside Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let newBtn2 = document.createElement("button");
newBtn2.innerText = "Outside Click me!";
console.log(newBtn2);

let div2 = document.querySelector("#box2");
div2.after(newBtn2);

let para = document.querySelector("p");
para.remove();

let newBtn3 = document.createElement("button");
newBtn3.innerText = "Click me!";

//add font color as white
newBtn3.style.color = "white";
//add bgcolor as red
newBtn3.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn3);