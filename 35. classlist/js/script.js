"use strict";
const wrapper = document.querySelector(".btn-block");
const btns = document.querySelectorAll("button");
btns[0].addEventListener("click", () => {
  btns[1].classList.toggle("red");
});
wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("btn click");
  }
});
const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
