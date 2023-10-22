// button presses
var numberOfButtons = document.querySelectorAll("button").length
for(var i = 0 ; i < numberOfButtons ; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
      var buttonInnerHtml = this.innerHTML;
    //   this.style.color = "white";
      makesound(buttonInnerHtml);
      pressed(buttonInnerHtml);
    })  
    
    // keypress
    document.addEventListener("keypress",function(event) {
        makesound(event.key);
        pressed(event.key);
    })

}

function pressed(key){
    var currentPressed = document.querySelector("." + key);
    currentPressed.classList.add("pressed");
    currentPressed.classList.add("drumpressed");
    setTimeout(() => {
        currentPressed.classList.remove("pressed");
        currentPressed.classList.remove("drumpressed");
    }, 500);
}
function makesound(key) {
    switch (key) {
        case "w":
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
             var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            
        default:
             var audio = new Audio("sounds/crash.mp3");
              audio.play();
            break;
      }
}