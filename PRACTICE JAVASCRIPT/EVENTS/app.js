let btn3 = document.querySelector("#btn3");

// btn3.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX);
//   console.log(e.clientY);
// }

btn3.addEventListener("click", (e) => {
  console.log("btn3 was clicked by Handler1");
  // console.log(e);
  // console.log(e.type);
  // console.log(e.target);
  // console.log(e.clientX);
  // console.log(e.clientY);
})
btn3.addEventListener("click", (e) => {
  console.log("btn3 was Clicked by Handler2");
  // console.log(e);
  // console.log(e.type);
  // console.log(e.target);
  // console.log(e.clientX);
  // console.log(e.clientY);
})
const handler3 = () => {
  console.log("btn3 was clicked by Handler3");
}

btn3.addEventListener("click", handler3);

btn3.addEventListener("click", () => {
  console.log("btn3 was clicked by Handler4");
})

const handler5 = () => {
  console.log("btn3 was clicked by Handler5");
  let a = 10;
  let b = 90;
  console.log(a+b);
  console.log("Aise v Kar sakte h");
}

btn3.addEventListener("click", handler5);

//If we want to remove 3rd event Handler
btn3.removeEventListener("click", handler3);

let Toggle = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
Toggle.addEventListener("click", () => {
  if(currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    //ek aur tarike se dark add kr sakte h using css file
    body.classList.add("dark");
    body.classList.remove("light");
  }
  else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});

let div1 = document.querySelector("#div1");
// div1.onmouseover = () => {
//   console.log("You are Inside Div");
// } 
div1.addEventListener("mouseover", () => {
  console.log("You are Inside div");
  body.style.backgroundColor = "yellow";
})