//Global varibles
const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool");
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
  ctx.strokeRect(
    //tortburchak chizish
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevmouseY - e.offsetY
  );
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
