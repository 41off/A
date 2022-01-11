

// Vector functions

// Fabric.js functions
function getLocation(obj) {
    return v_vector(obj.left,obj.top);
}
function setLocation(obj, dispacement) {
    obj.left = dispacement.x;
    obj.top = dispacement.y;
}
function rotateText(line){
    var angle = line.getAngle() % 360;
    var centerPoint = getLocation(line);
    var antiAngle = -angle * Math.PI / 180;
    var distanceToTop = line.height * line.scaleY / 2;
    var textOffset = 5;
    var distance = -1 * (distanceToTop + textOffset);
    var displacement = v_displace(centerPoint, antiAngle, distance);
    var textDimensions = v_vector(line.lineText.width, line.lineText.height);
    var textLocation = v_add(displacement, v_scale(textDimensions, -0.5));
    setLocation(line.lineText, textLocation);
}
function getCurrentAngle(e){
    var newAngle;
    var currentAngle = parseInt(e.target.getAngle());
    startAngle = parseInt(e.target.startAngle);
    if (currentAngle > 180) {
        newAngle = startAngle - (360 - currentAngle);
    }
    else if (180 == (currentAngle+startAngle)) {
        newAngle = 180;
    }
    else if (currentAngle <= 180 && 180 >= (currentAngle+startAngle)) {
        newAngle = startAngle + currentAngle;
    }
    else if (currentAngle <= 180 && 180 < (currentAngle+startAngle)) {
        newAngle = startAngle + currentAngle - 360;
    }
    return newAngle;
}


var canvas = new fabric.Canvas("video-canvas", {selection: true});
var canvas1 = new fabric.Canvas("video-canvas1", {selection: true});
var circle, isDown, origX, origY, isDownAngle;
var freeDrawing = true;
var isLineDrawing = isCircleDrawing = isAngleDrawing = "0";
$('.canvas-container').css('z-index', '1000');
$('.main_sidebar').css('z-index', '1001');

function preventLeaving(e) {
    var activeObject = e.target;
    if ((activeObject.get('left') - (activeObject.get('width') * activeObject.get('scaleX') / 2) < 0))
        activeObject.set('left', activeObject.get('width') * activeObject.get('scaleX') / 2);
    if ((activeObject.get('top') - (activeObject.get('height') * activeObject.get('scaleY') / 2) < 0))
        activeObject.set('top', activeObject.get('height') * activeObject.get('scaleY') / 2);
    if (activeObject.get('left') + (activeObject.get('width') * activeObject.get('scaleX') / 2) > canvas.getWidth())
    {
        var positionX = canvas.getWidth() - (activeObject.get('width') * activeObject.get('scaleX')) / 2;
        activeObject.set('left', positionX > canvas.getWidth() / 2 ? positionX : canvas.getWidth() / 2);
    }
    if (activeObject.get('top') + (activeObject.get('height') * activeObject.get('scaleY') / 2) > canvas.getHeight())
    {
        var positionY = canvas.getHeight() - (activeObject.get('height') * activeObject.get('scaleY') / 2);
        activeObject.set('top', positionY > canvas.getHeight() / 2 ? positionY : canvas.getHeight() / 2);
    }

    //below just prevention for object from getting width or height greater than canvas width and height
    if (activeObject.get('width') * activeObject.get('scaleX') > canvas.getWidth())
    {
        activeObject.set('scaleX', canvas.getWidth() / activeObject.get('width'));
    }
    if (activeObject.get('height') * activeObject.get('scaleY') > canvas.getHeight())
    {
        activeObject.set('scaleY', canvas.getHeight() / activeObject.get('height'));
    }
}
function preventLeaving1(e){
    console.log(e);
}
canvas.observe('object:moving', preventLeaving);
canvas.observe('object:scaling', preventLeaving);

canvas1.observe('object:moving', preventLeaving1);
canvas1.observe('object:scaling', preventLeaving1);

