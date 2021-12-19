var startLine;
var startLine1;
function drawLine() {
    canvas.on('mouse:down', function (o) {
        if (isLineDrawing == "1") {
            canvas.selection = false;
            isDownLine = true;
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
        if (!isDownLine)
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
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI;
            line.startLine = theta;
            var Line = countLine(theta);
            var angl = parseInt(Line).toString() +'Â°';
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
                fontSize: 25,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
            });
            line.lineText = text1;
            canvas.add(text1);
            isDownLine = false;
            rotateText(line);
        }
    });
    canvas.on('object:rotating', function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newLine = getCurrentLine(e);
            var theta = countLine(newLine);
            theta = parseInt(theta).toString() +'Â°';
            e.target.lineText.setText(theta);
            rotateText(e.target);
        }
    });

    //draw angel in canvas 2

    canvas1.on('mouse:down', function (o) {
        if (isLineDrawing == "1") {
            canvas1.selection = false;
            isDownLine = true;
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
        if (!isDownLine)
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
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI;
            line2.startLine = theta;
            var Line = countLine(theta);
            var angl = parseInt(Line).toString() +'Â°';
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
                fontSize: 25,
                fontFamily: 'Verdana', top: top, left:left,
                fill: 'lime'
            });
            line2.lineText = text2;
            canvas1.add(text2);
            isDownLine = false;
            rotateText(line2);
        }
    });
    canvas1.on('object:rotating', function (e) {
        if(typeof e.target.lineText != "undefined"){
            var newLine = getCurrentLine(e);
            var theta = countLine(newLine);
            theta = parseInt(theta).toString() +'Â°';
            e.target.lineText.setText(theta);
            rotateText(e.target);
        }
    });
}



var dAx = A2x - A1x;
var dAy = A2y - A1y;
var dBx = B2x - B1x;
var dBy = B2y - B1y;
var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
if(angle < 0) {angle = angle * -1;}
var degree_angle = angle * (180 / Math.PI);  


