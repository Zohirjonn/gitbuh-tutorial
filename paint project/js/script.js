const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d"),
  isDrawing = false,
  brushWidth = 5;
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
const startDraw = () => {
  isDrawing = true;
  ctx.beginPath(); //mishka uzilganda yangi joydan chizish
  ctx.lineWidth = brushWidth; // qalam qalinligi
};
const endDrawing = () => {
  isDrawing = false;
};
const drawing = (e) => {
  if (!isDrawing) {
    return;
  } else {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke(); //chizish
    return;
  }
};
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mousemove", drawing);
