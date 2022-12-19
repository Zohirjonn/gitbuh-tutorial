"use stict";
const btn = document.querySelector("#btn");
let setid;
let i = 0;
btn.addEventListener("click", () => {
  // setid = setTimeout(logger, 1000);
  setid = setTimeout(logger, 1000);
});
// setTimeout(() => {
//   console.log("set timeout");
// }, 2000);

// clearInterval(setid);
function logger() {
  if (i == 3) {
    clearInterval(setid);
  }
  console.log("set timeout function");
  i++;
  console.log(i);
}
