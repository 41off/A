drawclock=function()
    {
      var clockcanvas=document.getElementById('clock');
      var ctx=clockcanvas.getContext('2d');
      ctx.save();

      // got to clear it each time through or the hands smear
      ctx.clearRect(0,0,clockcanvas.width,clockcanvas.height);

      // default our stroke and fill styles
      ctx.strokeStyle='rgb(0,0,0)';
      ctx.fillStyle='rgb(0,0,0)';
      ctx.shadowOffsetX=0;
      ctx.shadowOffsetY=0;
      ctx.shadowBlur=0;
      ctx.shadowColor='rgba(0,0,0,0)';
      var pi=Math.PI;	    // just for convenience
      var now=new Date();   // so we know what time it is.
      xc=clockcanvas.width/2;	// x center of clock
      yc=clockcanvas.height/2;  // y center of clock
      radius=xc-1;		// size of the radius of the circle 

      // next draw the background and border of the clock
      ctx.beginPath();
      ctx.arc(xc,yc,radius,0,2*pi,false);   // border of clock
      ctx.fillStyle='rgb(255,255,180)'	    // sort of a grey orange background
      ctx.fill();			    // fill first
      ctx.lineWidth=2;
      ctx.stroke();			    // and then stroke
      ctx.fillStyle='rgb(0,0,0)';

      // draw a dark circle in middle, later after the hands are drawn we'll
      // add a smaller golden circle in the middle
      ctx.beginPath();
      ctx.moveTo(xc,yc);
      ctx.arc(xc,yc,3,0,2*pi,false);
      ctx.stroke();

      // Now we'll draw the minute and second marks
      ctx.beginPath();
      for(var ctr=0; ctr<60;ctr++){
	var angle=ctr*2*pi/60;
	var x1=(radius-10)*Math.cos(angle)+xc;
	var y1=(radius-10)*Math.sin(angle)+yc;
	var x2=(radius-5)*Math.cos(angle)+xc;
	var y2=(radius-5)*Math.sin(angle)+yc;
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineWidth=1;
	ctx.stroke();
      }

      // Next are the fatter longer hour marks
      ctx.beginPath();
      ctx.lineWidth=5;
      for(var ctr=0; ctr<12;ctr++){
	var angle=ctr*2*pi/12;
	var x1=(radius-20)*Math.cos(angle)+xc;
	var y1=(radius-20)*Math.sin(angle)+yc;
	var x2=(radius-5)*Math.cos(angle)+xc;
	var y2=(radius-5)*Math.sin(angle)+yc;
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
      }

      // Next we draw the hour numbers.  We start at 3 because that 
      // corresponds to 0 degrees
      var hours=['3','4','5','6','7','8','9','10','11','12','1','2'];
      ctx.font = "31px Times,'Times New Roman',sans-serif";
      ctx.textBaseline='middle';
      for(var ctr=0;ctr<12;ctr++){
          var angle=ctr*2*pi/12;
	  var len=radius-50;
	  // we adust the x with an equation using cosing and the y with
	  // an equation using sin so that the text looks like it's in an
	  // even circle
	  var x=len*Math.cos(angle)+xc-((1-Math.cos(angle))/2)*ctx.measureText(hours[ctr]).width;
	  var y=len*Math.sin(angle)+yc+10*Math.sin(angle);
	  ctx.fillText(hours[ctr],x,y);
      }

      ctx.shadowOffsetX=4;
      ctx.shadowOffsetY=4;
      ctx.shadowBlur=4;
      ctx.shadowColor='rgba(0,0,0,.5)';

      // draw the minute hand we draw the front pointer part first,
      // then add a back heavier part
      var minuteangle=3*pi/2+(2*pi/60)*now.getMinutes();
      var minx=(radius-21)*Math.cos(minuteangle)+xc;
      var miny=(radius-21)*Math.sin(minuteangle)+yc;
      ctx.lineWidth=3;	// set up lineWidth for the drawArrow call
      drawArrow(ctx,xc,yc,minx,miny,3,1,Math.PI/4,20);
      // Now the back heavier part
      var minx=25*Math.cos(minuteangle+pi)+xc;
      var miny=25*Math.sin(minuteangle+pi)+yc;
      ctx.beginPath();
      ctx.moveTo(xc,yc);
      ctx.lineWidth=6;
      ctx.lineTo(minx,miny);
      ctx.stroke();

      ctx.shadowOffsetX=3;
      ctx.shadowOffsetY=3;
      // Now the hour hand the same, first a skinnier front hand
      var hourangle=3*pi/2+(2*pi/12)*(now.getHours()+now.getMinutes()/60);
      var hourx=(radius-61)*Math.cos(hourangle)+xc;
      var houry=(radius-61)*Math.sin(hourangle)+yc;
      ctx.lineWidth=3;
      drawArrow(ctx,xc,yc,hourx,houry,3,1,Math.PI/4,15);
      // and the heavier back end
      var hourx=20*Math.cos(hourangle+pi)+xc;
      var houry=20*Math.sin(hourangle+pi)+yc;
      ctx.beginPath()
      ctx.moveTo(xc,yc);
      ctx.lineWidth=6;
      ctx.lineTo(hourx,houry);
      ctx.stroke();

      // Second hand, red, same story, skinny front part first
      ctx.shadowOffsetX=5;
      ctx.shadowOffsetY=5;
      ctx.fillStyle='rgb(255,0,0)';
      ctx.strokeStyle='rgb(255,0,0)';
      var secondangle=3*pi/2+(2*pi/60)*now.getSeconds();
      var secx=(radius-25)*Math.cos(secondangle)+xc;
      var secy=(radius-25)*Math.sin(secondangle)+yc;
      ctx.lineWidth=1;
      drawArrow(ctx,xc,yc,secx,secy,3,1,Math.PI/20,20);
      // thicker back part later
      var secx=25*Math.cos(secondangle+pi)+xc;
      var secy=25*Math.sin(secondangle+pi)+yc;
      ctx.beginPath();
      ctx.moveTo(xc,yc);
      ctx.lineWidth=4;
      ctx.lineTo(secx,secy);
      ctx.stroke();

      ctx.shadowOffsetX=8;
      ctx.shadowOffsetY=8;
      ctx.shadowColor='rgba(0,0,0,.2)';

      // draw the center of the clock
      ctx.beginPath();
      ctx.moveTo(xc,yc);
      ctx.fillStyle='rgb(255,255,0)';
      ctx.arc(xc,yc,3,0,2*pi,false);
      ctx.fill();
      
      // draw a highlight around the edge of the glass
      // Note the alpha so everything shows through it
      ctx.strokeStyle='rgba(255,255,255,.40)';
      ctx.lineWidth=10;
      ctx.beginPath();
      ctx.arc(xc,yc,radius-10,0,2*pi,false);
      ctx.stroke();

      // then a skinnier highlight inside the other
      // Note the alpha is higher so you can barely see through it
      ctx.strokeStyle='rgba(255,255,255,.70)';
      ctx.lineWidth=3;
      ctx.beginPath();
      ctx.arc(xc,yc,radius-8,0,2*pi,false);
      ctx.stroke();

      // then a highlight in the center of the glass
      // the alpha makes it barely there
      ctx.beginPath();
      ctx.fillStyle='rgba(255,255,255,.1)';
      ctx.arc(xc,yc,radius/2,0,2*pi,false);
      ctx.fill();

      // Turn off all shadows
      ctx.shadowOffsetX=0;
      ctx.shadowOffsetY=0;
      ctx.shadowBlur=0;
      ctx.shadowColor='rgba(0,0,0,0)';
    }

    var clock=function()
    {
      setInterval(drawclock,1000);  // 1000ms is 1 sec
    }
    diag1();
    quadrantDiagram();
    diag2();
    diag3();
    diag4();
    headstyles();
    diag5();
    diag6();
    diag7();
    clock();