$(document).on('click', '.line-drawing-tools', function (event) {
    event.preventDefault();
    //return false;
    isLineDrawing = "0";
    isCircleDrawing = "0";
    isAngleDrawing = "0";
    isPaintY = "0";
    isPaintR = "0";
    isPaintB = "0";
    isPaintG = "0";
    isPaintD = "0";
    isPaintW = "0";
    isPaintO = "0";
    isTriangleDrawing = "0";
    isproTracDrawing = "0";
    
    
    
    if ($(this).hasClass('active')) {
        $(".line-drawing-tools").removeClass('active');
    }
    else {
        var btnValue = $(this).data("value") || "";
        if (btnValue != "") {
            if (btnValue == "circle") {
                isCircleDrawing = "1";
                drawCircle();
            }
            else if (btnValue == "line") {
                isLineDrawing = "1";
                drawLine();
            }
            else if (btnValue == "angle") {
                isAngleDrawing = "1";
                drawAngle();
            }
            else if (btnValue == "move") {
                changeDrawing();
            }
            else if (btnValue == "yellow") {
                isPaintY = "1";
                paintY();
            }
            else if (btnValue == "red") {
                isPaintR = "1";
                paintR();
            }
            else if (btnValue == "blue") {
                isPaintB = "1";
                paintB();
            }
            else if (btnValue == "green") {
                isPaintG = "1";
                paintG();
            }
            else if (btnValue == "dark") {
                isPaintD = "1";
                paintD();
            }
            else if (btnValue == "white") {
                isPaintW = "1";
                paintW();
            }
            else if (btnValue == "off") {
                isPaintO = "1";
                paintO();
            }
            else if (btnValue == "triangle") {
                proTrac();
            }

   }
        $(".line-drawing-tools").removeClass('active');
        $(this).addClass('active');
    }
    if ($(this).data("value") == "delete") {
        deleteObjects();
    }
    if ($(this).data("value") == "clear") {
        canvas.clear();
        canvas1.clear();
    }
});

function changeDrawing() {
    canvas.isDrawingMode = false;
    canvas.selection = true;
    canvas.off('mouse:down');
    canvas.off('mouse:move');
    canvas.off('mouse:up');
    canvas.forEachObject(function (o) {
        o.cornerSize = 6;
        o.setCoords()
    })

    canvas1.isDrawingMode = false;
    canvas1.selection = true;
    canvas1.off('mouse:down');
    canvas1.off('mouse:move');
    canvas1.off('mouse:up');
    canvas1.forEachObject(function (o) {
        o.cornerSize = 6;
        o.setCoords()
    })
}


function countAngle(theta){
    if (theta < 0.0) {
        theta += 360.0;
    }
    if (theta > 90 && theta <= 180) {
        theta = 180 - theta;
    }
    else if (theta > 180 && theta <= 270) {
         theta = theta - 180;
    }
    else if (theta > 270 && theta <= 360) {
       theta = 360 - theta;
    }
    else if (theta > 360) {
       theta = theta - 360;
    }
    return theta;
}



