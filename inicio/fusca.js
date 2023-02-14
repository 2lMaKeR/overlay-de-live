var mode = 10
var botao=document.getElementById('botao')
function startimer(duration,display){
    var timer =duration, minutes,seconds
    setInterval(function(){
        minutes=parseInt(timer/60,10)
        seconds=parseInt(timer%60,10)
        minutes=minutes<10?"0"+minutes:minutes
        seconds=seconds<10?"0"+seconds:seconds
        display.textContent =minutes+":"+seconds
        if(--timer>=0){}
        else{timer=duration}
    },1000)
}
function comecar(){
    botao.style.opacity=0
    botao.style.display="none"
    var duration=60*mode
    var display=document.getElementById('timer')
    startimer(duration, display)
}