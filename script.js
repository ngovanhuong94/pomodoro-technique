let sessionTime = 1500;
let breakTime = 300;
    
let sessionBeginTime = sessionTime; 
let breakBeginTime = breakTime;
let timerStarted = false;
let displaySession = true;
let displayBreak = false;
let startTimer; 
let timeToString = seconds =>{
    let date = new Date(seconds * 1000);
    let hh = date.getUTCHours();
    let mm = date.getUTCMinutes();
    let ss = date.getUTCSeconds();
    if(mm < 10){
        mm = "0"+ mm;
    }
    if(ss < 10){
        ss = "0" + ss;
    }
    if(hh == 0){
        return mm + ":" + ss;
    }else{
        return (hh * 60) + parseInt(mm) + ":" + ss;
    }
}
function countDownTimer(){
}

$(document).ready(()=>{
    $("#display-time").text(timeToString(sessionBeginTime));
    $("#session").text(timeToString(sessionTime));
    $("#break").text(timeToString(breakTime));
    $("#sMin").click(()=>{
        if(sessionTime > 60){
        sessionTime -=60;
    $("#session").text(timeToString(sessionTime));
    }
    
    });
    $("#sAdd").click(()=>{
        if(sessionTime < 3600){
        sessionTime +=60;
    $("#session").text(timeToString(sessionTime));
        
    }
});
    $("#bMin").click(()=>{
        if(breakTime > 60){
        breakTime -=60;
    $("#break").text(timeToString(breakTime));
      
    }
    
    });
    $("#bAdd").click(()=>{
        if(breakTime < 3600){
        breakTime +=60;
    $("#break").text(timeToString(breakTime));
       
    }

    });
    $("#btn-session").click(()=>{
        displayBreak = false;
        displaySession = true;
        sessionBeginTime = sessionTime
        $("#display-time").text(timeToString(sessionBeginTime));
    });
    $("#btn-break").click(()=>{
        displayBreak = true;
        displaySession = false;
        breakBeginTime = breakTime;
        $("#display-time").text(timeToString(breakBeginTime));
    });
    let countDown = ()=>{
        if(displaySession && sessionBeginTime > 0){
            sessionBeginTime--;
            $("#display-time").text(timeToString(sessionBeginTime));
            }else if(displayBreak && breakBeginTime > 0){
            breakBeginTime--;
            $("#display-time").text(timeToString(breakBeginTime));    
            }
    }
   
    $("#btn-start").click(()=>{
        startTimer = setInterval(countDown, 1000)
        
      
    });
    $("#btn-stop").click(()=>{

        clearInterval(startTimer);
    });
    $("#btn-reset").click(()=>{
        clearInterval(startTimer);
    sessionTime = 1500;
    breakTime = 300;
    sessionBeginTime = sessionTime; 
    breakBeginTime = breakTime;
    timerStarted = false;
    displaySession = true;
    displayBreak = false;
    $("#display-time").text(timeToString(sessionBeginTime));
    $("#session").text(timeToString(sessionTime));
    $("#break").text(timeToString(breakTime));
    });


    
   
   
});