var startLine;
var startLine1;
function drawLine() {
    canvas.on('mouse:down', function (o) {
        if (isLineDrawing == "1") {
            canvas.selection = false;
            isDownAngle = true;
            var pointer = canvas.getPointer(o.e);
            var points = [pointer.x, pointer.y, pointer.x, pointer.y];

            line = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'yellow',
                stroke: 'yellow',
                originX: 'center',
                originY: 'center'
            });
            line.line1 = line;
            canvas.add(line);
        }
    });

    canvas.on('mouse:move', function (o) {
        if (!isDownAngle)
            return;
        if (isLineDrawing == "1") {
            var pointer = canvas.getPointer(o.e);
            line.set({x2: pointer.x, y2: pointer.y});
            canvas.renderAll();
        }
    });

    canvas.on('mouse:up', function (o) {
        if (isLineDrawing == "1") {
            y11 = line.get('y1');
            y12 = line.get('y2');
            x11 = line.get('x1');
            x12 = line.get('x2');
            var dy = y12 - y11;
            var dx = x12 - x11;
            var theta = Math.hypot(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI;
            line.startAngle = theta;
            var angle = countAngle(theta);
            var angl = parseInt(angle).toString() +'°';
            var top = line.top
            var left = line.left;
            if((theta >45 && theta < 75) || (theta >-180 && theta < -165)){
                left += 11;
            }
            if((theta >76 && theta < 90) || (theta >-166 && theta < -145)){
                left += 08;
            }
            if((theta >0 && theta < 46) || (theta >-146 && theta < -90)){
                left += 20;
            }
            var text1 = new fabric.Text(angl, {
                fontSize: 20,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
            });
            line.lineText = text1;
            canvas.add(text1);
            isDownAngle = false;
            rotateText(line);
            ctx.translate(x0,y0);
        }
    });
    canvas.on('object:rotating', function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newAngle = getCurrentAngle(e);
            var theta = countAngle(newAngle);
            theta = parseInt(theta).toString() +'°';
            e.target.lineText.setText(theta);
            rotateText(e.target);
        }
    });

    //draw angel in canvas 2

    canvas1.on('mouse:down', function (o) {
        if (isLineDrawing == "1") {
            canvas1.selection = false;
            isDownAngle = true;
            var pointer = canvas1.getPointer(o.e);
            var points = [pointer.x, pointer.y, pointer.x, pointer.y];

            line2 = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'yellow',
                stroke: 'yellow',
                originX: 'center',
                originY: 'center'
            });
            line2.line1 = line2;
            canvas1.add(line2);
        }
    });

    canvas1.on('mouse:move', function (o) {
        if (!isDownAngle)
            return;
        if (isLineDrawing == "1") {
            var pointer = canvas1.getPointer(o.e);
            line2.set({x2: pointer.x, y2: pointer.y});
            canvas1.renderAll();
        }
    });
    canvas1.on('mouse:up', function (o) {

        if (isLineDrawing == "1") {
            y11 = line2.get('y1');
            y12 = line2.get('y2');
            x11 = line2.get('x1');
            x12 = line2.get('x2');
            var dy = y12 - y11;
            var dx = x12 - x11;
            var theta = Math.hypot(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI;
            line2.startAngle = theta;
            var angle = countAngle(theta);
            var angl = parseInt(angle).toString() +' units';
            var top = line2.top
            var left = line2.left;
            if((theta >45 && theta < 75) || (theta >-180 && theta < -165)){
                left += 11;
            }
            if((theta >76 && theta < 90) || (theta >-166 && theta < -145)){
                left += 08;
            }
            if((theta >0 && theta < 46) || (theta >-146 && theta < -90)){
                left += 20;
            }
            var text2 = new fabric.Text(angl, {
                fontSize: 20,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
            });
            line2.lineText = text2;
            canvas1.add(text2);
            isDownAngle = false;
            rotateText(line2);
       }
       
         
  });
    
    canvas1.on('object:rotating', function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newAngle = getCurrentAngle(e);
            var theta = countAngle(newAngle);
            theta = parseInt(theta).toString() +' units';
            e.target.lineText.setText(theta);
            rotateText(e.target);
        }
    });
}

function paintY(){
           if (isPaintY == "1") {
            canvas1.isDrawingMode = true;
            canvas1.freeDrawingBrush.width = 10;
            canvas1.freeDrawingBrush.color = "#FDFF8A";
          }
}

function paintR(){
           if (isPaintR == "1") {
            canvas1.isDrawingMode = true;
            canvas1.freeDrawingBrush.width = 5;
            canvas1.freeDrawingBrush.color = "#ff0000";
          }
}

function paintB(){
           if (isPaintB == "1") {
            canvas1.isDrawingMode = true;
            canvas1.freeDrawingBrush.width = 10;
            canvas1.freeDrawingBrush.color = "#0883DE";
          }
}

function paintG(){
           if (isPaintG == "1") {
            canvas1.isDrawingMode = true;
            canvas1.freeDrawingBrush.width = 10;
            canvas1.freeDrawingBrush.color = "#23DB5B";
          }
}

function paintD(){
           if (isPaintD == "1") {
            canvas1.isDrawingMode = true;
            canvas1.freeDrawingBrush.width = 100;
            canvas1.freeDrawingBrush.color = "#000000";
          }
}

