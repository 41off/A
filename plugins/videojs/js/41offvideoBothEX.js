 function onloadL(){
            console.log("body loaded");
            video_player = document.getElementsByTagName("video")[0];
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.volume = 0.2;
            video_player.currentSrc();
            video_player.currentTime();
            timer.start(10);
            
       }
       
       
 function onloadR(){
            console.log("body loaded");
            videoR_player = document.getElementsByTagName("video")[1];
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
            videoR_player.volume = 0.2;
            videoR_player.currentSrc();
            videoR_player.currentTime();
            timerR.start(10)
     }
  
 
 
 
 
 
  function multiStartB() {
      var btn = document.getElementById("M5");
      
        if (btn.value == "Play Both") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play Both";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "Play Both";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
              }
              
     if(video_player.paused){
      
      timer.start(10);
      timer.mode(1);
      timerR.start(10);
      timerR.mode(1);        
      video_player.play();
      video.playbackRate = 1.0;
      videoR_player.play();
      videoR.playbackRate = 1.0;

     } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
            
            clearInterval(rewind);
         }
         
      /*  right player */   
      

 }
 
 
  function multiResetB() {
    timer.reset(0000);
    timerR.reset(0000)
   }
   
   
   function multiFwdB() {
    var btn = document.getElementById("M4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(2);
      timer.mode(1);
      timerR.start(2);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = 4.0;
      videoR_player.play();
      videoR.playbackRate = 4.0;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }   
  }
  
   
   function multiSupFwdB() {
    var btn = document.getElementById("M16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(0.3125);
      timer.mode(1);
      timerR.start(0.3125);
      timerR.mode(1);

      video_player.play();
      video.playbackRate = 16.0;
      videoR_player.play();
      videoR.playbackRate = 16.0;

      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }   
   }
  
  
   function multiSlowB() {
      var btn = document.getElementById("M1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(80);
      timer.mode(1);
      timerR.start(80);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = .125;
      videoR_player.play();
      videoR.playbackRate = .125;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }
 }
 
 
   function multiSuperSlowB() {
      var btn = document.getElementById("M1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(1);
      timerR.start(160);
      timerR.mode(1);

      video_player.play();
      video.playbackRate = .0625;
      videoR_player.play();
      videoR.playbackRate = .0625;

      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }
 }
 
 
 function on0B(){
            console.log("0 ended");
            video_index = 0;
            videoR_index = 0;
            video_player.setAttribute("src", video_directory[video_index]);
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                       
        var btn = document.getElementById("modal");
      
            if (btn.value == "Latest") {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Latest</button>';              
              timer.reset();
              video_player.play();
              videoR_player.play();
              timer.start(10);
              timer.mode(1);
              timerR.start(10);
              timerR.mode(1);

              }
            else {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              timerR.stop();
              video_player.pause();
              videoR_player.pause();
              }
          }
 
 
 
 // everything above is for "both" players //
 
 
 
 
 
 function ClickStartL() {
    timer.stop();
    timer.mode(1);
    video_player.play();
    video.playbackRate = 1.0; 
   }
   
  function ClickPauseL(){
    timer.start(10);
    video_player.pause();
   }
  function onPauseL(){
    timer.stop();
    video_player.pause();
   }
  
  function on1XL(){
    timer.stop();
    video_player.pause();
    video.pause();
    clearInterval(rewind);
    video.playbackRate = 1.0;
   }
 
  function onFastFwdL(){
    video.playbackRate = 4.0;
    video_player.play();
   }
   
  function onSupFwdL(){
    video.playbackRate = 16.0;
    video_player.play();
   }
   
  function onSlowL(){
    video.playbackRate = 0.125;
    video_player.play();
   }
   
  function onSuperSlowL(){
    video.playbackRate = 0.0625;
    video_player.play();
   }
   
  function multiStopL() {
    timer.stop();
    timer.reset(0000);
    video_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStartL() {
      var btn = document.getElementById("L5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play Left") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play";
             video_player.play();
             
                }
         else {
             btn.value = "Play Left";
             btn.innerHTML = "Pause";
             video_player.pause();
              }
              
     if(video_player.paused){
      
      timer.start(10);
      timer.mode(1);      
      video_player.play();
      video.playbackRate = 1.0;
     } 
       else {
            timer.stop();
            video_player.pause();
            clearInterval(rewind);
         }
 }
 
 
  function multiResetL() {
    timer.reset(0000)
   }
   
   function multiFwdL() {
    var btn = document.getElementById("L4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             video_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(2);
      timer.mode(1);
      video_player.play();
      video.playbackRate = 4.0;
      } 
       else {
            timer.stop();
            video_player.pause();
         }   
  }
   
   function multiSupFwdL() {
    var btn = document.getElementById("L16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             video_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(0.3125);
      timer.mode(1);
      video_player.play();
      video.playbackRate = 16.0;
      } 
       else {
            timer.stop();
            video_player.pause();
         }   
   }
  
   function multiSlowL() {
      var btn = document.getElementById("L1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             video_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(80);
      timer.mode(1);
      video_player.play();
      video.playbackRate = .125;
      } 
       else {
            timer.stop();
            video_player.pause();
         }
 }
   function multiSuperSlowL() {
      var btn = document.getElementById("L1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             video_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(1);
      video_player.play();
      video.playbackRate = .0625;
      } 
       else {
            timer.stop();
            video_player.pause();
         }
 }
  
   function multiRevL() {
    timer.start(80);
    timer.mode(0);    
   }
   
  
        var video_directory = ['https://www.dropbox.com/s/365bhju44j7zlj7/V1.mp4?raw=1',
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
 
  
        var video_index = 0;
        var video_player = null;
        var video = document.getElementById('video');  
       
                          
      
        
       function onvideoEndedL(){
            console.log("video ended");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.stop();
        }
        
       function onvideoNextL(){
            console.log("video next");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
       function onvideoBackL(){
            console.log("video back");
            if(video_index < video_directory.length - 1){
                video_index--;
            }
            else{
                video_index--;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
   //rewind below  
$("#negativeL").click(function() { // button function for rewind
    video_player.pause();
     
     rewind = setInterval(function() {
               
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          }
          
       else{
           timer.start(10);
           timer.mode(0);
           video_player.currentTime += -.3;
             }
                },300);
        
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 20000);
});
$("#negative2L").click(function() { // button function for rewind
    video_player.pause();
      
     rewind = setInterval(function() {
              
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          
          
          }
          
       else{
           timer.start(80);
           timer.mode(0);
           video_player.currentTime += -.05;
             }
                },400);
           
         
     setTimeout(function() {
               alert('2.5 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
               clearInterval(rewind);
               timer.stop();
               }, 20500);
});
$("#negative3L").click(function() { // button function for rewind
    video_player.pause();
      
    rewind = setInterval(function() {
               
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          }
       else{
           timer.start(2.5);
           timer.mode(0);
           video_player.currentTime += -1;
             }
                },250);
           
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 8000);
});
/*  
$("#negative3").click(function() { // button function for rewind
       intervalRewind = setInterval(function(){
       timer.start(2.5);
       timer.mode(0);
       video.playbackRate = 4.0;
       if(video.currentTime == 0){
          clearInterval(intervalRewind);
       }
       else{
           video.currentTime += -.0083;
       }
                },10);
});
*/
            
       function on0L(){
            console.log("0 ended");
            video_index = 0;
            video_player.setAttribute("src", video_directory[video_index]);
                       
        var btn = document.getElementById("modal");
      
            if (btn.value == "Latest") {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Latest</button>';              
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
          }
        
        function on1L(){
            console.log("1 ended");
            video_index = 1;
            video_player.setAttribute("src", video_directory[video_index]);
           
         var btn = document.getElementById("modal");
              
            if (btn.value == "V1.mp4") {
              btn.value = "V1.mp4";
              btn.innerHTML = '<button id="modtext">V1.mp4</button>';             
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V1.mp4";
              btn.innerHTML =  '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();              
              }
        }
           
          function on2L(){
            console.log("2 ended");
            video_index = 2;
            video_player.setAttribute("src", video_directory[video_index]);
            
          var btn = document.getElementById("modal");
      
            if (btn.value == "V2.mp4") {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtext">V2.mp4</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V2.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }
                      
          function on3L(){
            console.log("3 ended");
            video_index = 3;
            video_player.setAttribute("src", video_directory[video_index]);
            
           var btn = document.getElementById("modal");
      
            if (btn.value == "V3.mp4") {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtext">V3.mp4</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V3.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              timer.stop();
              video_player.pause();
              }
        }
        
          function on4L(){
            console.log("4 ended");
            video_index = 4;
            video_player.setAttribute("src", video_directory[video_index]);
                        
           var btn = document.getElementById("modal");
      
            if (btn.value == "V4.mp4") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">V4.mp4</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 5";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();              
              }
        }
           
         function on5L(){
            console.log("5 ended");
            video_index = 5;            
            video_player.setAttribute("src", video_directory[video_index]);
                        
          var btn = document.getElementById("modal");
      
            if (btn.value == "V5.mp4") {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtext">V5.mp4</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V5.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }
        
         function on6L(){
            console.log("6 ended");
            video_index = 6;
            video_player.setAttribute("src", video_directory[video_index]);
                        
          var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 7") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 7</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 7";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }
         
          function on7L(){
            console.log("7 ended");
            video_index = 7;
            video_player.setAttribute("src", video_directory[video_index]);
                        
           var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 8") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 8</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 8";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }
        
          function on8L(){
            console.log("8 ended");
            video_index = 8;
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
            
           var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 9") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 9</button>';              
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 9";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';              
              timer.stop();
              video_player.pause();
              }
        }
        
          function on9L(){
           console.log("9 ended");
           video_index = 9;
           video_player.setAttribute("src", video_directory[video_index]);
           video_player.play();
           
          var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 10") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 10</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 10";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
       }
       
          function on10L(){
           console.log("10 ended");
           video_index = 10;
           video_player.setAttribute("src", video_directory[video_index]);
                      
          var btn = document.getElementById("modal");
      
            if (btn.value == "Clip 11") {
              btn.value = "";
              btn.innerHTML = '<button id="modtext">Clip 11</button>';
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "Clip 11";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
       }
       
          function on11L(){
            console.log("11 ended");
             if(video_index = 10){
                video_index++;
           }
            else{
                video_index = 0;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
           
           var btn = document.getElementById("modal");
      
            if (btn.value == "V11.mp4") {
              btn.value = "Play";
              btn.innerHTML = '<button id="modtext">V11.mp4</button>';              
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V11.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }
        
        
          function on12L(){
            console.log("12 ended");
             if(video_index = 11){
                video_index++;
           }
            else{
                video_index = 0;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
           
           var btn = document.getElementById("modal");
      
            if (btn.value == "V12.mp4") {
              btn.value = "Play";
              btn.innerHTML = '<button id="modtext">V12.mp4</button>';              
              timer.reset();
              video_player.play();
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V12.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
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
   
  
        var videoR_directory = ['https://www.dropbox.com/s/43ewvwpf48p1qos/v2.mp4?raw=1',
                               'https://www.dropbox.com/s/fwvj14n1kbis4c5/XPG-08-15-2021.mp4?raw=1',
                               'https://www.dropbox.com/s/gw1298kfmmob2aq/XPG-08-14-2021b.mp4?raw=1',
                               'https://www.dropbox.com/s/um8jz1a2p63idxe/10-10-2021-14_52.mp4?raw=1',
                               'https://player.vimeo.com/external/584066585.hd.mp4?s=00dabd47c1679b596be9e53caa4bd57aacec8adb&profile_id=169',
                               'https://www.dropbox.com/s/365bhju44j7zlj7/V1.mp4?raw=1',
                               'https://www.dropbox.com/s/gbylnf22v2y9z2p/PG-08-22-2021.mp4?raw=1',
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
        var videoR = document.getElementsByTagName("video")[1];  
       

                          
     
        
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
            videoR_player = document.getElementsByTagName("video")[1];
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
            videoR_player = document.getElementsByTagName("video")[1];
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










