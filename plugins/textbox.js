    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.padding = 5;
    
     
  var $ = function(id){return document.getElementById(id)};


  var canvas1 = this.__canvas = new fabric.Canvas('canvas1');
  	    canvas1.setHeight(75);
		canvas1.setWidth(300);
   

function Addtext() { 
canvas1.add(new fabric.IText('Tap and Type Over', { 
      left: 50,
      top: 100,
      fontFamily: 'Verdana',
      fill: 'yellow',
	    fontSize: 30
}));
}
    
   document.getElementById('text-color').onchange = function() {
            canvas.getActiveObject().setFill(this.value);
            canvas.renderAll();
        };
  document.getElementById('text-color').onchange = function() {
            canvas.getActiveObject().setFill(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-bg-color').onchange = function() {
            canvas.getActiveObject().setBackgroundColor(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-lines-bg-color').onchange = function() {
            canvas.getActiveObject().setTextBackgroundColor(this.value);
            canvas.renderAll();
        };

		document.getElementById('text-stroke-color').onchange = function() {
            canvas.getActiveObject().setStroke(this.value);
            canvas.renderAll();
        };	

		document.getElementById('text-stroke-width').onchange = function() {
            canvas.getActiveObject().setStrokeWidth(this.value);
            canvas.renderAll();
        };				
	
		document.getElementById('font-family').onchange = function() {
            canvas.getActiveObject().setFontFamily(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-font-size').onchange = function() {
            canvas.getActiveObject().setFontSize(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-line-height').onchange = function() {
            canvas.getActiveObject().setLineHeight(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-align').onchange = function() {
            canvas.getActiveObject().setTextAlign(this.value);
            canvas.renderAll();
        };
		
	
 radios5 = document.getElementsByName("fonttype");  // wijzig naar button
    for(var i = 0, max = radios5.length; i < max; i++) {
        radios5[i].onclick = function() {
            
            if(document.getElementById(this.id).checked == true) {
                if(this.id == "text-cmd-bold") {
                    canvas.getActiveObject().set("fontWeight", "bold");
                }
                if(this.id == "text-cmd-italic") {
                    canvas.getActiveObject().set("fontStyle", "italic");
                }
                if(this.id == "text-cmd-underline") {
                    canvas.getActiveObject().set("textDecoration", "underline");
                }
				if(this.id == "text-cmd-linethrough") {
                    canvas.getActiveObject().set("textDecoration", "line-through");
                }
				if(this.id == "text-cmd-overline") {
                    canvas.getActiveObject().set("textDecoration", "overline");
                }
                
                
                
            } else {
                if(this.id == "text-cmd-bold") {
                    canvas.getActiveObject().set("fontWeight", "");
                }
                if(this.id == "text-cmd-italic") {
                    canvas.getActiveObject().set("fontStyle", "");
                }  
                if(this.id == "text-cmd-underline") {
                    canvas.getActiveObject().set("textDecoration", "");
                }
				if(this.id == "text-cmd-linethrough") {
                    canvas.getActiveObject().set("textDecoration", "");
                }  
                if(this.id == "text-cmd-overline") {
                    canvas.getActiveObject().set("textDecoration", "");
                }
            }
            
            
            canvas.renderAll();
        }
    }
 


  

let color = "black";
let strokeSize = 10;
function changeColorAndSize(data, width) {
  color = data;
  strokeSize = width;
}
window.addEventListener("load", () => {
  const canvas = document.querySelector("#video-canvas1");
  const ctx = canvas.getContext("2d");
  //resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
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
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("touchend", endPosition);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY });
    draw(mouseEvent);
  }, false);
});
