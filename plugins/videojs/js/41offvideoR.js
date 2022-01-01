       
 function onloadR(){
            console.log("body loaded");
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.volume = 0.2;
            videoR_player.currentSrc();
            videoR_player.currentTime();
            timerR.start(10)
   }
  
 


/// all right side below //


 
 
 function ClickStartR() {
    timerR.stop();
    timerR.mode(1);
    videoR_player.play();
    videoR.playbackRate = 1.0; 
   }
   
  function ClickPauseR(){
    timerR.start(10);
    videoR_player.pause();
   }
  function onPauseR(){
    timerR.stop();
    videoR_player.pause();
   }
  
  function on1XR(){
    timerR.stop();
    videoR_player.pause();
    videoR.pause();
    clearInterval(rewind);
    videoR.playbackRate = 1.0;
   }
 
  function onFastFwdR(){
    videoR.playbackRate = 4.0;
    videoR_player.play();
   }
   
  function onSupFwdR(){
    videoR.playbackRate = 16.0;
    videoR_player.play();
   }
   
  function onSlowR(){
    videoR.playbackRate = 0.125;
    videoR_player.play();
   }
   
  function onSuperSlowR(){
    videoR.playbackRate = 0.0625;
    videoR_player.play();
   }
   
  function multiStopR() {
    timerR.stop();
    timerR.reset(0000);
    videoR_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStartR() {
      var btn = document.getElementById("R5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
       if (btn.value == "Play Right") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play";
             videoR_player.play();
             
                }
         else {
             btn.value = "Play Right";
             btn.innerHTML = "Pause";
             videoR_player.pause();
              }
              
     if(videoR_player.paused){
      
      timerR.start(10);
      timerR.mode(1);      
      videoR_player.play();
      videoR.playbackRate = 1.0;
     } 
       else {
            timerR.stop();
            videoR_player.pause();
            clearInterval(rewind);
         }
 }
 
 
 
  function multiResetR() {
    timerR.reset(0000)
   }
   
   function multiFwdR() {
    var btn = document.getElementById("R4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             videoR_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             videoR_player.pause();
                }
     if(videoR_player.paused){
      timerR.start(2);
      timerR.mode(1);
      videoR_player.play();
      videoR.playbackRate = 4.0;
      } 
       else {
            timerR.stop();
            videoR_player.pause();
         }   
  }
   
   function multiSupFwdR() {
    var btn = document.getElementById("R16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             videoR_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             videoR_player.pause();
                }
     if(videoR_player.paused){
      timerR.start(0.3125);
      timerR.mode(1);
      videoR_player.play();
      videoR.playbackRate = 16.0;
      } 
       else {
            timerR.stop();
            videoR_player.pause();
         }   
   }
/*   
    function multiSlow() {
    timerR.start(80);
    timerR.mode(1);
    videoR.pause();
    clearInterval(intervalRewind);
    onSlow();
   }
*/
  
   function multiSlowR() {
      var btn = document.getElementById("R1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             videoR_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             videoR_player.pause();
                }
     if(videoR_player.paused){
      timerR.start(80);
      timerR.mode(1);
      videoR_player.play();
      videoR.playbackRate = .125;
      } 
       else {
            timerR.stop();
            videoR_player.pause();
         }
 }
   function multiSuperSlowR() {
      var btn = document.getElementById("R1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             videoR_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             videoR_player.pause();
                }
     if(videoR_player.paused){
      timerR.start(160);
      timerR.mode(1);
      videoR_player.play();
      videoR.playbackRate = .0625;
      } 
       else {
            timerR.stop();
            videoR_player.pause();
         }
 }
/*   
    function multiSuperSlow() {
    timerR.start(160);
    timerR.mode(1);
    videoR.pause();
    clearInterval(intervalRewind);
    onSuperSlow();
   }
*/
  
   function multiRevR() {
    timerR.start(80);
    timerR.mode(0);    
   }
   
  
        var videoR_directory = ['https://www.dropbox.com/s/j9obcg0lomqi4wl/directions1.mp4?raw=1',
                                'https://www.dropbox.com/s/gbylnf22v2y9z2p/PG-08-22-2021.mp4?raw=1',
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
                               'https://player.vimeo.com/external/470756931.hd.mp4?s=e1898c446656131819fe8170eafc50d3e6b247bb&profile_id=175',
                               'https://player.vimeo.com/external/576318773.hd.mp4?s=860340a4527e90128a1852bcba3634f859386001&profile_id=175',
                               'https://www.dropbox.com/s/afmg5cv1z94kfrg/XPG-08-09-2021.mkv.mp4?raw=1',
                               'https://www.dropbox.com/s/spmsl2jlhgjyhfi/PG.mp4?raw=1'
                               ];                      
 
  
        var videoR_index = 0;
        var videoR_player = null;
        var videoR = document.getElementsByTagName("video")[0];  
       

                          
     
        
       function onvideoEndedR(){
            console.log("videoR ended");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index++;
            }
            else{
                videoR_index = 1;
            }
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
       function onvideoNextR(){
            console.log("videoR next");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index++;
            }
            else{
                videoR_index = 1;
            }
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
       function onvideoBackR(){
              console.log("videoR back");
            if(videoR_index < videoR_directory.length - 1){
                videoR_index--;
            }
            else{
                videoR_index--;
            }
            videoR_player = document.getElementsByTagName("video")[0];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
        }
        
   //rewind below  
$("#negativeR").click(function() { // button function for rewind
    videoR_player.pause();
     
     rewind = setInterval(function() {
               
       if (videoR_player.currentTime == 0) {
          clearInterval(rewind);
          videoR_player.pause();
          }
          
       else{
           timerR.start(10);
           timerR.mode(0);
           videoR_player.currentTime += -.3;
             }
                },300);
        
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timerR.stop();
        }, 20000);
});
$("#negative2R").click(function() { // button function for rewind
    videoR_player.pause();
      
     rewind = setInterval(function() {
              
       if (videoR_player.currentTime == 0) {
          clearInterval(rewind);
          videoR_player.pause();
          
          
          }
          
       else{
           timerR.start(80);
           timerR.mode(0);
           videoR_player.currentTime += -.05;
             }
                },400);
           
         
     setTimeout(function() {
               alert('2.5 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
               clearInterval(rewind);
               timerR.stop();
               }, 20500);
});
$("#negative3R").click(function() { // button function for rewind
    videoR_player.pause();
      
    rewind = setInterval(function() {
               
       if (videoR_player.currentTime == 0) {
          clearInterval(rewind);
          videoR_player.pause();
          }
       else{
           timerR.start(2.5);
           timerR.mode(0);
           videoR_player.currentTime += -1;
             }
                },250);
           
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timerR.stop();
        }, 8000);
});
            
       function on0R(){
            console.log("0 ended");
            videoR_index = 0;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                       
        var btn = document.getElementById("modalR");
      
            if (btn.value == "Latest") {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtextR">Latest</button>';              
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
          }
        
        function on1R(){
            console.log("1 ended");
            videoR_index = 1;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
           
         var btn = document.getElementById("modalR");
              
            if (btn.value == "V1.mp4") {
              btn.value = "V1.mp4";
              btn.innerHTML = '<button id="modtextR">V1.mp4</button>';             
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "V1.mp4";
              btn.innerHTML =  '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();              
              }
        }
           
          function on2R(){
            console.log("2 ended");
            videoR_index = 2;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            
          var btn = document.getElementById("modalR");
      
            if (btn.value == "V2.mp4") {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtextR">V2.mp4</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
        }
                      
          function on3R(){
            console.log("3 ended");
            videoR_index = 3;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            
           var btn = document.getElementById("modalR");
      
            if (btn.value == "V3.mp4") {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtextR">V3.mp4</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              timerR.stop();
              videoR_player.pause();
              }
        }
        
          function on4R(){
            console.log("4 ended");
            videoR_index = 4;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                        
           var btn = document.getElementById("modalR");
      
            if (btn.value == "V4.mp4") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">V4.mp4</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 5";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();              
              }
        }
           
         function on5R(){
            console.log("5 ended");
            videoR_index = 5;            
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                        
          var btn = document.getElementById("modalR");
      
            if (btn.value == "V5.mp4") {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtextR">V5.mp4</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
        }
        
         function on6R(){
            console.log("6 ended");
            videoR_index = 6;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                        
          var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 7") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">Clip 7</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 7";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
        }
         
          function on7R(){
            console.log("7 ended");
            videoR_index = 7;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                        
           var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 8") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">Clip 8</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 8";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
        }
        
          function on8R(){
            console.log("8 ended");
            videoR_index = 8;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.play();
            
           var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 9") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">Clip 9</button>';              
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 9";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              timerR.stop();
              videoR_player.pause();
              }
        }
        
          function on9R(){
           console.log("9 ended");
           videoR_index = 9;
           videoR_player.setAttribute("src", videoR_directory[videoR_index]);
           videoR_player.play();
           
          var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 10") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 10</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 10";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
       }
       
          function on10R(){
           console.log("10 ended");
           videoR_index = 10;
           videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                      
          var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 11") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">Clip 11</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 11";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
       }
       
          function on11R(){
            console.log("11 ended");
            videoR_index = 11;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                        
          var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 12") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">Clip 12</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 12";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
        }
        
        
           function on12R(){
            console.log("12 ended");
            videoR_index = 12;
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                        
          var btn = document.getElementById("modalR");
      
            if (btn.value == "Clip 13") {
              btn.value = "";
              btn.innerHTML = '<button id="modtextR">Clip 13</button>';
              timerR.reset();
              videoR_player.play();
              timerR.start(10);
              timerR.mode(1);
              }
            else {
              btn.value = "Clip 13";
              btn.innerHTML = '<button id="modtextR">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timerR.stop();
              videoR_player.pause();
              }
        }