function paintW(){
           if (isPaintW == "1") {
            canvas1.isDrawingMode = true;
            canvas1.freeDrawingBrush.width = 75;
            canvas1.freeDrawingBrush.color = "#FFFFFF";
          }
}

function paintO(){
           if (isPaintO == "1") {
            canvas1.isDrawingMode = false;
            canvas1.freeDrawingBrush.width = 150;
            canvas1.freeDrawingBrush.color = "transparent";
          }
}

    
function drawCircle() {
     canvas1.on('mouse:down', function (o) {
        if (isCircleDrawing == "1") {
            isDown = true;
            canvas1.selection = false;
            var pointer = canvas1.getPointer(o.e);
            origX = pointer.x;
            origY = pointer.y;
            circle = new fabric.Circle({
                left: origX,
                top: origY,
                originX: 'left',
                originY: 'top',
                radius: pointer.x - origX,
                angle: 0,
                fill: '',
                stroke: 'lightblue',
                strokeWidth: 3,
            });
            canvas1.add(circle);
        } 
     });

    canvas1.on('mouse:move', function (o) {
        if (isCircleDrawing == "1") {
            if (!isDown)
                return;
            var pointer = canvas1.getPointer(o.e);
            var radius = Math.max(Math.abs(origY - pointer.y), Math.abs(origX - pointer.x)) / 2;
            if (radius > circle.strokeWidth) {
                radius -= circle.strokeWidth / 2;
            }
            circle.set({radius: radius});

            if (origX > pointer.x) {
                circle.set({originX: 'right'});
            } else {
                circle.set({originX: 'left'});
            }
            if (origY > pointer.y) {
                circle.set({originY: 'bottom'});
            } else {
                circle.set({originY: 'top'});
            }
            canvas1.renderAll();
        }
    });

    canvas1.on('mouse:up', function (o) {
        isDown = false;
    });
    
}


var startAngle
var startAngle1
function drawAngle() {
    canvas.on('mouse:down', function (o) {
        if (isAngleDrawing == "1") {
            canvas.selection = false;
            isDownAngle = true;
            var pointer = canvas.getPointer(o.e);
            var points = [pointer.x, pointer.y, pointer.x, pointer.y];

            line = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'yellow',
                stroke: 'yellow',
                originX: 'center',
                originY: 'center'
            });
            line.line1 = line;
            canvas.add(line);
        }
    });

    canvas.on('mouse:move', function (o) {
        if (!isDownAngle)
            return;
        if (isAngleDrawing == "1") {
            var pointer = canvas.getPointer(o.e);
            line.set({x2: pointer.x, y2: pointer.y});
            canvas.renderAll();
        }
    });

    canvas.on('mouse:up', function (o) {
        if (isAngleDrawing == "1") {
            y11 = line.get('y1');
            y12 = line.get('y2');
            x11 = line.get('x1');
            x12 = line.get('x2');
            var dy = y12 - y11;
            var dx = x12 - x11;
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI;
            line.startAngle = theta;
            var angle = countAngle(theta);
            var angl = parseInt(angle).toString() +'°';
            var top = line.top
            var left = line.left;
            if((theta >45 && theta < 75) || (theta >-180 && theta < -165)){
                left += 11;
            }
            if((theta >76 && theta < 90) || (theta >-166 && theta < -145)){
                left += 08;
            }
            if((theta >0 && theta < 46) || (theta >-146 && theta < -90)){
                left += 20;
            }
            var text1 = new fabric.Text(angl, {
                fontSize: 20,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
            });
            line.lineText = text1;
            canvas.add(text1);
            isDownAngle = false;
            rotateText(line);
            ctx.translate(x0,y0);
        }
    });
    canvas.on('object:rotating', function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newAngle = getCurrentAngle(e);
            var theta = countAngle(newAngle);
            theta = parseInt(theta).toString() +'°';
            e.target.lineText.setText(theta);
            rotateText(e.target);
        }
    });

    //draw angle in canvas 2

    canvas1.on('mouse:down', function (o) {
        if (isAngleDrawing == "1") {
            canvas1.selection = false;
            isDownAngle = true;
            var pointer = canvas1.getPointer(o.e);
            var points = [pointer.x, pointer.y, pointer.x, pointer.y];

            line2 = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'red',
                stroke: 'red',
                originX: 'center',
                originY: 'center'
            });
            line2.line1 = line2;
            canvas1.add(line2);
        }
    });

    canvas1.on('mouse:move', function (o) {
        if (!isDownAngle)
            return;
        if (isAngleDrawing == "1") {
            var pointer = canvas1.getPointer(o.e);
            line2.set({x2: pointer.x, y2: pointer.y});
            canvas1.renderAll();
        }
    });
    canvas1.on('mouse:up', function (o) {

        if (isAngleDrawing == "1") {
            y11 = line2.get('y1');
            y12 = line2.get('y2');
            x11 = line2.get('x1');
            x12 = line2.get('x2');
            var dy = y12 - y11;
            var dx = x12 - x11;
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI;
            line2.startAngle = theta;
            var angle = countAngle(theta);
            var angl = parseInt(angle).toString() +'°';
            var top = line2.top
            var left = line2.left;
            if((theta >45 && theta < 75) || (theta >-180 && theta < -165)){
                left += 11;
            }
            if((theta >76 && theta < 90) || (theta >-166 && theta < -145)){
                left += 08;
            }
            if((theta >0 && theta < 46) || (theta >-146 && theta < -90)){
                left += 20;
            }
            var text2 = new fabric.Text(angl, {
                fontSize: 20,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
            });
            line2.lineText = text2;
            canvas1.add(text2);
            isDownAngle = false;
            rotateText(line2);
       }
  });
  
    canvas1.on('object:rotating', function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newAngle = getCurrentAngle(e);
            var theta = countAngle(newAngle);
            theta = parseInt(theta).toString() +' units';
            e.target.lineText.setText(theta);
            rotateText(e.target);
        }
    });
}


