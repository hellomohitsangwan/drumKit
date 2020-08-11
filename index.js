

// detecting no. of buttons
var noOfButtons = document.querySelectorAll(".drum").length;

//play sound on clicking button
for(var i =0;i<noOfButtons ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
var buttonText = this.innerHTML;
makeSound(buttonText);
makeAnimation(buttonText);
}
);
//             we can also call the onclick fn. like this also
// document.querySelectorAll("drum")[i].addEventListener("click" , buttonClicked() )
// function buttonClicked(){}  
}

//play sound on prssing keyboard keys 
document.addEventListener("keypress" ,function(event) {

makeSound(event.key);
makeAnimation(event.key);

});


//function to make souund
 function makeSound(keey){
    switch (keey) {
        case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

    case "a" :
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();

        case "s" :
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
case "d" :
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
case "j" :
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
case "k" :
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    case "l" :
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    }
}
function makeAnimation(currentKey){
var buttonClass = document.querySelector("." + currentKey)
buttonClass.classList.add("pressed");

setTimeout(function(){
    buttonClass.classList.remove("pressed")
} , 80);

}
