   function onloadL(){
            console.log("body loaded");
            videoL_player = document.getElementById("videoL");
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            videoL_player.volume = 0.2;
            videoL_player.currentSrc();
            videoL_player.currentTime();
           
               
            timer.start(10)
        }
   
   
 
 function ClickStartL() {
    timer.stop();
    timer.mode(1);
    videoL_player.play();
    videoL.playbackRate = 1.0; 
   }
   
  function ClickPauseL(){
    timer.start(10);
    videoL_player.pause();
   }
  function onPauseL(){
    timer.stop();
    videoL_player.pause();
   }
  
  function on1XL(){
    timer.stop();
    videoL_player.pause();
    videoL.pause();
    clearInterval(rewind);
    videoL.playbackRate = 1.0;
   }
 
  function onFastFwdL(){
    videoL.playbackRate = 4.0;
    videoL_player.play();
   }
   
  function onSupFwdL(){
    videoL.playbackRate = 16.0;
    videoL_player.play();
   }
   
  function onSlowL(){
    videoL.playbackRate = 0.125;
    videoL_player.play();
   }
   
  function onSuperSlowL(){
    videoL.playbackRate = 0.0625;
    videoL_player.play();
   }
   
  function multiStopL() {
    timer.stop();
    timer.reset(0000);
    videoL_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStartL() {
      var btn = document.getElementById("timerbutton5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play";
             videoL_player.play();
             
                }
         else {
             btn.value = "Play";
             btn.innerHTML = "Pause";
             videoL_player.pause();
              }
              
     if(videoL_player.paused){
      
      timer.start(10);
      timer.mode(1);      
      videoL_player.play();
      videoL.playbackRate = 1.0;
     } 
       else {
            timer.stop();
            videoL_player.pause();
            clearInterval(rewind);
         }
 }
  function multiResetL() {
    timer.reset(0000)
   }
   
   function multiFwdL() {
    var btn = document.getElementById("speed4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             videoL_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             videoL_player.pause();
                }
     if(videoL_player.paused){
      timer.start(2);
      timer.mode(1);
      videoL_player.play();
      videoL.playbackRate = 4.0;
      } 
       else {
            timer.stop();
            videoL_player.pause();
         }   
  }
   
   function multiSupFwdL() {
    var btn = document.getElementById("speed16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             videoL_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             videoL_player.pause();
                }
     if(videoL_player.paused){
      timer.start(0.3125);
      timer.mode(1);
      videoL_player.play();
      videoL.playbackRate = 16.0;
      } 
       else {
            timer.stop();
            videoL_player.pause();
         }   
   }
/*   
    function multiSlow() {
    timer.start(80);
    timer.mode(1);
    videoL.pause();
    clearInterval(intervalRewind);
    onSlow();
   }
*/
  
   function multiSlowL() {
      var btn = document.getElementById("timerbutt1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             videoL_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             videoL_player.pause();
                }
     if(videoL_player.paused){
      timer.start(80);
      timer.mode(1);
      videoL_player.play();
      videoL.playbackRate = .125;
      } 
       else {
            timer.stop();
            videoL_player.pause();
         }
 }
   function multiSuperSlowL() {
      var btn = document.getElementById("timerbutt1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             videoL_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             videoL_player.pause();
                }
     if(videoL_player.paused){
      timer.start(160);
      timer.mode(1);
      videoL_player.play();
      videoL.playbackRate = .0625;
      } 
       else {
            timer.stop();
            videoL_player.pause();
         }
 }
/*   
    function multiSuperSlow() {
    timer.start(160);
    timer.mode(1);
    videoL.pause();
    clearInterval(intervalRewind);
    onSuperSlow();
   }
*/
  
   function multiRevL() {
    timer.start(80);
    timer.mode(0);    
   }
   
   
   
   
   
   
   
   
   
   
  
        var videoL_directory = ['https://www.dropbox.com/s/gbylnf22v2y9z2p/PG-08-22-2021.mp4?raw=1',
                                'https://www.dropbox.com/s/fwvj14n1kbis4c5/XPG-08-15-2021.mp4?raw=1',
                                'https://www.dropbox.com/s/gw1298kfmmob2aq/XPG-08-14-2021b.mp4?raw=1',
                                'https://www.dropbox.com/s/um8jz1a2p63idxe/10-10-2021-14_52.mp4?raw=1',
                                'https://player.vimeo.com/external/584066585.hd.mp4?s=00dabd47c1679b596be9e53caa4bd57aacec8adb&profile_id=169',
                                'https://www.dropbox.com/s/365bhju44j7zlj7/V1.mp4?raw=1',
                                'https://www.dropbox.com/s/43ewvwpf48p1qos/v2.mp4?raw=1',
                                'https://player.vimeo.com/external/578304012.hd.mp4?s=5f89a34632cb1c8ce3e7d217eeba1d31de923ee1&profile_id=175',
                                'https://player.vimeo.com/external/576991898.hd.mp4?s=1bb32accaba15577d4911f9d43a0b4792f891b3a&profile_id=175',
                                'https://player.vimeo.com/external/554033182.hd.mp4?s=c88df5d6ba1a17d9abcc34972021be24ed72164f&profile_id=175',
                                'https://player.vimeo.com/external/468376204.hd.mp4?s=ae32c4912bfba41349aecd4d9e38974dce7b64fe&profile_id=175',
                                'https://player.vimeo.com/external/384270451.hd.mp4?s=d712635e1dcc47fd9d2bff9f7eb62553499b8f83&profile_id=175',
                                'https://player.vimeo.com/external/576318773.hd.mp4?s=860340a4527e90128a1852bcba3634f859386001&profile_id=175',
                                'https://www.dropbox.com/s/afmg5cv1z94kfrg/XPG-08-09-2021.mkv.mp4?raw=1',
                                'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1'
                               ];                      
 
  
        var videoL_index = 0;
        var videoL_player = null;
        var videoL = document.getElementById('videoL');  
        
        
                          
      
        
      
        
   //rewind below  
$("#negativeL").click(function() { // button function for rewind
    videoL_player.pause();
     
     rewind = setInterval(function() {
               
       if (videoL_player.currentTime == 0) {
          clearInterval(rewind);
          videoL_player.pause();
          }
          
       else{
           timer.start(10);
           timer.mode(0);
           videoL_player.currentTime += -.3;
             }
                },300);
        
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 20000);
});
$("#negative2L").click(function() { // button function for rewind
    videoL_player.pause();
      
     rewind = setInterval(function() {
              
       if (videoL_player.currentTime == 0) {
          clearInterval(rewind);
          videoL_player.pause();
          
          
          }
          
       else{
           timer.start(80);
           timer.mode(0);
           videoL_player.currentTime += -.05;
             }
                },400);
           
         
     setTimeout(function() {
               alert('2.5 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
               clearInterval(rewind);
               timer.stop();
               }, 20500);
});
$("#negative3L").click(function() { // button function for rewind
    videoL_player.pause();
      
    rewind = setInterval(function() {
               
       if (videoL_player.currentTime == 0) {
          clearInterval(rewind);
          videoL_player.pause();
          }
       else{
           timer.start(2.5);
           timer.mode(0);
           videoL_player.currentTime += -1;
             }
                },250);
           
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 8000);
});
       
       
       function onvideoEndedL(){
            console.log("videoL ended");
            if(videoL_index < videoL_directory.length - 1){
                videoL_index++;
            }
            else{
                videoL_index = 1;
            }
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            videoL_player.play();
        }
        
       function onvideoNextL(){
            console.log("videoL next");
            videoL_player = document.getElementById("videoL");
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            if(videoL_index < videoL_directory.length - 1){
                videoL_index++;
            }
            else{
                videoL_index = 0;
                
            }
            videoL_player.play();
       }
        
       function onvideoBackL(){
            console.log("videoL back");
            if(videoL_index < videoL_directory.length - 1){
                videoL_index--;
            }
            else{
                videoL_index--;
            }
            videoL_player = document.getElementById("videoL");
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            videoL_player.play();
        } 


     
       function on0L(){
            console.log("0 ended");
            videoL_index = 0;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
                       
        var btn = document.getElementById("modal");
      
            if (btn.value == "Latest") {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Latest</button>';              
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
          }
        
        function on1L(){
            console.log("1 ended");
            videoL_index = 1;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
           
         var btn = document.getElementById("modal");
              
            if (btn.value == "V1.mp4") {
              btn.value = "V1.mp4";
              btn.innerHTML = '<button id="modtext">V1.mp4</button>';             
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V1.mp4";
              btn.innerHTML =  '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();              
              }
        }
           
          function on2L(){
            console.log("2 ended");
            videoL_index = 2;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            
          var btn = document.getElementById("modal");
      
            if (btn.value == "V2.mp4") {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtext">V2.mp4</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
        }
                      
          function on3L(){
            console.log("3 ended");
            videoL_index = 3;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            
           var btn = document.getElementById("modal");
      
            if (btn.value == "V3.mp4") {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtext">V3.mp4</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              timer.stop();
              videoL_player.pause();
              }
        }
        
          function on4L(){
            console.log("4 ended");
            videoL_index = 4;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
                        
           var btn = document.getElementById("modal");
      
            if (btn.value == "V4.mp4") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">V4.mp4</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 5";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();              
              }
        }
           
         function on5L(){
            console.log("5 ended");
            videoL_index = 5;            
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
                        
          var btn = document.getElementById("modal");
      
            if (btn.value == "V5.mp4") {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtext">V5.mp4</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
        }
        
         function on6L(){
            console.log("6 ended");
            videoL_index = 6;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
                        
          var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 7") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 7</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 7";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
        }
         
          function on7L(){
            console.log("7 ended");
            videoL_index = 7;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
                        
           var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 8") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 8</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 8";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
        }
        
          function on8L(){
            console.log("8 ended");
            videoL_index = 8;
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            videoL_player.play();
            
           var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 9") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 9</button>';              
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 9";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              timer.stop();
              videoL_player.pause();
              }
        }
        
          function on9L(){
           console.log("9 ended");
           videoL_index = 9;
           videoL_player.setAttribute("src", videoL_directory[videoL_index]);
           videoL_player.play();
           
          var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 10") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 10</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 10";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
       }
       
          function on10L(){
           console.log("10 ended");
           videoL_index = 10;
           videoL_player.setAttribute("src", videoL_directory[videoL_index]);
                      
          var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 11") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 11</button>';
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 11";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
       }
       
          function on11L(){
            console.log("11 ended");
             if(videoL_index = 10){
                videoL_index++;
           }
            else{
                videoL_index = 0;
            }
            videoL_player = document.getElementById("videoL");
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            videoL_player.play();
           
           var btn = document.getElementById("modal");
      
            if (btn.value == "V11.mp4") {
              btn.value = "Play";
              btn.innerHTML = '<button id="modtext">V11.mp4</button>';              
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V11.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
        }
        
        
          function on12L(){
            console.log("12 ended");
             if(videoL_index = 11){
                videoL_index++;
           }
            else{
                videoL_index = 0;
            }
            videoL_player = document.getElementById("videoL");
            videoL_player.setAttribute("src", videoL_directory[videoL_index]);
            videoL_player.play();
           
           var btn = document.getElementById("modal");
      
            if (btn.value == "V12.mp4") {
              btn.value = "Play";
              btn.innerHTML = '<button id="modtext">V12.mp4</button>';              
              timer.reset();
              videoL_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V12.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              videoL_player.pause();
              }
        }


  

 