/*
var startAngle
//var startAngle1
 function drawAngle() {
    

    //draw angel in canvas 2

    canvas1.on('mouse:down', function (o) {
        if (isAngleDrawing == "1") {
            canvas1.selection = false;
            isDownAngle = true;
            var pointer = canvas1.getPointer(o.e);
            var points = [pointer.x, pointer.y, pointer.x, pointer.y];

            line = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'yellow',
                stroke: 'red',
                originX: 'center',
                originY: 'center'
            });
       //     line.line1 = line;
            canvas1.add(line);
        }
    });

    canvas1.on('mouse:move', function (o) {
        if (!isDownAngle)
            return;
        if (isAngleDrawing == "1") {
            var pointer = canvas1.getPointer(o.e);
            line.set({x2: pointer.x, y2: pointer.y});
            canvas1.renderAll();
        }
    });
    canvas1.on('mouse:up', function (o) {

        if (isAngleDrawing == "1") {
            y1 = line.get('y1');
            y2 = line.get('y2');
            y3 = line.get('y3');
            x1 = line.get('x1');
            x2 = line.get('x2');
            x3 = line.get('x3');
                        
           var dy = y2 - y1;
           var dx = x2 - x1;
           var dy2 = y3 - y2;
           var dx2 = x3 - x2;

       
           var theta = Math.atan2(dy, dx);  // range (-PI, PI]
      //   var theta1 = Math.atan2(dy, dx);
           var theta2 = Math.atan2(dy2, dx2);
           return (((theta2 - theta1) * 180 / Math.PI).toFixed(2));

           theta *= 180 / Math.PI;
            line.startAngle = theta;
            var angle = countAngle(theta);
            var angl = parseInt(angle).toString() +'°';
            var top = line.top;
            var left = line.left;
            if((theta >45 && theta < 75) || (theta >-180 && theta < -165)){
                left += 11;
            }
            if((theta >76 && theta < 90) || (theta >-166 && theta < -145)){
                left += 08;
            }
            if((theta >0 && theta < 46) || (theta >-146 && theta < -90)){
                left += 20;
            }
            var text = new fabric.Text(angl, {
                fontSize: 18,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
                
           });
            
        //    line.lineText = text3;
        //    canvas1.add(text3);
            line.lineText = text;
            canvas1.add(text);
            isDownAngle = false;
            rotateText(line);

   }
 });
     canvas1.on('object:rotating', 
       function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newAngle = getCurrentAngle(e);
            var theta = countAngle(newAngle);
            var omega = countAngle(newAngle);
            theta = parseInt(theta).toString() +'u';
         //   omega = parseInt(omega).toString() +'°';
            e.target.lineText.setText(theta);
          //  e.target.lineText.setText(omega);
            fill: 'white';
            rotateText(e.target);
          }
 });
}



    
   //  var canvas = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");

var x1 = 50;
var y1 = 50;
var x2 = 100;
var y2 = 125;
var x3 = 250;
var y3 = 95;
var angle = degreeAngle(x1, y1, x2, y2, x3, y3);

ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.stroke();
endingArrow(x2, y2, x3, y3);
ctx.font = "18px Verdana";
ctx.fillText(angle + " degrees", 40, 200);

function degreeAngle(x1, y1, x2, y2, x3, y3) {
    var theta1 = Math.atan2((y1 - y2), (x1 - x2));
    var theta2 = Math.atan2((y3 - y2), (x3 - x2));
    return (((theta2 - theta1) * 180 / Math.PI).toFixed(2));
}

function endingArrow(x, y, xx, yy) {
    var endRadians = Math.atan((yy - y) / (xx - x));
    endRadians += ((xx > x) ? 90 : -90) * Math.PI / 180;
    ctx.save();
    ctx.beginPath();
    ctx.translate(xx, yy);
    ctx.rotate(endRadians);
    ctx.moveTo(0, 0);
    ctx.lineTo(8, 20);
    ctx.lineTo(-8, 20);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

*/

