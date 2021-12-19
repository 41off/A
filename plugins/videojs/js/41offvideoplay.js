 function ClickStart() {
    timer.stop();
    timer.mode(1);
    video_player.play();
    video.playbackRate = 1.0; 
   }
   
  function ClickPause(){
    timer.start(10);
    video_player.pause();
   }
  function onPause(){
    timer.stop();
    video_player.pause();
   }
  
  function on1X(){
    timer.stop();
    video_player.pause();
    video.pause();
    clearInterval(rewind);
    video.playbackRate = 1.0;
   }
 
  function onFastFwd(){
    video.playbackRate = 4.0;
    video_player.play();
   }
   
  function onSupFwd(){
    video.playbackRate = 16.0;
    video_player.play();
   }
   
  function onSlow(){
    video.playbackRate = 0.125;
    video_player.play();
   }
   
  function onSuperSlow(){
    video.playbackRate = 0.0625;
    video_player.play();
   }
   
  function multiStop() {
    timer.stop();
    timer.reset(0000);
    video_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStart() {
      var btn = document.getElementById("timerbutton5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play";
             video_player.play();
             
                }
         else {
             btn.value = "Play";
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
  function multiReset() {
    timer.reset(0000)
   }
   
   function multiFwd() {
    var btn = document.getElementById("speed4x");
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
   
   function multiSupFwd() {
    var btn = document.getElementById("speed16x");
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
/*   
    function multiSlow() {
    timer.start(80);
    timer.mode(1);
    video.pause();
    clearInterval(intervalRewind);
    onSlow();
   }
*/
  
   function multiSlow() {
      var btn = document.getElementById("timerbutt1_8");
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
   function multiSuperSlow() {
      var btn = document.getElementById("timerbutt1_16");
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
/*   
    function multiSuperSlow() {
    timer.start(160);
    timer.mode(1);
    video.pause();
    clearInterval(intervalRewind);
    onSuperSlow();
   }
*/
  
   function multiRev() {
    timer.start(80);
    timer.mode(0);    
   }
   
  
        var video_directory = ['https://www.dropbox.com/s/gbylnf22v2y9z2p/PG-08-22-2021.mp4?raw=1',
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
       
                          
      function onload(){
            console.log("body loaded");
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.volume = 0.2;
            video_player.currentSrc();
            video_player.currentTime();
            timer.start(10)
        }
        
       function onVideoEnded(){
            console.log("video ended");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
       function onVideoNext(){
            console.log("video next");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
       function onVideoBack(){
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
$("#negative").click(function() { // button function for rewind
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
$("#negative2").click(function() { // button function for rewind
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
$("#negative3").click(function() { // button function for rewind
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
            
       function on0(){
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
        
        function on1(){
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
           
          function on2(){
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
                      
          function on3(){
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
        
          function on4(){
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
           
         function on5(){
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
        
         function on6(){
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
         
          function on7(){
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
        
          function on8(){
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
        
          function on9(){
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
       
          function on10(){
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
       
          function on11(){
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
        
        
          function on12(){
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

