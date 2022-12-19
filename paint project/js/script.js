//Global varibles
const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fill-color");
// Varibles
let ctx = canvas.getContext("2d"),
  isDrawing = false,
  brushWidth = 5,
  selectedTool = "",
  prevMouseX,
  prevmouseY,
  snapshot;
//Set canvas width end heigth
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

//Start drawing
const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevmouseY = e.offsetY;
  ctx.beginPath(); //mishka uzilganda yangi joydan chizish
  ctx.lineWidth = brushWidth; // qalam qalinligi
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};
//End drawing
const endDrawing = () => {
  isDrawing = false;
};
//Draw ractangle
const drawRectangle = (e) => {
  if (!fillColor.checked) {
    ctx.strokeRect(
      //tortburchak border qismini chizib beradi yani ichi boyalmagan
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevmouseY - e.offsetY
    );
  } else {
    ctx.fillRect(
      //tortburchak ichini rang bilan toldirib chizadi
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevmouseY - e.offsetY
    );
  }
};
//drawCircle
const drawCircle = (e) => {
  ctx.beginPath();
  const radius =
    Math.sqrt(Math.pow(prevMouseX - e.offsetX, 2)) / 1.4 +
    Math.sqrt(Math.pow(prevmouseY - e.offsetY, 2)) / 1.4;
  ctx.arc(prevMouseX, prevmouseY, radius, 90, 90 * Math.PI);
  fillColor.checked ? ctx.fill() : ctx.stroke();
};
//Drawing
const drawing = (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.putImageData(snapshot, 0, 0);
  switch (selectedTool) {
    case "brush":
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke(); //chizish
      break;
    case "restangle":
      drawRectangle(e);
      break;
    case "circle":
      drawCircle(e);
      break;
    default:
      break;
  }
};
//Tools Btn and to varibles selected  tool
toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // document.querySelector("#brush").classList.add("active  ");
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mousemove", drawing);