var line1;
var line2;
var line3;
var line4;

function createTriangle(left, top, line1, line2, line3, line4) {

// circle example

canvas1.on('mouse:down', function (o) {
        if (isTriangleDrawing == "1") {
            isDown = true;
            canvas1.selection = false;
            var pointer = canvas1.getPointer(o.e);
            origX = pointer.x;
            origY = pointer.y;
            triang = new fabric.Triangle({
                left: left,
               top: top,
                 strokeWidth: 3,
              fill: 'white',
               stroke: 'red',
             angle: -180,
              width: 5,
             height: 5

            });
            c.hasControls = c.hasBorders = false;

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;
    c.line4 = line4;

    return c;

            canvas1.add(triang);
        } 
     });
}
 

function makeLineForTriangle(coords) {
      return new fabric.Line(coords, {
        fill: 'white',
        stroke: 'red',
        strokeWidth: 2,
        selectable: false
    });
}




///////////////
$(document).ready(function(){
		var c=document.getElementById('canvas1');
		var ctx=c.getContext("2d");
		

		ctx.beginPath();
		ctx.moveTo(parseInt($(".p1").css("left"))-5,parseInt($(".p1").css("top"))-5)
		ctx.lineTo(parseInt($(".p2").css("left"))-5,parseInt($(".p2").css("top"))-5)
		ctx.lineTo(parseInt($(".p3").css("left"))-5,parseInt($(".p3").css("top"))-5)
		
		ctx.lineTo(parseInt($(".p1").css("left"))-5,parseInt($(".p1").css("top"))-5)
		ctx.fillStyle='#E6E0EC';
		ctx.fill();
		ctx.strokeStyle="#604A7B";
		ctx.lineWidth="3"
		ctx.stroke();
		ctx.closePath();
		$(".p1,.p2,.p3").draggable({
		drag:function(){
		ctx.clearRect(0,0,500,500);
		ctx.beginPath();
		ctx.moveTo(parseInt($(".p1").css("left"))-5,parseInt($(".p1").css("top"))-5)
		ctx.lineTo(parseInt($(".p2").css("left"))-5,parseInt($(".p2").css("top"))-5)
		ctx.lineTo(parseInt($(".p3").css("left"))-5,parseInt($(".p3").css("top"))-5)
		
		ctx.lineTo(parseInt($(".p1").css("left"))-5,parseInt($(".p1").css("top"))-5)
		ctx.fillStyle='#E6E0EC';
		ctx.fill();
		ctx.strokeStyle="#604A7B";
		ctx.lineWidth="2"
		ctx.stroke();
		ctx.closePath();
	  }
	  
		
		});


		});
		

