console.log("Good Morning");
// window.alert("Be safe");
console.log(window);
console.dir(window);
console.dir(window.document);
console.log(window.document.body);
console.dir(window.document.body.childNodes[1]);

//DOM Manipulation
//1).Selecting with Id
let newHeading = document.getElementById("heading1"); //h1
newHeading.innerText = "Full Stack development";
newHeading.style.background = "Green";
newHeading.style.color = "Red";
console.log(newHeading);

// 2).Selecting with class
let newClass = document.getElementsByClassName("c1");
// newClass.style.background = "Green";
console.log(newClass);


//3).Selecting with tag
let para = document.getElementsByTagName("p");
console.log(para);

//Query Selector

