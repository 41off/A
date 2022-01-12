function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 0;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stopped (1)
    this.getStatus
    {
        return status;
    }
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var milli = time % 100;
        var second = Math.floor(time / 100) % 60;
        var minute = Math.floor(time / 6000) % 60;
        var hour = Math.floor(time / 360000) % 24;
        
        milli = (milli < 10) ? '0'+milli : milli;
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '&nbsp;0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        $('div.timer span.milli').html(milli);
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
        $('div.timer span.hour').html(hour);
    }
}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
            if(time == null)
            {
                timer.stop();
                alert('Out The Gates!!!');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});


function timerStart() {
      var btn = document.getElementsByClassName("timer");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play Both") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Play Both";
             btn.innerHTML = "";
             timer.start(10);
             timerR.start(10);
             

                }
         else {
             btn.value = "Pause Both";
             btn.innerHTML = "";
             timer.stop();
             timerR.stop();
              }
              
     if(timer.stop, timerR.stop){
      
      timer.start(10);
      timer.mode(1);
      timerR.start(10);
      timerR.mode(1);       
     } 
       else {
            timer.stop();
            timerR.stop();
     }
}



function timeStop() {
    timer.reset(0);
    
    
   
}

  //  close button
     var close = document.getElementsByClassName('closebtn2');
     var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function(){
         var div = this.parentElement;
            div.style.opacity = "4";
            div.style.Color = 'red';
            setTimeout(function(){ div.style.display = "none"; }, 1200);
     }
}