var PI2 = Math.PI * 2;
var rectStrokeStyle = "black";

function drawAnchor(point, color) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, PI2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function drawAngleSymbol(pt3, pt2, pt1) {
    var dx1 = pt1.x - pt2.x;
    var dy1 = pt1.y - pt2.y;
    var dx2 = pt3.x - pt2.x;
    var dy2 = pt3.y - pt2.y;
    var a1 = Math.atan2(dy1, dx1);
    var a2 = Math.atan2(dy2, dx2);
    var a = parseInt((a2 - a1) * 180 / Math.PI + 360) % 360;
    // draw angleSymbol
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pt2.x, pt2.y);
    ctx.arc(pt2.x, pt2.y, 20, a1, a2);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.globalAlpha = 0.25;
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText(a, pt2.x + 15, pt2.y);

}


//  angle attempt below  -->


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

var PI2 = Math.PI * 2;
var corners = []
corners.push({
    x: 50,
    y: 100
});
corners.push({
    x: 150,
    y: 40
});
corners.push({
    x: 250,
    y: 80
});
corners.push({
    x: 180,
    y: 115
});
var rectStrokeStyle = "black";

// draw everything

drawAll();


function drawAll() {

    // draw the polygon
    ctx.beginPath();
    ctx.moveTo(corners[0].x, corners[0].y);
    for (var i = 1; i < corners.length; i++) {
        var c = corners[i];
        ctx.lineTo(c.x, c.y);
    }
    ctx.closePath();
    ctx.strokeStyle = rectStrokeStyle;
    ctx.lineWidth = 2;
    ctx.stroke();

    // draw anchor points on each corner
    for (var i = 0; i < corners.length; i++) {
        drawAnchor(corners[i], "blue");
    }

    // draw the angle symbols on corners
    for (var i = 0; i < corners.length - 2; i++) {
        drawAngleSymbol(corners[i], corners[i + 1], corners[i + 2]);
    }
    // draw the last 2 angle symbols
    var n = corners.length;
    drawAngleSymbol(corners[n - 2], corners[n - 1], corners[0]);
    drawAngleSymbol(corners[n - 1], corners[0], corners[1]);


}

function drawAnchor(point, color) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, PI2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function drawAngleSymbol(pt3, pt2, pt1) {
    var dx1 = pt1.x - pt2.x;
    var dy1 = pt1.y - pt2.y;
    var dx2 = pt3.x - pt2.x;
    var dy2 = pt3.y - pt2.y;
    var a1 = Math.atan2(dy1, dx1);
    var a2 = Math.atan2(dy2, dx2);
    var a = parseInt((a2 - a1) * 180 / Math.PI + 360) % 360;
    // draw angleSymbol
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pt2.x, pt2.y);
    ctx.arc(pt2.x, pt2.y, 20, a1, a2);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.globalAlpha = 0.25;
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText(a, pt2.x + 15, pt2.y);

}
//////////////


// select all objects
function deleteObjects() {
    var activeObject = canvas.getActiveObject(),
        activeGroup = canvas.getActiveGroup();
    if (activeObject) {
        canvas.remove(activeObject);
    }
    else if (activeGroup) {
        var objectsInGroup = activeGroup.getObjects();
        canvas.discardActiveGroup();
        objectsInGroup.forEach(function (object) {
            canvas.remove(object);
        });
    }

    var activeObject1 = canvas1.getActiveObject(),
        activeGroup1 = canvas1.getActiveGroup();
    if (activeObject1) {
        canvas1.remove(activeObject1);
    }
    else if (activeGroup1) {
        var objectsInGroup1 = activeGroup1.getObjects();
        canvas1.discardActiveGroup();
        objectsInGroup1.forEach(function (object) {
            canvas1.remove(object);
        });
    }
}




