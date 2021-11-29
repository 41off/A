



let color = "black";
let strokeSize = 10;

function changeColorAndSize(data, width) {
  color = data;
  strokeSize = width;
}


window.addEventListener("load", () => {
  const canvas = document.querySelector("#video-canvas");
  const canvas1 = document.querySelector("#video-canvas1");
  const ctx = canvas1.getContext("2d");
  //resizing
  canvas1.height = window.innerHeight;
  canvas1.width = window.innerWidth;
  //variables
  let painting = false;
  //functions
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function endPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    ctx.lineWidth = strokeSize;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

 //event listeners
  canvas1.addEventListener("mousedown", startPosition);
  canvas1.addEventListener("touchstart", startPosition);
  canvas1.addEventListener("mouseup", endPosition);
  canvas1.addEventListener("touchend", endPosition);
  canvas1.addEventListener("mousemove", draw);
  canvas1.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY });
    draw(mouseEvent);
  }, false);
});

//Clear Canvas
$('#clear-canvas').on('click', function (event) {
    event.preventDefault();
    canvas1.clear();
});


