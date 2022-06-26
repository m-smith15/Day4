console.log("page loaded...");

var video = document.getElementById("exampleVideo");

function autoStart(){
    document.getElementById("exampleVideo").muted = true;
    video.play();
}
function autoEnd(){
    video.pause();
}