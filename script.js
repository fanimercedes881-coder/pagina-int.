let luna = document.getElementById("luna");
let audio = document.getElementById("audio");

luna.onclick = function(){

if(audio.paused){
audio.play();
}else{
audio.pause();
}

}